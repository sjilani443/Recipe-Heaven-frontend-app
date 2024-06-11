import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full mx-auto flex flex-col items-center p-10'>
      <h3 className='text-secondary font-semibold text-center text-4xl'>Sign up for my weekly newsletter!</h3>
      <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>Weekly Emails with my latest recipes, cooking tips and tricks and product recommendations!
        You'll be set up in minutes.
      </p>
      <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-[100%] md:px-8 gap-3'>
        <input className='bg-white flex border border-black flex-grow px-4 py-3 rounded text-gray-400 outline-none placeholder:text-[#1b2629] w-[20%]' type="text" placeholder='name'/>
        <input className='bg-white border border-black flex flex-grow px-4 py-3 rounded text-gray-400 outline-none placeholder:text-[#1b2629]' type="text" placeholder='Email Adress'/>
        <button className='py-3 px-3 bg-btncolor hover:text-secondary text-white w-[20%] transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>Get Started</button>
      </div>
    </div>
  )
}

export default NewsLetter
