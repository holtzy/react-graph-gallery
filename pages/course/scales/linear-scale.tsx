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
import { scaleLinear } from 'd3';

const previousURL = '/course/scales/introduction';
const currentURL = '/course/scales/linear-scale';
const nextURL = '/course/scales/other-scale-types';
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
              The previous lesson described the concept of{' '}
              <Link href="/course/scales/introduction">scale</Link> in data
              visualization. Scales allow, for instance, to translate a value in
              our dataset to a position on the screen.
            </p>
            <p>
              Now, let's study the most common scale type and its d3.js
              implementation: the <b>linear</b> scale and its{' '}
              <code>scaleLinear()</code> function.
            </p>
          </>
        }
      />

      <CircleScaleExercise />

      {/* -
-
-
-
-
-
- */}

      <h2>
        The <code>scaleLinear()</code> function
      </h2>
      <p>
        The <code>scaleLinear()</code> function is part of the{' '}
        <a href="https://github.com/d3/d3-scale">d3-scale</a> module of d3.js.
      </p>
      <p>
        It expects 2 inputs: a <b>domain</b> and a <b>range</b>.
      </p>
      <h3 className="mt-2 text-md">🏠 Domain</h3>
      <p>
        Usually an array of length 2. It provides the <code>min</code> and the{' '}
        <code>max</code> of the values we have in the dataset.
      </p>
      <h3 className="mt-2 text-md">📏 Range</h3>
      <p>
        Usually an array of length 2. It provides the start and the end of the
        positions we are targeting <b>in pixel</b>.
      </p>
      <p>
        <br />
      </p>
      <p>
        The output is a <b>function</b> that takes a single argument. You
        provide a value from the domain, and it returns the corresponding value
        from the range.
      </p>
      <p>
        Let's create a scale to address the issue with the green circles above!
      </p>
      <CodeBlock
        code={`
import {scaleLinear} from d3

const scale = scaleLinear()
  .domain([0, 100])
  .range([0, 500]);

console.log( scale(82) )
// 410

      `}
      />

      {/* -
-
-
-
-
-
- */}
      <h2>Dealing with the Y Axis</h2>
      <p>By now, working with the X scale should feel intuitive.</p>
      <p>
        However, the Y axis behaves a bit differently. Typically, when a value
        is <b>high</b>, we expect the corresponding data point to be{' '}
        <b>near the top</b> of the SVG area. Conversely, a value close to 0
        should appear near the bottom.
      </p>
      <p>
        This means the Y scale is essentially inverted! Luckily, we can handle
        this easily by <b>reversing the order</b> of the range array.
      </p>
      <p>Take a close look at the code below:</p>

      <CodeBlock
        code={`
const yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([300, 0]); // Array is inverted! Smallest value will return 300px = bottom of the svg area

console.log(yScale(0))    // 300
console.log(yScale(100))  // 0
`}
      />

      {/* -
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
            title: <span>Control bar size with a scale</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>Three Bars!</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
          {
            title: <span>Reverse direction</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
          {
            title: <span>Mirror barplot</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[3]} />,
          },
        ]}
      />
      {/* -
-
-
-
-
-
- */}

      <h2>Wouch! 😅</h2>
      <p>That was challenging!</p>
      <p>
        Scales are a core concept in D3.js data visualization, which is why we
        needed so many exercises!
      </p>
      <p>
        You've mastered the most important part, but we're not done with scales
        just yet. Let's explore a few other useful scale types!
      </p>
    </LayoutCourse>
  );
}

const exercices: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>
          Now that you know what a scale is, time to write your first scale!
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>Create a barplot with 1 bar only.</li>
        <li>The SVG area is 500px wide. Your dataset goes from 0 to 100.</li>
        <li>
          Draw a horizontal bar that goes from the very left, and has a length
          that represents a value of 82 in the dataset.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/linearScaleBarSizePractice',
    solutionSandbox: 'exercise/linearScaleBarSizeSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Once a scale is available, everything you draw on your screen will go
          through it to determine positions!
        </p>
        <p>
          Also, see how convenient scales are when it comes to adding margins!
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>Now create 3 bars.</li>
        <li>Vertical positions are written manually</li>
        <li>
          Widths must represent the value <code>34</code>, <code>53</code> and{' '}
          <code>82</code>
        </li>
        <li>
          ⚠️ You must leave a <b>margin</b> of 20px on the left hand side.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/linearScaleThreeBarsPractice',
    solutionSandbox: 'exercise/linearScaleThreeBarsSolution',
  },

  {
    whyItMatters: (
      <>
        <p>Scales are very useful to reverse the direction of drawing</p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Let's draw one single bar that represents the value <code>82</code>
        </li>
        <li>But this time, the bar must go from the right to the left.</li>
        <li>
          Hint: reverse the <code>range</code> array!
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/linearScaleReversePractice',
    solutionSandbox: 'exercise/linearScaleReverseSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          There is no way you can build this kind of chart with a charting
          library like <code>plotly</code> or <code>highCharts</code>.
        </p>
        <p>
          Thanks to <code>d3</code>, we can build literally anything. It's just
          a bit of mental gymnastic!
        </p>
      </>
    ),
    toDo: (
      <>
        <p>
          Let's create a mirror histogram! Check the <code>solution</code> tab
          to see how it must look like.
        </p>
        <ul>
          <li>
            There are 3 bars on the left, and 3 and on the right. All starting
            from the center.
          </li>
          <li>
            A bit of <code>padding</code> is added in the center.
          </li>
          <li>
            Bar values are <code>23</code>, <code>55</code>, <code>87</code> on
            the left, and <code>12</code>, <code>43</code>, <code>98</code> on
            the right. Axes go from 0 to 100.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/linearScaleMirrorPractice',
    solutionSandbox: 'exercise/linearScaleMirrorSolution',
  },
];
