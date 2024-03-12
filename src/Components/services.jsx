import React from 'react'
import { TbHanger } from "react-icons/tb";
import { FaShuttleVan } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const Services = () => {
    return (
        <div className='dark:bg-gray-900  p-6 overflow-hidden'>
            <div className='space-y-3'>
                <h1 
                data-aos="fade-down-left"
                className='dark:text-white text-2xl'>Our services</h1>
                <div className='h-[0.3rem] w-20 bg-pink-400 rounded'></div>
            </div>

            <div 
            data-aos="zoom-in-up"
             className='flex md:flex-nowrap flex-wrap px-8 w-full py-20 justify-between md:gap-x-8 gap-y-8 dark:text-white '>

                <div className='flex flex-col w-full xl:w-1/3 lg:w-1/2 justify-center items-center px-4 py-7  rounded-xl dark:bg-slate-700 gap-y-3 shadow-2xl'>
                    <div className='rounded-full bg-red-100 w-10 h-10 flex justify-center items-center'><TbHanger className='text-3xl text-pink-500' /></div>
                    <p className='text-xl font-[500]'>Premium Tshirts</p>
                    <p className=''>Our T-Shirts are 100% made of cotton</p>
                </div>


                <div className='flex flex-col w-full xl:w-1/3 lg:w-1/2 justify-center items-center px-4 py-7  rounded-xl dark:bg-slate-700 gap-y-3 shadow-2xl'>
                    <div className='rounded-full bg-red-100 w-10 h-10 flex justify-center items-center'><FaShuttleVan className='text-3xl text-pink-500' /></div>
                    <p className='text-xl font-[500]'>Free Shipping</p>
                    <p>We Ship all over india</p>
                </div>

                <div className='flex flex-col w-full xl:w-1/3 lg:w-1/2 justify-center items-center px-4 py-7  rounded-xl dark:bg-slate-700 gap-y-3 shadow-2xl'>
                    <div className='rounded-full bg-red-100 w-10 h-10 flex justify-center items-center'><FaRupeeSign className='text-3xl text-pink-500' /></div>
                    <p className='text-xl font-[500]'>Exciting Offers</p>
                    <p>We provide amazing offers and discounts on our products</p>
                </div>


            </div>
        </div>
    )
}

export default Services