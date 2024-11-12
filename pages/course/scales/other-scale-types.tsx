import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { scaleBand } from 'd3';
import { Caption } from '@/component/UI/Caption';
import { Sidenote } from '@/component/SideNote';
import { Graph12 } from '@/viz/exercise/ScaleFourBarsSolution/Graph';
import { Graph19 } from '@/viz/exercise/ScaleFourBarsAndNameSolution/Graph';

const previousURL = '/course/scales/linear-scale';
const currentURL = '/course/scales/other-scale-types';
const nextURL = '/course/scales/project';
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
              While <code>scaleLinear</code> is one of the most commonly used D3
              scales, other scale types are essential for creating even basic
              charts.
            </p>
            <p>
              Let's explore <code>scaleBand</code>, <code>scaleOrdinal</code>,
              and other indispensable functions!
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
      <h2>
        <code>scaleBand()</code> to create... bands 🙂
      </h2>
      <p>
        <code>scaleBand()</code> is ideal for categorical variables as it
        allocates equal space for each category, ensuring that every discrete
        value is uniformly represented on the axis.
      </p>
      <h3>Example</h3>
      <p>
        You want to create a horizontal bar chart with <b>3 bars</b> in a figure
        that is <b>240 pixels high</b>. You want to dedicate 33% of the total
        height for white space: this is the padding between bars.
      </p>
      <p>You'll end up with the dimensions outlined below:</p>
      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/excalidraw/anatomy-scaleBand.png"
          style={{ maxWidth: 800 }}
          alt="schema explaining what the scaleBand() function produces"
        />
        <Caption>
          All the numbers produced by the <code>scaleBand()</code> function.
        </Caption>
      </div>
      <p>
        You can easily compute these values using the <code>scaleBand()</code>{' '}
        function!
      </p>
      <div className="relative">
        <Sidenote
          text={
            <p>
              There are many ways to control the <code>padding</code>. The
              official <a href="https://d3js.org/d3-scale/band">doc</a> explains
              very well!
            </p>
          }
        />
        <ul>
          <li>
            The <code>domain</code> is an array that lists the groups.
          </li>
          <li>
            The <code>range</code> is a two-element array that specifies the
            pixel positions where the shapes will be drawn.
          </li>
          <li>
            The optional <code>padding</code> method is expressed as a fraction
            of the band width.
          </li>
        </ul>
      </div>
      <CodeBlock
        code={`
const yScale = d3.scaleBand()
  .domain(['A', 'B', 'C'])
  .range([0, height])
  .padding(0.1)
      `.trim()}
      />

      <p>
        Now that this scale is available, let's use it to get all the positions
        we need! Note that the <code>yScale</code> function we now have returns
        the <code>start</code> of the corresponding band:
      </p>

      <CodeBlock
        code={`
// Top of each bar:
console.log(yScale('A')); // 0
console.log(yScale('B')); // 90
console.log(yScale('C')); // 180

// Width of a bar:
console.log(yScale.bandwidth()); // 60
      `.trim()}
      />

      <p>
        That's it! We have all the numbers we need to make a{' '}
        <Link href="/barplot">barplot</Link>! 🎉
      </p>

      <p>
        <br />
      </p>

      <blockquote>
        TODO: add a simulator to make ppl understand <code>padding</code>,{' '}
        <code>innerPadding</code> and <code>outerPadding</code>.
      </blockquote>
      {/* -
-
-
-
-
-
- */}
      <h2>
        Scales are not just for positioning: <code>scaleOrdinal()</code>
      </h2>
      <p>
        Scales are a fundamental concept in data visualization, and they are not
        limited to positioning elements!
      </p>
      <p>
        <code>scaleOrdinal()</code> is a great example: it maps a set of
        discrete values to another set of discrete values. For instance, it can
        be used to assign a specific color to each group name.
      </p>

      <CodeBlock
        code={`
const colorScale = d3.scaleOrdinal()
  .domain(["a", "b", "c"])            // I have 3 groups in the dataset: a, b, c
  .range(["red", "green", "blue"])    // I want to assign 3 colors to them

colorScale("a") // --> red!
colorScale("b") // --> green

      `.trim()}
      />
      {/* -
-
-
-
-
-
- */}
      <h2>More Scale Types to Explore!</h2>
      <p>
        The <code>d3-scale</code> module includes 13 different types of scales.
      </p>
      <p>
        However, they all follow the same core pattern. Rather than covering
        each one individually now, we'll explore them throughout the course as
        they come up.
      </p>

      <blockquote className="bg-fuchsia-50 py-8">
        <div>
          <p>
            By now, you should have a solid understanding of how scales work.
          </p>
          <p>
            While I don’t recommend it, you can always check out the full list
            of scale types in the{' '}
            <a href="https://d3js.org/d3-scale">official documentation</a> if
            you're curious!
          </p>
        </div>
      </blockquote>

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
            title: <span>First barplot!</span>,
            content: 'todo',
          },
          {
            title: <span>Tiny bars?</span>,
            content: 'todo',
          },
          {
            title: <span>Use colors for groups</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
          {
            title: <span>Add name labels!</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
          {
            title: <span>Switch to vertical version</span>,
            content: 'todo',
          },
        ]}
      />
      <Graph19 />
      {/* -
-
-
-
-
-
- */}

      <h2>It's taking shape! 🎉</h2>
      <p>
        You've now mastered two fundamental concepts of dataviz with React and
        D3: <b>SVG</b> and <b>Scales</b>. This means{' '}
        <b>we're ready to build actual graphs</b>!
      </p>
      <p>
        In the next lesson, you'll dive into a hands-on exercise where we
        recreate a real-world chart using everything you've learned so far.
      </p>
      <p>Let's do it! 🙇</p>
    </LayoutCourse>
  );
}

