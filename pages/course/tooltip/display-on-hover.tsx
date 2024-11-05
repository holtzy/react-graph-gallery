import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';

import { CodeBlock } from '@/component/UI/CodeBlock';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotTooltipDemo } from '@/viz/ScatterplotTooltip/ScatterplotTooltipDemo';

const previousURL = '/course/tooltip/tooltip-component';
const currentURL = '/course/tooltip/display-on-hover';
const nextURL = '/course/tooltip/templates';
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
              In the previous lesson, we learned how to create a{' '}
              <code>Tooltip</code> component, position it correctly, and design
              its API.
            </p>
            <p>Now, let’s make it appear only on hover!</p>
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
      <h2>1️⃣ Internal State</h2>
      <p>
        The first thing we need is an internal state, created with the{' '}
        <code>useState</code> hook.
      </p>
      <p>
        This state can be <code>null</code> when nothing is hovered. If the user
        hovers over a graph marker, its value becomes an object of type{' '}
        <code>InteractionData</code>, storing everything we need to know about
        the marker!
      </p>

      <CodeBlock
        code={`
// Initialize an internal state
const [interactionData, setInteractiondata] = useState<InteractionData | null>(null);
      `.trim()}
      />
      {/* -
-
-
-
-
-
-
- */}
      <h2>2️⃣ Updating the State on Hover</h2>
      <p>
        The <code>setInteractionData</code> function allows us to update this
        state. We can use it to update <code>interactionData</code> whenever a
        graph marker is hovered over!
      </p>
      <p>
        For example, if the marker is a circle, as in a scatterplot, the code
        might look like this:
      </p>

      <CodeBlock
        code={`
<circle
  r={8}
  cx={250}
  cy={150}
  onMouseEnter={() => // Each time the circle is hovered hover...
    setInteractionData({ // ... update the interactionData state with the circle information
      xPos: 250,
      yPos: 150,
      name: "hello",
    })
  }
  onMouseLeave={() => setInteractionData(null)} // When the user stops hovering, reset the interactionData to null
/>

      `}
      />
      {/* -
-
-
-
-
-
-
- */}
      <h2>3️⃣ Conditionally Render the Tooltip</h2>
      <p>
        The <code>Tooltip</code> component takes <code>interactionData</code>{' '}
        (the internal state) as a prop.
      </p>
      <p>
        If <code>interactionData</code> is <code>null</code>, the component
        returns nothing, so the tooltip appears only when{' '}
        <code>interactionData</code> has a value—i.e., when the user hovers over
        a marker.
      </p>

      <blockquote className="bg-fuchsia-50 py-8">
        <p>
          Don’t forget to add <code>pointerEvents: "none"</code> to the{' '}
          <code>div</code> that wraps the <code>Tooltip</code> component!
          Otherwise, the <code>onMouseEnter()</code> event on SVG elements won’t
          be triggered.
        </p>
      </blockquote>

      {/* -
-
-
-
-
-
-
- */}
      <h2>Scatterplot minimal example</h2>
      <p>
        Let's apply what we learnt on a scatterplot, creating a minimal tooltip:
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotTooltipDemo}
        vizName={'ScatterplotTooltip'}
        maxWidth={500}
        height={500}
        caption="Scatterplot with tooltip. Hover over a circle to get the corresponding country name."
      />
      {/* -
      -
      -
      -
      -
      -
      -
      -
       */}
      <p>
        <br />
      </p>
      <h2>Exercises</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Your first tooltip!</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>Pass more information</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
        ]}
      />
    </LayoutCourse>
  );
}

const exercices: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>
          Let's start with a very simple tooltip. We'll see how to improve it
          later on.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>The Sandbox has a circle rendered in SVG.</li>
        <li>Create an absolute positionned div on top of the SVG area</li>
        <li>
          Create a <code>Tooltip</code> component in a <code>Tooltip.tsx</code>{' '}
          file.
        </li>
        <li>
          In this div, render a small div exactly where the circle is with one
          word in it: <code>hello</code>
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/TooltipFirstPractice',
    solutionSandbox: 'exercise/TooltipFirstSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Keep in mind that you can pass absolutely any information to the
          tooltip component to display it.
        </p>
        <p>
          Passing styling information like the marker color to make the tooltip
          fit the style is a very good practice.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Pass 3 more information to the <code>Tooltip</code> component:{' '}
          <code>xValue</code>, <code>yValue</code> and color (use{' '}
          <code>green</code>)
        </li>
        <li>
          Use the <code>color</code> to change the tooltip border color
        </li>
        <li>
          Display <code>xValue</code> and <code>yValue</code> in the tooltip
          body.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/TooltipAddContentPractice',
    solutionSandbox: 'exercise/TooltipAddContentSolution',
  },
];
