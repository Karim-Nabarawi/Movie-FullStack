import React, { useEffect, useState } from "react";

const Pagination = ({ currentPage, totalAmountOfPages, radio = 3, onChange }) => {
  const [paginationData, setPaginationData] = useState([]);

  useEffect(() => {
    const dataToDisplay = [];
    const previousPageEnable = currentPage !== 1;
    const previousPage = currentPage - 1;

    dataToDisplay.push({
      text: "Previous",
      enabled: previousPageEnable,
      page: previousPage,
      active: false,
    });

    for (let i = 1; i <= totalAmountOfPages; i++) {
      if (i >= currentPage - radio && i <= currentPage + radio) {
        dataToDisplay.push({
          text: `${i}`,
          enabled: true,
          page: i,
          active: currentPage === i,
        });
      }
    }

    const nextPageEnable = currentPage !== totalAmountOfPages && totalAmountOfPages > 0;
    const nextPage = currentPage + 1;

    dataToDisplay.push({
      text: "Next",
      enabled: nextPageEnable,
      page: nextPage,
      active: false,
    });

    setPaginationData(dataToDisplay);
  }, [currentPage, totalAmountOfPages, radio]);

  const selectPage = (data) => {
    if (data.page === currentPage || !data.enabled) return;
    onChange(data.page);
  };

  const getClass = (data) => {
    if (data.active) return "active pointer";
    if (!data.enabled) return "disabled";
    return "pointer";
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {paginationData.map((data) => (
          <li key={data.text} onClick={() => selectPage(data)} className={`page-item cursor ${getClass(data)}`}>
            <span className="page-link">{data.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
