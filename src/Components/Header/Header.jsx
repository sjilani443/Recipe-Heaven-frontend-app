import React, { useState } from 'react'
import DesktopNav from './DesktopNav'
import Mobilenav from './Mobilenav'

function Header({showlogin}) {
    const [hideleft,sethideleft]= useState("-left-[1000px]")
    const navitems = ["Recipies","About","Contact"]
    const onOpen = ()=>{
        sethideleft("-left-0")
    }
    const onClose = ()=>{
        sethideleft("-left-[1000px]")
    }
  return (
    <>
    
    <div className='max-[900px]:hidden'><DesktopNav menu={navitems} showlogin={showlogin}/></div>
    <div className='min-[900px]:hidden'><Mobilenav menu={navitems} onClose={onClose} onOpen={onOpen} hideleft={hideleft}/></div>
    </>
  )
}

export default Header
