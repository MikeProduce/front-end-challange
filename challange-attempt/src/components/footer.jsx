import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pintrest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'



export const Footer = () => {



    return (
        <footer className='bg-Dark-Blue pb-10 pt-10'>
            <div className='lg:mx-20'>
            <div className='text-center mx-auto'>
                <img className='mx-auto text-White h-6' src={logo} alt={logo} />
                <div className='flex justify-center items-center py-8'>
                    <img className='px-2 h-7' src={facebook} alt={facebook} />
                    <img className='px-2 h-7' src={youtube} alt={youtube} />
                    <img className='px-2 h-7' src={twitter} alt={twitter} />
                    <img className='px-2 h-7' src={pintrest} alt={pintrest} />
                    <img className='px-2 h-7' src={instagram} alt={instagram} />
                </div>
            </div>
            <div className='text-center p-4'>
                <h1 className='text-md p-3 text-Light-Grayish-Blue'>About us</h1>
                <h1 className='text-md p-3 text-Light-Grayish-Blue'>Contact</h1>
                <h1 className='text-md p-3 text-Light-Grayish-Blue'>Blog</h1>
                <h1 className='text-md p-3 text-Light-Grayish-Blue'>Careers</h1>
                <h1 className='text-md p-3 text-Light-Grayish-Blue'>Support</h1>
                <h1 className='text-md p-3 text-Light-Grayish-Blue'>Privacy Policy</h1>
                <button className="mt-4 rounded-3xl px-7 py-3 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md">Request Invite</button>
                <p className='p-4 text-md mt-2 text-Grayish-Blue'>EasyBank. All Rights Reserved
                </p>
            </div>
           </div>
        </footer>
    )}