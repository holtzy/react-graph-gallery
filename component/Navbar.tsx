import Link from "next/link";
import { useState } from "react";
import { AllChartsModal } from "./AllChartsModal";

export default function Navbar() {
  const [isAllSectionModalOpen, setIsAllSectionModalOpen] = useState(false);

  return (
    <>
      <nav id="header" className="w-full bg-white h-24">
        <div
          className={"flex flex-wrap items-center justify-between mt-2 py-2"}
        >
          <div className="flex items-center">
            <Link href="/">
              <span className="ml-2 text-black font-light text-md lg:text-md cursor-pointer">
                &larr; React Graph Gallery
              </span>
            </Link>
          </div>

          <div className="">
            <Link href="/how-to">
              <span className="pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer">
                How to
              </span>
            </Link>
            <span
              onClick={() => setIsAllSectionModalOpen(true)}
              className="hidden sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer"
            >
              Chart types
            </span>
            <a href="#">
              <span className="hidden sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer">
                Related
              </span>
            </a>
            <a href="#">
              <span className="hidden sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer">
                About
              </span>
            </a>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {isAllSectionModalOpen && (
        <AllChartsModal
          isOpen={isAllSectionModalOpen}
          setIsOpen={setIsAllSectionModalOpen}
        />
      )}
    </>
  );
}
