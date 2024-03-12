import { BsFillMoonStarsFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import { IoPerson } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { IoMdSunny } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const [showToggle, setShowToggle] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    }
    else {
      element.classList.remove('dark');
      element.classList.remove('light');
    }
  },)


  const showSidebar = () => {
    setShowToggle(true);
  }

  const closeSidebar = () => {
    setShowToggle(false);
  }

  const dark = () => {
    setdarkMode(!darkMode);
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      setShowToggle(false);
    })
  }, [])




  return (
    <div className="overflow-hidden bg-red-200 dark:bg-gray-900 dark:text-white sticky z-[999] w-full top-0 left-0">
      <div className='w-full px-4 py-3'>
        <nav className='flex justify-between md:container'>
          <a href="#" className="text-2xl font-[700] text-pink-500 ">CodesWear</a>

          <ul
            className='hidden md:flex sm:items-center sm:flex-row  sm:justify-center sm:gap-x-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-12 list1'>

            <li className='' ><a href="#" className='w-full font-[400] hover:border-b-4 border-pink-500 pb-2 transition-all duration-150 ease-in'>Home</a></li>
            <li className='' ><a href="#" className='w-full font-[400] hover:border-b-4 border-pink-500 pb-2 transition-all duration-150 ease-in'>About</a></li>
            <li className='' ><a href="#" className='w-full font-[400] hover:border-b-4 border-pink-500 pb-2 transition-all duration-150 ease-in'>Know more</a></li>
            <li className='' ><a href="#" className='w-full font-[400] hover:border-b-4 border-pink-500 pb-2 transition-all duration-150 ease-in'>Career portal</a></li>
          </ul>

          <ul className={`fixed right-0 top-0 w-[170px] h-lvh bg-pink-200  px-4 gap-y-4 flex flex-col py-4 list2 ${showToggle ? "translate-x-0" : "translate-x-[100%]"}  transition-all linear duration-[10000] z-[999]  md:!hidden dark:bg-gray-800 `}>

            <div className='flex justify-end '><RxCross1 className='md:hidden cursor-pointer text-2xl' onClick={closeSidebar} /></div>
            <li className='' ><a href="#" className='w-full'>Home</a></li>
            <li className='' ><a href="#" className='w-full'>About</a></li>
            <li className='' ><a href="#" className='w-full'>Know more</a></li>
            <li className='' ><a href="#" className='w-full'>Career portal</a></li>

          </ul>

          <div className='flex items-center space-x-2'>
            <a
              className='hidden md:flex items-center gap-x-1 pr-3'
              href="#">
              <IoPerson className="text-pink-500" />
              SignIn
            </a>
            {(theme === "light") ? <BsFillMoonStarsFill className="cursor-pointer hidden md:flex" onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')} /> :

              <IoMdSunny className="cursor-pointer text-xl hidden md:flex" onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')} />
            }

            <RxHamburgerMenu className='md:hidden block cursor-pointer text-2xl' onClick={showSidebar} />


          </div>

          <div className='flex md:hidden fixed bottom-0 left-0 w-full h-12 bg-gray-100 dark:bg-slate-800'>
            <div className='flex justify-center items-center w-1/4' >
              <a href="#"><AiFillHome className="cursor-pointer text-3xl dark:text-pink-500" /></a>
            </div>

            <div className='flex justify-center items-center w-1/4' >
              <FaSearch className="cursor-pointer text-2xl dark:text-pink-500" />
            </div>

            <div className='flex justify-center items-center w-1/4' >
              <a href="#" className="relative">
                <FaShoppingCart className="cursor-pointer text-3xl dark:text-pink-500" />
                <span className="absolute top-[-6px] right-[-10px] text-white bg-pink-600 w-5 h-5 flex justify-center items-center rounded-full ">0</span>
              </a>
            </div>

            <div className='flex justify-center items-center w-1/4' >
              {(theme === "light") ? <BsFillMoonStarsFill className="cursor-pointer text-2xl " onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')} /> :

                <IoMdSunny className="cursor-pointer text-3xl dark:text-pink-500 " onClick={() => settheme(theme === 'dark' ? 'light' : 'dark')} />
              }
            </div>
            <div className='flex justify-center items-center w-1/4' >

              <IoPerson className="cursor-pointer text-black dark:text-pink-500 text-2xl" />
            </div>

          </div>

        </nav>
      </div>
    </div>
  )
}

export default Navbar

