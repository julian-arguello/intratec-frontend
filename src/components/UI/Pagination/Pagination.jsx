import React from "react";
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage, className }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={`${className}`}>
      <BootstrapPagination>
        <BootstrapPagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
        <BootstrapPagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
        {pageNumbers.map((number) => (
          <BootstrapPagination.Item
            key={number}
            active={currentPage === number}
            onClick={() => paginate(number)}
          >
            {number}
          </BootstrapPagination.Item>
        ))}
        <BootstrapPagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length} />
        <BootstrapPagination.Last onClick={() => paginate(pageNumbers.length)} disabled={currentPage === pageNumbers.length} />
      </BootstrapPagination>
    </nav>
  );
};

export { Pagination };
