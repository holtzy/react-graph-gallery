import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ScatterplotCanvasHoverEffectDemo } from '@/viz/ScatterplotCanvasHoverEffect/ScatterplotCanvasHoverEffectDemo';
import { TakeHome } from '@/component/TakeHome';
import Link from 'next/link';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/animation/project';
const currentURL = '/course/canvas/introduction';
const nextURL = '/course/canvas/drawing-shapes-with-canvas';
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
              By now, after completing the previous modules, you’re likely able
              to draw <b>almost anything</b> on the screen— including
              interactive elements like tooltips, hover effects, and animations.
            </p>
            <p>
              However, there's a significant bottleneck:{' '}
              <TakeHome>performance</TakeHome>. Let's explore{' '}
              <code>canvas</code>, a rendering engine that can help solve this
              issue.
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
      -
      - */}
      <h2>The Problem with SVG</h2>
      <p>
        SVG can be <b>slow</b>.
      </p>
      <p>
        If you’re working with chart types that don’t involve too many elements,
        like simple <Link href="line-chart">line</Link> or{' '}
        <Link href="/barplot">bar</Link> charts, SVG will handle them well.
      </p>
      <p>
        But if you create a <Link href="/scatter-plot">scatterplot</Link> with
        100,000 data points and layer on complex animations, you’ll likely run
        into <b>performance troubles</b>.
      </p>
      <p>
        So, <TakeHome>why is SVG slow?</TakeHome>
      </p>
      <h3>🐢 Drawing SVG is CPU-Only</h3>
      <p>SVG rendering relies entirely on the CPU, with no GPU acceleration.</p>
      <p>
        This means every shape, line, or point in an SVG graphic is drawn by the
        CPU, which can quickly become a bottleneck. Without the benefit of GPU
        power, rendering large amounts of data or intricate animations can be
        time-consuming and sluggish.
      </p>
      <h3>🏋️‍♀️ SVG Creates a Heavy DOM</h3>
      <p>
        Each element you draw in SVG is added as a{' '}
        <b>separate line in the DOM</b>.
      </p>
      <p>
        For a large number of elements, this quickly<b> bloats the DOM</b>,
        which your browser has to continuously manage and render.
      </p>
      <p>
        Adding event listeners to each element further increases the workload,
        as the browser must keep track of interactions on all these individual
        DOM nodes. And as the DOM grows, <b>memory</b> usage rises as well,
        which can lead to even more slowdowns.
      </p>
      {/* -

      -
      -
      -
      -
      -
       */}
      <h2>Example</h2>
      <p>
        Here’s a small scatterplot with a few thousand data points and a hover
        effect that updates an internal state.
      </p>
      <p>
        Hover over it with your mouse. Notice the lag? See how slow it gets?
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName={'exercise/HoverDeathByStateSolution'} />
      </div>
      <p>
        <br />
      </p>
      <p>
        With just a few graphs like this in your app, you can quickly reach a
        million nodes in the DOM 🙈.{' '}
      </p>
      <p>
        When that happens, your entire app—or even the whole browser—can{' '}
        <b>start to freeze</b> as it struggles to manage the overwhelming number
        of elements.
      </p>
      <h2>So,</h2>
      <p>
        <br />
      </p>
      <blockquote className="bg-fuchsia-50 py-8">
        <p>
          If your graph has a large number of elements or requires heavy
          animations, it’s best to move away from SVG and choose something more
          performant, like <code>canvas</code>.
        </p>
      </blockquote>{' '}
      {/* -

-
-
-
-
-
 */}
      <h2>⚡️ What is canvas, and why is it fast</h2>
      <p>
        Canvas provides a high-performance, low-level context for drawing 2D
        graphics, animations, and even simple games, giving you{' '}
        <b>pixel-level</b> control for faster rendering, especially with dynamic
        content or large datasets.
      </p>
      <p>
        <code>canvas</code> is an HTML element! You can create one by writing:
      </p>
      <CodeBlock
        code={`
<canvas width={300} height={200}/>
      `}
      />
      <p>
        Think of it like holding a whiteboard, ready to draw on it—only
        lightning fast!
      </p>
      {/* -

-
-
-
-
-
 */}
      <h2>Not convinced?</h2>
      <p>Check the same sandbox, made in Canvas!</p>
      <ChartOrSandbox
        vizName={'ScatterplotCanvasHoverEffect'}
        VizComponent={ScatterplotCanvasHoverEffectDemo}
        height={400}
        maxWidth={600}
        caption="A scatterplot with thousands of point and a fast hover effect."
      />
      <h2>Looks fun, let’s code!</h2>
      <p>
        Yep, but be ready to <b>learn from scratch</b>—and to break a sweat!
      </p>
      <p>
        In this module, we’ll dive into how the <code>canvas</code> works, how
        to use it effectively, and how it can solve performance issues in your
        web apps.
      </p>
    </LayoutCourse>
  );
}
