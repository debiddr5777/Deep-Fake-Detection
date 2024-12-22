import React from 'react'

const Inputspace = () => {
  return (
    <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <form onSubmit={()=>{}}>
      <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={()=>{}} required/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
        <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={()=>{}} required />
      </div>
      <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" type="submit">Button</button>
    
      <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </form>                                                                
    </div>
  )
}

export default Inputspace
