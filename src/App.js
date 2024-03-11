import logo from "./images/logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MyButton from "./MyButton";
import Details from "./Details";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";


function App() {
  return (
    <div className="App max-w-6xl mx-auto ">
      <div className="sm:flex justify-between p-8 items-center">
        <div className="justify-between flex items-center">

          <div className="transition-all cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950 hover:scale-110">
            Home
          </div>
          <div className="ml-8 transition-all cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950 hover:scale-110">
            About
          </div>
          <div className="ml-8 transition-all cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950 hover:scale-110">
            Contact
          </div>
      
        </div>
 
          <div className="ml-8 text-indigo-900 text-2xl font-bold cursor-pointer hover:text-gray-700">
            Heading
          </div>

        <div>
          <button className="bg-indigo-900 text-white px-16 py-1 rounded ml-4">
            Buy Now
          </button>
        </div>
      </div>

        <div className="mt-16 mb-16 py-16 flex justify-between	items-center ">
          <div className="max-w-xl">
            <div className="text-5xl text-indigo-950 font-bold">
              The easiest way of turning text into videos
            </div>

            <div className="mt-12 text-indigo-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>

          <div className="flex gap-4 max-w-md mt-8" >
          <button className="bg-indigo-900 text-white w-full mt-12">
              Try it yourself
            </button>

            <button className="border-2 border-indigo-900 text-indigo-900 w-full mt-12">
              Learn More
            </button>
          </div>

          </div>

        
      </div>


<SectionTwo/>

<SectionThree/>

<SectionFour/>


    </div>
  );
}

export default App;
