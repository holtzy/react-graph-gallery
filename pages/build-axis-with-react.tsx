import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { data as densityChartData } from "../data/one-numeric-variable-random";
import { useDimensions } from "../hook/use-dimensions";
import { DensityChartBasic } from "../viz/DensityChartBasic/DensityChartBasic";
import { AxisBasic } from "../viz/AxisBasic/AxisBasic";
import { AxisBasicD3 } from "../viz/AxisBasicD3/AxisBasicD3";

const graphDescription = (
  <p>
    d3.js requires quite a lot of code to build a chart. But it allows to build
    an axis very efficiently, thanks to a single function like{" "}
    <code>axisLeft()</code> for instance.
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
  const axisRef = useRef<HTMLDivElement>(null);
  const axisDemo = useDimensions(axisRef);

  return (
    <Layout
      title="How to build an axis for your react chart"
      seoDescription="How to build a responsive chart with React and d3.js"
    >
      <TitleAndDescription
        title="How to build an axis for your react chart"
        description={graphDescription}
      />

      {/* Demo density chart */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 250, width: "100%", maxWidth: 500 }}
          ref={axisRef}
        >
          <AxisBasic width={axisDemo.width} height={axisDemo.height} />
        </div>
        <p className="text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light">
          This minimal example uses <code>scaleLinear()</code> to compute the
          scales, and react to render the axis.
        </p>
      </div>

      <AccordionSection
        title={"D3.js and react axis: vocabulary"}
        startOpen={true}
      >
        <p>Important to understand that a chart is composed by:</p>
        <ul>
          <li>
            <p>
              - the global chart area, often specified by the <code>width</code>{" "}
              and <code>height</code> properties of the chart components.
            </p>
          </li>
          <li>
            <p>
              - the "bounds" area, i.e. the area located inside the x and y
              axis. It is calculated by substracting the margins
            </p>
          </li>
        </ul>
      </AccordionSection>

      <AccordionSection title={"The react way"} startOpen={true}>
        <p>
          Use d3.js to create the scale. And then react to render the segments
          and numbers.
        </p>
        <ChartOrSandbox
          vizName={"AxisBasic"}
          maxWidth={600}
          height={300}
          render={(dim) => <AxisBasic width={dim.width} height={dim.height} />}
        />
      </AccordionSection>

      <AccordionSection title={"The d3 way"} startOpen={true}>
        <p>
          Use d3.js to create the scale. And d3.js to render it using useEffect.
        </p>
        <ChartOrSandbox
          vizName={"AxisBasicD3"}
          maxWidth={600}
          height={300}
          render={(dim) => (
            <AxisBasicD3 width={dim.width} height={dim.height} />
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
