import React, { useEffect, useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { Caption } from "../component/UI/Caption";
import CodeSandboxButton from "../component/CodeSandboxButton";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";

import { StackedBarplot } from "../viz/BarplotStackedBasic/StackedBarplot";
import { data } from "../viz/BarplotStackedBasic/data";

import { StackedBarplot as StackedBarplotDiverging } from "../viz/BarplotStackedNegativeDiverging/StackedBarplot";
import { data as dataDiverging } from "../viz/BarplotStackedNegativeDiverging/data";

import { StackedBarplot as StackedBarplotOverlapping } from "../viz/BarplotStackedNegativeOverlapping/StackedBarplot";
import { data as dataOverlapping } from "../viz/BarplotStackedNegativeOverlapping/data";

const graphDescription = (
  <p>
    There are so many ways to define a color when talking with a computer. Let's
    take a tour and see what's the most appropriate in a dataviz point of view.
  </p>
);

const snippet1 = `
<canvas style="width:200px; height:200px;" width="100px" height="100px">
`.trim();

const snippet2 = `
<canvas style="width:300px; height:300px;" width="100px" height="100px">
`.trim();

const snippet3 = `
<canvas style="width:100px; height:100px;" width="200px" height="200px">
`.trim();

const snippet4 = `
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();

export default function Post() {
  return (
    <Layout
      title="What is a color"
      seoDescription="There are many ways to define a color when talking with a computer. Let's take a tour."
    >
      <TitleAndDescription
        title="What is a color"
        description={graphDescription}
      />

      <AccordionSection title={"Color on screen"} startOpen={true}>
        <p>A computer screen is made of thousands of pixels.</p>
        <p>
          Each pixel generates three colors of light (red, green, and blue) and
          the different colors we see are due to different combinations and
          intensities of these three primary colors.
        </p>
        <p>red, green and blue are the primary colors.</p>
      </AccordionSection>

      <AccordionSection title={"The RGB color model"} startOpen={true}>
        <p>
          The color information for each pixel is typically stored in a 24-bit
          format: 8 bit per primary color. This is 2^8 = 256 possibilities for
          each primary color. This means more than 16M possible color variations
          for each pixel (256^3)!
        </p>
      </AccordionSection>

      <AccordionSection
        title={"The HSV, HSL and HSB color model"}
        startOpen={true}
      >
        <p>That's the famous color wheel you see in every color picker!</p>
        <br />
        <div className="flex flex-col items-center">
          <img src="/img/color-picked-me.png" style={{ maxWidth: 400 }} />
          <Caption>
            On <a href="https://colorpicker.me">colorpicker.me</a> you can
            define a color using its hue (vertical bar), its saturation (x axis
            of the square) and its lightness (vertical axis)
          </Caption>
        </div>
        <p>
          <b>HSL</b> stands for hue, saturation, lightness
        </p>
        <p>
          <b>HSV</b> and <b>HSB</b> are the same and stand for hue, saturation,
          value or hue, saturation, brightness respectively.
        </p>

        <p>But what does it even mean?</p>
        <ul>
          <li>Hue: the initial color. Between 0 and 360.</li>
          <li>
            Saturation: when closer to 100, the color shines. represents how
            “colorful” the color is. Intensity. Purity. When 0, you get grey
          </li>
          <li>Lighness, Value, Brightness</li>
        </ul>

        <br />
        <div className="flex flex-col items-center">
          <img src="/img/hsv-explanation.png" style={{ maxWidth: 400 }} />
          <Caption>The color cylinder of HSV</Caption>
        </div>
        <p>
          There are an alternative to the RGB color model to more closely align
          with the way human vision perceives color-making attributes
        </p>
        <p>
          Indeed, it allows us to describe meaningful relationships between
          colors. For instance, to create 2 complementary colors you can select
          2 colors on the opposite side of the wheel, with same saturation and
          brithness. Same principle for analogous, monochrome palette and other{" "}
          <a href="https://www.canva.com/colors/color-wheel/">
            famous combinations
          </a>
          .
        </p>
        <p>
          HSV is{" "}
          <a href="https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/">
            criticized
          </a>
          . This is because in HSV the V (value) is just a measure for the
          physical lightness of color, but not for the perceived brightness. So
          2 colors with the same value are not perceive with the same lightness
          by the Human Eye. There is a hue-dependency of brightness in this
          model.
        </p>

        <p>Note: pastel color = high lightness and low saturation.</p>
      </AccordionSection>

      <AccordionSection title={"The CIELAB color model"} startOpen={true}>
        <p>Try to fix this difference between computer and human perception.</p>
        <p>unintuitive to use to generate colors</p>
        <div className="flex flex-col items-center">
          <img src="/img/cielab-color-space.png" style={{ maxWidth: 400 }} />
          <Caption>The cielab color space</Caption>
        </div>
      </AccordionSection>

      <AccordionSection title={"The HCL color model"} startOpen={true}>
        <p>
          Stands for Hue-Chroma-Lightness. A cylindrical transformation of CIE
          Lab*
        </p>
      </AccordionSection>

      <AccordionSection title={"The luminance of a color"} startOpen={true}>
        <p>TODO</p>
      </AccordionSection>

      <AccordionSection title={"Contrast ratio"} startOpen={true}>
        <p>
          The{" "}
          <a href="https://www.w3.org/TR/WCAG/">
            Web Content Accessibility Guidelines
          </a>{" "}
          (WCAG) include convenient quantitative recommendations for making a
          color accessible based on the minimum acceptable contrast of
          foreground against background.
        </p>
        <p>
          Basically, you can compare the luminance of 2 colors and compute their
          contrast ratio. The luminance is computed using the amount of red,
          green and blue in it.
        </p>
        <p>
          To see the exact formulas and compute the contrast ratio between 2
          colors, see{" "}
          <a href="https://observablehq.com/@mbostock/wcag-contrast-ratio">
            this notebook
          </a>{" "}
          by Mike Bostock
        </p>

        <br />

        <div className="flex flex-col items-center">
          <img
            src="/img/contrast-ratio-calculator.png"
            style={{ maxWidth: 600 }}
          />
          <Caption>
            A{" "}
            <a href="https://observablehq.com/@mbostock/wcag-contrast-ratio">
              tool
            </a>{" "}
            to compute the contrast ratio between 2 colors.
          </Caption>
        </div>

        <p>
          Note: the notebook provides the d3 code to compute this contrast
          ratio.
        </p>
      </AccordionSection>

      <br />
      <br />
      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
