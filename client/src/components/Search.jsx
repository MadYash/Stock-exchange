import React from 'react'
import "../css/Search.css"
const Search = () => {
    return (
        <>
            <h2 className="text-info text-center">Hover here to search
                <i className='fas fa-solid fa-arrow-down'></i>
            </h2>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search..." />
                        <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search