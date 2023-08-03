import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialContact = () => {

  const redes = [
    "Facebook",
    "Instagram",
    "Youtube",
    "X (twitter)",
  ]
  
  const contacto = [
    "Mar del Plata",
    "Buenos Aires",
    "Argentina",
  ]

  return (
    <div className='flex justify-between text-xs font-bold relative top-6'>
      <ul className='flex items-center justify-start space-x-4'>
        {redes.map((item, index) => (
          <li key={index}>
            <Link href={"#"} className="pb-1 hover:border-b hover:border-red-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
      
      <ul className='flex items-center justify-end space-x-4'>
        {contacto.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialContact