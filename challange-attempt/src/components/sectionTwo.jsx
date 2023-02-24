import Currency from '../images/image-currency.jpg'
import Restaurant from '../images/image-restaurant.jpg'
import AirPlane from '../images/image-plane.jpg'
import Confetti from '../images/image-confetti.jpg'

export const SectionTwo = () => {
    const articles = [{
        image: Currency,
        author: "By Claire Robinson",
        title: "Recieve money in any currency with no fees",
        summary: "The world is getting smaller and we're becoming more mobile.So why should you be forced to only receive money in a single..."
    },
    {
        image: Restaurant,
        author: "By Wilson Hutton",
        title: "Treat yourself without worrying about money",
        summary: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you..."
    },
    {
        image: AirPlane,
        author: "By Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        summary: "We want you to enjoy your travels.This is why we don't charge any fees on purchases while you're abroad.We'll even show you..."
    },
    {
        image: Confetti,
        author: "By Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        summary: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
    }]



    return (
        <section className='bg-Very-Light-Gray pb-10 pt-10'>
            <div className='lg:mx-20 md:py-32'>
            <h1 className='text-3xl p-4 text-center md:text-left'>Latest Articles</h1>
            <div className='md:flex'>
            {articles.map((article) => (
                <div className='m-5 bg-white mt-10 rounded-xl '>
                <img className='rounded-t-xl w-full' src={article.image} alt={article.image} />
                <h1 className='text-xs px-6 pt-8 text-Grayish-Blue'>{article.author}</h1>
                <h1 className='text-md px-6 py-2'>{article.title}</h1>
                <p className='px-6 pb-10  text-sm text-Grayish-Blue'>{article.summary}
                </p>
            </div>
            ))}
            </div>
            </div>
        </section>
    )}