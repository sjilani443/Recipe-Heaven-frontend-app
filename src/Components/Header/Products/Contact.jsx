import React from 'react'
import Profileimg from '../../../assets/IMG_20231112_153643_780.jpg'
function Contact() {
  return (
    <div className='text-center mt-10 mb-20'>
      <p className='text-center'>Myself Jeelani Basha, a Btech Student </p>
        <div className='mt-10 flex justify-center '>
            <img className='h-[300px] rounded-md' src={Profileimg} alt="" />
        </div>
        <div className='flex-col items-center mt-20 gap-9'>
            <p className='text-3xl text-center mb-7 '>Connect with me:</p>
            <div className='flex justify-center gap-9 text-orange-600'>
        <a className='text-4xl' href="https://www.linkedin.com/in/jeelani-shaik-82b79a23b/"><i class="fa-brands fa-linkedin"></i> </a>
        <a className='text-4xl' href="https://github.com/sjilani443"><i class="fa-brands fa-github"></i></a>
        <a className='text-4xl' href="https://mail.google.com/mail/?view=cm&fs=1&to=sjilani443@gmail.com&su=Subject%20Here&body=Body%20text%20here"><i class="fa-solid fa-at"></i> </a>
        <a className='text-4xl' href="https://x.com/29Jeelani"><i class="fa-brands fa-square-x-twitter"></i> </a>
        <a className='text-4xl' href="https://www.instagram.com/sk__jeelani/"><i class="fa-brands fa-instagram"></i></a>
        </div>
        </div>
    </div>
  )
}

export default Contact
