import Link from 'next/link';
import { ChartId, chartTypesInfo } from '../util/sectionDescriptions';
import { Accordion } from './UI/AccordionGrey';
import { CodeBlock } from './UI/CodeBlock';

type ResponsiveExplanationSectionProps = {
  chartId: ChartId;
};

export const ResponsiveExplanationSection = ({
  chartId,
}: ResponsiveExplanationSectionProps) => {
  const label = chartTypesInfo.filter((chart) => chart.id === chartId)[0].label;

  return (
    <>
      <h2 id="responsiveness">{'Responsive ' + label + ' with react'}</h2>

      <p>
        The component above is not responsive. It expects 2 props called{' '}
        <code>width</code> and <code>height</code> and will render a {label} of
        those dimensions.
      </p>
      <p>
        Making the {label} responsive requires adding a <b>wrapper</b> component
        that gets the dimension of the parent <code>div</code>, and listening to
        a potential dimension change. This is possible thanks to a hook called{' '}
        <code>useDimensions</code> that will do the job for us.
      </p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>useDimensions</code>: a hook to make your viz responsive
          </span>
        }
      >
        <CodeBlock code={snippetResponsive} />
      </Accordion>
      <p>
        I'm in the process of writing a complete blog post on the topic.{' '}
        <Link href="/subscribe">Subscribe to the project</Link> to know when
        it's ready.
      </p>

      <br />
      <br />
      <br />
    </>
  );
};

const snippetResponsive = `
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
