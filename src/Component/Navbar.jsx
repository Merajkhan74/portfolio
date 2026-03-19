
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-gray-900">
      <nav className="relative">
        {/* Hamburger Button */}
        <button
          onClick={() => setMenu(true)}
          className="lg:hidden text-2xl text-white flex justify-self-end-safe mx-4 z-auto"
        >
          ☰
        </button>

        {/* Desktop Menu */}
       <div className="">
         <h2 className=" absolute flex lg:flex-row text-white font-bold text-3xl mt-1 ml-10 cursor-pointer transition-all duration-300 animate-bounce "> MD 
           <span className=" text-green-600   hover:text- cursor-pointer transition-all duration-300"> MERAJ KHAN </span>
          
         </h2>
       </div>

        
        <ul className="hidden lg:flex lg:flex-row lg:gap-9 justify-end items-center text-[17px] mt-3 mr-10  h-12">
            
          <li className="relative group text-white hover:text-blue-600 cursor-pointer transition-all duration-300">
            <a href="#" className="py-4 pb-2 text-lg">
              Home
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300 text-lg">
            <a href="#about">About</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
           <li className="relative group text-white hover:text-blue-600 transition-all duration-300 text-lg">
            <a href="#skills">Skills</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group text-white hover:text-blue-600 transition-all duration-300 text-lg">
              <a href="#education">Education </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300 text-lg">
            <a href="#project">Project</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="relative group text-white hover:text-blue-600 transition-all duration-300 text-lg">
            <a href="#connect">Connect</a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40"
          onClick={() => setMenu(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white 
        transform transition-transform duration-300
        ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg">Menu</h2>

          <button onClick={() => setMenu(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Same Links */}
        <ul className="flex flex-col gap-6 p-6 text-[17px]">
          <li className="hover:text-blue-600">
            <a href="#hero">Home</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#skills">Skills</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#education">Education</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#project">Project</a>
          </li>

          <li className="hover:text-blue-600">
            <a href="#connect">Connect</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
