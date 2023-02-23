import OnlineBanking from '../images/icon-online.svg'
import SimpleBudgeting from '../images/icon-budgeting.svg'
import FastOnboard from '../images/icon-onboarding.svg'
import OpenApi from '../images/icon-api.svg'


export const SectionOne = () => {



    return (
        <section className='bg-Light-Grayish-Blue pb-10 pt-10'>
            <div className='lg:mx-20'>
            <div className='text-center'>
                <h1 className='text-3xl p-4'>Why choose <br/> Easybank?</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                </p>
            </div>
            <div className='text-center p-4'>
                <img className='mx-auto' src={OnlineBanking} alt="" />
                <h1 className='text-2xl p-4'>Online Banking</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
            </div>
            <div className='text-center p-4'>
                <img className='mx-auto' src={SimpleBudgeting} alt="" />
                <h1 className='text-2xl p-4'>Simple Budgeting</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>See exactly where your money goes each month. Receive notifcations when you're close to your hitting limits.
                </p>
            </div>
            <div className='text-center p-4'>
                <img className='mx-auto' src={FastOnboard} alt="" />
                <h1 className='text-2xl p-4'>Fast Onboarding</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>We don't do branches. Open your account in minutes online and start taking control of your finances right away.
                </p>
            </div>
            <div className='text-center p-4'>
                <img className='mx-auto' src={OpenApi} alt="" />
                <h1 className='text-2xl p-4'>Open API</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier.
                </p>
            </div>
            </div>
        </section>
    )}