import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialContact = () => {

  const social = [
    {
      name: "Facebook",
      icon: "/fb.svg"
    },{
      name: "Instagram",
      icon: "/instagram.svg"
    },{
      name: "YouTube",
      icon: "/youtube.svg"
    },{
      name: "X (Twitter)",
      icon: "/twitter.svg"
    }
  ]

  const contacto = [
    "Mar del Plata",
    "Buenos Aires",
    "Argentina",
  ]

  return (
    <div className='flex justify-between text-xs font-bold relative top-6'>
      <ul className='flex items-center justify-start space-x-4'>
        {social.map((item, index) => (
          <li key={index}>
            <Link href="#">
              <img src={item.icon} alt={item.name} width={15} height={15}/>
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