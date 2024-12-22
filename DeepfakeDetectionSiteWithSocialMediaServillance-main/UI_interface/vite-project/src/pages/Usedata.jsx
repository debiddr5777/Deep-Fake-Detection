import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProgressComponent } from "../components";
import axios from "axios";
import { IoLocationSharp, IoEyeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline, MdDescription } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { SlUserFollowing } from "react-icons/sl";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiIdentificationCardBold } from "react-icons/pi";

const Usedata = () => {
  const location = useLocation();
  const { state } = location;
  const [analytics, setAnalytic] = useState({});
  const [dlimageeUrl, setDlimageeUrl] = useState("");
  const [dlVideoUrl, setVideoUrl] = useState("");

  const media_urls = state.tweetData.media_url;
  const video_url = state.tweetData.video_url;

  // const imageUrl = 'https://www.example.com/path-to-your-image.jpg'; // Replace with your image URL

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

  useEffect(() => {
    const Analyzetext = async () => {
      const options = {
        method: "POST",
        url: "https://comprehend-it.p.rapidapi.com/predictions/ml-zero-nli-model",
        headers: {
          "x-rapidapi-key":import.meta.env.VITE_RAPID_API_ANALIZER_KEY,
          "x-rapidapi-host": "comprehend-it.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          labels: ["positive", "negative", "neutral"],
          text: state.message,
        },
      };

      try {
        const response = await axios.request(options);
        setAnalytic(response.data.outputs);
        console.log(response.data.outputs);
      } catch (error) {
        console.error(error);
      }
    };

    Analyzetext();
  }, []);

  return (
    <div className="bg-slate-900 w-[100vw] h-[100vh] overflow-y-auto  flex-row justify-center items-center  ">
      <div className=" w-[20%] bg-slate-800 p-3 mr-[50vw] mt-[10vh]  h-[90vh] rounded-2xl fixed   ">
        <div className="text-white text-xl p-2 text-center mb-1 border-b-2 border-white border-solid w-[94%] mx-auto">
          Profile
        </div>
        {state && (
          <div className="w-full flex flex-col justify-center items-center p-1 ">
            <div className="w-[30%] mt-2 flex  rounded-full">
              <img
                src={state.tweetData.user.profile_pic_url}
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="w-full mt-2   p-2 ">
              <div className="   gap-2 flex flex-row justify-start  w-full">
                <div className="mt-1">
                  <FaUserAlt color="white" size="20px" />{" "}
                </div>{" "}
                <p className="text-white text-left leading-7 font-thin text-md ml-1">
                  {" "}
                  <span className="font-bold  "> UserName </span>{" "}
                  {state.tweetData.user.username}
                </p>
              </div>
              <div className="  gap-2 flex flex-row justify-start my-2  w-full">
                <div className="mt-1">
                  <IoLocationSharp color="white" size="20px" />{" "}
                </div>{" "}
                <p className="text-white text-left leading-7 font-thin text-md">
                  {" "}
                  <span className="font-bold "> Location </span>{" "}
                  {state.tweetData.user.location}
                </p>
              </div>
              <div className="gap-2 flex flex-row justify-start my-2  w-full">
                <div className="mt-1">
                  <MdDriveFileRenameOutline color="white" size="20px" />{" "}
                </div>{" "}
                <p className="text-white text-left leading-7 font-thin text-md ">
                  {" "}
                  <span className="font-bold ">Name</span>{" "}
                  {state.tweetData.user.name}
                </p>
              </div>
              <div className=" gap-2 flex flex-row justify-start my-2  w-full">
                <div className="mt-1">
                  <BsFillPeopleFill color="white" size="20px" />{" "}
                </div>{" "}
                <p className="text-white text-left leading-7 font-thin text-md">
                  {" "}
                  <span className="font-bold">Followers</span>{" "}
                  {state.tweetData.user.follower_count}
                </p>
              </div>
              <div className="gap-2 flex flex-row justify-start my-2 w-full">
                <div className="mt-[4px]">
                  <SlUserFollowing color="white" size="20px" />{" "}
                </div>{" "}
                <p className="text-white text-left leading-7 font-thin text-md ">
                  {" "}
                  <span className="font-bold ">Following</span>{" "}
                  {state.tweetData.user.following_count}
                </p>
              </div>
              <div className="gap-2 flex flex-row justify-start my-2  w-full">
                <div className=" mt-[10px]">
                  <FaSquareXTwitter color="white" size="20px" />{" "}
                </div>{" "}
                <p className="text-white text-left leading-10 font-thin text-md">
                  {" "}
                  <span className="font-bold pb-5 ">Total tweets</span>
                  {state.tweetData.user.number_of_tweets}
                </p>
              </div>
              <div className="gap-2 flex flex-row justify-start my-2  w-full">
                <div className="mt-[9px]">
                  <MdDescription color="white" size="20px" />{" "}
                </div>
                <div className="w-full">
                  <p className="text-white text-left leading-7 font-thin text-md flex flex-col">
                    <span className="font-bold  "> Description</span>
                    {state.tweetData.user.description}
                  </p>
                </div>
              </div>

              {/* <p className="">
                <IoLocationSharp color="white" size="30px" />
              </p> */}
            </div>
          </div>
        )}
      </div>

      <div className="w-[77%] ml-[20vw] overflow-y-auto mt-[10vh]  ">
        <div className="w-[88%] ml-[113px] my-5 flex felx-row justify-evenly items-center mb-5 ">
          <div className="w-[45%] overflow-y-auto whitespace-nowrap h-[54vh] bg-slate-800 p-3 rounded-xl text-wrap">
            <div className="text-white text-xl p-2  text-center mb-3 border-b-2 border-white border-solid w-[94%] mx-auto">
              Tweet Text
            </div>
            <div className="text-3xl text-slate-400 font-extrabold mb-0 text-left">
              "
            </div>
            {state && (
              <p className="text-white text-md  font-light">{state.message}</p>
            )}

            <div className="text-slate-400 text-3xl font-extrabold mt-0 text-right">
              "
            </div>
          </div>
          <div className="w-[45%]  bg-slate-800 p-3 rounded-xl h-[54vh]">
            <div className="text-white text-xl p-2  text-center mb-4  border-b-2 border-white border-solid w-[94%] mx-auto">
              Tweet stats
            </div>
            <div className="flex flex-col  w-full p-1">
              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-md leading-1">
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      Number of Retweets :
                    </span>{" "}
                    {state.tweetData.retweet_count}
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-md leading-1">
                    {" "}
                    <span className="font-semibold"> Creation Date :</span>{" "}
                    {state.tweetData.creation_date}
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-md leading-1">
                    {" "}
                    <span className="font-semibold">
                      Number of Views :
                    </span>{" "}
                    {state.tweetData.views}
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-md leading-1">
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      Added Favourite count :
                    </span>{" "}
                    {state.tweetData.favorite_count}
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-md leading-1">
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      Tweet Timestamp :
                    </span>{" "}
                    {state.tweetData.timestamp}
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-sm leading-1">
                    {" "}
                    <span className="font-semibold">
                      {" "}
                      Number of Replies:
                    </span>{" "}
                    {state.tweetData.reply_count}
                  </div>
                )}
              </div>

              <div className="flex flex-row justify-start items-center gap-4">
                <PiIdentificationCardBold color="red" size="38px" />

                {state && (
                  <div className="text-light text-white text-left text-md leading-1">
                    {" "}
                    <span className="font-semibold"> Tweet ID :</span>{" "}
                    {state.tweetData.tweet_id}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[88%] mx-auto p-3 bg-slate-800 rounded-3xl my-10">
          <div className="text-white text-xl p-2 text-left mb-5  border-b-2 border-white border-solid w-[94%] mx-auto">
            Text Sentiment
          </div>
          {analytics && (
            <div className="text-white m-8">
              <ProgressComponent
                numdata={analytics.positive * 100}
                variantcolor="success"
                sentiment="Positive"
              />
              <ProgressComponent
                numdata={analytics.neutral * 100}
                variantcolor="warning"
                sentiment="Neutral"
              />
              <ProgressComponent
                numdata={analytics.negative * 100}
                variantcolor="danger"
                sentiment="Negative"
              />
            </div>
          )}
        </div>
        <div className="w-[88%] mx-auto p-3 bg-slate-800 rounded-3xl my-3">
          <div className="text-white text-2xl p-3 text-left mb-4  border-b-2 border-white border-solid w-[94%] mx-auto">
            Important Instructions
          </div>
          <div className="w-[94%] tex-white text-left m-2 font-normal p-6">
            <div className="w-full   flex flex-col justify-start items-center my-2 border-b-2 border-white border-solid">
              <div className="w-full p-2 flex flex-col  justify-center items-center">
                <p className="text-white text-lg font-light">
                  Welcome to our tweet analyzer tool  😊. If you wish to check if the tweet contains DeepFake content then first download the media using the download button and then
                  use the Deepfake button to navigate to the Deepfake tool and analyze your content there
                </p>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-[88%] mx-auto p-2 bg-slate-800 rounded-3xl my-4 mb-[43px]">
          <div className="text-white text-2xl p-2 text-left mb-3  border-b-2 border-white border-solid w-[94%] mx-auto">
            Image Media
          </div>

          {state && (
            <div className="w-[94%] tex-white text-left m-2 font-normal p-3">
              {media_urls?.map((url) => (
                <div className="w-full  p-3 flex flex-row justify-start items-center my-2 border-b-2 border-white border-solid">
                  <div className="w-[65%]  flex flex-row  justify-start items-center">
                    <img
                      src={url}
                      className="w-[100px] h-[100px] rounded-full  "
                    />
                    <p className="text-white text-sm ml-4">{url}</p>
                  </div>
                  <div className="w-[35%] flex flex-col justify-center items-center gap-3 ml-10">
                    <button
                      onClick={() => handleDownload(url)}
                      className="text-white bg-red-500 w-[150px] border-0 py-3 px-3 focus:outline-none hover:bg-red-600 rounded-xl text-md "
                    >
                      Download
                    </button>

                    <button className="text-white bg-green-900 w-[150px] border-0 py-3 px-3 focus:outline-none hover:bg-green-600 rounded-xl text-md">
                      <a
                        href="https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/home_login"
                        className="no-underline text-white text-sm py-1 px-1 "
                      >
                        DeepFake Check
                      </a>
                    </button>

                    {/* https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/home_login */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {state?.tweetData?.video_url !== null ? (
          <div className="w-[88%] mx-auto p-3 bg-slate-800 rounded-3xl my-3">
            <div className="text-white text-2xl p-3 text-left mb-4  border-b-2 border-white border-solid w-[94%] mx-auto">
              Video Media
            </div>

            <div className="w-[94%] tex-white text-left m-2 font-normal p-6">
              {video_url.map((vurl) => (
                <div className="w-full  p-1 flex flex-row justify-start items-center my-2 border-b-2 border-white border-solid">
                  <div className="w-[65%]  flex flex-row  justify-start items-center">
                    <p className="text-white text-sm">{vurl.url}</p>
                  </div>
                  <div className="ml-[69px] w-[35%] flex flex-col justify-center items-center gap-2 p-6">
                    <button
                      onClick={() => handleDownload(vurl.url)}
                      className="text-white bg-red-500 w-[150px] border-0 py-3 px-3 focus:outline-none hover:bg-red-600 rounded-lg text-md "
                    >
                      Download
                    </button>

                    <button className="text-white bg-green-900 w-[150px] border-0 py-3 px-3 focus:outline-none hover:bg-green-600 rounded-lg text-sm">
                      <a
                        href="https://zinc.cse.buffalo.edu/ubmdfl/deep-o-meter/home_login"
                        className="no-underline text-white text-sm py-1 px-1 "
                      >
                        DeepFake Check
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-[88%] mx-auto p-3 bg-slate-800 rounded-3xl my-3">
            <div className="text-white text-2xl p-3 text-left mb-4  border-b-2 border-white border-solid w-[94%] mx-auto">
              No Video Media
            </div>
          </div>
        )}
        <div className="w-[88%] mx-auto p-3 bg-slate-800 rounded-3xl my-3">
          <div className="text-white text-2xl p-3 text-left mb-4  border-b-2 border-white border-solid w-[94%] mx-auto">
            Alternatives
          </div>
          <div className="w-[94%] tex-white text-left m-2 font-normal p-6">
            <div className="w-full   flex flex-col justify-start items-center my-2 border-b-2 border-white border-solid">
              <div className="w-full p-2 flex flex-col  justify-center items-center">
                <p className="text-white text-lg font-light">
                  We sought to provide you the best user experience and bring
                  you the most curated Deepfake detection tools 😊.Incase you
                  find our servers busy, please try out these alternatives{" "}
                </p>
              </div>
              <div className="m-auto w-full flex flex-row justify-center items-center gap-5 p-6">
                <button className="text-white bg-cyan-900 w-[350px] border-0 py-3 px-3 focus:outline-none hover:bg-cyan-600 rounded-lg text-sm">
                  <a
                    href="https://www.fakeimagedetector.com/"
                    className="no-underline text-white text-sm py-1 px-1 "
                  >
                    DeepFake Image Check
                  </a>
                </button>

                <button className="text-white bg-green-900 w-[350px] border-0 py-3 px-3 focus:outline-none hover:bg-green-600 rounded-lg text-sm">
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
      </div>
    </div>
  );
};

export default Usedata;
