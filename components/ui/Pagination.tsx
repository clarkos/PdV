"use client"

import { useState } from 'react';

interface PagProps {
  data: string[]
}

const Pagination: React.FC<PagProps> = ({
  data
}) => {
  
  // const [posts, setPost] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex)

  const changeCurrPage = (page: number) => setCurrentPage(page+1);

  return (
    <div>Pagination</div>
  )
}

export default Pagination