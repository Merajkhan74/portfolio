
import React from "react";
import { Link } from "react-router-dom";
import RazorPay from "../assets/Rezar-pay.jpeg";
import MusicImage from "../assets/Music-page.jpeg";
import SyncImage from "../assets/Sync_image.jpeg";

const Projects = () => {
  return (
    <section id="project" className="py-20 bg-black text-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-12">
          Featured Projects
        </h2>

        {/* PROJECT 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 border border-white rounded-xl p-4">
          
          {/* IMAGE (Hidden on Mobile) */}
          
          <div className="hidden lg:block left space-y-6 h-[300px] max-w-[450px] w-full overflow-y-scroll no-scrollbar">
  <img
    src={RazorPay}
    alt=""
    className="w-full h-auto min-w-0 object-cover"
  />
</div>

          {/* CONTENT */}
          <div className="w-full lg:w-[55%] bg-white/10 backdrop-blur-lg rounded-xl p-5 lg:p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-amber-400">
              Razorpay-Inspired Payment Platform UI
            </h3>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              A fully responsive SaaS-style payment platform interface inspired
              by Razorpay. Built using React.js and Tailwind CSS.
            </p>

            <ul className="text-sm text-gray-400 mb-4 space-y-1">
              <li>• React.js Component Architecture</li>
              <li>• Advanced Tailwind CSS Layout</li>
              <li>• Responsive Grid System</li>
              <li>• Deployed on Vercel</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                to={"https:razorpay-inspired-payment-platform-delta.vercel.app"}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-semibold"
              >
                Live Demo
              </Link>

              <Link
                to={"https://github.com/Merajkhan74/Razorpay-Inspired-Payment-Platform-UI"}
                className="px-4 py-2 border border-white rounded hover:bg-amber-500"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 border border-white rounded-xl p-4 mt-10">
  
  {/* SCROLLABLE IMAGE */}
  <div className="hidden lg:block w-[45%] h-[300px] overflow-y-scroll no-scrollbar rounded-lg">
    <img
      src={MusicImage}
      alt=""
      className="w-full h-auto object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="w-full lg:w-[55%] bg-white/10 backdrop-blur-lg rounded-xl p-5 lg:p-6 shadow-lg">
    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-amber-400">
      Music Streaming Website
    </h3>

    <p className="text-gray-300 text-sm mb-4">
      A modern responsive music website UI focused on clean design and user experience.
    </p>

    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• Fully Responsive Website</li>
      <li>• Modern UI Design</li>
      <li>• Interactive Layout</li>
      <li>• Deployed on Vercel</li>
    </ul>

    <div className="flex flex-wrap gap-3">
      <Link
        to={"https://music-website-umim.vercel.app/"}
        target="_blank"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-semibold"
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

        {/* PROJECT 3 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 border border-white rounded-xl p-4 mt-10">
  
  {/* SCROLLABLE IMAGE */}
  <div className="hidden lg:block w-[45%] h-[300px] overflow-y-scroll no-scrollbar rounded-lg">
    <img
      src={SyncImage}
      alt=""
      className="w-full h-auto object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="w-full lg:w-[55%] bg-white/10 backdrop-blur-lg rounded-xl p-5 lg:p-6 shadow-lg">
    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-amber-400">
      StudySync Platform UI
    </h3>

    <p className="text-gray-300 text-sm mb-4">
      A responsive learning platform UI built with React and Tailwind CSS.
    </p>

    <ul className="text-sm text-gray-400 mb-4 space-y-1">
      <li>• React + Vite</li>
      <li>• Reusable Components</li>
      <li>• Responsive Design</li>
      <li>• Deployed on Vercel</li>
    </ul>

    <div className="flex flex-wrap gap-3">
      <Link
        to={"https://study-sync-nu-eight.vercel.app/"}
        target="_blank"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded font-semibold"
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