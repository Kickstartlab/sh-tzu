import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import f_1 from '../assets/f_1.png';
import f_2 from '../assets/f_2.png';
import ab_1 from '../assets/ab_1.png';
import ab_2 from '../assets/ab_2.png';
import ab_3 from '../assets/ab_3.png';
import tok_1 from '../assets/tok_1.png';
import tok_2 from '../assets/tok_2.png';
import tok_3 from '../assets/tok_3.png';
import tok_4 from '../assets/tok_4.png';
import tok_5 from '../assets/tok_5.png';
import tok_6 from '../assets/tok_6.png';
import pattern from '../assets/pattern.png';
import top from '../assets/top.png';
import work from '../assets/work.png';
import token from '../assets/token.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Accordion from './Accordion';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
        Aos.refresh();
    }, [])

    const accordionData = [
        {
            title: 'What are the SH TZU?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            title: 'How do i get SH-TZU?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            title: 'How can we buy?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        },
        {
            title: 'Who are the team behind the project?',
            content: `As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design.`
        }
    ];

    return (
        <div className="font-poppins overflow-hidden text-black-100">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top relative z-20 bg-pink-50">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="lg:flex justify-between items-center gap-y-12 py-12">
                        <div className="lg:w-1/2">

                            <h2 data-aos='fade-up' className='md:text-6xl text-3xl font-montserat font-bold text-black-100 uppercase'>
                                Jorem ipsum dolor sit amet, consectetur
                            </h2>

                            <p data-aos='fade-out' className='pt-8 pb-6 leading-loose'>
                                Robot technology is faster with the latest systems that make it possible
                                your partner and ready to serve your needs. EnttTer email to get product launch information
                            </p>

                            <div className="mt-6 py-2 pl-6 pr-1 lg:w-8/12 bg-pink-50 flex items-center justify-between rounded-2xl border-2 border-blue-25">
                                <input type="email" placeholder="Enter your email address" id="email" required="" className="focus:ring-0 focus:outline-none w-full bg-pink-50 placeholder:text-black-100" />

                                <button className='text-white-100 lg:px-5 px-2 lg:py-3 py-2 bg-blue-25 rounded-2xl'>
                                    Submit
                                </button>
                            </div>

                        </div>

                        <div className="lg:w-1/2 relative">
                            <img data-aos='fade-up' src={pattern} alt='' className='w-9/12 lg:float-right lg:block hidden'></img>
                            <img data-aos='zoom-in' src={top} alt='' className='w-9/12 lg:float-right lg:block flex mx-auto lg:absolute right-14 lg:-mt-32'></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-pink-100 h-28'>
            </div>

            {/* features section */}

            <div id='features' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 lg:py-16 py-6">

                        <div data-aos="fade-left" className="lg:w-1/3 w-full">

                            <h2 className='md:text-4xl text-3xl font-semibold text-black-100 capitalize'>
                                updated main<br></br>
                                features
                            </h2>

                        </div>

                        <div className="lg:flex items-center justify-between md:mt-0 mt-12 gap-x-12 lg:space-y-0 space-y-6">
                            <div className='flex items-center gap-x-6'>
                                <img data-aos='zoom-in' src={f_1} alt='' className=''></img>
                                <div data-aos='fade-up'>
                                    <h3 className='md:text-3xl text-xl font-semibold text-black-100'>
                                        Lorem Ipsum
                                    </h3>
                                    <p className='text-white-50'>
                                        Lorem ipsum hollar deor
                                        here
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-6'>
                                <img data-aos='zoom-in' src={f_2} alt='' className=''></img>
                                <div data-aos='fade-up'>
                                    <h3 className='md:text-3xl text-xl font-semibold text-black-100'>
                                        Lorem Ipsum
                                    </h3>
                                    <p className='text-white-50'>
                                        Lorem ipsum hollar deor
                                        here
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* about us section */}

            <div id='about' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-16 lg:py-16">

                        <div data-aos="fade-right" className="">
                            <h2 className='md:text-5xl text-3xl font-bold text-black-100'>
                                About Us
                            </h2>
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-6">

                            <p className='py-6 lg:leading-loose opacity-80 lg:text-lg'>
                                Torem ipsum dolor sit amet, consectetur adipiscing elit.
                                Torem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>

                        </div>

                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-12'>

                        <div data-aos='flip-right' className='space-y-6'>
                            <img src={ab_1} alt="Logo" className='' />

                            <h5 className='md:text-2xl text-lg font-semibold text-black-100'>
                                Lorem Ipsum
                            </h5>
                            <p className='text-white-50'>
                                Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div>
                                <a href='/' className='text-blue-100 font-semibold'>Read More ➔</a>
                            </div>
                        </div>

                        <div data-aos='flip-right' className='space-y-6 bg-blue-100 text-white-100 p-6'>
                            <img src={ab_2} alt="Logo" className='' />

                            <h5 className='md:text-2xl text-lg font-semibold'>
                                Lorem Ipsum
                            </h5>
                            <p className='text-white-50'>
                                Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div>
                                <a href='/' className='font-semibold'>Read More ➔</a>
                            </div>
                        </div>

                        <div data-aos='flip-right' className='space-y-6'>
                            <img src={ab_3} alt="Logo" className='' />

                            <h5 className='md:text-2xl text-lg font-semibold text-black-100'>
                                Lorem Ipsum
                            </h5>
                            <p className='text-white-50'>
                                Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div>
                                <a href='/' className='text-blue-100 font-semibold'>Read More ➔</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* How it Works */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className="lg:flex block justify-center items-center gap-x-16 py-16">

                        <div data-aos="zoom-in" className="lg:w-1/3">
                            <img src={work} alt="Logo" className='lg:w-full w-8/12 flex mx-auto' />
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-12">

                            <h2 className='md:text-5xl text-3xl font-bold text-black-100'>
                                See how everything
                                Works!
                            </h2>
                            <p className='py-6 lg:leading-loose opacity-80 lg:text-lg'>
                                Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet, consectetur adipiscing elit.Torem ipsum dolor sit amet,
                            </p>

                            <a href='/' className='font-semibold text-blue-100'>Read More ➔</a>

                        </div>

                    </div>

                </div>

            </div>

            {/* TOKENOMICS */}

            <div
                id="contract"
                className="lg:py-8 py-5 lg:px-20 px-5 container mx-auto"
            >
                <h3 className="md:text-5xl text-2xl font-poppins font-semibold text-center capitalize">
                    TOKENOMICS
                </h3>

                <div className='lg:flex items-center justify-between gap-8 space-y-4 pt-12'>

                    <div className='space-y-8'>

                        <div>
                            <p className='text-lg pb-2'>
                                Marketing: 25%
                            </p>
                            <img src={tok_1} alt="Logo" className='' />
                        </div>

                        <div>
                            <p className='text-lg pb-2'>
                                Bussiness Development: 25%
                            </p>
                            <img src={tok_2} alt="Logo" className='' />
                        </div>

                        <div>
                            <p className='text-lg pb-2'>
                                Product Development: 10%
                            </p>
                            <img src={tok_3} alt="Logo" className='' />
                        </div>

                    </div>

                    <div>
                        <img src={token} alt="Logo" className='' />
                    </div>

                    <div className='space-y-8'>

                        <div>
                            <p className='text-lg pb-2 lg:text-right'>
                                Reserve: 10%
                            </p>
                            <img src={tok_4} alt="Logo" className='' />
                        </div>

                        <div>
                            <p className='text-lg pb-2 lg:text-right'>
                                Reserve: 10%
                            </p>
                            <img src={tok_5} alt="Logo" className='' />
                        </div>

                        <div>
                            <p className='text-lg pb-2 lg:text-right'>
                                Token Sale: 20%
                            </p>
                            <img src={tok_6} alt="Logo" className='' />
                        </div>

                    </div>

                </div>


            </div>

            {/* roadmap */}

            <div className='bg-blue-50 lg:my-20 my-5'>
                <div
                    id="roadmap"
                    className="lg:py-8 py-5 lg:px-8 px-5 container mx-auto text-white-100"
                >
                    <h3 className="md:text-6xl text-2xl font-montserat font-semibold text-center">
                        Road map
                    </h3>

                    <div className="lg:mt-12 mt-6 rounded-2xl bg-blue-200 lg:p-12 p-6">

                        <div className="h-1 w-full bg-white-50">

                        </div>

                        <div className='h-1 w-full line -translate-y-1'>

                        </div>

                        <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6 -mt-2.5">

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#C004DE" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#C004DE" />
                                    </svg>

                                </div>

                                <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                <div
                                    data-aos="flip-right"
                                    className="border border-white-50 p-5 lg:w-72 bg-gradient"
                                >
                                    <h5 className="text-2xl py-4 font-semibold text-white-100">Q1 2023</h5>

                                    <ul className="space-y-4 text-white-100">
                                        <li>Release website and logo</li>
                                        <li>Grow community</li>
                                        <li>Launch the project</li>
                                        <li>Social media setup</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#C004DE" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#C004DE" />
                                    </svg>
                                </div>

                                <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                <div
                                    data-aos="flip-right"
                                    className="border border-white-50 p-5 lg:w-72 bg-gradient"
                                >
                                    <h5 className="text-2xl py-4 font-semibold text-white-100">Q2 2023</h5>

                                    <ul className="space-y-4 text-white-100">
                                        <li>Release website and logo</li>
                                        <li>Grow community</li>
                                        <li>Launch the project</li>
                                        <li>Social media setup</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#C004DE" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#C004DE" />
                                    </svg>
                                </div>

                                <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                <div
                                    data-aos="flip-right"
                                    className="border border-white-50 p-5 lg:w-72 bg-gradient"
                                >
                                    <h5 className="text-2xl py-4 font-semibold text-white-100">Q3 2023</h5>

                                    <ul className="space-y-4 text-white-100">
                                        <li>Release website and logo</li>
                                        <li>Grow community</li>
                                        <li>Launch the project</li>
                                        <li>Social media setup</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-3.5 lg:block hidden"
                                >
                                    <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#C004DE" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#C004DE" />
                                    </svg>
                                </div>

                                <div className="border-l border-white-50 lg:mt-5 mt-0 mb-3 h-14"></div>

                                <div
                                    data-aos="flip-right"
                                    className="border border-white-50 p-5 lg:w-72 bg-gradient"
                                >
                                    <h5 className="text-2xl py-4 font-semibold text-white-100">Q4 2023</h5>

                                    <ul className="space-y-4 text-white-100">
                                        <li>Release website and logo</li>
                                        <li>Grow community</li>
                                        <li>Launch the project</li>
                                        <li>Social media setup</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* partners */}

            <div
                id="partners"
                className="lg:py-8 py-5 lg:px-8 px-5 container mx-auto text-black-100"
            >
                <h3 className="md:text-5xl text-2xl font-montserat font-semibold text-center uppercase">
                    PARTNERS
                </h3>

                <div className='flex items-center justify-center gap-8 flex-wrap lg:mt-12 mt-6'>

                    <img data-aos='zoom-in' src={p_1} alt="Logo" className='' />
                    <img data-aos='zoom-in' src={p_2} alt="Logo" className='' />
                    <img data-aos='zoom-in' src={p_3} alt="Logo" className='' />
                    <img data-aos='zoom-in' src={p_4} alt="Logo" className='' />

                </div>
            </div>

            {/* faq section */}

            <div
                id="faqs"
                className="lg:py-8 py-5 lg:px-8 px-5 container mx-auto text-black-100"
            >
                <div className='lg:w-8/12 flex flex-col justify-center mx-auto'>

                    <h3 className="md:text-3xl text-2xl font-montserat font-semibold uppercase text-blue-100 pb-3">
                        FAQs
                    </h3>
                    <p>
                        Below we’ve provided a bit of FAQ
                    </p>

                    <div className="accordion mt-8">
                        {accordionData.map(({ title, content }) => (
                            <Accordion title={title} content={content} />
                        ))}
                    </div>

                </div>

            </div>



            <Footer />
        </div >
    )
}
