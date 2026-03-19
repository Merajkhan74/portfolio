import React from "react";

const Education = () => {
  return (
    <section id="education" className=" bg-black text-white py-5 px-6 mt-0">

      <div className="max-w-[1080px] mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-amber-500">
          Education
        </h1>

        <div className="space-y-8">

          {/* B.Tech */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition">
            <h2 className="text-2xl font-semibold">
              Maulana Azad National Urdu University, Hyderabad
            </h2>

            <p className="text-gray-400 mt-2">
              B.Tech (Lateral Entry), Information Technology
            </p>

            <p className="text-gray-500 mt-1">
              2026 – Present • CGPA: 7.91
            </p>
          </div>

          {/* Diploma */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-amber-500 transition">
            <h3 className="text-xl font-semibold">
              Diploma in Information Technology
            </h3>

            <p className="text-gray-400 mt-2">
              Maulana Azad National Urdu University (MANUU), Hyderabad
            </p>
            <p className="text-gray-500 mt-1">
             2020-2023   •  CGPA : 8.53
            </p>

            <p className="text-gray-400 mt-1">
              CGPA: <span className="text-white">8.53</span>
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;