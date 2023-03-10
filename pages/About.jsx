import React from "react";
import Head from "next/head";
import Image from "next/image";
import avatar from "../assets/me_avatar_3.png";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {CgWebsite} from 'react-icons/cg'
import { AiOutlineMail } from "react-icons/ai";


function About() {
  return (
    <div className="h-full ">
      <Head>
        <title>PayneDevHaus_blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar-favicon.ico" />
      </Head>
      <div className="mt-8">
        <div className="h-full">
          <div className="flex justify-center w-full items-center">
            <Image src={avatar} />
          </div>
          <div className="flex justify-center items-center gap-4 w-full mt-4 ">
           <a href="mailto:hpayne13.test@gmail.com" className="hover:scale-[105%]"> <AiOutlineMail/></a>
            <a href="https://www.github.com/Lupercal13" className="hover:scale-[105%]"><FaGithub/> </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-[105%]"><FaLinkedinIn/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-[105%]"><FaTwitter/></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-[105%]"><CgWebsite/></a>
          </div>
          <div className="w-[80%] flex flex-col justify-center items-center mx-auto h-full">
            <h1 className="text-4xl text-center mb-12 mt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.2)]">Hey There!</h1>
            <div className="tracking-wide text-gray-600  p-4 bg-gray-200/70 border-2 border-black border-opacity-20 rounded-2xl shadow-lg">
              <p className="pb-2">
                My name is <span className="font-semibold">Harrison Payne</span>. Thank you for taking the
                time to stop by! I am an aspiring front-end web developer who is
                always trying to learn new things and improve my skills.
              </p>
              <p className="pb-2">
                This blog is mean to serve as a platform where I can share with
                others the things that I have learned or have found interesting
                while on my journey. My focus is on <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, and 
                 <span className=" font-semibold"> React</span>. However, I won&apos;t be limiting the items this blog to just
                those three topics.
              </p>
              <p className="pb-2">
                If you would like to get in touch with me, please send me an{" "}
                <a href="mailto:hpayne13.test@gmail.com">
                  <span className="hover:border-b border-black font-medium">email</span>
                </a>
                . If you are interested in my other works and projects then
                please have a look at
                <a href="#">
                  <span className="hover:border-b border-black font-medium"> my portfolio website</span>
                </a>
                .
              </p>
              <p>
                Once again, thank you for taking the time to check out the blog,
                and please have fun while you are here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
