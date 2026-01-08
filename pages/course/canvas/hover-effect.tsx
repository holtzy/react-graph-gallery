import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import Link from 'next/link';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotCanvasBasicDemo } from '@/viz/ScatterplotCanvas/ScatterplotCanvasBasicDemo';
import { BubblePlotCanvasDemo } from '@/viz/BubblePlotCanvas/BubblePlotCanvasDemo';
import { Caption } from '@/component/UI/Caption';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { AreaChartBasicDemo } from '@/viz/AreaChartBasic/AreaChartBasicDemo';
import { TakeHome } from '@/component/TakeHome';
import { AreaChartCanvasDemo } from '@/viz/AreaChartCanvas/AreaChartCanvasDemo';
import { DonutChartCanvasDemo } from '@/viz/DonutChartCanvas/DonutChartCanvasDemo';
import { BubblePlotCanvasHoverEffectDemo } from '@/viz/BubblePlotCanvasHoverEffect/BubblePlotCanvasHoverEffectDemo';

const previousURL = '/course/canvas/svg-path-in-canvas';
const currentURL = '/course/canvas/hover-effect';
const nextURL = '/course/canvas/tooltip';
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
              We've seen how powerful D3 is for transforming a dataset into an
              SVG <code>path</code>. For example, give it a radius and angle,
              and it can easily generate an arc path.
            </p>
            <p>
              But how can we use this same data to draw the shape with canvas?
              Let’s explore.
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
      -
       */}
      <h2>How to make a hover effect</h2>
      <p>Like this.</p>

      <ChartOrSandbox
        vizName={'BubblePlotCanvasHoverEffect'}
        VizComponent={BubblePlotCanvasHoverEffectDemo}
        height={700}
        maxWidth={700}
        caption={
          <p>
            A very basic area chart made using react and the <code>area()</code>{' '}
            function of d3.js
          </p>
        }
      />
    </LayoutCourse>
  );
}
