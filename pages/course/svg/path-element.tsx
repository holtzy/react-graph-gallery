import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Sidenote } from '@/component/SideNote';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';

const previousURL = '/course/svg/main-svg-elements';
const currentURL = '/course/svg/path-element';
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
              In this lesson, we'll dive into one of the most versatile and
              powerful elements in SVG: the <code>&lt;path&gt;</code> element.
            </p>
            <p>
              The <code>&lt;path&gt;</code> element allows you to create complex
              shapes and lines that go beyond the basic geometric shapes. It is
              essential to build some graph types like an{' '}
              <Link href="/area-plot">area chart</Link> or a{' '}
              <Link href="/line-chart">line chart</Link>.
            </p>
          </>
        }
      />

      <h2>Most basic example</h2>
      <p>
        The <code>&lt;path&gt;</code> element allows to draw literally any shape
        in the SVG area.
      </p>
      <p>
        You provide it with a series of <b>drawing commands</b> that will make
        straight or curved lines, resulting in your final shape.
      </p>
      <p>Let's check a basic example:</p>
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
      <p>This will result in the following shape:</p>
      <svg height="280" width="400">
        <path
          d="M0 105 L100 200 L200 200 L300 20 L350 120"
          fill="none"
          stroke="#69b3a2"
        />
      </svg>

      <p>Nice! This almost look like a line chart already!</p>
      <p>
        As you can see the <code>&lt;path&gt;</code> element expect a required{' '}
        <code>d</code> attribute. This attribute defines the shape of the path.
        Let's discover its syntax.
      </p>

      <h2>
        Understanding the <code>d</code> Attribute
      </h2>
      <p>
        The <code>d</code> attribute defines the shape and outline of the path
        by specifying a series of drawing commands.
      </p>
      <p>
        Each command consists of a <b>letter</b> that represents the type of
        drawing action (such as <code>M</code> for <i>Move To</i>) followed by
        one or more <b>numbers</b> that define the coordinates or control
        points.
      </p>
      <p>Here is a breakdown of the svg path above:</p>
      <div className="relative">
        <Sidenote
          text={
            <p>
              Remember that the coordinate system starts from the top left in
              svg!
            </p>
          }
        />
      </div>
      <ul>
        <li>
          <code>M0 105</code>: moves the starting point of the path to
          coordinates <code>0, 105</code>. (<code>M</code> stands for{' '}
          <i>move to</i>)
        </li>
        <li>
          <code>L100 200</code>: draws a straight line from the current point (
          <code>0, 105</code>) to the point (<code>100, 200</code>). (
          <code>L</code> stands for <i>line to</i>)
        </li>
        <li>
          <code>200 200</code>: draws a new straight line from the current point
          to the point (<code>200, 200</code>).
        </li>
      </ul>
      <p>
        Now, experiment with some changes in the sandbox below to get a better
        understanding of how it works:
      </p>

      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgPath" />
      </div>

      <h2>The good news 🎁</h2>
      <p>
        You won’t need to manually write the <code>d</code> attribute yourself.
        Understanding its role is helpful, but in practice, you'll rely on d3.js
        helper functions to <b>generate paths for you</b>.
      </p>
      <p>
        These functions take your data and automatically <b>convert</b> it into
        the appropriate path data.
      </p>
      <p>
        This is one of the reasons why d3.js is so powerful and beloved for data
        visualization! 💙
      </p>

      <h2>Exercises</h2>
      <ExerciseAccordion
        exercises={[
          {
            title: <span>Your first line chart</span>,
            whyItMatters: (
              <>
                <p>
                  Creating a graph involves translating a <b>set of numbers</b>{' '}
                  from a table (the data) into <b>coordinates</b> on a screen!
                </p>
                <p>
                  While doing this manually can be tedious, we'll soon explore
                  how d3.js can <b>automate</b> the process and make it much
                  easier.
                </p>
              </>
            ),
            toDo: (
              <ul>
                <li>
                  Add a <code>path</code> element to the svg area
                </li>
                <li>
                  The x coordinates must be 0, 50, 100, 150, 200, 250, 300
                </li>
                <li>The y coordinates must be 40, 70, 150, 150, 200, 50, 90</li>
              </ul>
            ),
            practiceSandbox: 'exercise/SvgPathFirstLineChartPractice',
            solutionSandbox: 'exercise/SvgPathFirstLineChartSolution',
          },

          {
            title: (
              <span>
                Close a path with <code>Z</code> (and build your first area
                chart)
              </span>
            ),
            whyItMatters: (
              <>
                <p>
                  The <code>&lt;path&gt;</code> element can be used to draw
                  extended lines or create closed shapes.
                </p>
                <p>
                  To close a shape, add <code>Z</code> at the end of the{' '}
                  <code>d</code> attribute and use the <code>fill</code>{' '}
                  property to apply a color.
                </p>
              </>
            ),
            toDo: (
              <ul>
                <li>
                  Modify the path to start at the bottom-left corner of the SVG
                  area.
                </li>
                <li>
                  Adjust the path to end at the bottom-right corner of the SVG
                  area.
                </li>
                <li>
                  Add a <code>Z</code> at the end of the <code>d</code>{' '}
                  attribute to close the shape.
                </li>
                <li>
                  Update the <code>fill</code> property to apply a color to the
                  shape.
                </li>
              </ul>
            ),
            practiceSandbox: 'exercise/SvgPathFirstAreaChartPractice',
            solutionSandbox: 'exercise/SvgPathFirstAreaChartSolution',
          },
        ]}
      />
    </LayoutCourse>
  );
}
