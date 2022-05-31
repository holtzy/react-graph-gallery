import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { useDimensions } from "../hook/use-dimensions";
import { DensityChartBasic } from "../viz/DensityChartBasic/DensityChartBasic";
import { Scatterplot } from "../viz/ScatterplotHoverHighlight/Scatterplot";
import { data } from "../viz/ScatterplotHoverHighlight/data";

const graphDescription = (
  <p>
    <b>Interactivity</b> is an important part of dataviz when working in the
    browser. Adding a hover effect can improve the user experience by
    highlighting a series on the chart. Here are a couple way to implement it,
    always keeping performances in mind.
  </p>
);

const snippet1 = `
export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {

  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
}
`.trim();

const snippet2 = `
const chartRef = useRef(null);
`.trim();

const snippet3 = `
const chartSize = useDimensions(chartRef);
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

export default function Home() {
  const scatterChartRef = useRef<HTMLDivElement>(null);
  const scatterChartSize = useDimensions(scatterChartRef);

  return (
    <Layout
      title="Hover interaction on a chart with React"
      seoDescription="How to add a hover effect on a chart built with d3.js and React"
    >
      <TitleAndDescription
        title="Hover interaction on a chart with React"
        description={graphDescription}
      />

      {/* Demo of a few charts with hover interaction */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 200, width: "100%", maxWidth: 400 }}
          ref={scatterChartRef}
        >
          <Scatterplot
            width={scatterChartSize.width}
            height={scatterChartSize.height}
            data={data}
          />
        </div>
        <p className="text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light">
          This scatterplot has a hover effect. Hover over a circle and see the
          highlight happening.
        </p>
      </div>

      <AccordionSection
        title={"Adding a css class on the hovered shape"}
        startOpen={true}
      >
        <p>
          Most basic strategy. Just add a class to the shape that is hovered.
          Easy, but probably not the best way since other shapes are still very
          visible so the highlight isn't strong. Also, perf issues.
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Dimming the other series with CSS"}
        startOpen={true}
      >
        <p>
          More elegant in term of design. Requires to dim all series by adding a
          class to the parent div. Then highlight the hovered shape by removing
          it's dim.
        </p>
      </AccordionSection>

      <AccordionSection
        title={"Canvas and second layer for performances"}
        startOpen={true}
      >
        <p>
          Using the <code>useDimensions</code> hook described above is pretty
          straight-forward. You first need to create a <code>ref</code> using
          the react <code>useRef()</code>
          function:
        </p>
        <CodeBlock code={snippet2} />
        <br />

        <ChartOrSandbox
          vizName={"Scatterplot"}
          maxWidth={600}
          render={(dim) => (
            <Scatterplot data={data} width={dim.width} height={dim.height} />
          )}
        />
      </AccordionSection>

      <br />
      <br />

      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />

      <ChartFamilySection chartFamily="general" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
