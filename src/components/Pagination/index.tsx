"use client";

import ChevronIcon from "@/ui/icons/Chevron";
import * as S from "./styles";

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
  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

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
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronIcon />
      </S.PageButton>

      {renderPageButtons()}

      <S.PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronIcon />
      </S.PageButton>
    </S.PaginationContainer>
  );
};

export default Pagination;
