"use client"

import { useState } from 'react';

const Pagination = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const changeCurrPage = (page: number) => setCurrentPage(page+1);

  return (
    <div>Pagination</div>
  )
}

export default Pagination