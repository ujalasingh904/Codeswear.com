import React from 'react'
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";

import img1 from "../assets/hero/hero1.png"
import img2 from "../assets/hero/hero2.png"
import img3 from "../assets/hero/hero3.png"
import img4 from "../assets/hero/hero4.png"
import img5 from "../assets/hero/hero5.png"
import img6 from "../assets/hero/hero6.png"
import img7 from "../assets/hero/hero7.png"
import img8 from "../assets/hero/hero8.png"
import img9 from "../assets/hero/hero9.png"
import img10 from "../assets/hero/hero10.png"
import img11 from "../assets/hero/hero11.png"

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "ease-out",
        pauseOnHover: false,
        pauseOnFocus: false
    };

    return (
        <>
            <div className='w-full overflow-hidden relative dark:bg-slate-700 '>
                <div className=' flex px-4 py-2 text-white w-full lg:justify-center'>

                    <div className='flex px-3 py-2 w-full lg:w-2/5 gap-x-3 bg-blue-800 rounded-[50px] hover:cursor-pointer items-center'>
                        <button className='bg-blue-500 rounded-2xl w-16 h-[1.6rem]  animate-pulse !duration-1000'>
                            NEW
                        </button>
                        <div className='flex items-center justify-between w-full'>
                            <p className='text-[.7rem]  md:text-sm font-semibold '>Get custom designed products by sending us a text on WhatsApp </p>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <Slider {...settings} >
                        <img src={img7} className='w-full  h-full object-cover object-center' />
                        <img src={img8} className='w-full  h-full object-cover object-center' />
                        <img src={img9} className='w-full  h-full object-cover object-center' />
                        <img src={img10} className='w-full h-full  object-cover object-center' />
                        <img src={img11} className='w-full h-full  object-cover object-center' />
                    </Slider>
                </div>
                <div className='md:hidden w-full md:w-4/5'>
                    <Slider {...settings} >
                        <img src={img1} className='w-full h-full object-fit object-center' />
                        <img src={img2} className='w-full h-full object-fit object-center' />
                        <img src={img3} className='w-full h-full object-fit object-center' />
                        <img src={img4} className='w-full h-full object-fit object-center' />
                        <img src={img5} className='w-full h-full object-fit object-center' />
                        <img src={img6} className='w-full h-full object-fit object-center' />
                    </Slider>
                </div>
                <div className='absolute bottom-[4rem] sm:bottom-[5rem]  w-full flex justify-center '>
                    <button data-aos="zoom-in-up" 
                        className='w-28 h-8 sm:w-36 sm:h-10 bg-white dark:bg-gray-900 dark:text-white text-lg  font-[600] rounded-xl sm:rounded-2xl '>
                        <a href=''>Shop Now</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero;