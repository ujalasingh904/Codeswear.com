import React from 'react'
import image1 from "../assets/category/1a.webp"
import image2 from "../assets/category/1b.webp"
import image3 from "../assets/category/2a.webp"
import image4 from "../assets/category/2b.webp"
import image5 from "../assets/category/3a.webp"
import image6 from "../assets/category/3b.webp"
import image7 from "../assets/category/4a.webp"
import image8 from "../assets/category/4b.webp"
import image9 from "../assets/category/5a.webp"
import image10 from "../assets/category/5b.webp"


const CategoryArray = [
  {
    id: 1,
    img1: image1,
    img2: image2,
    heading: "TSHIRT",
    name: "Marvel Tshirt",
    price1: "$50",
    price2: "$30",
    aosDelay: "100"

  },
  {
    id: 2,
    img1: image3,
    img2: image4,
    heading: "TSHIRT",
    name: "Naruto Tshirt",
    price1: "$50",
    price2: "$30",
    aosDelay: "200"

  },
  {
    id: 3,
    img1: image5,
    img2: image6,
    heading: "TSHIRT",
    name: "Wings Of Freedom...",
    price1: "$40",
    price2: "$20",
    aosDelay: "300"

  },
  {
    id: 4,
    img1: image7,
    img2: image8,
    heading: "HOODIE",
    name: "Pack Of Three pl...",
    price1: "$60",
    price2: "$30",
    aosDelay: "400"

  },
  {
    id: 5,
    img1: image9,
    img2: image10,
    heading: "TSHIRT",
    name: "The Boys Tshirt",
    price1: "$45",
    price2: "$25",
    aosDelay: "500"

  },

];

const Category = () => {
  return (
    <div className=' overflow-hidden'>

      <div className='dark:bg-gray-900  w-full p-6'>
        <div className='py-12 container space-y-20'>

          <div className='space-y-3'>
            <h1
              data-aos="fade-up-left"
              className='dark:text-white text-2xl'>Trending Products</h1>
            <div className='h-[0.3rem] w-28 bg-pink-400 rounded'></div>
          </div>


          <div className='flex flex-wrap w-full justify-center gap-y-8'>
            {
              CategoryArray.map((data) => (

                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}

                  key={data.id} className=' w-[16rem] sm:h-[29rem] h-[24rem] m-3 flex justify-center relative shadow-2xl  transition-opacity rounded-2xl'>

                  <div className='overflow-hidden flex justify-center group'>

                    <div className='w-[13rem] cursor-pointer opacity-100 group-hover:opacity-0 z-[2] absolute top-0 transition-all ease-in duration-[350ms]'>
                      <img src={data.img1} alt="" className='w-full h-[16rem] sm:h-[19rem] ' />
                    </div>

                    <div className=' w-full cursor-pointer z-[1] absolute top-0 opacity-100 group-hover:dark:bg-slate-700 transition-all ease-in duration-[350ms] rounded-t-lg'>
                      <img src={data.img2} alt="" className='w-full h-[16rem] sm:h-[19rem] ' />
                    </div>

                  </div>

                  <div className='absolute bottom-0 flex flex-col justify-center w-full dark:text-white px-4 py-2 md:py-6 space-y-3 h-[8rem] sm:h-[10rem]  dark:bg-slate-700 rounded-b-lg'>

                    <h6 className='text-sm dark:opacity-30 opacity-60'>{data.heading}</h6>
                    <h1 className='text-lg font-bold'>{data.name}</h1>
                    <div className='flex gap-x-3'>
                      <span className='opacity-60 dark:opacity-30  line-through'>{data.price1}</span>
                      <span>{data.price2}</span>
                    </div>
                  </div>


                </div>
              ))
            }

          </div>

        </div>
      </div>



    </div>
  )
}

export default Category