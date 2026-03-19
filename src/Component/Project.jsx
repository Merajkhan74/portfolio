import Relinkct from "react";
import { Link } from "react-router-dom";
import MerajImage from "../assets/MERAJ (2).jpg";
import RazorPay from "../assets/Rezar-pay.jpeg";
import MusicImage from "../assets/Music-page.jpeg";
import SyncImage from "../assets/Sync_image.jpeg";

const Projects = () => {
  return (
    <section id="project" className="py-24 bg-black text-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-amber-500 mb-16">
          Featured Projects
        </h2>

        <div className="flex flex-col lg:flex-row items-center min-w-60 max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 ">
          <div className="left space-y-6 h-[400px] max-w-[450px] overflow-y-scroll no-scrollbar">
            <img src={RazorPay} alt="" className="min-w-[400px]" />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-[400px] min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
              Razorpay-Inspired Payment Platform UI
            </h3>

            <p className="text-gray-300 text-sm mb-4 leading-[2.1]">
              A fully responsive SaaS-style payment platform interface inspired
              by Razorpay. Built using React.js and Tailwind CSS with reusable
              components and modern UI layout.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-1 leading-[2.1] ">
              <li>• React.js Component Architecture</li>
              <li>• Advanced Tailwind CSS Layout</li>
              <li>• Responsive Grid System</li>
              <li>• Deployed on Vercel</li>
            </ul>

            <div className="flex gap-4">
              <Link
                to={"https:razorpay-inspired-payment-platform-delta.vercel.app"}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white text-black rounded font-semibold "
              >
                Live Demo
              </Link>
              <Link
                to={
                  "https://github.com/Merajkhan74/Razorpay-Inspired-Payment-Platform-UI"
                }
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* project 2  */}
        <div className="flex flex-col lg:flex-row items-center min-w-60 max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 mt-10 ">
          <div className="left space-y-6 h-[400px] max-w-[450px] overflow-y-scroll no-scrollbar">
            <img src={MusicImage} alt="" className="min-w-[400px]" />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-[400px] min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
              Music Streaming Website
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              A modern responsive music website interface designed to provide an
              engaging user experience for music discovery. The project focuses
              on clean UI design, responsive layouts, and structured content
              sections similar to real-world music streaming platforms.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-1">
              <li>• Fully Responsive Music Website</li>
              <li>• Modern UI & Visual Hierarchy</li>
              <li>• Interactive Layout Sections</li>
              <li>• Deployed on Vercel</li>
            </ul>

            <div className="flex gap-4">
              <Link
                to={"https://music-website-umim.vercel.app/"}
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white text-black rounded font-semibold "
              >
                Live Demo
              </Link>

              <Link
                to={"https://github.com/Merajkhan74/Music-Website"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>   
        {/* Project 03  */}
           <div className="flex flex-col lg:flex-row items-center min-w-60 max-w-[1080px] justify-between mx-auto gap-7 border border-white rounded-md p-2 mt-10 ">
          <div className="left space-y-6 h-[400px] max-w-[450px] overflow-y-scroll no-scrollbar">
            <img src={SyncImage} alt="" className="min-w-[400px]" />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:scale-102 transition shadow-lg h-[400px] min-w-[450px]">
            <h3 className="text-xl font-semibold mb-3 text-amber-400">
              Music Streaming Website
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              StudySync is a responsive and visually engaging learning platform UI built with React and Tailwind CSS. The project focuses on delivering a seamless and modern user experience with clean component architecture and structured layout design.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-1">
              <li>•Built using React + Vite for fast development and optimized performance</li>
              <li>• Designed scalable and reusable UI components</li>
              <li>• Implemented responsive design using Tailwind CSS</li>
              <li>• Applied modern design principles (spacing, typography, color balance)</li>
               <li>• Structured landing page sections: Hero, Features, Testimonials, CTA, Footer</li> 
               <li>• Deployed on Vercel for production-ready hosting</li>
            </ul>

            <div className="flex gap-4">
              <Link
                to={"https://study-sync-nu-eight.vercel.app/"}
                target="_blank"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-800 text-white text-black rounded font-semibold "
              >
                Live Demo
              </Link>

              <Link
                to={"https://github.com/Merajkhan74/StudySync"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
