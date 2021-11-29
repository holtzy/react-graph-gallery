import Link from "next/link";
import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Footer() {
  return (
    <div className="h-24 w-full grid grid-cols-3 gap-1 ">
      <div className="text-sm font-light flex flex-row justify-start items-center">
        <p>Copyright © the React Graph Gallery 2021</p>
      </div>

      <div className="flex flex-row justify-center items-center ">
        <SocialMediaButtons />
      </div>

      <div className="text-sm font-light flex flex-row justify-end items-center">
        <span>
          <Link href="/about">About</Link>
          <span> | </span>
          <a href="https://github.com/holtzy/react-graph-gallery/blob/master/LICENSE">
            License
          </a>
        </span>
      </div>
    </div>
  );
}
