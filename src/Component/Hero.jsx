import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/MERAJ (2).jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDownload } from "react-icons/md";
import { SiReact, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-gradient-to-br from-gray-950  to-black relative overflow-hidden">
      <div className=" flex flex-col lg:flex-row items-center min-w-60 max-w-[1080px] justify-between mx-auto ">
        
        <div className="left space-y-6 mt-9 max-w-[550px]">
          
          <div>
            <h1 className="text-white font-bold text-5xl leading-[1.2] pt-2 mt-8">
              I'M{" "}
              <span className="text-amber-500 ">
                <TypeAnimation
                  sequence={[
                    "MD MERAJ KHAN",
                    2000,
                    " A WEB DEVELOPER",
                    2000,
                    // "A FRONTEND DEVELOPER",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <div className="flex items-center  gap-2 text-gray-400 mt-3">
            <MdLocationOn className="text-xl text-red-500" />
            <span>Hyderabad, India</span>
          </div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            I am a passionate Full Stack Developer focused on building responsive
            and modern web applications. I specialize in React, JavaScript, and
            Tailwind CSS to create fast, user-friendly interfaces. I enjoy
            learning new technologies and continuously improving my development
            skills.
          </p>
        </div>

        
        <div className="grid grid-cols-2 gap-6  mt-20">
          <div className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center  ">
            <SiReact className="text-4xl text-cyan-400 mb-2 animate-bounce  " />
            <span className="text-sm text-gray-300 ">ReactJs</span>
          </div>

          <div className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center">
            <SiNextdotjs className="text-4xl mb-2 animate-bounce " />
            <span className="text-sm text-gray-300">Next.js</span>
          </div>

          <div className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-500 mb-2 animate-bounce " />
            <span className="text-sm text-gray-300">MongoDB</span>
          </div>

          <div className="bg-gray-800 p-10 rounded-2xl flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-sky-400 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">Tailwind CSS</span>
          </div>
        </div>
      </div>
     
              {/* Buttons */}
        <div className="flex gap-4 pt-4 mx-auto min-w-60 max-w-[1080px] ">
          <a
            href="/MD_Meraj_Khan_Frontend_Developer_Resume.pdf.pdf"
            download
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <MdDownload /> Resume
          </a>

          <div className="flex gap-3">
            <Link to={"https://github.com/Merajkhan74"} className="border border-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:scale-115">
              <FaGithub />
            </Link>

            <a href="mailto:merajkhan05km@gmail.com" className="border border-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:scale-115 ">
              <MdEmail />
            </a>

            <a href="https://www.linkedin.com/in/mdmeraj-khan/" 
            className="border border-gray-700 p-3 rounded-lg hover:bg-gray-800 hover:scale-115">
              <FaLinkedin />
            </a>
            
          </div>
          </div>
    </div>
   
  );
};

export default Hero;
