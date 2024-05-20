import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer text-neutral-content flex justify-evenly items-center gap-0 md:flex-row flex-col">
        <div className="md:w-[50%] w-full bg-[#1F2937] text-[#FFF] flex md:justify-end justify-center md:pr-[158px] h-[400px]">
          <div className="py-[96px]">
            <h2 className="uppercase font-medium text-[32px] mb-6">
              CONTACT US
            </h2>
            <div className="space-y-3">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full bg-[#111827] h-[400px] flex justify-center">
          <div className="py-[96px] lg:pl-[158px]">
            <h2 className="text-[#FFFFFF] text-[32px] font-medium">
              Follow US
            </h2>
            <p className="text-[#FFFFFF] font-medium pt-[24px] pb-[32px] text-[20px]">
              Join us on social media
            </p>
            <div className="flex gap-[32px] items-center">
              <FaSquareFacebook size={35} />
              <FaInstagramSquare size={35} />
              <FaTwitter size={35} />
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#151515] text-base-content h-[70px]">
        <aside>
          <p className="text-[#FFFFFF]">
            Copyright © CulinaryCloud. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
