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
              We've built a solid foundation in <b>D3</b>, <b>SVG</b>, scales,
              and <b>axes</b>!
            </p>
            <p>
              Now, we have everything we need to create a{' '}
              <Link href="/bubble-plot">bubble plot</Link> using one of the most
              famous datasets: <code>Gapminder</code>.
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
        In this lesson, we’ll recreate a{' '}
        <Link href="/bubble-plot">bubble plot</Link> illustrating the
        relationship between <b>GDP per capita</b> (x-axis) and{' '}
        <b>life expectancy</b> (y-axis).
      </p>
      <p>
        Each bubble represents a country, with color indicating the{' '}
        <b>continent</b> and size representing <b>population</b>.
      </p>

      <p>
        <br />
      </p>

      <center>
        <BubblePlotBasicDemo width={550} height={550} />
      </center>
      {/* -
-
-
-
-
-
- */}
      <h2>The data</h2>
      <p>
        The dataset is an array of objects, with each object representing a
        country. Each object has five properties that provide all the
        information needed for the bubble chart:
      </p>

      <CodeBlock
        code={`
const data = [
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
        <a href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/BubblePlotBasic/data.ts">
          here
        </a>
        .
      </p>
      <p>
        <Link
          className={cn('no-underline', buttonVariants({ variant: 'default' }))}
          href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/BubblePlotBasic/data.ts"
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
      <p>
        You’ll soon see that the process for creating a graph follows similar
        steps each time.
      </p>
      <ul>
        <li>
          Start by carefully examining the data to fully understand its
          contents.
        </li>
        <li>
          Next, consider the necessary scales. For this chart, you’ll need four:
          x, y, color, and size! (Use these colors: <code>#e0ac2b</code>,{' '}
          <code>#e85252</code>, <code>#6689c6</code>, <code>#9a6fb0</code>,{' '}
          <code>#a53253</code>)
        </li>
        <li>
          Then, organize your <code>return()</code> statement to initialize the{' '}
          <code>boundsArea</code>.
        </li>
        <li>
          Next, loop through the dataset to render your markers (circles in this
          case). This step is straightforward once your scales are set up!
        </li>
        <li>Finally, add the axis components.</li>
      </ul>
      <p>
        <u>Note</u>: Avoid typing everything from scratch. Instead, refer to
        previous exercises in the course to copy and paste any code snippets you
        need!
      </p>

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
