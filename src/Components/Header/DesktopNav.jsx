import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/recipe-heaven-high-resolution-logo-transparent.png'

function DesktopNav({menu,showlogin}) {
  return (
    <>
    <div className='h-16 flex justify-between items-center gap-2 p-2 text-center my-4 text-2xl'>
      <a href="/"><img className='h-[70px]' src={Logo} alt="" /></a>
      <ul className='flex gap-[30px]'>
        {
        menu.map((item,index)=>{
            return <li key={index} className='ml-4'>
                <Link to={item} className='font-medium captalize'>{item}</Link>
                </li>
        })
        }
      </ul>
      {/* <ul className='flex items-center text-xl'>
        {
          (showlogin)?<p>
            UserName
          </p>:<><li>
            <Link to='/login'>
            <button className='text-secondary px-4 py-2 rounded'>Log in</button>
            </Link> */}
        {/* </li>
        <li>
            <button className='text-secondary px-4 py-2 rounded'>Sign up</button>
        </li>
        </>
        }
        
      </ul> */}
    </div>
    </>
  )
}

export default DesktopNav
