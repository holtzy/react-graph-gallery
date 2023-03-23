import React from "react";
import SectionLogo from "component/SectionLogo";
import { ChartLogo, chartTypesInfo } from "util/sectionDescriptions";
import Link from "next/link";

const generalList = chartTypesInfo
  .filter((info) => info.family === "general")
  .map((info) => info.logo);

type SectionLogoWithOverlayProps = {
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
}: SectionLogoWithOverlayProps) {
  // If the logo is in the "general" family, do not display an overlay.
  const isGeneralFamily = generalList.includes(chartLogo);

  const opacity = isAvailable ? "opacity-100" : "opacity-20";
  const cursor = isAvailable ? "cursor-pointer" : "cursor-not-allowed";

  return (
    <Link href={isAvailable ? link : "subscribe"} className="no-underline">
      <div className="flex flex-col items-center">
        <div
          style={{ width: size, height: size }}
          className={
            "relative mr-2 rounded-full" + " " + opacity + " " + cursor
          }
        >
          {/* Logo*/}
          <div className="absolute">
            <SectionLogo chartLogo={chartLogo} />
          </div>

          {/* Overlay that appears on hover */}
          {isGeneralFamily ? (
            <div className="absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30">
              <SvgHexagon size={size} />
            </div>
          ) : (
            <div
              style={{ backgroundColor: "var(--react-gallery)" }}
              className="opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30"
            >
              <span className="text-white text-4xl">+</span>
            </div>
          )}
        </div>

        {/* Caption */}
        <p className={"font-light text-sm text-gray-600" + " " + opacity}>
          {caption}
        </p>
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
