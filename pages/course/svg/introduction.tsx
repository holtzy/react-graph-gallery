import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { CodeSandbox } from '@/component/CodeSandbox';
import Link from 'next/link';
import { Badge } from '@/component/UI/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { Caption } from '@/component/UI/Caption';
import { Sidenote } from '@/component/SideNote';
import { ScatterplotBasicDemo } from '@/viz/ScatterplotBasic/ScatterplotBasicDemo';

const previousURL = '/course/introduction/initial-setup';
const currentURL = '/course/svg/introduction';
const nextURL = '/course/svg/main-svg-elements';
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
              At its core, <b>a graph is just a bunch of shapes</b> such as
              circles, rectangles, and lines displayed on a screen. Using
              standard HTML elements to draw these shapes would be{' '}
              <b>cumbersome and limiting</b>.
            </p>
            <p>
              Fortunately, there's a <b>more efficient solution</b>: SVG. SVG is
              a versatile and widely-used technology that allows us to draw
              shapes in the browser with precision and ease.
            </p>
            <p>
              In this module, we'll explore how SVG works and how it can be
              harnessed to create dynamic and insightful data visualizations.
            </p>
          </>
        }
      />

      <h2>What is SVG</h2>

      <Tabs defaultValue="boring">
        <TabsList className="my-4">
          <TabsTrigger value="boring">Boring definition</TabsTrigger>
          <TabsTrigger value="personal">Personal Definition</TabsTrigger>
        </TabsList>
        <TabsContent value="boring">
          <p>
            Scalable Vector Graphics (
            <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG</a>)
            is an XML-based format for vector graphics. Unlike raster graphics
            which are made up of pixels, SVG uses vector data (points, lines,
            and curves) to create images. This means SVG images are
            resolution-independent and can scale up or down without losing
            quality.
          </p>
        </TabsContent>
        <TabsContent value="personal">
          <p>
            The <code>&lt;svg&gt;</code> tag is an HTML element that you can use
            directly in your React components. You can draw a variety of shapes
            using predefined SVG elements like <code>&lt;circle&gt;</code> and{' '}
            <code>&lt;rect&gt;</code>. Many of the graphs and visualizations you
            see on the web are created using SVG.
          </p>
        </TabsContent>
      </Tabs>

      <p>
        <br />
      </p>
      <center>
        <img
          src="/excalidraw/anatomy-of-a-svg.png"
          width={400}
          alt="anatomy of a react app with a svg area"
        />
        <Caption>
          Anatomy of a React app with a graph built in a svg area.
        </Caption>
      </center>

      <h2>Most simple example</h2>
      <p>Here is a very simple react app that uses SVG to render a circle:</p>
      <ul>
        <li>
          A react component called <code>SvgCircle</code> is defined in a file
          called <code>SvgCircle.tsx</code>.
        </li>
        <li>
          It renders an SVG area thank to a <code>&lt;svg&gt;</code> HTML
          element. It has some <code>width</code> and <code>height</code>
        </li>
        <li>
          In this SVG area, a <code>&lt;circle&gt;</code> is drawn.{' '}
          <code>cx</code> and <code>cy</code> set the position of the circle.{' '}
          <code>r</code> its radius.
        </li>
      </ul>

      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgCircle" />
      </div>
      <p>Awesome! 🔆</p>
      <p>
        With just a few more circles like this, we'll have a complete{' '}
        <Link href="/scatter-plot">scatterplot</Link>!
      </p>
      <p>
        <u>Note</u>: The coordinate system of SVG starts at the top-left corner,
        where the origin point (0,0) is located.
      </p>

      <h2>Coordinates are upside down 🙃</h2>
      <p>
        SVG uses a coordinate system where the origin <code>(0, 0)</code> is at
        the <b>top-left</b> corner of the canvas.
      </p>
      <p>
        As you move right, the <code>x</code> values increase, just like you'd
        expect. But here's the catch: the <code>y</code> values increase as you
        move down instead of up, which is different from typical Cartesian
        coordinates.
      </p>
      <p>So, it's like the coordinate system is upside down for the y axis.</p>

      <p>
        <br />
      </p>

      <center>
        <img
          src="/excalidraw/svg-coordinates.png"
          width={400}
          alt="Diagram explaining svg coordinates"
        />
        <Caption>
          SVG coordinates are upside-down: 0,0 is at the top left!
        </Caption>
      </center>

      <h2>
        Benefits{' '}
        <Badge variant={'outlineGreen'} className="ml-2 -translate-y-1">
          Pros
        </Badge>
      </h2>

      <ul>
        <li>
          <strong>Scalability:</strong> SVG images maintain their quality at any
          size, making them ideal for responsive design. Whether viewed on a
          small mobile screen or a large desktop monitor, SVG graphics look
          crisp and clear.
        </li>
        <li>
          <strong>Interactivity:</strong> SVG elements can be styled and
          animated using CSS and JavaScript, allowing for dynamic and
          interactive graphics. This makes SVG a powerful tool for creating
          engaging data visualizations.
        </li>
        <li>
          <strong>Accessibility:</strong> Text within SVG is searchable and
          accessible by screen readers. This enhances the accessibility of web
          content, making it more usable for people with disabilities.
        </li>
        <li>
          <strong>Usability:</strong> SVG elements are easy to manipulate,
          allowing you to create complex shapes from simple ones with ease.
        </li>
      </ul>

      <h2>
        Limitations{' '}
        <Badge variant={'outlineDestructive'} className="ml-2 -translate-y-1">
          Cons
        </Badge>
      </h2>
      <p>
        SVG has <b>performance limitations</b>, especially when used for data
        visualization.
      </p>
      <div className="relative">
        <Sidenote
          text={
            <p>
              💡 DOM = <b>Document Object Model</b>. It is basically list that
              shows all the elements of a webpage and how they're arranged.
            </p>
          }
        />
        <p>
          SVG graphs are defined in the DOM. Each SVG element{' '}
          <b>increases the number of DOM nodes</b>. If you create a scatterplot
          with 1 million circles, it will make the make the DOM{' '}
          <b> very heavy</b>.
        </p>
      </div>
      <p>
        As a result, <b>the browser may become slow and unresponsive</b> due to
        the increased workload of rendering and managing numerous SVG elements.
        This can lead to performance bottlenecks, particularly on devices with
        limited processing power or memory.
      </p>

      <h2>Exercices</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Your first circle</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>SVG coordinates</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
          {
            title: <span>Developer console</span>,
            content: (
              <div>
                <p>
                  Open your developer console and inspect the scatterplot below.
                </p>
                <p>
                  Take some time to understand how the SVG structure is
                  organized.
                </p>
                <center>
                  <ScatterplotBasicDemo width={500} height={500} />
                </center>
              </div>
            ),
          },
          {
            title: <span>Background Color</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
          {
            title: <span>Overflow</span>,
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
          A chart is basically a <b>set of SVG elements</b>!
        </p>
        <p>
          Learn how to draw one circle, and you almost know how to make a
          scatterplot 🎉.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>Draw 1 circle in the SVG area</li>
        <li>
          Use the <code>circle</code> element
        </li>
        <li>
          Provide values for <code>cx</code>, <code>cy</code>, and{' '}
          <code>r</code>. Use also <code>fill</code> for the color.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgOneCirclePractice',
    solutionSandbox: 'exercise/SvgOneCircleSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          It's counter intuitive! <code>0,0</code> is at the top left.
        </p>
        <p>
          It's important to get used to this mental gymnastic, we'll use it in
          literally every chart.
        </p>
      </>
    ),
    toDo: (
      <ul>
        <li>
          Draw a <code>red</code> circle 20px from the top left of the svg area.
        </li>
        <li>
          Draw a <code>blue</code> circle at 19px from the bottom right corner.
        </li>
        <li>
          Draw a <code>pink</code> circle at 43px from the left and 12px from
          the bottom.
        </li>
      </ul>
    ),
    practiceSandbox: 'exercise/SvgThreeCirclesPractice',
    solutionSandbox: 'exercise/SvgThreeCirclesSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Many CSS features either don't work or behave differently with SVG.
        </p>
        <p>We'll uncover them all as we go through the course!</p>
      </>
    ),
    toDo: (
      <>
        <p>
          Add a <code>rect</code> SVG element with the same dimensions as the
          SVG area. Add some <b>inline style</b> to the svg area below.
        </p>
        <p>
          Use the <code>backgroundColor</code> property to change the background
          to <code>grey</code>.
        </p>
      </>
    ),
    practiceSandbox: 'exercise/SvgBackgroundColorPractice',
    solutionSandbox: 'exercise/SvgBackgroundColorSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          This is a common challenge. Allowing overflow can be helpful for
          labels, tooltips, and other elements.
        </p>
        <p>
          However, it can quickly become frustrating when multiple charts are
          displayed in the same app.
        </p>
      </>
    ),
    toDo: (
      <>
        <p>Half the circle below is missing 😱.</p>
        <p>
          Use the <code>overflow</code> css property to make it appear.
        </p>
      </>
    ),
    practiceSandbox: 'exercise/SvgOverflowPractice',
    solutionSandbox: 'exercise/SvgOverflowSolution',
  },
];
