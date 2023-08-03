import React from 'react';
import Navigation from '@/components/Navigation';
import SocialContact from './SocialContact';
import Image from 'next/image';
import { Menu } from "lucide-react";

const Navbar = () => {

  return (
    <div>
      <div className='hidden md:flex flex-col sticky top pt-2 mx-12'>
        <SocialContact />
        <Navigation />
      </div>
      <div className='md:hidden flex justify-between items-start space-x-4 border-red-900 mx-4 mt-4'>
      <div>
        <Image src="/logo.png" alt="logo" width={35} height={35} />
      </div>
        <p className='font-bold text-2xl'><Menu /> </p>
      </div>
    </div>
  )
}

export default Navbar