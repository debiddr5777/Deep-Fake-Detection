import { useState } from "react";
import axios from "axios";
import { DataCard,Loader } from "../components";

function App() {
  const [count, setCount] = useState("");
  const [selects, setSelects] = useState();
  const [myquery, setmyQuery] = useState({
    word: "",
    type: "",
  });
  const AvailableOption = {
    keywords: {
      url: "https://twitter154.p.rapidapi.com/search/search",
      params: {
        query: `#${myquery.word}`,
        section: "top",
        min_retweets: "1",
        min_likes: "1",
        limit: "5",
        start_date: "2022-01-01",
        language: "en",
      },
    },
    hashtags: {
      url: "https://twitter154.p.rapidapi.com/hashtag/hashtag",
      params: {
        hashtag: `#${myquery.word}`,
        limit: "20",
        section: "top",
      },
    },
    username: {
      url: "https://twitter154.p.rapidapi.com/user/tweets",
      params: {
        username: `${myquery.word}`,
        limit: "40",
        user_id: "96479162",
        include_replies: "false",
        include_pinned: "false",
      },
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [getTweets, {error,isFetching}] = useLazyGetSummaryQuery()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const option = {
      method: "GET",
      url: AvailableOption[selects].url,
      params: AvailableOption[selects].params,
      headers: {
        "x-rapidapi-key":import.meta.env.VITE_RAPID_API_TWITTER_KEY,
        "x-rapidapi-host": "twitter154.p.rapidapi.com",
      },
    };

    try {
      setError(null);
      setLoading(true);

      const response = await axios.request(option);
      setData(response.data.results);
      console.log(response.data.results);
      setLoading(false);
      // if(data){
    } catch (error) {
      setError();
    } finally {
      setLoading(false);
    }

    // const { data }=await getTweets({xquery:myquery.word})
    // console.log("done till here...")
    // if(data){
    //   setCount("Yes")
    //   console.log(data)
    // }else {

    //   setCount("No Tweets")
    // }
  };

  if (loading)
    return (
      <Loader/>
    );
  if (error)
    return <p className=" text-7xl font-bold w-full h-full text-white">Error: {error.message}</p>;

  return (
    <section className="text-gray-400 bg-gray-900  body-font relative w-[100vw] h-[100vh] flex justify-end overflow-y-auto ">
      <div class="absolute inset-0 bg-gray-900">
        <iframe
          title="map"
          width="100%"
          height="100%"
          className="w-[100vw] h-[100vh] "
          // frameborder="0"
          // marginheight="0"
          // marginwidth="0"
          src="https://maps.google.com/maps?width=100%&height=6000&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)", }}
        ></iframe>

        <div className="absolute inset-0 bg-transparent w-[70%] h-[100vh] m-5 overflow-y-auto">
          {data?.map((tweet) => (
            <DataCard
              text={tweet.text}
              createdate={tweet.creation_date}
              key={tweet.id}
              picmedia={tweet.media_url}
              userdata={tweet.user}
              tweet={tweet}
            />
          ))}
        </div>
      </div>
      {/* <div className="container px-5 py-24 mx-auto flex w-1/4 bg-transparent h-[45vh] "> */}
      <div class="px-5 py-24 ml-[68vw] flex w-[33%] rounded-lg">
      {/* <div className=" shadow-md rounded-lg p-8 flex <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"> flex-col md:ml-auto w-[1/4] bg-transparent mt-10 md:mt-0 relative z-20 h-[60vh]"> */}
      <div class="  shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
        <form onSubmit={handleSubmit} className="w-full bg-gray-900 p-3  h-[54vh]">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Search 
          </h2>
          <p className="leading-relaxed mb-1 text-md">
            Enter the x via entering keywords, hashtags or username and search all the tweets 
          </p>
          <div className="relative ">
            <label className="leading-7 text-sm text-gray-400  mb-1">Query</label>
            <input
              value={myquery.word}
              onChange={(e) => setmyQuery({ ...myquery, word: e.target.value })}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 p-1 leading-8 transition-colors duration-200  ease-in-out"
            />
          </div>
          
          <div className=" my-3 ">
            <h1 className="leading-7 text-base text-gray-400 mb-1">
              Select the option for query
            </h1>
            <select
            
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
              className="bg-slate-800 w-full  mb-1 text-base text-gray-100 p-2 border-solid rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900"
            >  
              <option className="bg-slate-800 text-base text-white p-7 "></option>
              <option className="bg-slate-800 text-base text-white p-7 ">keywords</option>
              <option className="bg-slate-800 text-base text-white p-7 " >hashtags</option>
              <option className="bg-slate-800 text-base text-white p-7">username</option>
            </select>
          </div>

          <button
            className="text-white text-base bg-red-500 rounded-xl border-0 py-2 px-2 focus:outline-none hover:bg-red-600   w-[150px]"
            type="submit"
          >
            Button
          </button>
          
        </form>
        </div>
        {/* </div> */}
      {/* </div> */}
    </div>
    </section>
  );
}

export default App;
