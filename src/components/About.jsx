import React from 'react'
import About_brand from '../assets/About_brand.jpg'
import CountUp from 'react-countup'
import AOS from "aos";
import "aos/dist/aos.css"; 

AOS.init();

function About() {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passonate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
      {/*----Left-Side----*/}
     <img src={About_brand} className="w-full sm:w-1/2 max-w-lg border border-gray-200 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300"/>
 
    

    

      {/*--Right-Side---*/}
      <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
      <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28 '>

       <div>
        <p className='text-4xl font-medium text-gray-800'>
                <CountUp end={12} duration={2} enableScrollSpy={true} scrollSpyDelay={500} />+
              </p>
        <p>Years of Excellence</p>
      </div>

       <div>
        <p className='text-4xl font-medium text-gray-800'>
                <CountUp end={14} duration={2} enableScrollSpy={true} scrollSpyDelay={500} />+
              </p>
        <p>Project Completed</p>
      </div>

       <div>
        <p className='text-4xl font-medium text-gray-800'>
                <CountUp end={20} duration={2} enableScrollSpy={true} scrollSpyDelay={500} />+
              </p>
        <p>Mn. Sq. Ft. Delivered</p>
      </div>

      <div>
        <p className='text-4xl font-medium text-gray-800'>
                <CountUp end={25} duration={2} enableScrollSpy={true} scrollSpyDelay={500} />+
              </p>
        <p>Ongoing Projects</p>
      </div>

      </div>
      <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum illo aspernatur quos, ad, deleniti mollitia nulla quis, eveniet sint eaque sit autem quia. Ducimus aspernatur explicabo at omnis nesciunt!</p>
      <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
    </div>
      </div>
    </div>
  )
}

export default About
