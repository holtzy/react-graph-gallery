import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { TakeHome } from '@/component/TakeHome';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { AxisBasicDemo } from '@/viz/AxisBasic/AxisBasicDemo';

const previousURL = '/course/axis/margin-and-translation';
const currentURL = '/course/axis/bottom-axis';
const nextURL = '/course/axis/axis-variations';
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
              In the previous lesson we learnt how to manage margins efficiently
              on our chart.
            </p>
            <p>
              Now, let's see how we can actually create a component that draws a
              bottom axis!
            </p>
          </>
        }
      />

      <h2>Re-usable Bottom Axis component</h2>
      <p>
        The code snippet below builds a <code>AxisBottom</code> component. It is{' '}
        <TakeHome>
          very much inspired from{' '}
          <a href="https://wattenberger.com/blog/react-and-d3">this blogpost</a>{' '}
          by Amelia Wattenberger
        </TakeHome>
        . I've just changed a few things, notably passing a scale as input
        instead of a range and a domain.
      </p>
      <p>
        The logic mainly relies on the <code>ticks()</code> method of a d3
        scale. It takes a target number of ticks as input, find the most
        appropriate way to build smart ticks based on this target, and returns
        an array with all the tick positions.
      </p>
      <p>
        What follows is just some svg drawings based on those tick positions.
      </p>
      <CodeBlock code={snippet1} />

      <h2>Using the component</h2>
      <p>
        Once you have the bottom and left axis component described above you
        just need to call them properly. You need to compute the bounds area by
        substracting the margins to the total svg area.
      </p>
      <p>
        Don't forget to add an additional translation to the bottom axis to
        render it... at the bottom.
      </p>
      <ChartOrSandbox
        vizName={'AxisBasic'}
        VizComponent={AxisBasicDemo}
        maxWidth={600}
        height={300}
        caption="This axis is rendered without using d3.js to render."
      />
    </LayoutCourse>
  );
}

const snippet1 = `
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }) => {
  const range = xScale.range();

  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={["M", range[0], 0, "L", range[1], 0].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={\`translate(\${xOffset}, 0)\`}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
`.trim();
