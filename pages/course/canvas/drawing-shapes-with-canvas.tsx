import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ScatterplotCanvasHoverEffectDemo } from '@/viz/ScatterplotCanvasHoverEffect/ScatterplotCanvasHoverEffectDemo';
import { CanvasBasicCircleDemo } from '@/viz/CanvasBasicCircle/CanvasBasicCircleDemo';

const previousURL = '/course/canvas/introduction';
const currentURL = '/course/canvas/drawing-shapes-with-canvas';
const nextURL = '';
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
              Remember the SVG module where we learnt how to draw any shapes on
              a screen?
            </p>
            <p>
              Well, we gonna have to do this again, but drawing with canvas this
              time, which is very different!
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
      <h2>Let's make a circle (again)</h2>

      <ChartOrSandbox
        vizName={'CanvasBasicCircle'}
        VizComponent={CanvasBasicCircleDemo}
        height={400}
        maxWidth={600}
        caption="A lollipop chart with smooth transition between dataset."
      />
    </LayoutCourse>
  );
}
