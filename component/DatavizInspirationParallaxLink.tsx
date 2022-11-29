import React from "react";
import { ChartId, chartTypesInfo } from "../util/sectionDescriptions";
import { LinkAsButton } from "./LinkAsButton";
import { ParallaxSection } from "./ParallaxSection";

type DatavizInspirationParallaxLinkProps = {
  chartId?: ChartId;
};

export default function DatavizInspirationParallaxLink({
  chartId,
}: DatavizInspirationParallaxLinkProps) {
  const chartName =
    chartTypesInfo.find((d) => d.id === chartId)?.label || "chart";

  return (
    <>
      <h2 id="inspiration">{chartName + " inspiration"}</h2>
      <p>
        If you're looking for inspiration to create your next{" "}
        <span>{chartName}</span>, note that{" "}
        <a href="https://www.dataviz-inspiration.com">
          dataviz-inspiration.com
        </a>{" "}
        showcases many examples. Definitely the best place to get ...
        inspiration!
      </p>

      <div className="border mb-10">
        <ParallaxSection
          height={250}
          imgLink="https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true"
          opacity={0.3}
        >
          <div className="flex justify-center items-center h-full">
            <div
              style={{ maxWidth: 400 }}
              className="flex flex-col items-center"
            >
              <p className="text-center text-sm">
                <a href="https://www.dataviz-inspiration.com">
                  dataviz-inspiration.com
                </a>{" "}
                showcases hundreds of stunning dataviz projects. Have a look to
                get some ideas on how to make your <span>{chartName}</span>{" "}
                looks good!
              </p>
              <LinkAsButton
                href={"https://www.dataviz-inspiration.com"}
                isFilled
                size="md"
              >
                {"visit"}
              </LinkAsButton>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </>
  );
}
