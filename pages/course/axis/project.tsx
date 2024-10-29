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
import { buttonVariants } from '@/component/UI/button';
import { cn } from '@/util/utils';
import { BubblePlotBasicDemo } from '@/viz/BubblePlotBasic/BubblePlotBasicDemo';

const previousURL = '/course/axis/axis-with-d3';
const currentURL = '/course/axis/project';
const nextURL = '/course/responsiveness/introduction';
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

      <BubblePlotBasicDemo width={550} height={550} />
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
data = [
  {
    "country": "Afghanistan",
    "continent": "Asia",
    "lifeExp": 43.828,
    "pop": 31889923,
    "gdpPercap": 974.5803384
  },
  {
    "country": "Albania",
    "continent": "Europe",
    "lifeExp": 76.423,
    "pop": 3600523,
    "gdpPercap": 5937.029526
  }
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
        VizComponent={BubblePlotBasicDemo}
        vizName={'BubblePlotBasic'}
        maxWidth={600}
        height={500}
        caption="A clean bubble chart built with d3.js in a react context. A color scale is used to represent a categorical variable."
      />
    </LayoutCourse>
  );
}
