import React, { useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/CodeBlock";
import { Scatterplot as ScatterplotHoverHighlight } from "../viz/ScatterplotHoverHighlight/Scatterplot";
import { Scatterplot as ScatterplotHoverHighlightDim } from "../viz/ScatterplotHoverHighlightDim/Scatterplot";
import { Scatterplot as ScatterplotHoverHighlightTwoLayers } from "../viz/ScatterplotHoverHighlightTwoLayers/Scatterplot";
import { data } from "../viz/ScatterplotHoverHighlight/data";
import { Caption } from "../component/Caption";

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
  return (
    <Layout
      title="Hover interaction on a chart with React"
      seoDescription="How to add a hover effect on a chart built with d3.js and React"
    >
      <TitleAndDescription
        title="Hover interaction on a chart with React"
        description={graphDescription}
      />

      {/* DEMO ROW */}
      <div className="py-6 grey-section full-bleed flex flex-row gap-x-8 justify-center items-center">
        <div className="p-2 bg-white">
          <ScatterplotHoverHighlight width={250} height={250} data={data} />
        </div>
        <div className="p-2 bg-white">
          <ScatterplotHoverHighlightDim width={250} height={250} data={data} />
        </div>
      </div>
      <div className="flex justify-center">
        <Caption>
          Experimenting with different highlight strategies on a scatterplot.
          From left to right: using a <code>:hover</code> pseudo class | using
          the pseudo class AND dimming.
        </Caption>
      </div>

      <AccordionSection
        title={
          <span>
            Using the <code>:hover</code> css pseudo class
          </span>
        }
        startOpen={true}
      >
        <p>
          A CSS <b>pseudo-class</b> is a keyword added to a selector that
          specifies a special state of the selected element(s) (
          <a href="A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s)">
            mdn doc
          </a>
          ).
        </p>
        <p>
          Basically, it means that you can add a class to each shape of a graph,
          and change its appearance when the user hover over it.
        </p>
        <p>
          For instance, the scatterplot below is composed by a myriad of{" "}
          <code>circle</code> elements, each having a{" "}
          <code>.scatterplotCircle</code> class. In the css file, I can use{" "}
          <code>.scatterplotCircle</code> to style the circles, and{" "}
          <code>.scatterplotCircle:hover</code> to style the hovered circles. 🎉
        </p>
        <ChartOrSandbox
          vizName={"ScatterplotHoverHighlight"}
          maxWidth={400}
          render={(dim) => (
            <ScatterplotHoverHighlight
              data={data}
              width={dim.width}
              height={dim.height}
            />
          )}
        />
        <p>
          <u>Pro</u>: This is the most basic strategy. It is very easy to
          implement and has good performances since there is nothing that needs
          to be redrawn expect the highlighted point.
          <br />
          <u>Con</u>: Not the best design: all the other circles are still very
          prominent so the highlight isn't strong.Works only to highlight the
          hovered circle. If the information of the circle to highlight comes as
          a prop, we need something else.
        </p>
      </AccordionSection>

      <AccordionSection
        title={
          <span>
            <code>:hover</code> pseudo class AND dimming
          </span>
        }
        startOpen={true}
      >
        <p>
          More elegant in term of design. Requires to dim all series by adding a
          class to the parent div. Then highlight the hovered shape by removing
          it's dim.
        </p>
        <ChartOrSandbox
          vizName={"ScatterplotHoverHighlightDim"}
          maxWidth={400}
          render={(dim) => (
            <ScatterplotHoverHighlightDim
              data={data}
              width={dim.width}
              height={dim.height}
            />
          )}
        />
        <p>
          <u>Pro</u>: Better design. Easy to implement.
          <br />
          <u>Con</u>: If mouse enter chart area withouth hovering a circle, I'm
          still fading everything. I can highlight a circle that is below
          another. Perf issue if many dots?
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
        <ChartOrSandbox
          vizName={"ScatterplotHoverHighlightTwoLayers"}
          maxWidth={400}
          render={(dim) => (
            <ScatterplotHoverHighlightTwoLayers
              data={data}
              width={dim.width}
              height={dim.height}
            />
          )}
        />
        <br />
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
