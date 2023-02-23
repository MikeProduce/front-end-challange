import DesktopImage from '../images/bg-intro-desktop.svg'
import MobileImage from '../images/bg-intro-mobile.svg'
import MobilePhones from '../images/image-mockups.png'


export const LandingPage = () => {



    return (
        <section className='bg-Very-Light-Gray pb-10 md:p-20 overflow-hidden md:overflow-visible'>
            <div className='lg:mx-20 md:flex md:flex-row-reverse'>
            <div>
            <img className='z-2 absolute md:relative top-0 left-0 md:left-96' src={MobilePhones} alt={MobilePhones}/>
            <img className='z-1 absolute top-0 md:block hidden' src={DesktopImage} alt={DesktopImage} />
            <img className='md:hidden sm:w-auto max-w-full h-auto' src={MobileImage} alt="" />
            </div>
            <div className='text-center items-center'>
                <h1 className='text-4xl p-4'>Next generation digital banking</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>Take your financial life online. Your Easybank account wil be a one-stop-shop for spending,saving,budgeting,investing, and much more.
                </p>
                <button className="rounded-3xl px-4 py-3 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md">Request Invite</button>
            </div>
            </div>
        </section>
    )
}