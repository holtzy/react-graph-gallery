import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { AxisBasicDemo } from '@/viz/AxisBasic/AxisBasicDemo';
import { scaleLinear } from 'd3';
import { Sidenote } from '@/component/SideNote';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { Accordion } from '@/component/UI/AccordionGrey';

const previousURL = '/course/axis/margin-and-translation';
const currentURL = '/course/axis/bottom-axis';
const nextURL = '/course/axis/axis-variations';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  const xScale = scaleLinear().domain([0, 100]).range([0, 500]);

  console.log(xScale.ticks(2));
  console.log(xScale.ticks(5));
  console.log(xScale.ticks(9));
  console.log(xScale.ticks(10));

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
              In the previous lesson, we learned how to manage <b>margins</b>{' '}
              effectively in our chart. Now, let's explore how to create a{' '}
              <code>AxisBottom</code> react component that draws a bottom axis!
            </p>
          </>
        }
      />

      <h2>
        🔍 More about <code>scaleLinear()</code>
      </h2>
      <p>
        In the previous lessons we talked a lot about the <b>scaleLinear()</b>{' '}
        function of d3.js.
      </p>
      <p>
        You should perfectly understand the code below. If not, go back to the{' '}
        <Link href="/course/scales/linear-scale">scale module</Link> of this
        course!
      </p>
      <CodeBlock
        code={`
const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500]);

console.log(xScale(0))    // 0
console.log(xScale(100))  // 500
`.trim()}
      />
      <p>
        What I haven't mentioned yet is that the <code>xScale</code> function
        includes a few additional methods that are quite useful:
      </p>
      <ul>
        <li>
          <code>xScale.range()</code> returns the range of the scale, which is{' '}
          <code>[0, 500]</code> in this case.
        </li>
        <li>
          <code>xScale.ticks(10)</code> generates an array of{' '}
          <b>approximately</b> 10 evenly spaced values along the axis. This
          function is quite intelligent, producing <b>nicely rounded numbers</b>
          , which can be a lifesaver.
        </li>

        <li>
          <code>xScale.domain()</code> provides the input domain of the scale (
          <code>[0, 100]</code>)
        </li>
      </ul>

      <h3>Example 🧐</h3>
      <div className="relative">
        <Sidenote
          text={
            "⚠️ Take some time to fully understand this code snippet; it's important!"
          }
        />
        <CodeBlock
          code={`
xScale.ticks(2)  // [0, 50, 100]
xScale.ticks(5)  // [0, 20, 40, 60, 80]
xScale.ticks(9)  // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
xScale.ticks(10) // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
`.trim()}
        />
      </div>
      <p>See?</p>
      <p>
        The <code>.ticks()</code> method doesn't always return the <b>exact</b>{' '}
        number of ticks you specify. Instead, it identifies the{' '}
        <b>most suitable value</b> close to your target to ensure your axis
        looks polished and visually appealing!
      </p>

      {/* -
-
-
-
-
-
-
-
-
-
- */}
      <h2>Let's draw! ✏️</h2>
      <p>
        Now that we know <b>where the ticks are going to be</b>, we just need to
        draw a long horizontal line, and a multitude of small ticks with their
        labels at those positions!
      </p>
      <p>
        Here is a sandbox with a very minimal example. Take a bit of time to
        read the code carefully!
      </p>
      <CodeSandbox vizName="AxisBottomMinimal" />
      <p>
        <br />
        <br />
      </p>
      <ul>
        <li>
          The horizontal line is made using a <code>line</code> element that
          takes the full <code>boundsWidth</code>.
        </li>
        <li>
          <code>xScale.ticks()</code> is used to start a loop: 1 iteration per
          tick!
        </li>
        <li>
          For each tick, a <code>g</code> element wraps a <code>line</code> and
          a <code>text</code> element forming the tick.
        </li>
      </ul>
      {/* -
-
-
-
-
-
-
-
-
-
- */}
      <h2>🎁 Reusable Bottom Axis Component</h2>
      <p>
        This bottom axis will likely be used across <b>multiple</b> charts in
        your project, so let’s develop a <b>reusable component</b> named{' '}
        <code>AxisBottom</code>.
      </p>
      <p>
        The <code>AxisBottom</code> component accepts several properties:
      </p>
      <ul>
        <li>
          <code>xScale</code>: The scale that the axis will represent.
        </li>
        <li>
          <code>pixelsPerTick</code>: Instead of specifying the number of ticks,
          it's better to define the pixels per tick. This approach ensures a
          consistent appearance, regardless of whether the chart is displayed on
          a large screen or a mobile device!
        </li>
      </ul>

      <div className="relative">
        <Sidenote
          text={
            <p>
              This code is inspired by{' '}
              <a href="https://wattenberger.com/blog/react-and-d3">
                Amelia Wattenberger's blog post
              </a>
              !
            </p>
          }
        />
        <CodeBlock code={snippet1} />
      </div>

      <h2>↕️ Positioning the Axis</h2>
      <p>
        Now that we have a functional axis, it needs to be positioned
        correctly—at the <b>bottom</b> of the bounding area.
      </p>
      <p>
        To achieve this, we can wrap the <code>BottomAxis</code> call in a{' '}
        <code>g</code> element and apply a <b>vertical translation</b>. Here’s
        what the code looks like:
      </p>

      <CodeBlock
        code={`
<g transform={\`translate(0, \${boundsHeight})\`}>
    <AxisBottom xScale={xScale} pixelsPerTick={60} />
</g>

        `.trim()}
      />

      <h2>Exercices</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Bubble Plot with bottom axis</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>Add grid</span>,
            content: (
              <div className="max-w-96">
                <p>Let's tweak the previous sandbox to add grid lines.</p>
                <p>
                  To do this, simply adjust the <b>y1</b> property of the tick
                  lines in the <b>AxisBottom</b> component to extend through the
                  entire bounds area.
                </p>
                <p>
                  This is the advantage of having a <b>custom</b> axis
                  component: you can easily adapt it to match your style. 🎉
                </p>
              </div>
            ),
          },
          {
            title: <span>Add axis title</span>,
            content: (
              <div className="max-w-96">
                <p>
                  Adding a title is simply a matter of including a{' '}
                  <code>text</code> element in your SVG!
                </p>
                <p>
                  However, handling text in SVG can be a hassle, as it doesn’t
                  natively support wrapping.
                </p>
                <p>
                  Personally, I prefer to place the title manually within the
                  main SVG area rather than in the <b>AxisBottom</b> component,
                  but it's entirely up to you!
                </p>
              </div>
            ),
          },
        ]}
      />

      <h2>We got axes! 🪓</h2>
      <p>
        If you've followed the previous exercises, you now know how to add a
        bottom axis to your graph.
      </p>
      <p>
        Adding a <b>left</b> axis works in <b>much the same way</b>! Wrap it in
        an <code>AxisLeft</code>
        component, and you're good to go!
      </p>
      <p>Take a moment to review the example code below:</p>

      <ChartOrSandbox
        vizName={'AxisBasic'}
        VizComponent={AxisBasicDemo}
        maxWidth={600}
        height={300}
        caption="This axis is rendered without using d3.js to render."
      />
      <Accordion title="code for the Y axis react component">
        <CodeBlock code={snippetAxis} />
      </Accordion>
    </LayoutCourse>
  );
}

