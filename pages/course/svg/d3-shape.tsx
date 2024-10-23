import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Sidenote } from '@/component/SideNote';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';

const previousURL = '/course/svg/path-element';
const currentURL = '/course/svg/d3-shape';
const nextURL = '/course/svg/tips-and-tricks';
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
              Some shapes can be quite complex—like rings, slices, paths,
              polygons, and curves. Manually creating the <code>d</code>{' '}
              attribute for these shapes would be a nightmare!
            </p>
            <p>
              Fortunately, D3 provides a module called <code>d3-shape</code>{' '}
              specifically for handling all these shapes. Let’s explore how it
              can simplify our work.
            </p>
          </>
        }
      />
      {/* -
      -
      -
      -
      -
      - */}
      <h2>Building the line you need</h2>
      <p>
        In the previous lesson we introduced the path element, and showed that a
        line chart is basically rendered this way:
      </p>
      <CodeBlock
        code={`
<svg height="300" width="400">
  <path
    d="M0 105 L100 200 L200 200 L300 20 L350 120"
    fill="none"
    stroke="#69b3a2"
  />
</svg>
`.trim()}
      />
      <p></p>
      <CodeBlock
        code={`
const data = [
  { x: 0, y: 40 },
  { x: 50, y: 70 },
  { x: 100, y: 150 },
  ...
];

const lineGenerator = line()
  .x((d) => d.x)
  .y((d) => d.y);

const pathData = lineGenerator(data);

// console.log(pathData)
// "M0 40 L50 70 L100 150 L150 150 L200 200 L250 50 L300 90"
      `}
      />
      <h2>Exercises</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>First line chart</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: (
              <span>
                Close a path with <code>Z</code> (and build your first area
                chart)
              </span>
            ),
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
        ]}
      />{' '}
    </LayoutCourse>
  );
}

const exercices: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>
          Creating a graph involves translating a <b>set of numbers</b> from a
          table (the data) into <b>coordinates</b> on a screen!
        </p>
        <p>
          While doing this manually can be tedious, we'll soon explore how d3.js
          can <b>automate</b> the process and make it much easier.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Add a <code>path</code> element to the svg area
        </li>
        <li>The x coordinates must be 0, 50, 100, 150, 200, 250, 300</li>
        <li>The y coordinates must be 40, 70, 150, 150, 200, 50, 90</li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgPathFirstLineChartPractice',
    solutionSandbox: 'exercise/SvgPathFirstLineChartSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          The <code>&lt;path&gt;</code> element can be used to draw extended
          lines or create closed shapes.
        </p>
        <p>
          To close a shape, add <code>Z</code> at the end of the <code>d</code>{' '}
          attribute and use the <code>fill</code> property to apply a color.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Modify the path to start at the bottom-left corner of the SVG area.
        </li>
        <li>
          Adjust the path to end at the bottom-right corner of the SVG area.
        </li>
        <li>
          Add a <code>Z</code> at the end of the <code>d</code> attribute to
          close the shape.
        </li>
        <li>
          Update the <code>fill</code> property to apply a color to the shape.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgPathFirstAreaChartPractice',
    solutionSandbox: 'exercise/SvgPathFirstAreaChartSolution',
  },
];
