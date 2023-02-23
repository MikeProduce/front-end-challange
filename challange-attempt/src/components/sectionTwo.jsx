import Currency from '../images/image-currency.jpg'
import Restaurant from '../images/image-restaurant.jpg'
import AirPlane from '../images/image-plane.jpg'
import Confetti from '../images/image-confetti.jpg'

export const SectionTwo = () => {



    return (
        <section className='bg-Light-Grayish-Blue pb-10 pt-10'>
            <div className='lg:mx-20'>
            <h1 className='text-3xl p-4 text-center'>Latest Articles</h1>
            <div className='m-5 bg-white mt-10 rounded-xl'>
                <img className='rounded-t-xl' src={Currency} alt={Currency} />
                <h1 className='text-xs px-6 pt-8 text-Grayish-Blue'>By Claire Robinson</h1>
                <h1 className='text-md px-6 py-2'>Recieve money in any currency with no fees</h1>
                <p className='px-6 pb-10  text-sm text-Grayish-Blue'>The world is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in a single...
                </p>
            </div>
            <div className='m-5 bg-white mt-10 rounded-xl'>
                <img className='rounded-t-xl' src={Restaurant} alt={Restaurant} />
                <h1 className='text-xs px-6 pt-8 text-Grayish-Blue'>By Wilson Hutton</h1>
                <h1 className='text-md px-6 py-2'>Treat yourself without worrying about money</h1>
                <p className='px-6 pb-10  text-sm text-Grayish-Blue'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you...
                </p>
            </div>
            <div className='m-5 bg-white mt-10 rounded-xl'>
                <img className='rounded-t-xl' src={AirPlane} alt={AirPlane} />
                <h1 className='text-xs px-6 pt-8 text-Grayish-Blue'>By Wilson Hutton</h1>
                <h1 className='text-md px-6 py-2'>Take your Easybank card wherever you go</h1>
                <p className='px-6 pb-10  text-sm text-Grayish-Blue'>We want you to enjoy your travels.This is why we don't charge any fees on purchases while you're abroad.We'll even show you...
                </p>
            </div>
            <div className='m-5 bg-white mt-10 rounded-xl'>
                <img className='rounded-t-xl' src={Confetti} alt={Confetti} />
                <h1 className='text-xs px-6 pt-8 text-Grayish-Blue'>By Claire Robinson</h1>
                <h1 className='text-md px-6 py-2'>Our invite-only Beta accounts are now live!</h1>
                <p className='px-6 pb-10  text-sm text-Grayish-Blue'>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...
                </p>
            </div>
            </div>
        </section>
    )}