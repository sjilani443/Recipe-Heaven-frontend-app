import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import Logo from '../../assets/recipe-heaven-high-resolution-logo-transparent.png'


function Mobilenav({menu,onClose,onOpen,hideleft}) {
  return (
    <div className='h-16 flex justify-between items-center px-6'>
      <a href="/">
      <img className='h-[3.3rem]' src={Logo} alt="" /></a>
      <button onClick={onOpen} className='border border-primary'><FaBars className='w-7 h-7'/></button>

      <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 flex justify-center items-center ${hideleft}`}>
        <button onClick={onClose} className='absolute right-8 top-32'>
            <IoIosCloseCircleOutline className='w-7 h-7'/>
        </button>

        <div className='flex flex-col items-center gap-[40px] '>
        <ul className='flex flex-col gap-[30px] items-center'>
        {
        menu.map((item,index)=>{
            return <li key={index}>
                <Link to={item} onClick={onClose} className='font-2xl captalize'>{item}</Link>
                </li>
        })
        }
      </ul>
      {/* <ul className='flex flex-col items-center'>
        <li>
            <button className='text-secondary px-4 py-2 rounded border border-secondary m-2 bg-orange-400'>Log in</button>
        </li>
        <li>
            <button className='text-secondary px-4 py-2 rounded border border-secondary bg-orange-400'>Sign up</button>
        </li>
      </ul> */}
        </div>
      </div>

      
    </div>
  )
}

export default Mobilenav
