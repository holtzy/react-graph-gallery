import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { TakeHome } from '@/component/TakeHome';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { AxisBasicDemo } from '@/viz/AxisBasic/AxisBasicDemo';
import { scaleLinear } from 'd3';
import { GraphTIIT } from '@/viz/AxisBottomMinimal/Graph';
import { Sidenote } from '@/component/SideNote';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { Graph9 } from '@/viz/exercise/BubblePlotBottomAxisSolution/Graph';

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
        ]}
      />

      <h2>Using the component</h2>
      <p>
        Once you have the bottom and left axis component described above you
        just need to call them properly. You need to compute the bounds area by
        substracting the margins to the total svg area.
      </p>
      <p>
        Don't forget to add an additional translation to the bottom axis to
        render it... at the bottom.
      </p>
      <ChartOrSandbox
        vizName={'AxisBasic'}
        VizComponent={AxisBasicDemo}
        maxWidth={600}
        height={300}
        caption="This axis is rendered without using d3.js to render."
      />
    </LayoutCourse>
  );
}

const snippet1 = `
// AxisBottom.tsx

const TICK_LENGTH = 6;

export const AxisBottom = ({ xScale, pixelsPerTick }) => {
  const range = xScale.range();

  const ticks = useMemo(() => {
    const width = range[1] - range[0];
    const numberOfTicksTarget = Math.floor(width / pixelsPerTick);

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [xScale]);

  return (
    <>
      {/* Main horizontal line */}
      <path
        d={["M", range[0], 0, "L", range[1], 0].join(" ")}
        fill="none"
        stroke="currentColor"
      />

      {/* Ticks and labels */}
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={\`translate(\${xOffset}, 0)\`}>
          <line y2={TICK_LENGTH} stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateY(20px)",
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
