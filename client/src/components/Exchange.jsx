import React from 'react'
import { storeExchangeData } from '../services/StockService'

const Exchange = () => {
    const storeData = () => {
        storeExchangeData((res) => {

            console.log("res is", res)
        })
    }
    return (
        <>
            <div className="container my-3">
                <div className="d-flex justify-content-between">

                    <button type="button" className="btn btn-outline-secondary my-3" onClick={storeData}>Click here to store data</button>
                    <button type="button" class="btn btn-outline-dark my-3">Click to fetch data</button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>@fat</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Exchange