import React from "react";

import SocialMediaButtons from "./SocialMediaButtons";
import { ChartId, chartTypesInfo } from "../util/sectionDescriptions";
import { fullUrlToInternalLink } from "../util/utils";

import { VerticalSeparator } from "./VerticalSeparator";
import { LinkAsButton } from "./LinkAsButton";

type TitleAndDescription = {
  title: string;
  description: JSX.Element;
  chartType?: ChartId;
  showSectionLink?: boolean;
};

export default function TitleAndDescription({
  title,
  description,
  chartType,
  showSectionLink = false,
}: TitleAndDescription) {
  const chartInfo = chartTypesInfo.filter((chart) => chart.id === chartType)[0];

  return (
    <>
      <div className="w-full pt-28 pb-20 px-10 flex flex-col items-center align-center">
        <h1 className="text-4xl text-center">{title}</h1>
        <VerticalSeparator />
        <SocialMediaButtons />
        <div className="max-w-lg text-center py-4">{description}</div>
        {chartType && (
          <div className="flex flex-row flex-wrap justify-center mt-4">
            {showSectionLink && (
              <div className="my-2">
                <LinkAsButton href={fullUrlToInternalLink(chartInfo.reactURL)}>
                  {chartInfo.label + " section"}
                </LinkAsButton>
              </div>
            )}
            <div>
              <div className="my-2">
                <LinkAsButton href={chartInfo.dataToVizURL} isFilled>
                  {"About this chart"}
                </LinkAsButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
