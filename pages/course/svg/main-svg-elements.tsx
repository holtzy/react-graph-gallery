import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';

const previousURL = '/course/svg/introduction';
const currentURL = '/course/svg/main-svg-elements';
const nextURL = undefined;
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
              In the previous lesson, we learned about SVG and how to draw a
              circle with it.
            </p>
            <p>
              To create comprehensive graphs, we'll also need{' '}
              <b>other shapes</b> such as rectangles, text, and lines. Let's
              explore how to create these as well.
            </p>
          </>
        }
      />

      <h2>Rectangle</h2>
      <p>
        SVG rectangles are created using the <code>&lt;rect&gt;</code> element,
        which requires the position and size attributes. The <code>x</code> and{' '}
        <code>y</code> attributes specify the coordinates of the top-left
        corner, while <code>width</code> and <code>height</code> determine the
        size of the rectangle.
      </p>
      <p>
        For example, this code will draw a blue rectangle with the top-left
        corner at (10,10) and dimensions of 80x50.
      </p>
      <CodeBlock
        code={`
<rect x="10" y="10" width="80" height="50" fill="blue" />
`.trim()}
      />
      <p>
        Here is an interactive example so that you can experiment with
        rectangles and understand how they work.
      </p>

      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgRectangle" />
      </div>

      <h2>Line</h2>
      <p>
        <p>
          SVG lines are created using the <code>&lt;line&gt;</code> element,
          which requires the starting (<code>x1</code>, <code>y1</code>) and
          ending (<code>x2</code>, <code>y2</code>) coordinates as attributes.
        </p>
        <p>
          For example, this code will draw a black line from the point (0,0) to
          the point (100,100).
        </p>
        <CodeBlock
          code={`
<line x1="0" y1="0" x2="100" y2="100" stroke="black"/>
`.trim()}
        />
      </p>
      <p>
        Here is an interactive example so that you can play a bit with lines and
        understand how they work.
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgLine" />
      </div>

      <h2>Text</h2>
      <p>
        SVG text is created using the <code>&lt;text&gt;</code> element, which
        requires coordinates to specify where the text should be placed. The{' '}
        <code>x</code> and <code>y</code> attributes define the position of the
        starting point of the text.
      </p>
      <p>
        For example, this code will display the text "Hello, SVG!" at the
        coordinates (50,50).
      </p>
      <CodeBlock
        code={`
<text x="50" y="50" fill="black">Hello, SVG!</text>
`.trim()}
      />
      <p>
        Here is an interactive example so that you can experiment with text and
        understand how it works.
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgText" />
      </div>

      <h2>Circle</h2>
      <p>
        We talked about them already, but remember that SVG circles are created
        using the <code>&lt;circle&gt;</code> element, which requires the{' '}
        <b>center coordinates</b> and <b>radius</b> as attributes.
      </p>
      <p>
        The <code>cx</code> and <code>cy</code> attributes specify the center
        point, while the <code>r</code> attribute determines the radius of the
        circle.
      </p>
      <p>
        For example, this code will draw a red circle with a center at (50,50)
        and a radius of 40.
      </p>
      <CodeBlock
        code={`
<circle cx="50" cy="50" r="40" fill="red" />
`.trim()}
      />
      <p>
        Here is an interactive example so that you can experiment with circles
        and understand how they work.
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgCircle" />
      </div>

      <h2>Exercices</h2>

      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Two circles</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>10 circles (use a loop!)</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },

          {
            title: <span>Background Color</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
          {
            title: <span>A first barplot!</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[3]} />,
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
          Your SVG element is your canvas. You can draw as many shapes in it as
          you want.
        </p>
        <p>
          You just need to put them at the right location and it makes a graph.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>Draw 2 circles in the SVG area</li>
        <li>
          First one must be small and <code>blue</code>
        </li>
        <li>
          Second must be big and use <code>#69b3a2</code> as a color with an
          opacity of <code>.3</code>
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgTwoCirclesPractice',
    solutionSandbox: 'exercise/SvgTwoCirclesSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          In real life you won't have 1, 2 or 3 circles to draw. You will have
          heaps of them and that will make a{' '}
          <Link href="/scatter-plot">scatterplot</Link>.
        </p>
        <p>
          But you do not want to use hundreds of <code>circle</code> elements,
          you want to create a loop that draw 1 circle at each iteration.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>Create a loop that goes from 1 to 10</li>
        <li>At each iteration, draw a circle in the SVG area</li>
        <li>Change the circle position at each iteration</li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgMultipleCirclesPractice',
    solutionSandbox: 'exercise/SvgMultipleCirclesSolution',
  },

  {
    whyItMatters: (
      <>
        <p>What you draw first will be below what you draw second.</p>
        <p>
          Like in HTML, stacking order matters. Keep this in mind for when you
          will start drawing more complex graphs.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Create one big grey rectangle that takes the full width and height of
          the SVG area
        </li>
        <li>Add one big yellow circle in it</li>
        <li>Add some text in the circle</li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgStackingOrderPractice',
    solutionSandbox: 'exercise/SvgStackingOrderSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          Notice how tricky it is to divide the height by the number of bars
          while also leaving space for padding?
        </p>
        <p>
          No worries—the next module on <b>scales</b> will help with that!
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>Create 4 bars using 4 rectangles.</li>
        <li>The bars should be 400, 300, 200, and 100px wide, respectively.</li>
        <li>
          Distribute them along the Y axis to create your first bar chart!
        </li>
      </ul>
    ),

    practiceSandbox: 'exercise/SvgOverflowPractice',
    solutionSandbox: 'exercise/SvgOverflowSolution',
  },
];
