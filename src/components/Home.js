import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import f_1 from '../assets/f_1.png';
import f_2 from '../assets/f_2.png';
import f_3 from '../assets/f_3.png';
import ab_1 from '../assets/ab_1.png';
import ab_2 from '../assets/ab_2.png';
import ab_3 from '../assets/ab_3.png';
import pattern from '../assets/pattern.png';
import top from '../assets/top.png';
import work from '../assets/work.png';
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
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
            title: 'What are SH-TZU?',
            content: `SH-TZU is the symbol for ShihTzu Inu, a deflationary cryptocurrency project built on the Arbitrum chain. It offers holders a range of utilities, including Text to NFT Bot, staking, and a decentralized exchange.`
        },
        {
            title: 'How do I get SH-TZU?',
            content: `You can get SH-TZU by purchasing it on a cryptocurrency exchange that supports the token. SH-TZU is currently available on SushiSwap and other exchanges. You can also earn SH-TZU by staking your tokens or participating in the ShihTzu Inu community.`
        },
        {
            title: 'How can we buy SH-TZU on SushiSwap?',
            content: `To buy SH-TZU on SushiSwap, you'll first need to have an Ethereum wallet and some Ethereum (ETH) to cover the transaction fees. Then, simply visit the SushiSwap exchange, search for SH-TZU, and swap your ETH for SH-TZU. Make sure to double-check the transaction details before confirming your trade.`
        },
        {
            title: 'Who are the team behind the project?',
            content: `The ShihTzu Inu project is run by a team of experienced cryptocurrency professionals who are passionate about creating a fun and engaging investment experience. Our team is dedicated to building a strong and vibrant community of SH-TZU holders, and we're committed to transparency, security, and innovation. To learn more about our team, visit our website and check out our team page.`
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

                            <h2 data-aos='fade-up' className='md:text-5xl text-3xl font-montserat font-bold text-black-100 uppercase'>
                                The Revolutionary Token on Arbitrum Chain, with 2% USDC Rewards for Holders!
                            </h2>

                            <div className="mt-6 flex items-center gap-x-8">
                                <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xd3C66E09A66EB90879768e81971ce2C3f83cEEeF">
                                    <button className="bg-red-50 hover:bg-white-100 border-2 border-red-50 rounded-lg py-3 lg:px-8 px-4 font-semibold text-white-100 hover:text-black-100">
                                        Buy Now
                                    </button>
                                </a>

                                <a href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0x983C8D727b3971864Ab2b54624A1A39bAa50D061">
                                    <button className="bg-red-50 hover:bg-white-100 border-2 border-red-50 rounded-lg py-3 lg:px-8 px-4 font-semibold text-white-100 hover:text-black-100">
                                        Chart ↗
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className="lg:w-1/2 relative pt-8">
                            <img data-aos='fade-up' src={pattern} alt='' className='w-9/12 lg:float-right lg:block hidden'></img>
                            <img data-aos='zoom-in' src={top} alt='' className='w-9/12 lg:float-right lg:block flex mx-auto lg:absolute right-14 lg:-mt-32'></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-pink-100 h-28'>
            </div>

            {/* about us section */}

            <div className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-16 lg:py-16">

                        <div data-aos="fade-right" className="">
                            <h2 className='md:text-5xl text-3xl font-bold text-black-100'>
                                Utilities
                            </h2>
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-6">

                            <p className='py-6 lg:leading-loose opacity-80 lg:text-lg'>
                                With these utilities, ShihTzu Inu offers a range of innovative
                                features that set it apart from other cryptocurrency projects.
                                Whether you're an artist, investor, or crypto enthusiast,
                                ShihTzu Inu has something to offer.
                                Join us today and discover the many benefits of the ShihTzu Inu project
                            </p>

                        </div>

                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 items-center gap-12'>

                        <div data-aos='flip-right' className='space-y-6'>
                            <img src={ab_1} alt="Logo" className='' />

                            <h5 className='md:text-2xl text-lg font-semibold text-black-100'>
                                Text to NFT Bot:
                            </h5>
                            <p className='text-white-50'>
                                Convert your messages into unique NFTs with our Text to NFT Bot. Express yourself through blockchain technology and turn your words into digital art that can be traded on the blockchain.
                            </p>
                        </div>

                        <div data-aos='flip-right' className='space-y-6 bg-blue-100 text-white-100 p-6'>
                            <img src={ab_2} alt="Logo" className='' />

                            <h5 className='md:text-2xl text-lg font-semibold'>
                                Staking
                            </h5>
                            <p className='text-white-100'>
                                Earn passive income with our easy-to-use staking feature. By holding your tokens in a secure wallet, you contribute to the stability of the ShihTzu Inu network and earn USDC rewards.
                            </p>
                        </div>

                        <div data-aos='flip-right' className='space-y-6'>
                            <img src={ab_3} alt="Logo" className='' />

                            <h5 className='md:text-2xl text-lg font-semibold text-black-100'>
                                DEX
                            </h5>
                            <p className='text-white-50'>
                                Trade your ShihTzu Inu tokens for other cryptocurrencies with our fast, secure, and user-friendly decentralized exchange. Enjoy low fees, fast transactions, and complete control over your investments without intermediaries.
                            </p>
                        </div>

                    </div>

                </div>
            </div>


            {/* features section */}

            <div id='features' className="lg:px-20 px-5">
                <div className='container mx-auto'>

                    <div className="lg:flex block justify-between items-center gap-x-12 lg:py-16 py-6">

                        <div data-aos="fade-left" className="lg:w-1/3 w-full">

                            <h2 className='md:text-4xl text-3xl font-semibold text-black-100 capitalize'>
                                TOKENOMICS
                            </h2>

                        </div>

                        <div className="lg:flex items-center justify-between md:mt-0 mt-12 gap-x-8 lg:space-y-0 space-y-6">
                            <div className='flex items-center gap-x-6'>
                                <img data-aos='zoom-in' src={f_1} alt='' className='rotate'></img>
                                <div data-aos='fade-up'>
                                    <h3 className='md:text-2xl text-xl font-semibold text-black-100'>
                                        USDC REWARDS
                                    </h3>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-6'>
                                <img data-aos='zoom-in' src={f_2} alt='' className='rotate'></img>
                                <div data-aos='fade-up'>
                                    <h3 className='md:text-2xl text-xl font-semibold text-black-100'>
                                        Marketing
                                    </h3>
                                </div>
                            </div>

                            <div className='flex items-center gap-x-6'>
                                <img data-aos='zoom-in' src={f_3} alt='' className='rotate'></img>
                                <div data-aos='fade-up'>
                                    <h3 className='md:text-2xl text-xl font-semibold text-black-100'>
                                        LP
                                    </h3>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id='about' className="lg:flex block justify-between items-center gap-x-16 lg:pt-16 py-5">

                        <div data-aos="fade-right" className="">
                            <h2 className='md:text-5xl text-3xl font-bold text-black-100'>
                                About us
                            </h2>
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-6">

                            <p className='py-6 lg:leading-loose opacity-80 lg:text-lg'>
                                Our token symbol, Shi-TZU, represents our love for dogs and
                                our commitment to creating a fun and engaging investment
                                experience. We believe that investing in cryptocurrencies
                                should be exciting and enjoyable, which is why we've designed
                                the ShihTzu Inu project to be both fun and rewarding.
                            </p>

                        </div>

                    </div>
                </div>
            </div>

            {/* How it Works */}

            <div id='working' className="mt-8">

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">
                    <div className="lg:flex block justify-center items-center gap-x-16">

                        <div data-aos="zoom-in" className="lg:w-1/3">
                            <img src={work} alt="Logo" className='lg:w-8/12 w-6/12 flex mx-auto' />
                        </div>

                        <div data-aos="fade-left" className="lg:w-1/2 w-full md:mt-0 mt-12">

                            <h2 className='md:text-5xl text-3xl font-bold text-black-100'>
                                WHY ARBITRUM:
                            </h2>
                            <p className='py-6 lg:leading-loose opacity-80 lg:text-lg'>
                                Our token is built on the Arbitrum chain, a layer 2 scaling solution for Ethereum. This means that the [Token Name] is fast and cheap to use, with near-instant transaction times and low fees. As more people adopt the Arbitrum chain, the demand for our token is likely to increase, driving up its value even further.
                            </p>
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
                                    <h5 className="text-xl py-4 font-semibold text-white-100 capitalize">phase 1:
                                        Launch and
                                        Community Building</h5>

                                    <ul className="list-disc p-4 text-white-100">
                                        <li>Launch of ShihTzu Inu on the Arbitrum chain</li>
                                        <li>Implementation of the Text to NFT Bot</li>
                                        <li>Launch of staking feature</li>
                                        <li>Launch of a decentralized exchange</li>
                                        <li>Development of the ShihTzu Inu community through social media, Discord, and other channels</li>
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
                                    <h5 className="text-xl py-4 font-semibold text-white-100 capitalize">Phase 2:
                                        Marketing and
                                        Partnership
                                        Development</h5>

                                    <ul className="list-disc p-4 text-white-100">
                                        <li>Implementation of a comprehensive marketing strategy to increase awareness of the project</li>
                                        <li>Partnership development with other cryptocurrency projects, influencers, and media outlets</li>
                                        <li>Expansion of the ShihTzu Inu community through targeted outreach and engagement</li>
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
                                    <h5 className="text-xl py-4 font-semibold text-white-100 capitalize">Phase 3:
                                        Charitable Giving
                                        and Social Impact</h5>

                                    <ul className="space-y-4 text-white-100">
                                        <li>Launch of the anonymous and secure donation feature</li>
                                        <li>Partnership with charitable organizations to support social impact projects and causes</li>
                                        <li>Expansion of the Text to NFT Bot to include charity auctions and fundraisers</li>
                                        <li>Community-driven initiatives to support social impact causes</li>
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
                                    <h5 className="text-xl py-4 font-semibold text-white-100 capitalize">Phase 4:
                                        Innovation and
                                        Expansion</h5>

                                    <ul className="text-white-100 list-disc p-4">
                                        <li>Implementation of new utilities and features, such as yield farming and NFT marketplaces</li>
                                        <li>Expansion of the ShihTzu Inu ecosystem through strategic partnerships and collaborations</li>
                                        <li>Integration with other blockchain networks and platforms to increase accessibility and reach</li>
                                        <li>Ongoing development and improvement of the ShihTzu Inu project based on community feedback and engagement.</li>
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

                    <div className='border-4 border-red-50 p-3 rounded-2xl'>
                        <img data-aos='zoom-in' src={p_1} alt="Logo" className='' />
                    </div>

                    <div className='border-4 border-red-50 p-5 rounded-2xl'>
                        <img data-aos='zoom-in' src={p_2} alt="Logo" className='' />
                    </div>

                    <div className='border-4 border-red-50 p-3 rounded-2xl'>
                        <img data-aos='zoom-in' src={p_3} alt="Logo" className='' />
                    </div>

                    <div className='border-4 border-red-50 p-5 rounded-2xl'>
                        <p className='text-2xl'><span className='font-semibold'>DX</span> LOCK</p>
                    </div>

                </div>
            </div>

            {/* faq section */}

            <div
                id="faq"
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
