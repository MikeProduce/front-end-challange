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
        setModal('drop-shadow-4xl rounded-md mt-5 text-center w-5/6 mx-auto text-Grayish-Blue bg-white absolute left-1/2 transform -translate-x-1/2 ');
    } else {
        setShadow('')
        
    }
  }
  const hambugerMenu  = isOpen ? "": "hidden"



    
  return (
    <nav className={`relative lg:flex md:flex mx-0 justify-between bg-white z-40 ${shadow} lg:px-20 md:px-0`}>
        <div className="p-4 justify-between flex">
            <img className='p-2' src={Logo} alt={Logo} />
            <button className='block text-white md:hidden p-2' onClick={toggleOpen}>
            <img src={Hamburger} alt={Hamburger} />
          </button>
        </div>
        <ul className={`md:flex lg:flex p-6 text-Grayish-Blue ${hambugerMenu} ${modal}`}>
            <li className="mx-2 hover:text-black transition hover:scale-110 cursor-pointer">Home</li>
            <li className="mx-2 hover:text-black transition hover:scale-110 cursor-pointer">About</li>
            <li className="mx-2 hover:text-black transition hover:scale-110 cursor-pointer">Contact</li>
            <li className="mx-2 hover:text-black transition hover:scale-110 cursor-pointer">Blog</li>
            <li className="mx-2 hover:text-black transition hover:scale-110 cursor-pointer">Careers</li>
        </ul>
        <div className="p-4 hidden md:block lg:block ">
        <button className="transition hover:scale-110 hover:opacity-70 rounded-3xl p-2 px-4 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md">Request Invite</button>
        </div>
    </nav>
  );
}