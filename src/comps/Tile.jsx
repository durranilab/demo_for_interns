import React from "react";

function Tile ({title,image,description,EnableButton}){

    return (
        <>
            <div className="min-h-[400px] mt-12 sm:flex gap-3 bg-gray-50 rounded-xl shadow-xl p-8 hover:bg-gray-200 transition-all hover:cursor-pointer hover:scale-105">
                <div className="flex items-center justify-center">
                    <img src={image} className={'w-1/2'} alt="Tile" />
                </div>

                <div className=" flex flex-col text-balance justify-center">
                    <div className="font-bold text-4xl text-indigo-950 ">{title}</div>
                    
                    <div className="mt-4 text-base text-indigo-800 ">
                        {description}
                    </div>
                 {/*   <div className="text-base text-center">
                        <button className="bg-blue-900 text-white mt-3 p-3 rounded-md w-auto hover:bg-blue-300" >{EnableButton}</button>
                    </div>
                */}

                    {EnableButton && (
                        <button  className=" w-1/3  bg-blue-900 text-white mt-6 py-1 px-1 rounded-md w-md hover:bg-blue-700">{EnableButton}</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Tile;

