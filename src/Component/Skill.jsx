import { SiPostman, SiPython, SiReact } from "react-icons/si";

import {
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
//  SiPython,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-black text-white px-10 py-16">
      <div className="max-w-[1080px] flex flex-col mx-auto">

        <h1 className="text-5xl font-bold mb-4">My Skills</h1>

        <p className="text-gray-400 mb-16">
          Technologies and tools I've worked with throughout my projects and experience
        </p>

        {/* Frontend */}
        <h2 className="text-2xl font-semibold mb-8 al">Front End</h2>

        <div className="flex flex-wrap gap-10 mb-16">

          <SkillCard icon={<SiJavascript className="text-yellow-400" />} name="JavaScript" />
          <SkillCard icon={<SiReact className="text-cyan-400" />} name="React.js" />
          <SkillCard icon={<SiNextdotjs />} name="Next.js" />
          <SkillCard icon={<SiHtml5 className="text-orange-500" />} name="HTML" />
          <SkillCard icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
          {/* <SkillCard icon={<SiBootstrap className="text-purple-500" />} name="Bootstrap" /> */}
          <SkillCard icon={<SiTailwindcss className="text-sky-400" />} name="Tailwind CSS" />
          <SkillCard icon={<SiPython className="text-sky-400" />} name="Python" />

        </div>

        {/* Databases */}
        <h2 className="text-2xl font-semibold mb-8">Databases</h2>

        <div className="flex flex-wrap gap-10 mb-16">

          <SkillCard icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
          <SkillCard icon={<SiMysql className="text-blue-400" />} name="MySQL" />

        </div>

        {/* Tools */}
        <h2 className="text-2xl font-semibold mb-8">Tools & Platforms</h2>

        <div className="flex flex-wrap gap-10">

          <SkillCard icon={<SiGit className="text-orange-500" />} name="Git" />
          <SkillCard icon={<SiGithub />} name="GitHub" />
          <SkillCard icon={<VscCode className="text-blue-400" />} name="VS Code" />
          {/* <SkillCard icon={<SiFigma className="text-pink-500" />} name="Figma" /> */}
          <SkillCard icon={<SiVercel />} name="Vercel" />
          <SkillCard icon={<SiPostman />} name="Postman" />

        </div>

      </div>
    </div>
  );
};

function SkillCard({ icon, name }) {
  return (
    <div className="flex flex-col items-center">

      <div className="bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center text-3xl 
      transition duration-300  hover:-translate-y-3
      
      hover:ring-2 hover:ring-gray-500 scale-90">

        {icon}

      </div>

      <p className="text-gray-400 mt-3">{name}</p>

    </div>
  );
}

export default Skills;