import Navigation from '@/components/Navigation';
import SocialContact from './SocialContact';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  return (
    <div className="top-0 fixed z-2 w-full bg-gradient-to-b 
    from-slate-900 via-cyan-700 via-65% to-transparent to-95% text-white">
      <div className='hidden md:flex flex-col pt-2 mx-12'>
        <SocialContact />
        <Navigation />
      </div>
        <MobileMenu />
    </div>
  )
}

export default Navbar