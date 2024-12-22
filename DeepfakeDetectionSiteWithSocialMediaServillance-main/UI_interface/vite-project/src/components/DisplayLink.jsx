import React from 'react'

const DisplayLink = ({data}) => {

    const handleDownload = async (imageUrl) => {
        try {
          // Fetch the image as a blob
          const response = await fetch(imageUrl);
          const blob = await response.blob();
    
          // Create a temporary URL for the blob
          const url = window.URL.createObjectURL(blob);
    
          // Create an invisible anchor element
          const link = document.createElement("a");
          link.href = url;
    
          // Extract the image filename from the URL
          const filename = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
          link.download = filename;
    
          // Append the anchor element to the document body and trigger a click
          document.body.appendChild(link);
          link.click();
    
          // Clean up: remove the anchor element and revoke the object URL
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Error downloading the image:", error);
        }
      };
    
      //   tweetData
    



    
  return (
    <div className="flex flex-row justify-start items-left bg-gray-900 rounded-lg my-3 z-30 ">
        <div className="w-[15%] flex flex-row justify-center items-center">
            {/* <img src={data.image} className= "rounded-full w-[55px] h-[55px] "/> */}
            <img src={data.logo} className= "rounded-full w-[55px] h-[55px] "/>
        </div>
    <div className="w-[70%] p-2 rounded-sm flex flex-col justify-start item-center text-left"> 
      <div className="w-full text-xl font-bold text-white text-left">{data.title}</div>
      <div className="w-full text-lg font-semibold">{data.domain}</div>
      <div className="w-full text-white font-medium p-1">
        <a href={data.link}>{
            data.link
            }</a> </div>
        <div className="m-auto w-full flex flex-row justify-center items-center gap-5 p-6">
                <button onClick={() => handleDownload(data.image)} className="text-white bg-red-600  w-[350px] border-0 py-3 px-3 focus:outline-none hover:bg-red-050 rounded-lg text-sm">
                  
                    Download
                  
                </button>

                <button className="text-white bg-green-900 w-[350px] border-0 py-3 px-3 focus:outline-none hover:bg-green-600 rounded-lg text-sm">
                  <a
                    href="https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/home_login"
                    className="no-underline text-white text-sm py-1 px-1 "
                  >
                    DeepFake  Check
                  </a>
                </button>
              </div>
    </div>
    <div className="w-[10%] flex flex-col justify-center items-center p-2 mr-2">
            <img src={data.image} className= " w-full h-[75px] mt-1 rounded-xl "/>
            <p className='text-white font-light text-[15px] mt-2'> site image</p>
            {/* <img src={data.logo} className= "rounded-full w-[55px] h-[55px] "/> */}
     </div>
    </div>
  )
}

export default DisplayLink
