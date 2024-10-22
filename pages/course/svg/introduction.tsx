import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import Link from 'next/link';
import { Badge } from '@/component/UI/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import { ExerciseDoubleSandbox } from '@/component/ExerciseDoubleSandbox';
import { Caption } from '@/component/UI/Caption';
import { Sidenote } from '@/component/SideNote';

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

      <h2>You can style SVG</h2>
      <p>
        SHow that yu can add a css file and it works. But it has some
        specificity.
      </p>

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
            content: (
              <div>
                <p>Some random content mate!</p>
              </div>
            ),
          },
          {
            title: <span>Developer console</span>,
            content: (
              <div>
                <p>Some random content mate!</p>
              </div>
            ),
          },
          {
            title: <span>Background Color</span>,
            content: (
              <div>
                <p>Some random content mate!</p>
              </div>
            ),
          },
          {
            title: <span>Overflow</span>,
            content: (
              <div>
                <p>Some random content mate!</p>
              </div>
            ),
          },
        ]}
      />
    </LayoutCourse>
  );
}

const exercices = [
  {
    title: <span>Draw 1 Circle</span>,
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
    practiceSandbox: 'exercise/SvgTwoCirclesPractice',
    solutionSandbox: 'exercise/SvgTwoCirclesSolution',
  },
];
