import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className=" text-7xl font-bold flex flex-col w-full h-full text-red-500  mt-[10vh] justify-center items-center my-auto ">
        {/* Loading... */}
        <div className=" flex flex-row my-6 justify-center items-center w-full h-full  gap-3">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="danger" />
        </div>
      </div>
  )
}

export default Loader
