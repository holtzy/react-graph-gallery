import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/tooltip/introduction';
const currentURL = '/course/tooltip/tooltip-component';
const nextURL = '/course/tooltip/display-on-hover';
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
              Let's see how to create a <code>Tooltip</code> component that can
              be re-used in your codebase when a tooltip is required.
            </p>
          </>
        }
      />
      <h2>Minimal tooltip example</h2>
      <h3>
        💾 <code>InteractionData</code>: where the tooltip info is stored.
      </h3>
      <p>
        Our tooltip component is going to expect one property only: an object of
        type InteractionData.
      </p>
      <p>
        This object stores everything we need to build a tooltip. At the very
        least we need some positions (xPos and yPos) and a title to display
        (name here)
      </p>
      <CodeBlock
        code={`
type InteractionData = {
  xPos: number;
  yPos: number;
  name: string;
}

type TooltipProps = {
  interactionData: InteractionData | undefined;
};
      `.trim()}
      />
      <p>
        But we could put many other things! A color for the border, some values
        to display, a link to an image.. Anything really.
      </p>
      <h3>🦴 Tooltip component skeleton</h3>
      <p>
        The Tooltip component uses some props of type TooltipProps, which is
        basically just an interactionData object.
      </p>
      <p>
        If this object is undefined (user is not hovering anything), then we do
        not return anything;
      </p>
      <CodeBlock
        code={`
// Tooltip.tsx
export const Tooltip = ({ interactionData }: TooltipProps) => {

  if (!interactionData) {
    return null;
  }

  ... Do something with interactionData otherwise
};

      `.trim()}
      />
      <h3>🍔 The meat</h3>
      <p>
        Now, we just need to return something based on the{' '}
        <code>interactionData</code> information.
      </p>
      <p>
        Do not forget to use <code>xPos</code> and <code>yPos</code> to put the
        tooltip at the right position!
      </p>
      <CodeBlock
        code={`
const { xPos, yPos, name } = interactionData;

return (
  <div
    style={{
      left: xPos,
      top: yPos,
    }}
  >
    <b>{name}</b>
  </div>
);

      `.trim()}
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
