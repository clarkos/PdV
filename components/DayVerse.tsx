"use client"
import { useEffect, useState } from 'react';

const DayVerse = () => {

  return (
    <section className="h-[150px] w-[80vw] flex flex-col justify-center items-center border border-red-900 rounded-md">
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