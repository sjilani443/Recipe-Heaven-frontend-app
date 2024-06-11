import React from 'react'
import FearturedImg from "../../assets/featured.webp"
import { Link } from 'react-router-dom'
function FeaturedSection() {
  return (
    <div className='overflow-hidden flex  md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
      <div className='relative'>
        <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider'>Featured Recipe</div>
        <img src={FearturedImg} alt="Featured Image" className='rounded-md' />
      </div>
      <div className='text-start'>
        <h2 className='text-3xl font-semibold text-secondary sm:leading-relaxed'>Pineapple + Smoked Jackfruit Pizza</h2>
        <p className='text-sm mt-4 text-[#5c5c5c]'>
        Pineapple + Smoked Jackfruit Pizza is a delicious fusion of tropical sweetness and savory smokiness, combining juicy pineapple chunks with tender, smoky jackfruit.
        </p>
        <div className='lg:mt-0 lg:flex-shrink-0 '>
            <div className='mt-8 inline-flex '>
              <Link to='items/6668012cc504be16936b6d1e'>
                <button className='py-3 px-8 hover:bg-btncolor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
