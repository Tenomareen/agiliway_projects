import React from "react";
import "./styles.scss";

const Paginations = ({ booksPerPage, totalBooks, paginate, currentPage }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers.length)

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className={currentPage === number ? "page-item active" : "page-item"} key={number}>
                            <a  className="page-link"  onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Paginations