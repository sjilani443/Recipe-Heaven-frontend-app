import React from 'react'
import Hero from '../../Components/Header/Hero'
import CategoryWrapper from '../Categories/CategoryWrapper'
import FeaturedSection from './FeaturedSection'
import LatestRecipe from './LatestRecipe'
import NewsLetter from './NewsLetter'
import About from './About'
import Footer from '../../Components/Header/Footer'
function Home() {
  return (
    <div className='container mx-auto'>
    <div className='flex flex-col justify-center items-center gap-5'>
      <Hero/>
      <CategoryWrapper/>
    </div>
    <FeaturedSection/>
    <LatestRecipe/>
    {/* <NewsLetter/> */}
    <About/>
    
    </div>
  )
}

export default Home
