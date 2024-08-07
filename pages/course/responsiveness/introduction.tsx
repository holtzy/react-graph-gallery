import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import React, { useRef } from 'react';
import { data as densityChartData } from '@/data/one-numeric-variable-random';
import { useDimensions } from '@/hook/use-dimensions';
import { DensityChart } from '@/viz/DensityChartBasic/DensityChart';
import Link from 'next/link';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/axis/draw-with-d3';
const currentURL = '/course/responsiveness/introduction';
const nextURL = '/course/responsiveness/use-dimension-hook';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  const densityChartRef = useRef<HTMLDivElement>(null);
  const densityChartSize = useDimensions(densityChartRef);

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
              Most of the visualization components in this gallery accept{' '}
              <code>width</code> and <code>height</code> properties.
            </p>
            <p>
              However, we often don't know the exact dimensions we need for our
              visualizations; we just want them to <b>fit their container</b>.
            </p>
            <p>
              This module explains how to make a chart <b>responsive</b>. It
              provides the code for a <b>hook</b> that detects changes in a{' '}
              <code>div</code>'s dimensions and explains how to inject its
              returned values into a visualization component.
            </p>
          </>
        }
      />

      <h2>What is responsiveness?</h2>
      <p>
        Responsiveness refers to the ability of a data visualization (such as
        charts, graphs, or dashboards) to <b>adapt and display correctly</b>{' '}
        across different devices and screen sizes.
      </p>
      <p>
        This ensures that users have an <b>optimal</b> viewing experience
        whether they are accessing the visualizations on a desktop, tablet, or
        mobile device
      </p>
      {/* Demo density chart */}
      <div className="w-full flex flex-col justify-center items-center my-12">
        <div style={{ height: 120, width: '100%' }} ref={densityChartRef}>
          <DensityChart
            width={densityChartSize.width}
            height={densityChartSize.height}
            data={densityChartData}
          />
        </div>
        <p className="text-sm text-gray-500 max-w-xs italic text-center mt-12 font-light">
          This <Link href="/density-plot">density chart</Link> is responsive!
          Resize your window to see how the graph fits its container.
        </p>
      </div>
      <p>
        Responsiveness is a key aspect of web development. This module
        specifically focuses on making <b>charts</b> responsive. It won't cover
        general topics like CSS, Flexbox, Grid, or other concepts related to
        overall website responsiveness.
      </p>

      <h2>Design Considerations</h2>
      <p>
        A graph can appear visually appealing when its width exceeds its height,
        but it may <b>lose its effectiveness</b> if shrunk too much. In some
        cases, using a completely different chart type on smaller screens,
        removing a chart, or flipping it may be necessary.
      </p>
      <p>
        This course offers <b>technical guidelines</b> on making graphs
        responsive. It focuses on the "how" rather than the "what," providing
        you with the tools to achieve your desired outcomes.
      </p>

      <h2>😢 Unresponsive chart</h2>
      <p>
        When building a chart with JavaScript, knowing its dimensions —{' '}
        <code>width</code> and <code>height</code> — is essential. These
        dimensions are needed to compute scales, draw axes, and determine where
        to place shapes.
      </p>
      <p>
        Consequently, a visualization component always expects{' '}
        <code>width</code> and <code>height</code>
        properties.
      </p>
      <p>
        Consider a simple <Link href="/density-plot">density plot</Link>, for
        example. The code looks like this:
      </p>
      <CodeBlock
        code={`
import * as d3 from "d3";

type DensityProps = {
  width: number; // 🙁 not responsive!
  height: number; // 🙁 not responsive!
  data: number[];
};

export const DensityPlot = ({ width, height, data }: DensityProps) => {

  // read the data, make scales, compute svg elements using the dimensions

  return (
    <div>
      <svg width={width} height={height}> // pass the dimensions to the svg area
        // render the shape
      </svg>
    </div>
  );
};
`.trim()}
      />

      <h2>Let's Code</h2>
      <p>
        Let's assume we have a div that is responsive and takes the full width
        of an app.
      </p>
      <p>
        How can we draw a chart inside this div that also takes up the{' '}
        <b>entire space</b> and remains responsive?
      </p>
      <p>Let's find out! 🙇</p>
    </LayoutCourse>
  );
}
