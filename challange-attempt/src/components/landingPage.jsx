import DesktopImage from '../images/bg-intro-desktop.svg'
import MobileImage from '../images/bg-intro-mobile.svg'
import MobilePhones from '../images/image-mockups.png'


export const LandingPage = () => {

//sm: 640,md:768,lg:1024;,xl:1280

    return (
        <section className='bg-Very-Light-Gray pb-10 md:py-20 md:px-14 lg:px-5'>
  <div className='lg:mx-20 md:flex md:flex-row-reverse md:py-32'>
    <div className='w-full h-full'>
      <img className='z-2 absolute -top-20 sm:-top-70 xxs:-top-32 xs:-top-30 smm:-top-30 md:-top-96 md:-right-64' src={MobilePhones} alt={MobilePhones}/>
      <img className='z-1 absolute top-0 hidden' src={DesktopImage} alt={DesktopImage} />
      <img className='md:hidden w-full' src={MobileImage} alt="" />
    </div>
    <div className='text-center items-center md:text-left'>
      <h1 className='text-4xl p-4 md:py-4 md:px-0 '>Next generation digital banking</h1>
      <p className='p-4 text-sm text-Grayish-Blue md:py-4 md:px-0'>Take your financial life online. Your Easybank account wil be a one-stop-shop for spending,saving,budgeting,investing, and much more.
      </p>
      <button className="rounded-3xl px-4 py-3 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md">Request Invite</button>
    </div>
  </div>
</section>

    )
}