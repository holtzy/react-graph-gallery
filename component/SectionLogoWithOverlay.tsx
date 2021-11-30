import React from "react";
import SectionLogo from "./SectionLogo";
import { ChartLogo, chartTypesInfo } from "../util/sectionDescriptions";
import Link from "next/link";

const generalList = chartTypesInfo
  .filter((info) => info.family === "general")
  .map((info) => info.logo);

type SectionLogoWithOverlay = {
  chartLogo: ChartLogo;
  caption: string;
  link: string;
  isAvailable: boolean;
  size: number;
};
export default function SectionLogoWithOverlay({
  chartLogo,
  caption,
  link,
  isAvailable,
  size,
}: SectionLogoWithOverlay) {
  // If the logo is in the "general" family, do not display an overlay.
  const isGeneralFamily = generalList.includes(chartLogo);

  const opacity = isAvailable ? "opacity-100" : "opacity-20";
  const cursor = isAvailable ? "cursor-pointer" : "cursor-not-allowed";

  return (
    <Link href={link}>
      <div className="flex flex-col items-center">
        <div
          style={{ width: size, height: size }}
          className={
            "relative mr-2 rounded-full" + " " + opacity + " " + cursor
          }
        >
          <SectionLogo chartLogo={chartLogo} />
          {isGeneralFamily ? (
            <div className="opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30">
              <SvgHexagon size={size} />
            </div>
          ) : (
            <div className="opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30">
              <p className="text-white text-4xl">+</p>
            </div>
          )}
        </div>
        <p className={"font-light text-gray-600" + " " + opacity}>{caption}</p>
      </div>
    </Link>
  );
}

type SvgHexagonProps = {
  size: number;
};

const SvgHexagon = ({ size }: SvgHexagonProps) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="fill-current text-purple-800"
    >
      <path d="M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"></path>
    </svg>
  );
};
