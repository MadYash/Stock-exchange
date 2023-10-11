import React, { useEffect, useState } from 'react'
import { storeExchangeData, storeExchangeIcon } from '../services/StockService'
import { failed, success } from './toaster/Toastify'
import axios from 'axios'
import "../css/Search.css"

import Paginate from './pagination/Paginate'
const Exchange = () => {

    const [exchangeData, setExchangeData] = useState([])
    const [iconData, setIconData] = useState([])
    const [itemsPerPage] = useState(10); // Change this value as needed
    const [page, setPage] = useState(1); // For handle click in paginate (to change the current page)
    const [totalPage, setTotalPage] = useState([]); // Total Pages in paginate component
    const [searchVal, setSearchVal] = useState("")
    const [searchResult, setSearchResult] = useState([]) // state for storing search result and mapping the result
    const [storeBtn, setStoreBtn] = useState(false)
    const [iconBtn, setIconBtn] = useState(false)



    // ****** Function to store the data  ********
    const storeData = () => {
        storeExchangeData((res) => {
            if (res?.status === 200) {
                success(res?.msg)
                setStoreBtn(true)
            } else if (res?.status === 400) {
                failed(res?.error)
            }
        })
    }


    // ****** Functiion to store the icons in database ******
    const storeIcon = () => {
        storeExchangeIcon((res) => {
            if (res?.status === 200) {
                success(res?.msg)
                setIconBtn(true)
            } else if (res?.status === 400) {
                failed(res?.error)
            }
        })
    }

    //  ****** Function for fetching the data of stocks *******
    const getExchangeData = async () => {
        try {
            await axios
                .get(`http://localhost:3001/api/exchange/get-exchange-data`)
                .then((res) => {
                    const data = res?.data
                    const filteredData = data.data.filter(
                        (item) =>
                            item !== null
                    );
                    setExchangeData(filteredData);
                    setTotalPage(filteredData.length - 1)

                })
                .catch((err) => console.log("error fetching", err));
        } catch (error) {
            console.log("err is", error);
        }
    };

    // ******** Function for fetching the icons data ********
    const getExchangeIconData = async (callback) => {
        try {
            await axios
                .get(`http://localhost:3001/api/exchange/get-exchange-icon-data`)
                .then((res) => {
                    const data = res?.data
                    const filteredData = data.data.filter(
                        (item) =>
                            item !== null
                    );
                    setIconData(filteredData);
                })
                .catch((err) => console.log("error fetching", err));
        } catch (error) {
            console.log("err is", error);
        }
    };

    //  ******** Function to set the search value and filter the result *********
    const handleSearch = () => {
        const filteredProducts = dataToShow.filter(product => {
            return product.name.toLowerCase().includes(searchVal.toLowerCase());
        });
        console.log("filter search", filteredProducts)
        setSearchResult(filteredProducts)
    }


    //  API calling function 
    useEffect(() => {
        getExchangeData();
        getExchangeIconData()
    }, [])

    // ****** Function for pagination of exchange data *****
    const dataToShow = exchangeData?.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    //  ****** Function for pagination of iconsdata ********
    const iconDataToShow = iconData?.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <>
            <div className="container my-3">
                <h2 className="text-info text-center">Hover here to search by name
                    <i className='fas fa-solid fa-arrow-down'></i>
                </h2>
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className="search_input" type="text" name="" placeholder="Search..." value={searchVal} onChange={(e) => setSearchVal(e.target.value)} />
                            <button onClick={handleSearch} className="search_icon"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">

                    <button type="button" className="btn btn-outline-secondary my-3" onClick={storeData}>Click here to store data</button>
                    <button type="button" className="btn btn-outline-warning my-3" onClick={storeIcon}>Click here to store Icon</button>
                </div>

                <div className="mt-4 mx-2">
                    {storeBtn === true && iconBtn === true ?

                        <div className='table-responsive'>
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Icon</th>
                                        <th>Name</th>
                                        <th>Website</th>
                                        <th>Data Orderbook Start</th>
                                        <th>Data Orderbook End</th>
                                        <th>Data Quote Start</th>
                                        <th>Data Quote End</th>
                                        <th>Data Symbols Count</th>
                                        <th>Data Trade Start</th>
                                        <th>Data Trade End</th>
                                        <th>Exchange Id</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResult[0] ?
                                        <>
                                            {searchResult?.map((item, index) => (
                                                <tr key={index}>
                                                    <td> {page === 1
                                                        ? index + 1
                                                        : index + 10 * (page - 1) + 1}</td>
                                                    <td>
                                                        <img key={index} src={iconDataToShow[index].url} alt='icon' />
                                                    </td>

                                                    <td>{item.name}</td>
                                                    <td>{item.website}</td>
                                                    <td>{item.data_orderbook_start}</td>
                                                    <td>{item.data_orderbook_end}</td>
                                                    <td>{item.data_quote_start}</td>
                                                    <td>{item.data_quote_end}</td>
                                                    <td>{item.data_symbols_count}</td>
                                                    <td>{item.data_trade_start}</td>
                                                    <td>{item.data_trade_end}</td>
                                                    <td>{item.exchange_id}</td>
                                                </tr>
                                            ))}

                                        </>
                                        :
                                        <>
                                            {dataToShow?.map((item, index) => (
                                                <tr key={index}>
                                                    <td> {page === 1
                                                        ? index + 1
                                                        : index + 10 * (page - 1) + 1}</td>
                                                    <td>
                                                        <img key={index} src={iconDataToShow[index].url} alt='icon' />
                                                    </td>

                                                    <td>{item.name}</td>
                                                    <td>{item.website}</td>
                                                    <td>{item.data_orderbook_start}</td>
                                                    <td>{item.data_orderbook_end}</td>
                                                    <td>{item.data_quote_start}</td>
                                                    <td>{item.data_quote_end}</td>
                                                    <td>{item.data_symbols_count}</td>
                                                    <td>{item.data_trade_start}</td>
                                                    <td>{item.data_trade_end}</td>
                                                    <td>{item.exchange_id}</td>
                                                </tr>
                                            ))}

                                        </>
                                    }

                                </tbody>
                            </table>
                        </div>
                        :
                        <h2 className='fw-semibold text-info'>Please click on Store button and store icon button to first store data and then Table will render</h2>
                    }
                    {storeBtn === true && iconBtn === true ?
                        <div className="d-flex justify-content-center flex-wrap">

                            <Paginate
                                itemsPerPage={itemsPerPage}
                                setPage={setPage}
                                totalPage={totalPage}
                            />
                        </div>
                        : null}
                </div>
            </div>
        </>
    )
}

export default Exchange