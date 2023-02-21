import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="h-12 flex justify-between items-center border-b-2 border-black z-10 ">
      <Link href="/" className=" text-lg sm:text-2xl font-mono ml-4 ">
        PayneDevHaus_Blog
      </Link>
      <div className="hidden sm:flex gap-8 mr-8 justify-center items-center">
        <Link href="/" className="">
          Home
        </Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Hamburget Menu */}
      <div onClick={handleNav} className="block z-10 cursor-pointer sm:hidden mr-4">
        {nav ? <AiOutlineClose size={25} className='fill-gray-100' /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center ease-in duration-300"
            : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-transparent flex justify-center items-center ease-in duration-300"
        }
      >
        <ul className="flex flex-col justify-center items-center gap-8">
          <Link href="/">
            <li onClick={() => setNav(false)} className='text-gray-100 text-4xl hover:scale-[101%]'>Home</li>
          </Link>
          <Link href="/">
            <li onClick={() => setNav(false)} className='text-gray-100 text-4xl hover:scale-[101%]'>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
