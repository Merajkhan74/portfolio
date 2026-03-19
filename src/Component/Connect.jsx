import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Connect() {
  return (
    <div id="connect" className="min-h-screen  bg-black text-white px-10 py-16 ">
      <h1 className="text-5xl font-bold mb-16 justify-center mx-auto items-center flex">
        Contact Me
      </h1>

      <div className="grid md:grid-cols-2 gap-16 max-w-[1080px] mx-auto   ">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>

          <div className="space-y-8 ">
            <div className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdEmail className="text-2xl" />
              </div>
              <div >
                <p className="text-gray-400">Email</p>
                <a href="mailto:merajkhan05km@gmail.com"
                className="text-lg text-gray-300 hover:text-white transition duration-300">
                  merajkhan05km@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4  transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdPhone className="text-2xl" />
              </div>

              <div>
                <p className="text-gray-400">Phone</p>

                <a href="tel:+918864000860" className="text-lg">
                  +91 8864000860
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4  transition duration-300 hover:-translate-x-3 ">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdLocationOn className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                 <a
                    href="https://www.google.com/maps?q=Hyderabad,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    Hyderabad, India
                 </a>
                
              </div>
            </div>

            <div className="flex items-center gap-4  transition duration-300 hover:-translate-x-3 ">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400 ">LinkedIn <p>
                  <a href="https://www.linkedin.com/in/md-meraj-khan-593215384/"></a>
                <p className="text-lg text-white">linkedin.com/in/md-meraj-khan</p>
                  

                  </p>
                </p>

                <p className="text-lg"></p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Send Me a Message</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-black border border-gray-700 p-3 rounded-lg w-full"
              />

              <input
                type="email"
                placeholder="Your email"
                className="bg-black border border-gray-700 p-3 rounded-lg w-full"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your message"
              className="bg-black border border-gray-700 p-3 rounded-lg w-full"
            ></textarea>

            <button className="bg-gray-300 text-black px-6 py-3 rounded-lg w-full hover:bg-white transition">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
