import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      setButtonText("Send");
    }
  };

  return (
    <section className="contact bg-gray-900 text-white py-20" id="connect">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2">
            <TrackVisibility>
              {({ isVisible }) => 
                <img 
                  className={`${isVisible ? 'animate__animated animate__zoomIn' : ''} mx-auto w-2/3 md:w-full`} 
                  src={contactImg} 
                  alt="Contact Us" 
                />
              }
            </TrackVisibility>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={`${isVisible ? 'animate__animated animate__fadeIn' : ''} bg-gray-800 p-8 rounded-lg shadow-lg`}>
                  <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* First Name and Last Name */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <input 
                        type="text" 
                        value={formDetails.firstName} 
                        placeholder="First Name" 
                        onChange={(e) => onFormUpdate('firstName', e.target.value)} 
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="text" 
                        value={formDetails.lastName} 
                        placeholder="Last Name" 
                        onChange={(e) => onFormUpdate('lastName', e.target.value)} 
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <input 
                        type="email" 
                        value={formDetails.email} 
                        placeholder="Email Address" 
                        onChange={(e) => onFormUpdate('email', e.target.value)} 
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="tel" 
                        value={formDetails.phone} 
                        placeholder="Phone No." 
                        onChange={(e) => onFormUpdate('phone', e.target.value)} 
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Message Textarea */}
                    <textarea 
                      rows="6" 
                      value={formDetails.message} 
                      placeholder="Message" 
                      onChange={(e) => onFormUpdate('message', e.target.value)} 
                      className="w-full px-4 py-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md flex items-center justify-center gap-2"
                    >
                      {buttonText} <FiSend size={20} />
                    </button>

                    {/* Status Message */}
                    {status.message && (
                      <div 
                        className={`mt-4 p-4 text-center rounded-md ${
                          status.success ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}
                      >
                        {status.success ? <FaCheckCircle className="inline mr-2" /> : <FaTimesCircle className="inline mr-2" />}
                        {status.message}
                      </div>
                    )}
                  </form>
                </div>
              }
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};
