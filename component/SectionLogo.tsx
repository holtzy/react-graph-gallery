import React from "react";
import type { ChartLogo } from "../util/sectionDescriptions";

// This component displays a logo representing a chart type of the gallery.
// Example: bar chart

// Note: this component does NOT use the <Image> component of next.js
// Because I want to move to a fully static website

type SectionLogoProps = {
  chartLogo: ChartLogo;
};

export default function SectionLogo({ chartLogo }: SectionLogoProps) {
  const logoExtension =
    chartLogo === "anim150" || chartLogo === "time150" ? ".gif" : ".png";

  const logoDescription =
    "Dataviz logo representing a " + chartLogo.replace("150", "") + " chart.";

  return (
    <img
      alt={logoDescription}
      src={"./section/" + chartLogo + logoExtension}
      width="100%"
      height="100%"
    />
  );
}
