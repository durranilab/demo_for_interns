import React from "react";
import bg from "../images/bg.svg"

function SectionFour (){



    return <>   

 <div className=" flex flex-col items-center justify-center mx-auto py-24 bg-indigo-100 clip-bg ">



    <div className="text-indigo-950 text-4xl mt-12">A price to suit everyone</div>
    <div className="text-center max-w-xl  text-xs py-8 text-indigo-800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eveniet pariatur nisi cupiditate nulla commodi esse suscipit recus Est eveniet pariatur nisi cupiditate nulla commodi esse suscipit recusandae doloribus repudiandae ut voluptatibus, quia iusto id blanditiis iste voluptas quaerat consectetur.</div>
 
 <div className="flex flex-col items-center">
          <div className="text-indigo-950 text-6xl">$40</div>
          <div className="text-indigo-800">UI design Kit</div>
          <div className="mt-12 text-indigo-800">See , One price , Simple</div>
              <button className="rounded-md bg-indigo-950 py-1 px-16 m-3 hover:bg-indigo-900 text-white">Purchase now</button>
</div>
</div>


<footer className="bg-indigo-200">



<div className="flex w-full items-center justify-between p-4">

<div className="text-sm">&copy; 2024- Our Company</div>
<div className="font-bold text-indigo-900  text-center text-2xl">Landing</div>
<div className="rounded-md bg-indigo-950 py-1 px-8 m-3 hover:bg-indigo-900 text-sm text-white"><button>Purchase Now</button></div>
</div>

<div className="border-b border-indigo-950 my-12"></div>


   <div className="flex p-4">

   <ul className="flex gap-3">
         <li className="cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950">Home</li>
         <li className="cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950">About</li>
         <li className="cursor-pointer hover:text-indigo-700 hover:border-b hover:border-t border-indigo-950">Contact</li>
    </ul>

    <div className="flex gap-7 ml-auto" >
        <img src={bg} alt="logo" className="w-7 h-7 cursor-pointer"/>
        <img src={bg} alt="logo" className="w-7 h-7 cursor-pointer"/>
        <img src={bg} alt="logo" className="w-7 h-7 cursor-pointer"/>
        <img src={bg} alt="logo" className="w-7 h-7 cursor-pointer"/>
    </div>

   </div>


</footer>

 
    </>
}

export default SectionFour;