import React from "react";

import { chartTypesInfo } from "../util/sectionDescriptions";
import SectionLogo from "./SectionLogo";
import { fullUrlToInternalLink } from "../util/utils";
import Link from "next/link";

type AllChartsModalProps = {
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
};

export const AllChartsModal = (props: AllChartsModalProps) => {
  const [name, setName] = React.useState("");

  const logoList = chartTypesInfo.map((chart, i) => {
    if (chart.isAvailable) {
      return (
        <div
          style={{ width: 75, height: 75 }}
          className={"relative my-4 mx-2 cursor-pointer opacity-100"}
          key={i}
          onMouseEnter={() => setName(chart.label)}
          onMouseLeave={() => setName("")}
        >
          <Link href={fullUrlToInternalLink(chart.reactURL)}>
            <SectionLogo chartLogo={chart.logo} />
          </Link>
        </div>
      );
    }

    return (
      <div
        style={{ width: 75, height: 75 }}
        className={"relative my-4 mx-2 opacity-40 cursor-not-allowed"}
        key={i}
        onMouseEnter={() => setName(chart.label)}
        onMouseLeave={() => setName("")}
      >
        <SectionLogo chartLogo={chart.logo} />
      </div>
    );
  });

  return (
    <div className="absolute inset-0 h-screen w-screen bg-black z-20">
      {/* X to close the modal */}
      <span
        className="text-white cursor-pointer text-4xl absolute top-0 right-0 mr-10 mt-10 p-12 "
        onClick={() => props.setIsOpen(false)}
      >
        &#10005;
      </span>

      {/* Logo and label */}
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col max-w-4xl">
          <div className="bg-black-200 flex justify-center flex-wrap">
            {logoList}
          </div>
          <span className="text-white text-medium h-14 bg-black p-4 text-center">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
