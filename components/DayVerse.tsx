"use client"
import { useEffect, useState } from 'react';

const DayVerse = () => {

  return (
    <section className="h-[150px] w-[90vw] mx-8 text-white
      flex flex-col justify-center items-center bg-orange-950 rounded-md">
      <div className="text-2xl font-extrabold">
        DayVerse
      </div>
      <div className='flex flex-col items-center justify-center px-3 '>
        {/* <q>{verse_text}</q> */}
        {/* <em className="font-bold">{`${book_name}`}</em> */}
      </div>
    </section>
  )
}

export default DayVerse