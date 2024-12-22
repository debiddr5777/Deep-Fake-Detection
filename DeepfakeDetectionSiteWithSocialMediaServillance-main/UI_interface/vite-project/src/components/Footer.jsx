import React from 'react'

const Footer = () => {
  return (
    
    <footer className="text-gray-400 bg-red-500 body-font fixed">
    <div className="container px-2 py-4 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white no-underline">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-[35px] h-[35px]" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
        <span className="ml-3 text-md">Made with 🤍 by Sneha</span>
      </a>
     
      
    </div>
  </footer>
  )
}

export default Footer
