import { MailchimpForm } from "./MailchimpForm";
import { FaFacebook, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import logo from '../assets/img/logo.png';


export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Mailchimp Form */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <MailchimpForm />
          </div>

          {/* Logo */}
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-25 h-25 mr-2 object-contain" />
          </div>

          {/* Social Icons */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-3">
              <a
                href="https://www.facebook.com/profile.php?id=100068844817728"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/22962341440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-500"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="www.linkedin.com/in/merveille-doh-015804296"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <p className="text-white text-sm">Copyright 2024. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
