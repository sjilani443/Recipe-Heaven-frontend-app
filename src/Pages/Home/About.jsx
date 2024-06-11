import React from 'react'
import AboutImg from '../../assets/about-image.jpg'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div className='overflow-hidden flex  md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
    
      <div className='text-start'>
        <h2 className='text-3xl font-semibold text-secondary sm:leading-relaxed'>Vegan Foodie who loves to experiment with recipes</h2>
        <p className='text-xl mt-4 text-[#5c5c5c]'>
            Can Try out new Vegan Recipes like Butternut Squash + Pumpkin Soup or a Chickpea Salad with Lemon Tahini, with all these recipes you can make your vegan food more Tasty. 
        </p>
        <div className='lg:mt-0 lg:flex-shrink-0 '>
            <div className='mt-12 inline-flex '>
                <Link to='items/6666d4d4022d4eb6986c2bc6'><button className='py-4 px-8 bg-btncolor text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button></Link>
            </div>
        </div>
      </div>
      <div>
        <img src={AboutImg} alt="About Image" className='rounded-md' />
      </div>
    </div>
  )
}

export default About
