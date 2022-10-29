import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { data as densityChartData } from "../data/one-numeric-variable-random";
import { useDimensions } from "../hook/use-dimensions";
import { ViolinBasicDemo } from "../viz/ViolinBasic/ViolinBasicDemo";
import { DensityChart } from "../viz/DensityChartBasic/DensityChart";

const graphDescription = (
  <p>
    Most of the viz components of this gallery accept a <code>width</code> and a{" "}
    <code>height</code> property. Yet, most of the time the dimensions of the
    viz we're building are unknown. We just want them to fit their container.
    Let's build a <code>hook</code>
    that retrieves the parent container dimension and passes it to the viz.
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
  const densityChartRef = useRef<HTMLDivElement>(null);
  const densityChartSize = useDimensions(densityChartRef);

  return (
    <Layout
      title="How to build a responsive chart with React and d3.js"
      seoDescription="How to build a responsive chart with React and d3.js"
    >
      <TitleAndDescription
        title="How to build a responsive chart with React and d3.js"
        description={graphDescription}
      />

      {/* Demo density chart */}
      <div className="w-full flex flex-col justify-center items-center">
        <div style={{ height: 120, width: "100%" }} ref={densityChartRef}>
          <DensityChart
            width={densityChartSize.width}
            height={densityChartSize.height}
            data={densityChartData}
          />
        </div>
        <p className="text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light">
          This density chart is responsive! try to resize your window to see how
          the graph fits.
        </p>
      </div>

      <AccordionSection
        title={"A hook to get a div's dimension"}
        startOpen={true}
      >
        <p>
          The method I use on this website to make my chart responsive uses a
          hook. Hooks let you use y and other React features without writing a
          class as explained{" "}
          <a href="https://reactjs.org/docs/hooks-intro.html">in the doc</a>
        </p>
        <br />
        <p>
          This hook is basically a function that checks the{" "}
          <code>offsetWidth</code> and <code>offsetHeight</code> of a{" "}
          <code>ref</code> that is provided as input.
        </p>
        <br />
        <p>
          An event listener to the <code>resize</code> event is added to the{" "}
          <code>window</code>, to make sure the dimension is updated when the
          window size changes.
        </p>
        <br />
        <p>That's how the hook looks like:</p>
        <CodeBlock code={snippet1} />
        <br />
      </AccordionSection>

      <AccordionSection title={"Using the hook"} startOpen={true}>
        <p>
          Using the <code>useDimensions</code> hook described above is pretty
          straight-forward. You first need to create a <code>ref</code> using
          the react <code>useRef()</code>
          function:
        </p>
        <CodeBlock code={snippet2} />
        <br />

        <p>
          Then, pass this newly created <code>ref</code> to the hook:
        </p>
        <CodeBlock code={snippet3} />
        <br />

        <p>
          Last but not least, do not forget to pass this ref to the container
          you want to track. You now have an object called{" "}
          <code>chartSize</code> here that has 2 properties, <code>height</code>{" "}
          and <code>width</code>. You can use those properties for your chart
          component.
        </p>
        <CodeBlock code={snippet4} />
        <br />

        <p>
          Here is an application with a ViolinPlot component that accepts a
          width and a height property, becoming responsive thanks to this hook:
        </p>
        <br />

        <ChartOrSandbox
          vizName={"ViolinBasic"}
          VizComponent={ViolinBasicDemo}
          maxWidth={600}
          height={400}
        />
      </AccordionSection>

      <AccordionSection title={"Caveat"} startOpen={true}>
        <p>
          Remember that the element we are tracking needs to have a{" "}
          <code>height</code> and a <code>width</code>. Otherwise the hook will
          basically return nothing.
        </p>
        <h3>
          &rarr; Container is displayed as <code>inline</code>
        </h3>
        <p>
          An html elemente that is displayed as <code>inline</code> (
          <code>display: inline;</code>) cannot have a width and height.{" "}
          <code>span</code>
          elements are inline by default.
        </p>
        <h3>&rarr; By default, a div has no height</h3>
        <p>
          By default, the width of a div is 100%, and its height fits its
          content. Which means that with no content, there is no height.
        </p>
        <h3>&rarr; Width 100% is ignored, flex example</h3>
        <p>
          By default, the width of a div is 100%, and its height fits its
          content. Which means that with no content, there is no height.
        </p>
        <h3>&rarr; Mind the border</h3>
        <p>Josh Comeau post about border being part of the main box.</p>
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
