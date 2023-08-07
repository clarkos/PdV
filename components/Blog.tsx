"use client"

import { useEffect, useState } from "react"
import Article from './ui/Article'
import { Button } from "./ui/button";
import { PostData } from "@/types";

const Blog = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
  }, [])

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = posts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(posts.length / itemsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  const onPrev = () => {
    if (currentPage !== firstIndex) setCurrentPage(currentPage - 1);
  }

  const onNext = () => {
    if (currentPage !== lastIndex) setCurrentPage(currentPage + 1);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold uppercase mt-6 mb-3">
        Ultimas novedades
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-rows-auto gap-3 mb-4">
        {currentData.map((post: PostData) => (
          <Article data={post} key={post.id} />
        ))
        }
      </div>
      <div>
        <Button
          size="sm"
          disabled={currentPage === 1}
          onClick={onPrev}
        >Prev</Button>

        {numbers.map((n, i) => (
          <Button
            size="sm"
            key={i}
            onClick={() => setCurrentPage(n)}
            variant={currentPage === n ? "outline" : 'default'}
          >{n}</Button>
        ))}

        <Button
          size="sm"
          disabled={currentPage == nPage}
          onClick={onNext}
        >Next</Button>
      </div>
    </div>
  )
}

export default Blog