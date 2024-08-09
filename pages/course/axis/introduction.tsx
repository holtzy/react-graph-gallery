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

      <h2>Terminology</h2>
      <p>
        To effectively understand and work with axes in data visualization, it's
        essential to familiarize yourself with the following key terms:
      </p>
      <p>Here I need a figure that helps understanding the following terms:</p>
      <ul>
        <li>Axis</li>
        <li>Tick</li>
        <li>Tick Label</li>
        <li>Grid Line</li>
        <li>Axis Label</li>
        <li>Title</li>
        <li>Scale</li>
        <li>Domain</li>
        <li>Range</li>
        <li>Orientation</li>
        <li>Axis Line</li>
        <li>Baseline</li>
      </ul>

      <h2>Margins</h2>
      <p>
        We need some space between the chart area and the svg area. Let's see
        how to build this.
      </p>
    </LayoutCourse>
  );
}
