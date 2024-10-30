import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { CodeSandbox } from '@/component/CodeSandbox';
import Link from 'next/link';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';

const previousURL = '/course/responsiveness/use-dimension-hook';
const currentURL = '/course/responsiveness/using-the-hook';
const nextURL = '/course/responsiveness/code-organization';
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
              Our <code>use-dimensions</code> hook monitors changes in a{' '}
              <code>div</code>'s dimensions and returns those values. Now, let’s{' '}
              <b>use</b> this hook to feed the dimensions directly into our
              graph!
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
      <h2>1️⃣ Create a Ref</h2>
      <p>
        Begin by creating a <code>ref</code> with the React{' '}
        <code>useRef()</code> function.
      </p>
      <p>
        A <code>ref</code> lets you directly target and interact with a specific
        HTML element in your app’s DOM. Remember, we covered this concept in the
        module on <Link href="/course/axis/axis-with-d3">D3.js axes</Link>.
      </p>

      <CodeBlock code={snippet2} />
      <br />
      <p>
        Finally, pass the <code>chartRef</code> to the container you want to
        monitor.
      </p>
      <CodeBlock code={snippet4} />

      <h2>2️⃣ Use the hook</h2>
      <p>
        Then, pass this newly created <code>chartRef</code> to the hook:
      </p>
      <CodeBlock code={snippet3} />
      <br />
      <p>
        You now have an object called <code>chartSize</code> with two
        properties: <code>height</code> and <code>width</code>. These properties
        can be used in your chart component. 🔥
      </p>

      <blockquote className="mt-2">
        Pro tip: Before building a responsive visualization, use{' '}
        <code>console.log()</code> to check the <code>chartSize</code> object
        and ensure everything is working correctly.
      </blockquote>
      {/*
      //
      // Use the hook
      //
      */}
      <h2 id="application">📊 Application</h2>
      <p>You’re all set!</p>
      <p>
        Just pass the values from <code>chartSize</code> to the visualization
        component, and it will become responsive.
      </p>
      <p>Here is a full example with code:</p>
      <br />
      <div style={{ maxWidth: 2000 }} className="full-bleed w-full z-50">
        <CodeSandbox vizName={'DensityChartResponsive'} />
      </div>
      {/* -
-
-
-
-
-
-
-
- */}

      <h2>Exercices</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Responsive div ↔️</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: (
              <span>
                First use of the <code>use-dimensions</code> hook
              </span>
            ),
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
          {
            title: <span>Responsive Bubbles</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
        ]}
      />
    </LayoutCourse>
  );
}

const snippet2 = `
const chartRef = useRef(null);
`.trim();

const snippet3 = `
const chartSize = useDimensions(chartRef);
`.trim();

const snippet4 = `
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();

const exercices: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>CSS knows very well how to handle responsiveness. But do you?</p>
        <p>
          There are numerous caveats to keep in mind! For instance, a{' '}
          <code>div</code> does not have a<code>height</code> by default.
        </p>
        <p>
          I strongly encourage you to put a bg color to your chart container to
          double check it behaves as expected.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Open the <code>Graph</code> component.
        </li>
        <li>
          Make it render a div with a width of 100% and a grey background.
        </li>
        <li>
          Inside this container, render another div with a height of 300px, add
          margins of 30px, and set a red background.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/ResponsiveDivPractice',
    solutionSandbox: 'exercise/ResponsiveDivSolution',
  },
  {
    whyItMatters: (
      <>
        <p>Direct application of this lesson and the previous.</p>
      </>
    ),
    toDo: (
      <>
        <p>
          The red rectangle is <b>responsive</b>. Let's find its{' '}
          <code>width</code> and <code>height</code>!
        </p>
        <ul>
          <li>
            Create a new file named <code>use-dimensions.tsx</code>, and copy
            the content of the <code>UseDimensions</code> hook into it.
          </li>
          <li>
            Set up a <code>chartRef</code> and attach it to the red rectangle{' '}
            <code>div</code>.
          </li>
          <li>
            Use the hook to retrieve the dimensions and display them within the
            red rectangle using <code>p</code> elements.
          </li>
          <li>
            Resize the window to verify that the dimensions update as expected.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/ResponsiveDivUseDimensionsPractice',
    solutionSandbox: 'exercise/ResponsiveDivUseDimensionsSolution',
  },
  {
    whyItMatters: (
      <>
        <p>Practice, practice, practice!</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Take the bubble chart examples we made in the{' '}
            <Link href="/course/axis/bottom-axis">bottom axis lesson</Link>.
          </li>
          <li>Make it responsive using the same techique!</li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/BubblePlotBottomAxisResponsivePractice',
    solutionSandbox: 'exercise/BubblePlotBottomAxisResponsiveSolution',
  },
];