const snippetAxis = `
import { ScaleLinear } from 'd3';

type AxisLeftProps = {
  yScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisLeft = ({ yScale, pixelsPerTick }: AxisLeftProps) => {
  const range = yScale.range();
  const height = range[0] - range[1];
  const numberOfTicksTarget = Math.floor(height / pixelsPerTick);

  return (
    <>
      {/* Main vertical line */}
      <path
        d={['M', 0, range[0], 'L', 0, range[1]].join(' ')}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {yScale.ticks(numberOfTicksTarget).map((value, i) => (
        <g key={value} transform={\`translate(0, \${yScale(value)})\`}>
          <line x2={-TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translateX(-20px)',
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
`.trim();

const snippet1 = `
// AxisBottom.tsx

import { ScaleLinear } from 'd3';

type AxisBottomProps = {
  xScale: ScaleLinear<number, number>;
  pixelsPerTick: number;
};

// tick length
const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }: AxisBottomProps) => {
  const range = xScale.range();

  const width = range[1] - range[0];
  const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

  return (
    <>
      {/* Main horizontal line */}
      <line
        x1={range[0]}
        y1={0}
        x2={range[1]}
        y2={0}
        stroke="currentColor"
        fill="none"
      />

      {/* Ticks and labels */}
      {xScale.ticks(numberOfTicksTarget).map((value) => (
        <g key={value} transform={\`translate(\${xScale(value)}, 0)\`}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: '10px',
              textAnchor: 'middle',
              transform: 'translateY(20px)',
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </>
  );
};
`.trim();

const exercices: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>
          Almost all graphs use this translation mecanism! Let's code it once to
          integrate it for ever!
        </p>
      </>
    ),
    toDo: (
      <>
        <p>Let's improve the bubble plot we started in the previous lesson.</p>
        <ul>
          <li>
            Fill the AxisBottom.tsx file with the code provided in this lesson.
          </li>
          <li>Use it to render a bottom axis on the bubble chart.</li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/BubblePlotBottomAxisPractice',
    solutionSandbox: 'exercise/BubblePlotBottomAxisSolution',
  },
];
