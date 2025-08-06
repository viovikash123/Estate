import React from 'react'
import profile_img_1 from '../assets/profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png'
import profile_img_3 from '../assets/profile_img_3.png'
import star_icon from '../assets/star_icon.png'

export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];

function Testimonials() {
  return (
    <div className='container mx-auto min-h-screen py-16 px-4 sm:px-8 lg:px-32 flex flex-col justify-center w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Real Stories from Those WHo Found Home with Us</p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial,index) => (
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center transition-transform duration-300 hover:scale-105 '>
                <img src={testimonial.image} alt={testimonial.alt} className='w-20 h-20 rounded-full mx-auto mb-4'  />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-500 text-sm mb-4'>{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonial.rating}, (item,index) => (
                        <img className='w-4' key={index} src={star_icon}  />
                    ))}
                </div>
                <p className='text-gray-600 '>{testimonial.text}</p>
                </div>
        ))

        }
      </div>
    </div>
  )
}

export default Testimonials
