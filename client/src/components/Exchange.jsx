import React, { useEffect, useState } from 'react'
import { storeExchangeData, storeExchangeIcon } from '../services/StockService'
import { failed, success } from './toaster/Toastify'
import axios from 'axios'
import Paginate from './pagination/Paginate'
const Exchange = () => {

    const [exchangeData, setExchangeData] = useState([])
    const [iconData, setIconData] = useState([])
    const [itemsPerPage] = useState(10); // Change this value as needed
    const [page, setPage] = useState(1); // For handle click in paginate (to change the current page)
    const [totalPage, setTotalPage] = useState([]); // Total Pages in paginate component

    const storeData = () => {
        storeExchangeData((res) => {
            if (res?.status === 200) {
                success(res?.msg)
            } else if (res?.status === 400) {
                failed(res?.error)
            }
        })
    }
    const storeIcon = () => {
        storeExchangeIcon((res) => {
            if (res?.status === 200) {
                success(res?.msg)
            } else if (res?.status === 400) {
                failed(res?.error)
            }
        })
    }
    const getExchangeData = async () => {
        try {
            await axios
                .get(`http://localhost:3001/api/exchange/get-exchange-data`)
                .then((res) => {
                    const data = res?.data
                    console.log("data inside", data.data.filter((item) => item))
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
    const getExchangeIconData = async (callback) => {
        try {
            await axios
                .get(`http://localhost:3001/api/exchange/get-exchange-icon-data`)
                .then((res) => setIconData(res?.data))
                .catch((err) => console.log("error fetching", err));
        } catch (error) {
            console.log("err is", error);
        }
    };

    useEffect(() => {
        getExchangeData();
        getExchangeIconData()
    }, [])
    const dataToShow = exchangeData?.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    console.log("data are", exchangeData, iconData)
    return (
        <>
            <div className="container my-3">
                <div className="d-flex justify-content-between">

                    <button type="button" className="btn btn-outline-secondary my-3" onClick={storeData}>Click here to store data</button>
                    <button type="button" className="btn btn-outline-warning my-3" onClick={storeIcon}>Click here to store Icon</button>
                    <button type="button" class="btn btn-outline-dark my-3">Click to fetch data</button>
                </div>

                <div className="mt-4 mx-2">
                    <div className='table-responsive'>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <td>S.No</td>
                                    <th>Icon</th>
                                    <th>Data Orderbook Start</th>
                                    <th>Data Orderbook End</th>
                                    <th>Data Quote Start</th>
                                    <th>Data Quote End</th>
                                    <th>Data Symbols Count</th>
                                    <th>Data Trade Start</th>
                                    <th>Data Trade End</th>
                                    <th>Exchange Id</th>
                                    <th>Name</th>
                                    <th>Website</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dataToShow?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>test</td>
                                        <td>{item.data_orderbook_start}</td>
                                        <td>{item.data_orderbook_end}</td>
                                        <td>{item.data_quote_start}</td>
                                        <td>{item.data_quote_end}</td>
                                        <td>{item.data_symbols_count}</td>
                                        <td>{item.data_trade_start}</td>
                                        <td>{item.data_trade_end}</td>
                                        <td>{item.exchange_id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.website}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap">

                        <Paginate
                            itemsPerPage={itemsPerPage}
                            setPage={setPage}
                            totalPage={totalPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exchange