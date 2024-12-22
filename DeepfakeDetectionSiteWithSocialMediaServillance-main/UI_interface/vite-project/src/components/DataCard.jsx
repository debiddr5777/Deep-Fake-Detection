import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const DataCard = ({text,createdate,key,picmedia,userdata,tweet}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/about', { state: { message: text , tweetData:tweet} });
  };



  return (
    <div className="p-2 lg:w-full bg-slate-900 m-1 rounded-xl">
    <div className="w-full h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-2">
      <img alt="team" className="flex-shrink-0 rounded-full w-[100px] h-[100px] object-cover object-center sm:mb-0 mb-2" src={userdata.profile_pic_url}/>
      <div className="flex-grow w-[80%] sm:pl-3">
        <h2 className="title-font font-medium text-lg text-white text-left">{userdata.name}</h2>
        <h3 className="text-gray-500 mb-3 text-left text-xl">{userdata.username}</h3>
        <p className="mb-2 text-left text-md">{text}</p>
        <span className="inline-flex">

          <a className="ml-2 w-full text-gray-500 flex flex-row justify-start items-center no-underline">
            

            <button class="text-white bg-red-500 ml-[45vw] border-0 py-3 px-3 text-md focus:outline-none hover:bg-red-600 rounded-lg  " onClick={handleClick} >Analyze Profile</button>
          </a>
         
        </span>
      </div>
    </div>
  </div>
      
    
  )
}

export default DataCard
