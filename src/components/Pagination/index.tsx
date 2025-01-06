"use client";

import React from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
import { nunito } from "@/fonts/configure";

interface PaginationProperty {
  totalPages: number;
  currentPage: number;
  path: string;
}

const Pagination: React.FC<PaginationProperty> = ({
  totalPages,
  currentPage,
  path,
}) => {
  const router = useRouter();

  const onPageChange = (pageNum: number) => {
    router.push(`${path}/page/${pageNum}`);
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="arrow-button"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`page-button ${nunito.className} ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className="arrow-button"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
