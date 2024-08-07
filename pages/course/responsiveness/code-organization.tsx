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
              Let's create a confortable working environment: let's use Next.js.
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
        If you already have a dataviz component and just want to make it{' '}
        <b>responsive</b>, this template should be useful to you:
      </p>
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
    </LayoutCourse>
  );
}
