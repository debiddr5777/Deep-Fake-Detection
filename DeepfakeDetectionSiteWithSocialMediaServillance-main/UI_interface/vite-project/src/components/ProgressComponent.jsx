import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


const ProgressComponent = ({numdata,variantcolor,sentiment}) => {
  const now=Math.round(numdata)
  return (
    <div className="w-full m-3 p-3">
      <div className="w-[20%] p-2 leading-[12px] flex flex-row justify-start gap-5   text-white  m-1">
        <p className='text-bold text-lg'>{sentiment}</p>
       <p className='text-semibold text-md'>{`${now}%`} </p>
      </div>
      
    <ProgressBar variant={variantcolor} now={now} />
    
    </div>
  )
}

export default ProgressComponent
