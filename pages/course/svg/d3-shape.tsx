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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { Caption } from '@/component/UI/Caption';

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
        In the previous lesson we introduced the <code>path</code> element, and
        showed that a line chart is basically rendered this way:
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
      <p>
        We also learned that d3 includes a module called <code>d3-shape</code>,
        which offers a variety of helper functions for building shapes. These
        functions take your data and automatically generate the <code>d</code>{' '}
        attribute for a path!
      </p>
      <p>
        Now, let’s explore how to use the <code>d3.line()</code> function to
        create the path for a line chart:
      </p>
      <p>
        <br />
      </p>
      <Tabs defaultValue="1">
        <TabsList className="my-4">
          <TabsTrigger value="1">
            <span
              className={
                'mr-2 text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none bg-black text-white'
              }
            >
              1
            </span>
            Data
          </TabsTrigger>
          <TabsTrigger value="2">
            <span
              className={
                'mr-2 text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none bg-black text-white'
              }
            >
              2
            </span>{' '}
            Build Path Generator
          </TabsTrigger>
          <TabsTrigger value="3">
            <span
              className={
                'mr-2 text-xs h-6 w-6 flex justify-center items-center rounded-full text-center leading-none bg-black text-white'
              }
            >
              3
            </span>{' '}
            Use Path Generator
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="1"
          className="pl-4 border-l-4  border-l-fuchsia-600"
        >
          <CodeBlock
            code={`
const data = [
  { x: 0, y: 40 },
  { x: 50, y: 70 },
  { x: 100, y: 150 },
  ...
];

      `.trim()}
          />
          <p>
            Everything begins with a <code>data</code> object, which is almost
            always an <b>array</b>.
          </p>
          <p>
            Each item in the array represents a <b>data point</b> and is usually
            an <b>object</b> with <b>properties</b>.
          </p>
          <p>
            For a line chart like the one above, you'll need at least two
            properties: one for the x-axis position and one for the y-axis
            position.
          </p>
        </TabsContent>

        <TabsContent
          value="2"
          className="pl-4 border-l-4  border-l-fuchsia-600"
        >
          <CodeBlock
            code={`
const lineGenerator = line()
  .x((d) => d.x)
  .y((d) => d.y);
      `.trim()}
          />
          <div className="relative">
            <Sidenote
              text={
                <p>
                  This syntax may seem a bit unusual. It's called method
                  chaining and is widely used in d3.js!
                </p>
              }
            />
            <p>
              Now, we need to create a <code>lineGenerator</code>, which is a
              function that takes data as input and returns a{' '}
              <code>string</code> representing the path. In the example above,
              we named it <code>lineGenerator</code>.
            </p>
            <p>
              This is made possible by the <code>line()</code> function in
              d3.js! This function returns another function.
            </p>
            <p>
              Using <b>method chaining</b>, we modify the{' '}
              <code>lineGenerator</code> by applying two changes:
            </p>
            <ul>
              <li>
                <code>x()</code> allows us to set the accessor function for the
                x positions.
              </li>
              <li>
                <code>y()</code> does it for y positions
              </li>
            </ul>
            <p>
              An accessor function takes a data item and returns its x position.
              In our case, for each data item <code>d</code>, we return
              <code>d.x</code>
            </p>
          </div>
        </TabsContent>

        <TabsContent
          value="3"
          className="pl-4 border-l-4  border-l-fuchsia-600"
        >
          <CodeBlock
            code={`
const pathData = lineGenerator(data);

// console.log(pathData)
// "M0 40 L50 70 L100 150 L150 150 L200 200 L250 50 L300 90"
      `}
          />
          <p>
            Once the <code>lineGenerator</code> function is set up, you can
            simply call it with your data, and it will generate the path ready
            to be drawn!
          </p>
        </TabsContent>
      </Tabs>
      {/* -
      -
      -
      -
      -
      - */}
      <h2>Money back! The syntax is weird!</h2>
      <p>
        When I first started using d3, I found this <b>method chaining</b>{' '}
        syntax very frustrating / weird / unusual / hard to read.{' '}
      </p>
      <p>
        I was more used to functions that take parameters and do stuff with it:
      </p>
      <CodeBlock
        code={`
// Create a function that expects 2 parameters
const multiply = (x, y) => x * y;

// Use the function, providing it the 2 paramters
multiply(4, 6))
// 24
      `.trim()}
      />
      <p>
        But that's how d3.js works, and I promise you will soon be used to it!
      </p>
      {/* -
      -
      -
      -
      -
      -
      -
      -
       */}
      <h2>Other helpers</h2>
      <p>
        The <code>d3.line()</code> function is one of the most versatile in d3,
        enabling the creation of key chart types like{' '}
        <Link href="/line-chart">line</Link> charts,{' '}
        <Link href="/lollipop-plot">lollipop</Link> plots, and even{' '}
        <Link href="/radar-chart">radar</Link> charts.
      </p>
      <p>
        However, you can’t use it to create a donut chart! For that, you’ll need
        to draw <b>arcs</b>, and d3 provides a specific helper for this:{' '}
        <code>d3.arc()</code>.
      </p>
      <p>
        <br />
      </p>
      <p>
        The <code>d3-shape</code> module includes{' '}
        <a href="https://d3js.org/d3-shape">15 functions</a> in total. Here's a
        diagram that highlights the most important ones, which can help you
        build about 80% of chart types!
      </p>
      <p>
        <br />
      </p>
      <center>
        <img src="/excalidraw/d3-shape-main-functions.png" width={600} />{' '}
        <Caption>
          Main functions of the <code>d3-shape</code> module
        </Caption>
      </center>
      <p>
        <br />
      </p>
      <blockquote className="bg-fuchsia-50 py-8">
        <p>
          Describing each of these functions in detail one by one would be
          tedious. Instead, we’ll introduce them <b>gradually</b> throughout the
          course.
        </p>
        <p>
          <br />
          <br />
        </p>
        <p>
          What’s crucial to remember is that they all share a{' '}
          <b>common structure</b>: path generators, method chaining, and
          accessor functions are key concepts you'll need to fully grasp.
        </p>
      </blockquote>
      {/* -
      -
      -
      -
      -
      -
      -
      -
       */}
      <h2>Exercises</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: (
              <span>
                <code>d3.line()</code> basic usage
              </span>
            ),
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>Changing the accessor function</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
          {
            title: (
              <span>
                Switching to an area with <code>d3.area()</code>
              </span>
            ),
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
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
