import DesktopImage from '../images/bg-intro-desktop.svg'


export const LandingPage = () => {



    return (
        <section className='bg-white pb-10'>
            <div className='lg:mx-20'>
            <div>
                <img src={DesktopImage} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-4xl p-4'>Next generation digital banking</h1>
                <p className='p-4 text-sm text-Grayish-Blue'>Take your financial life online. Your Easybank account wil be a one-stop-shop for spending,saving,budgeting,investing, and much more.
                </p>
                <button className="rounded-3xl px-4 py-3 bg-gradient-to-r from-lime-green to-Bright-Cyan text-white text-md">Request Invite</button>
            </div>
            </div>
        </section>
    )
}