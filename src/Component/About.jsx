import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-12 px-6 mt-0 ">

      <div className="max-w-[950px] mx-auto justify-between items-center max-w-[1080px]">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-amber-500">
          About Me
        </h1>

        {/* About Text */}
        <p className="text-lg leading-8 mb-6 text-gray-300">
          Hi, I'm <span className="text-white font-semibold">Md Meraj Khan</span>, 
          a B.Tech Final Year student at 
          <span className="text-amber-400"> Maulana Azad National Urdu University (MANUU), Hyderabad</span>. 
          I have also completed my Diploma from the same university, where I built a strong
          foundation in technical knowledge and problem-solving skills.
        </p>

        <p className="text-lg leading-8 mb-6 text-gray-300">
          I am passionate about web development and enjoy building modern,
          responsive, and user-friendly web applications. My main focus is
          on frontend development using technologies like 
          <span className="text-amber-400"> HTML, CSS, JavaScript, React.js, and Tailwind CSS</span>.
        </p>

        <p className="text-lg leading-8 mb-10 text-gray-300">
          During my learning journey, I have worked on several projects that
          helped me improve my development skills and understand how to build
          real-world applications. I am always eager to learn new technologies
          and grow as a developer.
        </p>


      </div>

    </section>
  );
};

export default About;