import Image from 'next/image'
import Link from 'next/link'
// import React from 'react'

const Navigation = () => {

  const menu1 = [
    {name: "Ministerio", url: "/about"},
    {name: "Contacto", url: "/contact"}
  ]
  
  const menu2 = [
    "Mensajes",
    "Blog",
  ]

  return (
    <div className='flex justify-between items-start text-sm h-[5rem]'>
      <ul className='flex items-center justify-start space-x-4 pt-4'>
        {menu1.map((item, index) => (
          <li key={index}>
            <Link href={item.url} className="pb-2 hover:border-b hover:border-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative top-[-1.5rem]">
        <Link href="/">
        <Image 
          src="/logo-banner.png" 
          alt="logo" 
          width={95} 
          height={120}
          className='drop-shadow-lg'
        /></Link>
      </div>
      <ul className='flex items-center justify-start space-x-4 pt-4'>
        {menu2.map((item, index) => (
          <li key={index}>
            <Link href={"#"} className="pb-2 hover:border-b hover:border-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation