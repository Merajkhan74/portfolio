import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdDownload } from "react-icons/md";
import { SiReact, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-linear-to-br from-gray-950 to-black relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start gap-10 px-4 sm:px-6 py-10 max-w-5xl mx-auto justify-between">
        
        <div className="left space-y-6 mt-6 w-full lg:w-[55%]">
          
          <div>
            <h1 className="text-white font-bold text-4xl sm:text-5xl leading-tight pt-2 mt-4">
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

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full lg:w-[35%]">
          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiReact className="text-4xl text-cyan-400 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">ReactJs</span>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiNextdotjs className="text-4xl mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">Next.js</span>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiMongodb className="text-4xl text-green-500 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">MongoDB</span>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-sky-400 mb-2 animate-bounce" />
            <span className="text-sm text-gray-300">Tailwind CSS</span>
          </div>
        </div>
      </div>
     
              {/* Buttons */}
        <div className="flex flex-nowrap  gap-5 px-4 w-full max-w-5xl mx-auto">

  {/* Resume Button */}
  <a
    href="/MD_Meraj_Khan_Frontend_Developer_Resume.pdf.pdf"
    download
    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition whitespace-nowrap text-sm"
  >
    <MdDownload /> Resume
  </a>

  {/* Icons */}
  <div className="flex gap-5">
    <a
      href="https://github.com/Merajkhan74"
      target="_blank"
      rel="noreferrer"
      className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800 transition"
    >
      <FaGithub />
    </a>

    <a
      href="mailto:merajkhan05km@gmail.com"
      className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800 transition"
    >
      <MdEmail />
    </a>

    <a
      href="https://www.linkedin.com/in/mdmeraj-khan/"
      target="_blank"
      rel="noreferrer"
      className="border border-gray-700 p-2 rounded-lg hover:bg-gray-800 transition"
    >
      <FaLinkedin />
    </a>
  </div>

</div>
      </div>
  );
};

export default Hero;
