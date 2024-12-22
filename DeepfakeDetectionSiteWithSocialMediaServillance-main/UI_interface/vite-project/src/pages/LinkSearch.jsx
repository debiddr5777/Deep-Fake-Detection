import React, { useState } from "react";
import axios from "axios";
import { DisplayLink, Loader } from "../components";

const LinkSearch = () => {
  const [linkDetail, setLinkDetails] = useState([]);
  const [linkQuery, setLinkQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlelinkSubmit = async (e) => {
    e.preventDefault();
    // alert("done trigerring")
    // console.log("triggered here till 1")
    const options = {
      method: "GET",
      url: "https://reverse-image-search1.p.rapidapi.com/reverse-image-search",
      params: {
        url: linkQuery,
        limit: "10",
        safe_search: "off",
      },
      headers: {
        "x-rapidapi-key":import.meta.env.VITE_RAPID_API_TWITTER_KEY,
        "x-rapidapi-host": "reverse-image-search1.p.rapidapi.com",
      },
    };

    // console.log("triggered here till 2")
    try {
      setError(null);
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data);
      setLinkDetails(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError();
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (error)
    return (
      <p className=" text-7xl font-bold w-full h-full text-white">
        Error: {error.message}
      </p>
    );

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute ml-6 inset-0 bg-transparent w-[70%] h-[100vh] mt-[10vh] z-30 overflow-y-auto ">
          {linkDetail.map((det) => (
            <DisplayLink data={det} />
          ))}
        </div>
        <iframe
          title="map"
          width="100%"
          height="100%"
          className="w-[100vw] h-[100vh] "
          //   frameBorder="0"
          //   marginHeight="0"
          //   marginwidth="0"
          src="https://maps.google.com/maps?width=100%&height=6000&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
        ></iframe>
        {/* <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.16);"></iframe> */}
      </div>
      <div className=" px-5 py-24  flex flex-col gap-2 w-[54%] ml-[46vw]">
        {/* <div className="w-full"></div> */}
        <form className="w-full bg-gray-900">
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Search 
            </h2>
            <p>After getting the response first download the image the use the deepfake detection tool</p>
           
            <div className="relative mb-2">
              <label className="leading-7 text-sm text-gray-400">
                Search Link
              </label>
              <input
                value={linkQuery}
                onChange={(e) => setLinkQuery(e.target.value)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              className="text-white text-base bg-red-500 mx-auto rounded-xl border-0 py-2 px-2 focus:outline-none hover:bg-red-600 w-[150px]"
              onClick={handlelinkSubmit}
            >
              Go
            </button>
          </div>
        </form>
        <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-3 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <div className="w-full   flex flex-col justify-start items-center my-2 border-b-2 border-white border-solid">
            <div className="w-full p-2 flex flex-col  justify-center items-center">
              <p className="text-white text-sm font-light">
                We sought to provide you the best user experience and bring you
                the most curated Deepfake detection tools 😊.Incase you find our
                servers busy, please try out these alternatives{" "}
              </p>
            </div>
            <div className="m-auto w-full flex flex-col justify-center items-center gap-2 p-3">
              <button className="text-white bg-cyan-900 w-[95%] border-0 py-2 px-2 focus:outline-none hover:bg-cyan-600 rounded-lg text-xs">
                <a
                  href="https://www.fakeimagedetector.com/"
                  className="no-underline text-white text-sm py-1 px-1 "
                >
                  DeepFake Image Check
                </a>
              </button>

              <button className="text-white bg-green-900 w-[95%] border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded-lg text-xs">
                <a
                  href="https://scanner.deepware.ai/"
                  className="no-underline text-white text-sm py-1 px-1 "
                >
                  DeepFake Video Check
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkSearch;
