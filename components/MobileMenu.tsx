import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const MobileMenu = () => {

  const social = [
    {
      name: "Facebook",
      icon: "/fb.svg"
    }, {
      name: "Instagram",
      icon: "/instagram.svg"
    }, {
      name: "YouTube",
      icon: "/youtube.svg"
    }, {
      name: "X (Twitter)",
      icon: "/twitter.svg"
    }
  ]

  return (
    <div className='md:hidden flex justify-between items-center text-xs font-bold py-3 px-6'>
      <ul className='flex items-center justify-start space-x-6'>
        {social.map((item, index) => (
          <li key={index} >
            <Link href="#" >
              <Image 
              src={item.icon} 
              alt={item.name} 
              width={20} 
              height={20} 
              className="hover:fill-red-900"/>
            </Link>
          </li>
        ))}
      </ul>
      <Menu />
      <Image
        src="/logo-banner-mobil.png"
        alt="logo"
        width={50}
        height={100}
        className='absolute right-[45%] top-0.5'
      />
    </div>
  )
}

export default MobileMenu