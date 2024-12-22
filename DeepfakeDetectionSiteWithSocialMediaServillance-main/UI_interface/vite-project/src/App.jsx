import { useState } from "react";

import { DataCard } from "./components";
import { Home,Usedata,LinkSearch } from "./pages";
import {Header,Footer} from "./components"
import "./App.css";
import { Routes,Route } from "react-router-dom";
import axios from 'axios'
// import {useLazyGetSummaryQuery} from "./services/article"


function App() {
  


  return (
<>

 <div className="w-[100vw] h-[100vh] bg-slate-900 overflow-y-scroll">
 <Header/>
 <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<Usedata/>} />
      <Route path='/links' element={<LinkSearch/>} />
  </Routes>
    {/* <Home/> */}
    
    </div>
    <Footer/> 
    </>
  );
}

export default App;


