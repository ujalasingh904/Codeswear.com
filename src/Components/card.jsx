import React from 'react'


const Card = ({ CardArray, heading }) => {
  return (
    <div className='dark:bg-gray-900 overflow-hidden'>

      <div className='container  '>
        <div
          className='py-12 flex w-full justify-center'>
          <h1
            className='text-3xl font-[620] tracking-wider dark:text-white'>{heading}</h1>
        </div>

        <div className='flex flex-wrap p-2 -m-4 justify-center'>
          {
            CardArray.map((data) => (
              <div
                data-aos="zoom-in-up" 
                key={data.id} className='md:w-1/3 sm:w-1/2 w-[50%] p-2  '>

                <div className='p-2 rounded-lg overflow-hidden cursor-pointer '>
                  <img src={data.img} alt="" className='rounded w-full object-cover object-center transition-transform duration-300 hover:scale-110 mb-2' />
                </div>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Card