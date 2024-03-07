import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import MyButton from "./MyButton";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between p-12 items-center">
        <div className="justify-between flex items-center">
          <div className="text-black text font-bold cursor-pointer hover:text-gray-700">
            Tableblocks
          </div>
          <div className="ml-8 text-black text font-bold cursor-pointer hover:text-gray-700">
            About
          </div>
          <div className="ml-8 text-black text font-bold cursor-pointer hover:text-gray-700">
            Templated
          </div>
          <div className="ml-8 text-black text font-bold cursor-pointer hover:text-gray-700">
            Feautures
          </div>
          <div className="ml-8 text-black text font-bold cursor-pointer hover:text-gray-700">
            Pricing
          </div>
          <div className="ml-8 text-black text font-bold cursor-pointer hover:text-gray-700">
            FAQ
          </div>
        </div>

        <div>
          <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-xl ml-4">
            Dahsboard
          </button>
        </div>
      </div>

      <div className="bg-yellow-500 p-8 m-12 rounded-xl">
        <div className="flex justify-between	">
          <div className="max-w-72 font-mono">
            <div className="text-4xl font-bold">
              The easiest way of turnign text into videos
            </div>

            <div className="mt-12 font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>

            <button className="bg-black text-white w-full mt-12">
              Try it yourself
            </button>
          </div>

          <div className="p-12">
            <img
              className="rounded-2xl border-2 border-black w-96"
              src="https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
