import React, { useEffect, useState } from 'react'
import menu_icon from '../assets/menu_icon.jpg'
import close_icon from '../assets/close_icon.png'


function Navbar() {

const [showMenu, setShowMenu] = useState(false)

useEffect(()=> {
  if(showMenu) {
document.body.style.overflow = 'hidden'
}else {
document.body.style.overflow = 'auto'
}
return () => {
  document.body.style.overflow = 'auto'
};
},[showMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10'>
     <div className='container mx-auto flex justify-between items-center py-4 px-5 md:px-20 lg:px-32 bg-transparent'>
      <h3 className='text-3xl cursor-pointer text-slate-700 font-bold'><span className='text-white'>E</span>state</h3>
      <ul className='hidden md:flex gap-7 text-slate-600'>
        <a href='#Header' className='cursor-pointer hover:text-gray-500'>Home</a>
        <a href='#About' className='cursor-pointer hover:text-gray-500'>About</a>
        <a href='#Projects' className='cursor-pointer hover:text-gray-500'>Projects</a>
        <a href='#Testimonials' className='cursor-pointer hover:text-gray-500'>Testimonials</a>
        <a href='#Contact' className='cursor-pointer hover:text-gray-500'>Contact us</a>
      </ul>
      <button className='hidden md:block bg-slate-600 rounded-2xl text-white px-8 py-2'>Sign up</button>
      <img onClick={()=> setShowMenu(true)} src={menu_icon} className=' md:hidden w-7' alt='' />
      </div> 


     {/*-----Mobile Menu-----*/}
     
     <div className={` md:hidden  right-0 top-0 bottom-0 ${showMenu ? 'fixed w-full' : 'h-0 w-0' } overflow-hidden bg-white transition-all`}>
<div className='flex justify-end p-6 px-10 cursor-pointer'>
      <img onClick={()=> setShowMenu(false)} src={close_icon}  className='w-6' alt=""  />
     </div>

      <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <a onClick={()=> setShowMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
        <a onClick={()=> setShowMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
        <a onClick={()=> setShowMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
        <a onClick={()=> setShowMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
      </ul>
      </div> 
    </div>
  )
}

export default Navbar