const exercices: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>todo</p>
      </>
    ),
    toDo: (
      <ul>
        <li>todo</li>
      </ul>
    ),
    practiceSandbox: 'exercise/linearScaleBarSizePractice',
    solutionSandbox: 'exercise/linearScaleBarSizeSolution',
  },
  {
    whyItMatters: (
      <>
        <p>todo</p>
      </>
    ),
    toDo: (
      <ul>
        <li>todo</li>
      </ul>
    ),
    practiceSandbox: 'exercise/linearScaleThreeBarsPractice',
    solutionSandbox: 'exercise/linearScaleThreeBarsSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          Lear how to use <code>scaleOrdinal</code> to create a color scale!
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          There is now a <code>group</code> property in the dataset
        </li>
        <li>
          Create a scaleOrdinal that uses blue the for A group, and orange for
          the B group
        </li>
        <li>Use this scale to color the bars</li>
      </ul>
    ),
    practiceSandbox: 'exercise/ScaleFourBarsPractice',
    solutionSandbox: 'exercise/ScaleFourBarsSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          Lear how to use <code>scaleOrdinal</code> to create a color scale!
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          There is now a <code>group</code> property in the dataset
        </li>
        <li>
          Create a scaleOrdinal that uses blue the for A group, and orange for
          the B group
        </li>
        <li>Use this scale to color the bars</li>
      </ul>
    ),
    practiceSandbox: 'exercise/ScaleFourBarsAndNamePractice',
    solutionSandbox: 'exercise/ScaleFourBarsAndNameSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          The logic behind each functions of the <code>d3-shape</code> module is
          the same.
        </p>
        <p>
          If you have a good understanding of d3.line(), you're on the right way
          to build any other chart type!
        </p>
      </>
    ),
    toDo: (
      <>
        <p>
          Let's create a mirror histogram!! The mirror histogram looks like
          this:
        </p>
        <ul>
          <li>Create 2 scales!</li>
          <li>
            Values are <code>23</code>, <code>55</code>, <code>87</code> on the
            left, and <code>12</code>, <code>43</code>, <code>98</code> on the
            right
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/linearScaleMirrorPractice',
    solutionSandbox: 'exercise/linearScaleMirrorSolution',
  },
];
