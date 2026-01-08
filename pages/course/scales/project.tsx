import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
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
import { buttonVariants } from '@/component/UI/button';
import { cn } from '@/util/utils';

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
              recreating a barplot inspired by <b>The Economist</b>.
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
      <h2>Our Objective</h2>
      <p>
        In this lesson, we aim to recreate a chart from The Economist with
        several key design elements:
      </p>
      <ul>
        <li>Title, subtitle, and footer</li>
        <li>Grid lines with values displayed at the top</li>
        <li>Inline labels placed inside or outside the bars</li>
      </ul>
      <p>
        <br />
      </p>

      <BarplotTheEconomistDemo width={650} height={550} />
      {/* -
-
-
-
-
-
- */}
      <h2>The data</h2>
      <p>The dataset is very simple! It looks like this:</p>
      <CodeBlock
        code={`
export const data = [
  {
      count: 6,
      name: "Hantavirus",
  },
  {
      count: 7,
      name: "Tularemia",
  },
]
      `.trim()}
      />
      <p>
        You can find the complete js object{' '}
        <a href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/BarplotTheEconomist/data.ts">
          here
        </a>
        .
      </p>
      <p>
        <Link
          className={cn('no-underline', buttonVariants({ variant: 'default' }))}
          href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/BarplotTheEconomist/data.ts"
        >
          Get full data
        </Link>
      </p>

      {/* -
-
-
-
-
-
- */}
      <h2>Good Luck!</h2>
      <p>Here are a few helpful hints:</p>
      <ul>
        <li>
          Use <code>xScale.ticks(10)</code> to generate an array of optimal tick
          values.
        </li>
        <li>
          Bar color is <code>#076fa2</code>
        </li>
      </ul>

      {/* -
-
-
-
-
-
- */}
      <h2>Solution</h2>
      <ChartOrSandbox
        vizName={'BarplotTheEconomist'}
        VizComponent={BarplotTheEconomistDemo}
        height={550}
        maxWidth={700}
        caption="Reproduction of a barplot made by the Economist"
      />
    </LayoutCourse>
  );
}
