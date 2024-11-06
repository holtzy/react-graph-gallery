import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { TakeHome } from '@/component/TakeHome';
import { ReactSpringMostBasic } from '@/viz/ReactSpringMostBasic/ReactSpringMostBasic';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ReactSpringMostBasicDemo } from '@/viz/ReactSpringMostBasic/ReactSpringMostBasicDemo';
import { ReactSpringPresetValuesDemo } from '@/viz/ReactSpringPresetValues/ReactSpringPresetValuesDemo';
import { ReactSpringDerivingValueDemo } from '@/viz/ReactSpringDerivingValue/ReactSpringDerivingValueDemo';
import { ReactSpringTextDemo } from '@/viz/ReactSpringText/ReactSpringTextDemo';
import Link from 'next/link';
import { Accordion } from '@/component/UI/accordion';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { BubblePlotDatasetTransitionDemo } from '@/viz/BubblePlotDatasetTransition/BubblePlotDatasetTransitionDemo';
import { HistogramDatasetTransitionDemo } from '@/viz/HistogramDatasetTransition/HistogramDatasetTransitionDemo';
import { BarplotDatasetTransitionDemo } from '@/viz/BarplotDatasetTransition/BarplotDatasetTransitionDemo';
import { LollipopDatasetTransitionDemo } from '@/viz/LollipopDatasetTransition/LollipopDatasetTransitionDemo';

const previousURL = '/course/animation/react-spring-for-dataviz';
const currentURL = '/course/animation/scatterplot';
const nextURL = '/course/animation/enter-update-exit';
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
              In the previous lesson, we explored animating SVG and HTML
              elements with <code>react-spring</code>.
            </p>
            <p>
              Now, let's apply that knowledge to a real-world graph by animating
              the transition between two datasets on a{' '}
              <Link href="/scatter-plot">scatterplot</Link>.
            </p>
          </>
        }
      />

      {/* -
-
-
-
-
-
- */}
      <h2>Most basic example</h2>
      {/*
      //
      // Data transition
      //
      */}
      <h2 id="transition">Smooth dataset transition</h2>
      <p>
        How can we <b>smoothly animate</b> the transition between 2 datasets on
        a bubble chart? The chart used in this blog post can be drawn for
        several different years. You can use the select button on top to select
        the year, and the bubbles will <b>animate</b> to their new position.
      </p>
      <p>
        This is possible thanks to the{' '}
        <a href="https://react-spring.dev/">react spring</a> library. Basically,
        instead of rendering usual <code>circle</code> elements, the library
        provides an <code>animated.circle</code> element, that is linked to a{' '}
        <code>useSpring</code>
        hook.
      </p>
      <p>
        This is what the <code>Circle</code> component I use looks like:
      </p>
      <Accordion
        startOpen={false}
        title={
          <span>
            <code>Circle</code>: a component that animates the transition of a{' '}
            <code>circle</code>
          </span>
        }
      >
        <CodeBlock code={snippetCircle} />
      </Accordion>
      <ChartOrSandbox
        VizComponent={BubblePlotDatasetTransitionDemo}
        vizName={'BubblePlotDatasetTransition'}
        maxWidth={600}
        height={500}
        caption="A bubble chart component that smoothly animates changes between datasets."
      />

      <h2>Exercices</h2>
      <ChartOrSandbox
        VizComponent={HistogramDatasetTransitionDemo}
        vizName={'HistogramDatasetTransition'}
        maxWidth={900}
        height={400}
        caption={
          'A histogram that smoothly transition from 1 dataset to another'
        }
      />
      <ChartOrSandbox
        vizName={'BarplotDatasetTransition'}
        VizComponent={BarplotDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      <ChartOrSandbox
        vizName={'LollipopDatasetTransition'}
        VizComponent={LollipopDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="A lollipop chart with smooth transition between dataset."
      />
      <ChartOrSandbox
        VizComponent={BubblePlotDatasetTransitionDemo}
        vizName={'BubblePlotDatasetTransition'}
        maxWidth={600}
        height={500}
        caption="A bubble chart component that smoothly animates changes between datasets."
      />
      <p>
        Ok but there is a problem now: how do we deal with the data points that
        enter the dataset, or the one that exit?
      </p>
      <p>That's the plan for the next lesson.</p>
    </LayoutCourse>
  );
}

const snippetCircle = `
import { useSpring, animated } from "@react-spring/web";

type CircleProps = {
  color: string;
  r: number;
  cx: number;
  cy: number;
};

export const Circle = (props: CircleProps) => {
  const { cx, cy, r, color } = props;

  const springProps = useSpring({
    to: { cx, cy, r },
    config: {
      friction: 30,
    },
    delay: 0,
  });

  return (
    <animated.circle
      cx={springProps.cx}
      cy={springProps.cy}
      r={springProps.r}
      opacity={0.7}
      stroke={color}
      fill={color}
      fillOpacity={0.3}
      strokeWidth={1}
    />
  );
};
`.trim();
