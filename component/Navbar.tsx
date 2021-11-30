import Link from "next/link";

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  return (
    <nav id="header" className="w-full z-30 bg-white h-24">
      <div className={"flex flex-wrap items-center justify-between mt-2 py-2"}>
        {/* Logo on the left hand side */}
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center">
              <span className="ml-2 text-black font-light text-md lg:text-md">
                &larr; React Graph Gallery
              </span>
            </a>
          </Link>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a href="#">
                <span className="ml-2 text-black font-light text-sm lg:text-md uppercase tracking-wider">
                  Chart types
                </span>
              </a>
            </li>
            <li className="mr-3">
              <a href="#">
                <span className="ml-2 text-black font-light text-sm lg:text-md uppercase tracking-wider">
                  Related
                </span>
              </a>
            </li>
            <li className="mr-3">
              <a href="#">
                <span className="ml-2 text-black font-light text-sm lg:text-md uppercase tracking-wider">
                  About
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
