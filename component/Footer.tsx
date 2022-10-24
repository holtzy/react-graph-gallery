import Link from "next/link";
import React from "react";
import SocialMediaButtons from "./SocialMediaButtons";

export default function Footer() {
  return (
    <div className="h-24 w-full grid grid-cols-3 gap-1 ">
      <div className="text-sm font-light flex flex-row justify-start items-center mt-1">
        <span className="hidden sm:inline">
          Copyright © the <span className="gradient">React</span> Graph Gallery
          2022
        </span>
      </div>

      <div className="flex flex-row justify-center items-center ">
        <SocialMediaButtons />
      </div>

      <div className="text-sm font-light flex flex-row justify-end items-center mt-1">
        <span className="hidden sm:inline">
          <span>About</span>
          <span> | </span>
          <span>License</span>
        </span>
      </div>
    </div>
  );
}
