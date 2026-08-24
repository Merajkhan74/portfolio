import React from "react";
import { Link } from "react-router-dom";
import RazorPay from "../assets/Rezar-pay.jpeg";
import MusicImage from "../assets/Music-page.jpeg";
import SyncImage from "../assets/Sync_image.jpeg";
import IconsPng from "../assets/icons.png";
import youtube from "../assets/YoutubeBacken-Img.png";
import Collaborative from "../assets/Collaborative.png"

const Projects = () => {
  return (
    <section id="project" className="py-24 bg-black text-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2">
          <div className="left space-y-6 h-[250px] sm:h-[400px] w-full lg:max-w-[450px] overflow-y-scroll no-scrollbar">
            <img
              src={RazorPay}
              alt="Razorpay Inspired Payment Platform"
              className="w-full lg:min-w-[400px] rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-auto lg:h-[400px] w-full lg:min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
              Razorpay-Inspired Payment Platform UI
            </h3>

            <p className="text-gray-300 text-sm mb-4 leading-[2.1]">
              A fully responsive SaaS-style payment platform interface inspired
              by Razorpay. Built using React.js and Tailwind CSS with reusable
              components and modern UI layout.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-1 leading-[2.1]">
              <li>• React.js Component Architecture</li>
              <li>• Advanced Tailwind CSS Layout</li>
              <li>• Responsive Grid System</li>
              <li>• Deployed on Vercel</li>
            </ul>

            <div className="flex gap-4">
              <Link
                to={
                  "https://razorpay-inspired-payment-platform-delta.vercel.app/"
                }
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded font-semibold"
              >
                Live
                <img
                  src={IconsPng}
                  alt=""
                  className="w-6 h-6 inline-block ml-2"
                />
              </Link>
              {/* <Link
                to={"https://github.com/Merajkhan74/Razorpay-Inspired-Payment-Platform-UI"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link> */}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 mt-10">
          <div className="left space-y-6 h-[250px] sm:h-[400px] w-full lg:max-w-[450px] overflow-y-scroll no-scrollbar">
            <img
              src={MusicImage}
              alt="Music Streaming Website"
              className="w-full lg:min-w-[400px] rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-auto lg:h-[400px] w-full lg:min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
              Music Streaming Website
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              A modern responsive music website interface designed to provide an
              engaging user experience for music discovery. The project focuses
              on clean UI design, responsive layouts, and structured content
              sections similar to real-world music streaming platforms.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-3">
              <li>• Fully Responsive Music Website</li>
              <li>• Modern UI & Visual Hierarchy</li>
              <li>• Interactive Layout Sections</li>
              <li>• Deployed on Vercel</li>
            </ul>

            <div className="flex gap-4">
              <Link
                to={"https://music-website-6z9d.vercel.app/"}
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded font-semibold"
              >
                Live
                <img
                  src={IconsPng}
                  alt=""
                  className="w-6 h-6 inline-block ml-2"
                />
              </Link>

              {/* <Link
                to={"https://github.com/Merajkhan74/Music-Website"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link> */}
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row items-center w-full max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 mt-10">
          <div className="left space-y-6 h-[250px] sm:h-[400px] w-full lg:max-w-[450px] overflow-y-scroll no-scrollbar">
            <img
              src={SyncImage}
              alt="StudySync Learning Platform"
              className="w-full lg:min-w-[400px] rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-auto lg:h-[400px] w-full lg:min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
              StudySync
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              StudySync is a responsive and visually engaging learning platform
              UI built with React and Tailwind CSS. The project focuses on
              delivering a seamless and modern user experience with clean
              component architecture and structured layout design.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-2">
              <li>
                • Built using React + Vite for fast development and optimized
                performance
              </li>
              <li>• Designed scalable and reusable UI components</li>
              <li>• Implemented responsive design using Tailwind CSS</li>
              <li>
                • Applied modern design principles (spacing, typography, color
                balance)
              </li>
              <li>
                • Structured landing page sections: Hero, Features,
                Testimonials, CTA, Footer
              </li>
              <li>• Deployed on Vercel for production-ready hosting</li>
            </ul>

            <div className="flex gap-4">
              <Link
                to={"https://study-sync-nu-eight.vercel.app/"}
                target="_blank"
                className="px-4 py-2 bg-white text-black rounded font-semibold"
              >
                Live
                <img
                  src={IconsPng}
                  alt=""
                  className="w-6 h-6 inline-block ml-2"
                />
              </Link>

              {/* <Link
                to={"https://github.com/Merajkhan74/StudySync"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link> */}
            </div>
          </div>
        </div>

        {/* YouTube Backend Project */}
        <div className="  ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8  justify-center">
            <div className="w-full max-w-[500px] h-[450px] mx-auto mt-10 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
              {/* Image */}
              <div className="w-full overflow-hidden h-[160px]">
                <img
                  src={youtube}
                  alt="YouTube Backend Project"
                  className="w-full h-45  lg:h-[350px]  mt-2 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-105    "
                />
              </div>

              {/* Content */}
              <div className="p-2 sm:p-2 md:p-2">
                {/* Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 pl-1.5 ">
                  YouTube <span className="text-red-500">Backend</span>
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-2 pl-1.5 ">
                  A scalable YouTube-inspired backend built with Node.js,
                  Express.js and MongoDB featuring JWT authentication, video
                  uploads, Cloudinary integration, and RESTful APIs.
                </p>

                {/* Tech Stack */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-2 pl-1.5">
                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Node.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-gray-500/10 text-gray-300
                         text-[10px] sm:text-xs md:text-sm
                         border border-gray-400/20 whitespace-nowrap"
                  >
                    Express.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    MongoDB
                  </span>

                   <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-pink-500/10 text-pink-500
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Mongoose
                  </span>
                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-red-500/10 text-red-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-red-400/20 whitespace-nowrap"
                  >
                    JWT
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-blue-500/10 text-blue-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-blue-400/20 whitespace-nowrap"
                  >
                    Cloudinary
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-yellow-500/10 text-yellow-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-yellow-400/20 whitespace-nowrap"
                  >
                    Multer
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 pl-1.5 justify-center">
                  <a
                    href="https://github.com/Merajkhan74/YouTubeClone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-5 py-2.5 mt-2
                     rounded-lg bg-blue-500 text-white text-sm font-medium
                     transition hover:bg-red-800 w-full "
                  >
                    GitHub
                  </a>

                  <button
                    className="w-full sm:w-auto px-5 py-2.5
                     rounded-lg border border-white/20
                     text-white text-sm font-medium
                     transition hover:bg-white/10  cursor-not-allowed  mt-2"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>

            {/* 2 project Box  */}
             <div className="w-full max-w-[500px] h-[450px] mx-auto mt-10 overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">

        <div className="w-full  h-[180px] overflow-hidden">
          <img
            src={Collaborative}
            alt="Collaborative Project Management"
            className="w-full  object-contain object-center block "
          />
        </div>
        
              <div className="p-2 sm:p-2 md:p-2">
               
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 pl-1.5 ">
                 Collaborative Project  <span className="text-red-500">Management</span>
                </h2>

              
                <p className="text-gray-300 text-xs sm:text-sm leading-5 sm:leading-6 mb-2 pl-1.5 ">
             A scalable RESTful backend for collaborative project management with secure authentication, role-based access control, project and team management, task and subtask tracking, project notes, and file attachments.
                </p>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 md:gap-3 mb-2 pl-1.5">
                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Node.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-gray-500/10 text-gray-300
                         text-[10px] sm:text-xs md:text-sm
                         border border-gray-400/20 whitespace-nowrap"
                  >
                    Express.js
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-green-500/10 text-green-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    MongoDB
                  </span>
                   <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-pink-500/10 text-pink-500
                         text-[10px] sm:text-xs md:text-sm
                         border border-green-400/20 whitespace-nowrap"
                  >
                    Mongoose
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-red-500/10 text-red-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-red-400/20 whitespace-nowrap"
                  >
                    JWT
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-blue-500/10 text-blue-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-blue-400/20 whitespace-nowrap"
                  >
                    Cloudinary
                  </span>

                  <span
                    className="flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-1.5
                         rounded-full bg-yellow-500/10 text-yellow-400
                         text-[10px] sm:text-xs md:text-sm
                         border border-yellow-400/20 whitespace-nowrap"
                  >
                    Multer
                  </span>
                </div>

              
                <div className="flex flex-col sm:flex-row gap-5 pl-1.5 justify-center">
                  <a
                    href="https://github.com/Merajkhan74/YouTubeClone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-5 py-2.5
                     rounded-lg bg-blue-600 text-white text-sm font-medium
                     transition hover:bg-red-700 w-full"
                  >
                    GitHub
                  </a>

                  <button
                    className="w-full sm:w-auto px-5 py-2.5
                     rounded-lg border border-white/20
                     text-white text-sm font-medium
                     transition hover:bg-white/10  cursor-not-allowed "
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
