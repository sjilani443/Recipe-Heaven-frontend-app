import React from 'react'

function Aboutnav() {
  return (
    <section className='px-6 lg:px-12 py-10'>
        <h1 className='text-center tect-3xl pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>About</h1>
        <p className='text-center sm:w-1/2 mx-auto mb-5'>
        This website is made using <span className='font-bold text-orange-400 underline'>MERN</span> Stack</p>
        <div className='text-center w-full flex justify-center'>
            <img className='h-[200px]' src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" alt="" />
        </div>
        
    </section>
  )
}

export default Aboutnav
