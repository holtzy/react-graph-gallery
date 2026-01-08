import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
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
import { AreaChartBasicDemo } from '@/viz/AreaChartBasic/AreaChartBasicDemo';
import { TakeHome } from '@/component/TakeHome';
import { AreaChartCanvasDemo } from '@/viz/AreaChartCanvas/AreaChartCanvasDemo';
import { DonutChartCanvasDemo } from '@/viz/DonutChartCanvas/DonutChartCanvasDemo';

const previousURL = '/course/canvas/combining-svg-and-canvas';
const currentURL = '/course/canvas/svg-path-in-canvas';
const nextURL = '/course/canvas/hover-effect';
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
              We've seen how powerful D3 is for transforming a dataset into an
              SVG <code>path</code>. For example, give it a radius and angle,
              and it can easily generate an arc path.
            </p>
            <p>
              But how can we use this same data to draw the shape with canvas?
              Let’s explore.
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
      <h2>Remember the area chart?</h2>
      <p>
        Before we start using canvas, let's remind quickly how to build an{' '}
        <Link href="/area-plot">area chart</Link> with react and d3.
      </p>
      <p>Everything starts with a dataset.</p>
      <CodeBlock
        code={`
const data = [
  {x:1, y: 90},
  {x: 2, y: 12},
  {x: 3, y: 34},
  {x: 4, y: 53},
  {x: 5, y: 98},
]
`.trim()}
      />
      <p>
        Then, <code>d3.area()</code> is used to create an area generator. This
        generator (called <code>areaBuilder</code> below) transforms a blob of
        data into a <code>string</code> that can be used as the <code>d</code>{' '}
        argument of a <code>path</code> SVG shape.
      </p>
      <CodeBlock
        code={`
// create a shape generator.
// areaBuilder will be a function that takes data as input and returns a SVG path
const areaBuilder = d3
  .area()
  .x(d => xScale(d.x))
  .y1(d => yScale(d.y))
  .y0(yScale(0));

// call the function with the dataset
const areaPath = areaBuilder(data);
// M0,0 L57.778,277.333 L115.556,199.111 ... Z
`.trim()}
      />
      <p>
        The output <code>areaPath</code> can now be passed to a{' '}
        <code>path</code> SVG element!
      </p>
      <CodeBlock
        code={`
<path d={areaPath} fill="#9a6fb0" />
`.trim()}
      />
      <p>It results in a cool area chart:</p>
      <ChartOrSandbox
        vizName={'AreaChartBasic'}
        VizComponent={AreaChartBasicDemo}
        height={400}
        maxWidth={600}
        caption={
          <p>
            A very basic area chart made using react and the <code>area()</code>{' '}
            function of d3.js
          </p>
        }
      />
      <h2>😞 The Problem</h2>
      <p>
        D3 does an amazing job here! It transforms our dataset into a string
        like <code>M0,0 L57,277 L115,199 ... Z</code>, which we can directly
        pass to an SVG <code>path</code> element. 👏
      </p>
      <p>
        But how can we use this path data to{' '}
        <TakeHome>draw on a canvas instead of SVG</TakeHome>?
      </p>

      <h2>
        <code>Path2D</code> to the rescue! 🍾
      </h2>
      <p>
        Luckily, there's a lifesaving feature in the Canvas API:{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Path2D">
          Path2D
        </a>
        .
      </p>
      <p>
        <code>Path2D</code> allows you to take any SVG path string and easily
        draw it on the canvas. It simplifies the process considerably:
      </p>

      <CodeBlock
        code={`
// areaPath is computed with d3: M0,0 L57.778,277.333 L115.556,199.111 ... Z

// Then in the useEffect:
const ctx = canvas.getContext('2d');
const path = new Path2D(areaPath); // Convert to Path2D
ctx.fill(path); // Now you can fill or stroke the path

`.trim()}
      />
      <p>Let's see it in action on a full chart:</p>
      <ChartOrSandbox
        vizName={'AreaChartCanvas'}
        VizComponent={AreaChartCanvasDemo}
        height={400}
        maxWidth={600}
        caption={
          <p>
            A minimal area chart made in canvas thanks to <code>d3.area()</code>{' '}
            and <code>Path2D</code>
          </p>
        }
      />
      <h2>Too easy!</h2>
      <p>That makes it a breeze!</p>
      <p>Let's try on a donut chart to see if it works the same:</p>
      <ChartOrSandbox
        vizName={'DonutChartCanvas'}
        VizComponent={DonutChartCanvasDemo}
        height={400}
        maxWidth={600}
        caption={<p>A minimal donut chart made in canvas</p>}
      />
    </LayoutCourse>
  );
}
