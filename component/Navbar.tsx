import Link from 'next/link';
import { useState } from 'react';
import { AllChartsModal } from './AllChartsModal';

export default function Navbar() {
  const [isAllSectionModalOpen, setIsAllSectionModalOpen] = useState(false);

  return (
    <>
      <nav id="header" className="w-full  h-24">
        <div
          className={'flex flex-wrap items-center justify-between mt-2 py-2'}
        >
          <div className="flex items-center">
            <Link href="/">
              <span className="ml-2 text-black text-md lg:text-md cursor-pointer">
                The <span className="gradient">React</span> Graph Gallery
              </span>
            </Link>
          </div>

          <div className="">
            <Link href="articles">
              <span className="pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer">
                Articles
              </span>
            </Link>
            <Link href="/all" className="no-underline">
              <span className="hidden cursor-pointer sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider hover:text-reactGallery">
                All
              </span>
            </Link>
            <span
              onClick={() => setIsAllSectionModalOpen(true)}
              className="hidden sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-pointer hover:text-reactGallery hiden"
            >
              Chart types
            </span>
            {/* <a href="#">
              <span className="hidden sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider cursor-not-allowed">
                Related
              </span>
            </a> */}
            <Link href="about" className="no-underline">
              <span className="hidden cursor-pointer sm:inline pl-8 text-black font-light text-sm lg:text-md uppercase tracking-wider hover:text-reactGallery">
                About
              </span>
            </Link>

            <a
              href="https://datavizuniverse.substack.com"
              style={{ textDecoration: 'none' }}
            >
              <span className="hidden cursor-pointer sm:inline ml-8 text-black font-light text-sm lg:text-md uppercase tracking-wider hover:text-reactGallery border border-gray-300 rounded-md p-2">
                Subscribe
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
