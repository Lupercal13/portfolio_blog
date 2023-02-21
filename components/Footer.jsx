import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="">
      <footer className="mt-12 px-4 max-h-[60px] flex items-center justify-between bg-gray-400/30 ">
        <div>
          <p className="text-lg">Digital Scribbles</p>
          <p className="text-xs">&copy; PayneDevHaus {date}</p>
        </div>
        <div className="flex gap-4 pr-4 ">
          <AiOutlineMail
            size={20}
            className=" cursor-pointer hover:scale-[101%] hover:fill-blue-600"
          />
          <FaGithub
            size={20}
            className=" cursor-pointer hover:scale-[101%] hover:fill-blue-600"
          />
          <FaLinkedinIn
            size={20}
            className=" cursor-pointer hover:scale-[101%] hover:fill-blue-600"
          />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
