import { LuClock3 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className=" bg-[url('../../public/images/Footer.jpeg')] bg-no-repeat bg-cover hero">
      <div className="lg:py-32 py-8 md:px-[15%] hero-overlay bg-opacity-80 bg-black">
        <div className="hero-content text-neutral-content text-center">
        <div>
          <h2 className="bebas-neue text-4xl lg:text-6xl font-bold pt-2 lg:pt-4 text-white mb-12">
            We ready to have you the best dining experiences
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 justify-around items-center gap-6">
            <div className="flex flex-col items-center justify-center">
              <span className="flex flex-col items-center justify-center">
                <LuClock3 className="text-[#FEBF00] text-2xl" />
                <h4 className="bebas-neue text-2xl font-bold lg:pt-6 pt-4 pb-3 text-center">
                  Opening hours
                </h4>
              </span>
              <p className="roboto text-center">
                Monday - Sunday <br />
                9:00 AM to 11:30 PM
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="flex flex-col items-center justify-center">
                <FiPhoneCall className="text-[#FEBF00] text-2xl" />
                <h4 className="bebas-neue text-2xl font-bold lg:pt-6 pt-4 pb-3 text-center">
                  Opening hours
                </h4>
              </span>
              <p className="roboto text-center">
                Monday - Sunday <br />
                9:00 AM to 11:30 PM
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="flex flex-col items-center justify-center">
                <FaRegEnvelope className="text-[#FEBF00] text-2xl" />
                <h4 className="bebas-neue text-2xl font-bold lg:pt-6 pt-4 pb-3 text-center">
                  BOOK A TABLE
                </h4>
              </span>
              <p className="roboto text-center">
                Email: demo@website.com <br />
                Support: support@website.com
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="flex flex-col items-center justify-center">
                <IoLocationOutline className="text-[#FEBF00] text-2xl" />
                <h4 className="bebas-neue text-2xl font-bold lg:pt-6 pt-4 pb-3 text-center">
                  Our Address
                </h4>
              </span>
              <p className="roboto text-center">
                123 Stree New York City , United <br />
                States Of America.
              </p>
            </div>
          </div>
          {/* social icons */}
          <div className="flex justify-center items-center lg:gap-6 gap-4 lg:pt-32 pt-14">
            <span className="border rounded-full p-3"><FaFacebook className="text-xs lg:text-lg"/></span>
            <span className="border rounded-full p-3"><FaTwitter className="text-xs lg:text-lg"/></span>
            <span className="border rounded-full p-3"><FaInstagram className="text-xs lg:text-lg"/></span>
            <span className="border rounded-full p-3"><FaLinkedin className="text-xs lg:text-lg"/></span>
        </div>
        <p className="montserrat text-base lg:text-xl md:pt-6 pt-4">© 2023 <span className="text-[#FEBF00] font-medium">Niomax</span> All Rights Reserved </p>
        </div>       
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
