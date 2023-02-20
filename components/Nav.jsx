import Link from "next/link";

function Nav() {
  return (
    <nav className="h-12 flex justify-between items-center border-b-2 ">
      <Link href="/" className="text-2xl ml-4 ">Digital Scribbles</Link>
      <div className="flex gap-8 mr-8 justify-center items-center">
        <Link href='/' className="">Home</Link>
        <Link href='/'>Contact</Link>
      </div>
    </nav>
  );
}

export default Nav;
