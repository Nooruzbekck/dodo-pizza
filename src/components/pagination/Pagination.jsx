import React from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import styles from './Pagination.module.scss'

function Pagination({ onChangePage }) {

  const { currentPage } = useSelector((state) => state.filter);
  return (
    <ReactPaginate
      className={styles.paginationRoot}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination