"use client";

import ChevronIcon from "@/ui/icons/Chevron";
import * as S from "./styles";
import ChevronDoubleIcon from "@/ui/icons/ChevronDouble";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const maxPages = 500;
  const validTotalPages = Math.min(totalPages, maxPages);

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(validTotalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <S.PageButton
          key={i}
          $isActive={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </S.PageButton>
      );
    }

    return buttons;
  };

  return (
    <S.PaginationContainer>
      <S.PageButton
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronDoubleIcon className="leftArrow" />
      </S.PageButton>

      <S.PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronIcon className="leftArrow" />
      </S.PageButton>

      {renderPageButtons()}

      <S.PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === validTotalPages}
      >
        <ChevronIcon className="rightArrow" />
      </S.PageButton>

      <S.PageButton
        onClick={() => onPageChange(validTotalPages)}
        disabled={currentPage === validTotalPages}
      >
        <ChevronDoubleIcon className="rightArrow" />
      </S.PageButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
