import DesktopImage from '../images/bg-intro-desktop.svg'
import MobileImage from '../images/bg-intro-mobile.svg'
import MobilePhones from '../images/image-mockups.png'
import { Fade } from "react-awesome-reveal";



export const LandingPage = () => {

//sm: 640,md:768,lg:1024;,xl:1280

    return (
        <section className=' bg-Very-Light-Gray pb-10 md:py-20 md:px-14 lg:px-5 overflow-hidden'>
  <div className='lg:mx-20 md:flex md:flex-row-reverse md:py-32 relative'>
    <div className='w-full h-full'>
      <img className='object-cover z-30 md:h-11/12 md:-top-48 lg:-top-92 lg:-right-96 xl:-right-64 xl:-top-52 md:block absolute -top-20 sm:-top-70 xxs:-top-32 xs:-top-30 smm:-top-30 2xl:-top-52' src={MobilePhones} alt={MobilePhones}/>
      <img className='z-10 absolute hidden md:block xl:-top-64 lg:-top-32 md:-top-32 md:h-max md:w-full 2xl:w-9/12 2xl:-right-96' src={DesktopImage} alt={DesktopImage} />
      <img className='md:hidden w-full' src={MobileImage} alt="" />
    </div>
    <Fade triggerOnce direction="left">
    <div className='text-center items-center md:text-left 2xl:w-11/12'>
      <h1 className='text-4xl p-4 md:py-4 md:px-0 2xl:text-4xl text-Dark-Blue '>Next generation digital banking</h1>
      <p className='p-4 text-sm text-Grayish-Blue md:py-4 md:px-0 2xl:text-lg'>Take your financial life online. Your Easybank account wil be a one-stop-shop for spending,saving,budgeting,investing, and much more.
      </p>
      <button className="transition hover:scale-110 rounded-3xl px-4 py-3 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md hover:bg-black  hover:opacity-75">Request Invite</button>
    </div>
    </Fade>
  </div>
</section>
    )
}
