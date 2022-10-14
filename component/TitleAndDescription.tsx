import React from "react";

import SocialMediaButtons from "./SocialMediaButtons";
import { ChartId, chartTypesInfo } from "../util/sectionDescriptions";
import { fullUrlToInternalLink } from "../util/utils";

import { HorizontalSeparator } from "./UI/HorizontalSeparator";
import { LinkAsButton } from "./LinkAsButton";

type TitleAndDescription = {
  title: string | JSX.Element;
  description: JSX.Element;
  chartType?: ChartId;
  showSectionLink?: boolean;
  showInspirationLink?: boolean;
  showD3GalleryLink?: boolean;
};

export default function TitleAndDescription({
  title,
  description,
  chartType,
  showSectionLink = false,
  showInspirationLink = true,
  showD3GalleryLink = true,
}: TitleAndDescription) {
  const chartInfo = chartTypesInfo.filter((chart) => chart.id === chartType)[0];

  return (
    <>
      <div className="w-full pt-1 sm:pt-28 pb-20 ">
        {/* Title */}
        <h1 className="">{title}</h1>

        {/* Horizontal Separator */}
        <HorizontalSeparator />

        {/* Description */}
        <div className="max-w-xxl  py-2">
          <p>{description}</p>
        </div>

        {/* Buttons title */}
        <span className="text-gray-400 text-sm font-light">Useful links</span>

        {/* Description */}
        {chartType && (
          <div className="flex flex-row flex-wrap">
            {showSectionLink && (
              <LinkAsButton
                href={fullUrlToInternalLink(chartInfo.reactURL)}
                size="sm"
              >
                {chartInfo.label + " section"}
              </LinkAsButton>
            )}
            {showInspirationLink && (
              <LinkAsButton
                href={"https://www.dataviz-inspiration.com/" + chartInfo.id}
                size="sm"
              >
                {"inspiration"}
              </LinkAsButton>
            )}
            {showD3GalleryLink && (
              <LinkAsButton href={chartInfo.d3URL} size="sm">
                {"d3 gallery"}
              </LinkAsButton>
            )}
            <div>
              <LinkAsButton href={chartInfo.dataToVizURL} isFilled size="sm">
                {"About this chart"}
              </LinkAsButton>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
