import React from 'react'
import ReactPaginate from 'react-paginate';
import rightArrow from '../../assets/arrow-right.svg'
import leftArrow from '../../assets/arrow-left.png'
const Paginate = ({ totalPage, itemsPerPage, setPage }) => {

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
    };
    const pageCount = Math.ceil(totalPage / itemsPerPage);

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={<div><img src={rightArrow} alt='Right Arrow' /></div>}
            onPageChange={handlePageClick}
            initialPage={0}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel={<div><img src={leftArrow} alt='Left Arrow' /></div>}
            renderOnZeroPageCount={null}
            containerClassName={"pagination justify-content-center flex-wrap"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"prev-item"}
            previousLinkClassName={"page-link prev"}
            nextClassName={"next-item"}
            nextLinkClassName={"page-link next"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
        />
    )
}

export default Paginate