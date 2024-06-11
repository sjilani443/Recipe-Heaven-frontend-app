import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Search from '../../Pages/Search';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center p-3 mt-[30px] gap-[20px]'>
      <div className='text-[50px] max-w-[70%] text-center font-bold leading-normal'>
        A Blog Webiste for Your <span className='text-orange-400'>Cooking</span>
      </div>
      <form action="/search" className='flex w-[70%] bg-slate-200 px-2 rounded-[5px] gap-3'>
      <FaSearch className='h-10'/>
      <Link to={`/search`}><input className='h-10 w-[100%] text-xl bg-slate-200 outline-none' type="search" id='search' required='' placeholder={`Search recipies...`}/></Link>
      </form>
    </div>
  )
}

export default Hero
