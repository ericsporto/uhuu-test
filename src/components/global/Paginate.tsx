import React from 'react';
import { MoviesListModel } from '@/interfaces/movies';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  data?: MoviesListModel;
  setPage: (page: number) => void;
  page: number;
}

const Paginate: React.FC<PaginationProps> = ({ data, setPage, page }) => {
  const pages = data && Math.ceil(data?.total_pages);
  const current = page;

  const toPage = (page: number) => {
    setPage(page);
  };

  const renderPageButton = (pageNumber: number) => (
    <button
      key={pageNumber}
      onClick={() => toPage(pageNumber)}
      style={
        pageNumber === current
          ? {
              color: '#5C16C5',
              fontWeight: 700,
              fontSize: '16px',
            }
          : {
              color: '#af89e7',
            }
      }
    >
      {pageNumber}
    </button>
  );

  const renderPaginationButtons = () => {
    const buttonsToShow = 5;
    const halfButtonsToShow = Math.floor(buttonsToShow / 2);

    let startPage = Math.max(1, current - halfButtonsToShow);
    let endPage = Math.min(pages as number, startPage + buttonsToShow - 1);

    if (endPage - startPage < buttonsToShow - 1) {
      startPage = Math.max(1, endPage - buttonsToShow + 1);
    }

    const paginationButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(renderPageButton(i));
    }

    return paginationButtons;
  };

  return (
    <div className="flex my-7 mt-24 md:mt-0 w-full justify-center pb-56">
      <ul className="flex gap-x-8">
        {page > 3 && (
          <li>
            <button
              onClick={() => setPage(1)}
              className="font-bold text-base text-[#5C16C5] leading-6"
            >
              Primeira
            </button>
          </li>
        )}
        {renderPaginationButtons()}
        <li>
          <button
            onClick={() => setPage(data?.total_pages || 1)}
            className="font-bold text-base text-[#5C16C5] leading-6"
          >
            Última
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
