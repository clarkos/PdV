import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {

  const menu1 = [
    "about",
    "blog",
  ]
  
  const menu2 = [
    "sermons",
    "contact",
  ]

  return (
    <div className='flex justify-between'>
      <ul className='flex items-center justify-start space-x-4'>
        {menu1.map((item, index) => (
          <li key={index}>
            <Link href={"#"} className="pb-3 hover:border-b hover:border-red-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <ul className='flex items-center justify-end space-x-4'>
        {menu2.map((item, index) => (
          <li key={index}>
            <Link href={"#"} className="pb-3 hover:border-b hover:border-red-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation