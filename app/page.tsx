"use client";

import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

 const Home = ()=> {
   const [a,seta]=useState(10);
   const changeA=()=>{
   seta(20);
   };
  return (
    <div>
      <h1>A is {a}</h1>
      <button onClick={changeA} className="pr-5 pl-3 p-3 bg-blue-300">ChangeA</button>
      <Navbar/>
    </div>
  );
};
  
export default Home;