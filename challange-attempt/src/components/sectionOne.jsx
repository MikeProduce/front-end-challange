import OnlineBanking from '../images/icon-online.svg'
import SimpleBudgeting from '../images/icon-budgeting.svg'
import FastOnboard from '../images/icon-onboarding.svg'
import OpenApi from '../images/icon-api.svg'


export const SectionOne = () => {
    const features = [{
        icon: OnlineBanking,
        title: 'Online Banking',
        summary:'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },{
        icon: SimpleBudgeting,
        title: 'Simple Budgeting',
        summary:"See exactly where your money goes each month. Receive notifcations when you're close to your hitting limits."
    },{
        icon: FastOnboard,
        title: 'Fast Onboarding',
        summary:"We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },{
        icon: OpenApi,
        title: 'Open API',
        summary:"Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier."
    }]



    return (
        <section className=' bg-Light-Grayish-Blue pb-10 pt-10 md:z-10 lg:z-10 xl:z-10 md:p-4 md:py-32'>
            <div className='lg:mx-20 md:mx-10'>
            <div className='text-center md:text-left'>
                <h1 className='text-3xl p-4 md:p-2'>Why choose <br className='md:hidden'/> Easybank?</h1>
                <p className='p-4 md:p-2 md:pb-10 text-sm text-Grayish-Blue lg:w-2/4 md:text-lg'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                </p>
            </div>
            <div className='md:flex'>
            {features.map((feature) => (
             <div className='text-center p-4 md:text-left md:p-2'>
                <img className='mx-auto md:mx-0 md:w-50' src={feature.icon} alt="" />
                <h1 className='text-2xl p-4 md:text-lg md:py-2 md:px-0'>{feature.title}</h1>
                <p className='p-4 text-sm text-Grayish-Blue md:text-smm md:px-0'>{feature.summary}</p>
            </div>
                ))}
            </div>
            </div>
        </section>
    )}