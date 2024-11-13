import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/responsiveness/using-the-hook';
const currentURL = '/course/responsiveness/code-organization';
const nextURL = '/course/responsiveness/common-pitfalls';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  if (!currentLesson) {
    return null;
  }

  return (
    <LayoutCourse
      title={currentLesson.name}
      seoDescription={seoDescription}
      nextTocItem={lessonList.find((l) => l.link === nextURL)}
      previousTocItem={lessonList.find((l) => l.link === previousURL)}
    >
      <TitleAndDescription
        title={currentLesson.name}
        lessonStatus={currentLesson.status}
        readTime={currentLesson.readTime}
        selectedLesson={currentLesson}
        description={
          <>
            <p>
              As a software engineer, making graphs responsive is a common task.
              You’ll likely apply this approach across{' '}
              <b>all chart components</b> in your codebase.
            </p>
            <p>
              Let’s explore a useful convention I like to use in my work to
              simplify this process.
            </p>
          </>
        }
      />

      <h2 id="wrapper">🎁 Wrapper component</h2>
      <p>
        I like to create a "wrapper" component that manages the responsiveness
        and pass all the other props to the viz component, plus{' '}
        <code>width</code> and <code>height</code>.
      </p>
      <p>
        If the graph component is called let's say <code>DensityChart</code>, I
        like calling the wrapper <code>ResponsiveDensityChart</code>.
      </p>
      <p>Here is the organization I usually use:</p>
      <CodeBlock
        code={`

type ResponsiveDensityChartProps = {
  data: number[];
};

// Responsive component = wrapper that manages the dimensions and does nothing else
export const ResponsiveDensityChart = (props: ResponsiveDensityChartProps) => {
  const chartRef = useRef(null);

  const chartSize = useDimensions(chartRef);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
      <DensityChart
        height={chartSize.height}
        width={chartSize.width}
        {...props} // pass all the props
      />
    </div>
  );
};

// Type is the same, with width and height added!
type DensityChartProps = ResponsiveDensityChartProps & {
  width: number;
  height: number;
};

// Non responsive component
const DensityChart = ({ width, height, data }: DensityChartProps) => {
  //... dataviz code goes here
}
      `.trim()}
      />

      <h2>Why It’s Great:</h2>

      <h3>🚃 Seamless Prop Forwarding</h3>
      <p>
        Using the <code>...props</code> notation, all props are automatically
        passed to the child component, streamlining component configuration and
        usage.
      </p>

      <h3>TypeScript Support</h3>
      <p>
        With the <code>&</code> operator, there’s no need to re-type both the
        main chart component and its responsive variant. The responsive
        component has the same type as the chart component, with the addition of
        width and height props.
      </p>

      <h3>Consistency Across Components</h3>
      <p>
        For codebases with multiple chart components, consistently using this
        wrapper approach minimizes mental overhead, making it easier to manage
        and scale your components.
      </p>
    </LayoutCourse>
  );
}
