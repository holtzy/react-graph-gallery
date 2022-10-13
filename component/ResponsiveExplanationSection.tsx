import { ChartId, chartTypesInfo } from "../util/sectionDescriptions";
import { AccordionSection } from "./AccordionSection";

type ResponsiveExplanationSectionProps = {
  chartId: ChartId;
};

export const ResponsiveExplanationSection = ({
  chartId,
}: ResponsiveExplanationSectionProps) => {
  const label = chartTypesInfo.filter((chart) => chart.id === chartId)[0].label;

  return (
    <>
      <h2 id="responsiveness">{"Responsive " + label + " with react"}</h2>

      <p>
        The component above is not responsive. It expects 2 props called{" "}
        <code>width</code> and <code>height</code> and will render a {label} of
        those dimensions.
      </p>
      <p>
        Making the {label} responsive requires to add a <b>wrapper</b> component
        that gets the dimension of the parent <code>div</code>, and listen to a
        potential dimension change.
      </p>
      <p>
        The process is extensively described in{" "}
        <a href="https://www.react-graph-gallery.com/make-a-graph-responsive">
          this post
        </a>{" "}
        of the gallery. Basically most of the job is made by a hook called{" "}
        <code>useDimensions</code> that targets a specific <code>ref</code>.
      </p>
      <a href="https://www.react-graph-gallery.com/make-a-graph-responsive">
        Read more about responsiveness
      </a>
      <br />
      <br />
      <br />
    </>
  );
};
