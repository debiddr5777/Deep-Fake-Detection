// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// // const options = {
// // 	method: 'GET',
// // 	hostname: 'twitter154.p.rapidapi.com',
// // 	port: null,
// // 	path: '/search/search?query=%23java&section=top&min_retweets=1&min_likes=1&limit=5&start_date=2022-01-01&language=en',
// // 	headers: {
// // 		'x-rapidapi-key': '920f66d69cmsha8e2ba6c03429e9p15a2c6jsn32cabb41521c',
// // 		'x-rapidapi-host': 'twitter154.p.rapidapi.com'
// // 	}
// // };

// // const options = {
// //     method: 'GET',
// //     url: 'https://twitter154.p.rapidapi.com/search/search',
// //     qs: {
// //       query: '#java',
// //       section: 'top',
// //       min_retweets: '1',
// //       min_likes: '1',
// //       limit: '5',
// //       start_date: '2022-01-01',
// //       language: 'en'
// //     },
// //     headers: {
// //       'x-rapidapi-key': '920f66d69cmsha8e2ba6c03429e9p15a2c6jsn32cabb41521c',
// //       'x-rapidapi-host': 'twitter154.p.rapidapi.com'
// //     }
// //   };

// // const options = {
// //     method: 'GET',
// //     url: 'https://twitter154.p.rapidapi.com/search/search',
// //     params: {
// //       query: '#java',
// //       section: 'top',
// //       min_retweets: '1',
// //       min_likes: '1',
// //       limit: '5',
// //       start_date: '2022-01-01',
// //       language: 'en'
// //     },
// //     headers: {
// //       'x-rapidapi-key': '920f66d69cmsha8e2ba6c03429e9p15a2c6jsn32cabb41521c',
// //       'x-rapidapi-host': 'twitter154.p.rapidapi.com'
// //     }
// //   };

// const rapidApiKey = import.meta.env.VITE_RAPID_API_TWITTER_KEY

// export const articleApi = createApi({
//   reducerPath: "articleApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://twitter154.p.rapidapi.com/",
//     mode: "cors" ,
//     prepareHeaders: (headers) => {
//       // headers.set('Access-Control-Allow-Origin', '*');
//       headers.set("x-rapidapi-key", rapidApiKey);
//       headers.set(
//         "x-rapidapi-host",
//         "twitter154.p.rapidapi.com"
//       );

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getSummary: builder.query({
//         query: (params) => `search/search/?query=%23${encodeURIComponent(params.xquery)}&section=top&min_retweets=1&min_likes=1&limit=5&start_date=2022-01-01&language=en`,
//     }),
//   }),
// });
 
// export const { useLazyGetSummaryQuery } = articleApi