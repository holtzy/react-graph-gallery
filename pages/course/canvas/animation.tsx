import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ScatterplotCanvasHoverEffectDemo } from '@/viz/ScatterplotCanvasHoverEffect/ScatterplotCanvasHoverEffectDemo';
import { TakeHome } from '@/component/TakeHome';
import Link from 'next/link';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Graph19 } from '@/viz/exercise/CanvasBasicAnimationSolution/Graph';

const previousURL = '/course/animation/project';
const currentURL = '/course/canvas/animation';
const nextURL = '/course/canvas/drawing-shapes-with-canvas';
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
              By now, after completing the previous modules, you’re likely able
              to draw <b>almost anything</b> on the screen— including
              interactive elements like tooltips, hover effects, and animations.
            </p>
            <p>
              However, there's a significant bottleneck:{' '}
              <TakeHome>performance</TakeHome>. Let's explore{' '}
              <code>canvas</code>, a rendering engine that can help solve this
              issue.
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
      - */}
      <h2>Let's do it!</h2>
      <Graph19 />
    </LayoutCourse>
  );
}
