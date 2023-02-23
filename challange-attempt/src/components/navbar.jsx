import Logo from '../images/logo.svg'
import Hamburger from '../images/icon-hamburger.svg'
import { useState,useEffect } from 'react';

export const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [modal,setModal] = useState('')
  const [shadow,setShadow] = useState('')

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setShadow('drop-shadow-4xl')
    } else {
        setShadow('')

    }
  }
  const hambugerMenu  = isOpen ? "": "hidden"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setModal('drop-shadow-4xl rounded-md mt-5 text-center w-5/6 mx-auto text-Grayish-Blue bg-white absolute left-1/2 transform -translate-x-1/2 ');
      } else {
        setModal('');      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    
  return (
    <nav className={`relative lg:flex md:flex mx-0 lg:mx-20 justify-between bg-white z-10 ${shadow}`}>
        <div className="p-4 justify-between flex">
            <img className='' src={Logo} alt={Logo} />
            <button className='block text-white md:hidden p-2' onClick={toggleOpen}>
            <img src={Hamburger} alt={Hamburger} />
          </button>
        </div>
        <ul className={`md:flex lg:flex p-6 text-Grayish-Blue ${hambugerMenu} ${modal}`}>
            <li className="mx-2">Home</li>
            <li className="mx-2">About</li>
            <li className="mx-2">Contact</li>
            <li className="mx-2">Blog</li>
            <li className="mx-2">Careers</li>
        </ul>
        <div className="p-4 hidden md:block lg:block ">
        <button className="rounded-3xl p-2 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md">Request Invite</button>
        </div>
    </nav>
  );
}