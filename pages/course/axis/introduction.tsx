import React, { useRef } from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { useDimensions } from '@/hook/use-dimensions';
import { AxisBasic } from '@/viz/AxisBasic/AxisBasic';
import { Caption } from '@/component/UI/Caption';

const previousURL = '/course/scales/other-scale-types';
const currentURL = '/course/axis/introduction';
const nextURL = '/course/axis/margin-and-translation';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  const axisRef = useRef<HTMLDivElement>(null);
  const axisDemo = useDimensions(axisRef);

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
              In the previous module on scales, we learned how to position SVG
              shapes precisely, adding meaning to the growing graph we're
              constructing.
            </p>
            <p>
              Now, it's time to provide <b>context</b> to these shape positions.
              For most chart types, this is achieved using <b>axes</b>. Axes can
              be complex elements, so let's explore how to create them
              effectively.
            </p>
          </>
        }
      />

      {/* Demo basic axis */}
      <div className="w-full flex flex-col justify-center items-center">
        <div
          style={{ height: 250, width: '100%', maxWidth: 500 }}
          ref={axisRef}
        >
          <AxisBasic width={axisDemo.width} height={axisDemo.height} />
        </div>
        <p className="text-sm text-gray-500 max-w-md italic text-center mt-4 font-light">
          This module explains how to build axes like the one you can see at the
          bottom and on the left of this chart area.
        </p>
      </div>

      <h2>Key Terminology</h2>
      <p>
        To work effectively with axes in data visualization, it's important to
        understand the key terms highlighted on the figure below.
      </p>
      <p>
        While <b>left</b> and <b>bottom</b> axes are the most common, they
        aren’t the only options. In the previous module on scales, we created a{' '}
        <Link href="/course/scales/project">barplot</Link> with the x-axis
        positioned at the <b>top</b>.
      </p>
      <p>
        <b>Right-side</b> axes can also be useful, though they’re typically
        associated with dual y-axis line charts—a practice generally best{' '}
        <a href="https://www.data-to-viz.com/caveats.html">avoided</a>.
      </p>

      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/excalidraw/anatomy-of-axes.png"
          style={{ maxWidth: 750 }}
          alt="schema explaining what the scaleBand() function produces"
        />
      </div>
      {/* -
      -
      -
      -
      -
      -
      -
      - */}
      <h2>Margins</h2>
      <p>
        You may have noticed that axes <b>take up some space</b>! To accommodate
        them, we'll need to add<b> margins</b> around the chart area.
      </p>
      <p>
        Managing margins can quickly become challenging, but don’t worry—I’ll
        show you a simple trick to make it easy.
      </p>
      <p>Let’s dive in!</p>
    </LayoutCourse>
  );
}
