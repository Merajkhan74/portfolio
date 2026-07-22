import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Connect() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Input fields ki value change handle karne ke liye
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit hone par Web3Forms ko data bhejne ke liye
  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const dataToSend = new FormData();
    dataToSend.append("access_key", "fc2cedf5-6252-404b-ba9b-602e90db334f");
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: dataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        // Form ko khali karne ke liye
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="connect" className="min-h-screen bg-black text-white px-4 md:px-10 py-16">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>

          <div className="space-y-8 ">
            <div className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdEmail className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <a href="mailto:merajkhan05km@gmail.com"
                   className="text-lg text-gray-300 hover:text-white transition duration-300">
                  merajkhan05km@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
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

            <div className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <MdLocationOn className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-lg">
                  Hyderabad, India
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 transition duration-300 hover:-translate-x-3">
              <div className="bg-gray-800 p-4 rounded-full">
                <FaLinkedin className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/md-meraj-khan-593215384/" target="_blank" rel="noreferrer" className="text-lg text-white wrap-break-word">
                  linkedin.com/in/md-meraj-khan
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Send Me a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-3 rounded-lg w-full text-white"
              />

              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-black border border-gray-700 p-3 rounded-lg w-full text-white"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="bg-black border border-gray-700 p-3 rounded-lg w-full text-white"
            ></textarea>

            <button type="submit" className="bg-gray-300 text-black px-6 py-3 rounded-lg w-full hover:bg-white transition font-semibold">
              Submit Message
            </button>
          </form>

          {/* Status Message Display */}
          {result && (
            <p className={`mt-4 text-center text-sm ${result.includes("Successfully") ? "text-green-500" : "text-yellow-500"}`}>
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Connect;