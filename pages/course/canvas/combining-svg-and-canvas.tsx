import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotCanvasBasicDemo } from '@/viz/ScatterplotCanvas/ScatterplotCanvasBasicDemo';
import { BubblePlotCanvasDemo } from '@/viz/BubblePlotCanvas/BubblePlotCanvasDemo';
import { Caption } from '@/component/UI/Caption';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/canvas/drawing-shapes-with-canvas';
const currentURL = '/course/canvas/combining-svg-and-canvas';
const nextURL = '/course/canvas/svg-path-in-canvas';
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
              When displaying 100,000 circles in a scatterplot, using canvas is{' '}
              <b>essential for performance</b>.
            </p>
            <p>
              However, SVG is still ideal for axes and lighter graphical
              elements. Let’s explore how to <b>combine</b> SVG and canvas
              effectively!
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
       */}
      <h2>🍔 Stacking Canvas and SVG</h2>
      <p>
        In the previous lesson, we learned how to loop through a dataset and
        render a circle for each item. This is very close to creating a{' '}
        <Link href="/bubble-plot">bubble chart</Link>! 🎉
      </p>
      <p>
        In earlier modules, we explored how to{' '}
        <Link href="/course/axis/margin-and-translation">add margins</Link>{' '}
        around the chart area and created{' '}
        <Link href="/course/axis/bottom-axis">reusable axis</Link> components to
        define the x and y scales.
      </p>
      <p>
        The great news is that we can seamlessly combine both{' '}
        <code>canvas</code> and <code>SVG</code>, since, at the core, they're
        both HTML elements!
      </p>

      <p>
        <br />
      </p>
      <center>
        <img src="/excalidraw/canvas-axis-layers.png" width={550} />
        <Caption>
          How to overlap SVG and Canvas layers to create a bubble plot.
        </Caption>
      </center>
      <p>
        <br />
      </p>

      <h2>🔎 How your DOM will look like</h2>
      <p>
        Below is some pseudocode demonstrating the JSX structure of the graph
        component.
      </p>
      <p>
        Essentially, your SVG and canvas elements need to be <b>absolutely</b>{' '}
        positioned (using <code>position: absolute</code>) to stack correctly on
        top of each other.
      </p>
      <p>
        A key point to remember is that absolutely positioned elements are
        positioned relative to the nearest positioned ancestor. So, make sure
        the parent <code>div</code> is set to <code>position: relative</code>,
        or the positioning won’t work as expected.
      </p>

      <CodeBlock
        code={`
{/* Parent div */}
<div style={{ position: 'relative' }}>

  {/* Bounds div */}
  <div
    style={{
      transform: ...translate for margins,
      width: boundsWidth,
      height: boundsHeight,
    }}
  >

      {/* Axes */}
      <svg
        width={boundsWidth}
        height={boundsHeight}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />
        <g transform={...translate to bottom}>
          <AxisBottom xScale={xScale} pixelsPerTick={40} height={boundsHeight}/>
        </g>
      </svg>

      {/* Canvas is for the circles */}
      <canvas
        style={{ position: 'relative' }}
        ref={canvasRef}
        width={boundsWidth}
        height={boundsHeight}
      />
  </div>
</div>
      `}
      />

      <h2>Application: bubble plot</h2>
      <p>
        Here's an example of a <Link href="/bubble-plot">bubble plot</Link>{' '}
        created with SVG and React! Take a moment to review the code and ensure
        you fully understand each part.
      </p>

      <ChartOrSandbox
        vizName={'BubblePlotCanvas'}
        VizComponent={BubblePlotCanvasDemo}
        height={600}
        maxWidth={600}
        caption="Your fist bubble chart using canvas (for circles) and SVG (for axes)"
      />

      <h2>Your turn!</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Your own bubble chart</span>,
            content: (
              <div>
                <p>Here is a simple dataset:</p>
                <CodeBlock
                  code={`
const data = [
  {x: 12, y: 99},
  {x: 22, y: 9},
  {x: 2, y: 89},
  {x: 98, y: 34},
  {x: 76, y: 22},
]
              `.trim()}
                />
                <p>
                  Create a very simple scatterplot that represents this dataset,
                  with a <code>x</code> and and a <code>y</code> axis.
                </p>
              </div>
            ),
          },
        ]}
      />
    </LayoutCourse>
  );
}
