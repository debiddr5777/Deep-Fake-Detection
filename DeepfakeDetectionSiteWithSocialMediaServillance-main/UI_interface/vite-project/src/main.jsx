import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactDOM from "react-dom/client";
// import { Home,Usedata } from './pages';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import { Provider } from 'react-redux'
// import {store} from "./services/store"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/about',
//     element: <Usedata/>,
//   },
// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <RouterProvider router={router}> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </RouterProvider> */}
    {/* </Provider> */}
  </React.StrictMode>,
)
