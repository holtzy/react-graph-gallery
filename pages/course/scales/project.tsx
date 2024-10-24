import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { CircleScaleExercise } from '@/component/interactiveTeaching/CircleScaleExercise';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { scaleBand } from 'd3';
import { Caption } from '@/component/UI/Caption';
import { Sidenote } from '@/component/SideNote';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { BarplotTheEconomistDemo } from '@/viz/BarplotTheEconomist/BarplotTheEconomistDemo';

const previousURL = '/course/scales/other-scale-types';
const currentURL = '/course/scales/project';
const nextURL = '/course/axis/introduction';
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
              We've built a solid foundation in <b>D3</b>, <b>SVG</b>, and{' '}
              <b>scales</b>! Now, let's put that knowledge to the test by
              recreating a barplot inspired by
              <b>The Economist</b>.
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
      <h2>What we're trying to do:</h2>

      <h2>The data</h2>

      <ChartOrSandbox
        vizName={'BarplotTheEconomist'}
        VizComponent={BarplotTheEconomistDemo}
        height={550}
        maxWidth={700}
        caption="Reproduction of a barplot made by the Economist"
      />

      {/* -
-
-
-
-
-
- */}

      <h2>It's taking shape! 🎉</h2>
      <p>
        You've now mastered two fundamental concepts of dataviz with React and
        D3: <b>SVG</b> and <b>Scales</b>. This means{' '}
        <b>we're ready to build actual graphs</b>!
      </p>
      <p>
        In the next lesson, you'll dive into a hands-on exercise where we
        recreate a real-world chart using everything you've learned so far.
      </p>
      <p>Let's do it! 🙇</p>
    </LayoutCourse>
  );
}
