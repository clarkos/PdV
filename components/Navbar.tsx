import Navigation from '@/components/Navigation';
import SocialContact from './SocialContact';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  return (
    <div className="bg-[url('/menuBg.png')] bg-auto">
      <div className='hidden md:flex flex-col pt-2 mx-12'>
        <SocialContact />
        <Navigation />
      </div>
        <MobileMenu />
    </div>
  )
}

export default Navbar