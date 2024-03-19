import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar(){


    return <>
    
    <div className="sm:flex justify-between p-8 items-center shadow-xl mb-8">
        <div className="justify-between flex items-center">

          <div className="transition-all cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950 hover:scale-110">
          <Link to={'/'}>Home</Link>
          </div>
          <div className="ml-8 transition-all cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950 hover:scale-110">
           <Link to={"/about"}> About</Link>
          </div>
          <div className="ml-8 transition-all cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950 hover:scale-110"> 
           <Link to={'/contact'}>Contact</Link>
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

      <Outlet/>
      
    </>
} 