import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-gray-400 bg-red-500 body-font w-full p-2 fixed h-[7vh] z-40">
  <div className=" mx-auto flex flex-wrap  flex-col md:flex-row justify-start items-center">
    <a className="flex title-font font-medium items-center no-underline text-white mb-1  md:mb-0">
     
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[40px] h-[40px]" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
      <span className="ml-3 text-lg text-white">CyberServillance</span>
  </a>
     <div className="flex flex-row justify-start items-center ml-10 gap-3">
      <Link to='/' className="text-slate-50 font-semibold text-[15px] mx-1 no-underline">Twitter Servillence</Link>
      <Link to='/links' className="text-slate-50 font-semibold text-[15px] mx-1 no-underline">Image Link Search</Link>

     </div>

    
  
  </div>
</header>
  )
}

export default Header
