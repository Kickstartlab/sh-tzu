import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';


export default function Footer() {
  return (
    <div className="font-montserat py-5">
      <footer data-aos="zoom-in" className='container text-black-100 mx-auto lg:px-20 font-montserat px-5'>

        <hr className='pb-12 text-black-100'></hr>

        <div className="flex flex-col items-center justify-center gap-y-8 mx-auto">

          <h2 className='md:text-4xl text-2xl font-montserat font-bold text-black-100'>
            Don't miss out, Stay updated
          </h2>

          <div className="py-2 pl-6 pr-1 lg:w-7/12 w-full lg:bg-white-25 lg:space-y-0 space-y-5 lg:flex items-center justify-between rounded-full">
            <input type="email" placeholder="Enter your email" id="email" required="" className="lg:p-0 p-5 lg:rounded-none rounded-full bg-white-25 focus:ring-0 focus:outline-none lg:w-7/12 w-full" />

            <button className='text-white-100 lg:px-12 px-2 lg:py-3 py-2 bg-pink-200 rounded-full'>
              Subcribe
            </button>
          </div>

          <div className='text-center lg:w-1/2 flex mx-auto'>
            <p>
            Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally
            </p>

          </div>

          <div className='flex justify-center gap-6 items-center lg:mt-0 mt-6'>

            <a href='/'>
              <img src={twitter} alt="Twitter" className='' />
            </a>

            <a href='/'>
              <img src={telegram} alt="Facebook" className='' />
            </a>

          </div>

        </div>

        <p className='pt-12 pb-6 text-center'>© {new Date().getFullYear()} All rights reserved by Sh-TZU.</p>
      </footer>
    </div>

  )
}
