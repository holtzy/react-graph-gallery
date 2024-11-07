import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CanvasBasicCircleDemo } from '@/viz/CanvasBasicCircle/CanvasBasicCircleDemo';
import { TakeHome } from '@/component/TakeHome';
import { CodeBlock } from '@/component/UI/CodeBlock';
import Link from 'next/link';
import { CanvasBasicRectangleDemo } from '@/viz/CanvasBasicRectangle/CanvasBasicRectangleDemo';
import { Sidenote } from '@/component/SideNote';
import { CanvasBasicStackingOrderDemo } from '@/viz/CanvasBasicStackingOrder/CanvasBasicStackingOrderDemo';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { Graph1 } from '@/viz/exercise/CanvasBasicCircleSolution/Graph';
import { Graph2 } from '@/viz/exercise/CanvasRectOutlineSolution/Graph';
import { Graph3 } from '@/viz/exercise/CanvasClearRectSolution/Graph';
import { Graph4 } from '@/viz/exercise/CanvasBasicLineSolution/Graph';
import { Graph5 } from '@/viz/exercise/CanvasTenCirclesSolution/Graph';
import { Graph6 } from '@/viz/exercise/CanvasBasicTextSolution/Graph';

const previousURL = '/course/canvas/introduction';
const currentURL = '/course/canvas/drawing-shapes-with-canvas';
const nextURL = '';
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
              Remember the{' '}
              <Link href="'/course/svg/introduction'">SVG module</Link> where we
              learned how to draw various shapes on the screen? Now, we'll be
              doing this again, but with <code>canvas</code> instead—and the
              approach is quite different!
            </p>
            <p>Let's make some circles again! 🎉</p>
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
      <h2>Let's make a circle (again)</h2>
      <h3>
        📍 Start with a <code>canvas</code> element
      </h3>
      <p>
        Everything begins with the DOM. In the <code>return</code> statement of
        our graph component, rather than rendering multiple SVG elements as we
        did previously,
      </p>
      <p>
        we now render <u>just a single</u> <code>canvas</code> element.
      </p>
      <CodeBlock
        code={`
return (
    <canvas width={width} height={height} ref={canvasRef}/>
);
      `.trim()}
      />

      <h3>
        ⛏️<code>useRef</code> and <code>useEffect</code> to draw in it
      </h3>
      <div className="relative">
        <Sidenote
          text={
            <p>
              This approach is called <b>imperative</b> programming, as opposed
              to <b>declarative</b> programming, where we define everything
              directly in the DOM, like we did with SVG.
            </p>
          }
        />
        <p>
          Next, we’ll need to “edit” the canvas by drawing on it. To achieve
          this, we need a reference to the canvas element so we can target it
          directly. Then, we can use <code>useEffect</code> to write the code
          for drawing inside it.
        </p>
      </div>
      <CodeBlock
        code={`
// define a ref = a way to target the canvas element
const canvasRef = useRef(null);

// once the canvas element is mounted, draw some stuff in it imperatively
useEffect(() => {
  const canvas = canvasRef.current; // find the target canvas element

  const ctx = canvas.getContext('2d'); // initialize a canvas "context"

  // draw whatever you want in the canvas
}, []);
      `.trim()}
      />

      <h3>✏️ A new syntax for the actual drawing</h3>
      <p>Finally, it’s time to create the actual drawing.</p>
      <p>
        For each element, we start by initializing a path with{' '}
        <code>beginPath()</code>. There are various functions available for
        drawing different shapes. To draw a circle, for example, we use the{' '}
        <code>arc()</code> function.
      </p>
      <p>
        Setting a color follows a slightly unusual pattern: first, we set the
        color with <code>fillStyle()</code>, and then we apply the fill using{' '}
        <code>fill()</code>.
      </p>

      <CodeBlock
        code={`
ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();
      `.trim()}
      />
      <h3>🔵 Complete circle example</h3>
      <ChartOrSandbox
        vizName={'CanvasBasicCircle'}
        VizComponent={CanvasBasicCircleDemo}
        height={200}
        maxWidth={600}
        caption="A simple circle drawn with canvas"
      />

      <h2>🟪 What about rectangles?</h2>
      <p>The process is almost identical!</p>
      <p>
        The only change is the canvas call inside <code>useEffect</code>. This
        time, we’ll use the <code>rect()</code> function as shown:
      </p>
      <CodeBlock
        code={`
ctx.beginPath();
ctx.rect(100, 100, 80, 50); // Draw the rectangle (x, y, width, height)
ctx.fillStyle = "purple";
ctx.fill();
    `.trim()}
      />
      <p>And that’s it! Here’s a complete example:</p>
      <ChartOrSandbox
        vizName={'CanvasBasicRectangle'}
        VizComponent={CanvasBasicRectangleDemo}
        height={200}
        maxWidth={600}
        caption="A simple Rectangle drawn with canvas"
      />

      <h2>🍔 Stacking Order Matters</h2>
      <p>
        Drawing with canvas is a bit like using a <b>pen on paper</b>: whatever
        you draw second will always appear <b>on top</b> of what was drawn
        first!
      </p>
      <p>
        For data visualizations, we need to carefully consider the stacking
        order, as there’s <b>no way to change it</b> afterward.
      </p>
      <p>
        Similarly, individual elements can’t be removed from the canvas. The
        only option is to <b>redraw everything from scratch</b>—which isn’t an
        issue since it’s very fast.
      </p>
      <ChartOrSandbox
        vizName={'CanvasBasicStackingOrder'}
        VizComponent={CanvasBasicStackingOrderDemo}
        height={300}
        maxWidth={600}
        caption="A few shapes drawn with canvas"
      />

      <h2>Your turn!</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Your first circle</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[0]} />,
          },
          {
            title: <span>Outline of a rectangle with strokeRect()</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[1]} />,
          },
          {
            title: <span>Clear a portion of the canvas with clearRect()</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[2]} />,
          },
          {
            title: <span>Let's make a path</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[3]} />,
          },
          {
            title: <span>Ten circles?</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[4]} />,
          },
          {
            title: <span>What about text</span>,
            content: <ExerciseDoubleSandbox exercise={exercices[5]} />,
          },
        ]}
      />
      <Graph1 />

      <Graph2 />
      <Graph3 />
      <Graph4 />
      <Graph5 />
      <Graph6 />
    </LayoutCourse>
  );
}
const exercises: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>
          Let’s apply what we just learned by creating your first{' '}
          <code>canvas</code> element, modifying it using a <code>ref</code> and{' '}
          <code>useEffect</code>.
        </p>
        <p>And while we’re at it, let’s explore how to adjust opacity!</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Use <code>useRef()</code> to create a ref targeting the canvas
            element.
          </li>
          <li>
            Add a <code>useEffect()</code> hook to draw a blue circle on the
            canvas.
          </li>
          <li>
            Adjust the circle’s opacity with the <code>globalAlpha</code>{' '}
            property.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/CanvasBasicCirclePractice',
    solutionSandbox: 'exercise/CanvasBasicCircleSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Unlike SVG elements, strokes and fills must be drawn separately on the
          canvas. 😱
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>Draw a rectangle on the canvas.</li>
          <li>
            Use <code>strokeRect()</code> and <code>fillRect()</code> to apply a
            green stroke and fill it with pink.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/CanvasRectOutlinePractice',
    solutionSandbox: 'exercise/CanvasRectOutlineSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          When working with canvas drawings, you’ll often need to clear previous
          content.{' '}
        </p>
        <p>
          This is possible with <code>clearRect()</code>.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>Draw a large circle on the canvas.</li>
          <li>
            Use <code>clearRect()</code> to erase part of the circle.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/CanvasClearRectPractice',
    solutionSandbox: 'exercise/CanvasClearRectSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Unlike SVG, canvas doesn’t directly support complex shapes with
          strings. Instead, we need to create loops for drawing such shapes.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Draw a segmented line starting from <code>(50, 150)</code>.
          </li>
          <li>
            Use <code>beginPath()</code> and <code>moveTo()</code>, then draw
            lines to <code>(100, 120)</code>, <code>(150, 180)</code>,
            <code>(200, 100)</code>, <code>(250, 160)</code>,{' '}
            <code>(300, 90)</code>, and <code>(350, 140)</code>.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/CanvasBasicLinePractice',
    solutionSandbox: 'exercise/CanvasBasicLineSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Creating a scatterplot involves looping through a dataset and creating
          a circle for each item.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>A dataset is provided in the sandbox.</li>
          <li>
            Draw a circle for each data point, using its <code>x</code> and{' '}
            <code>y</code> values as coordinates.
          </li>
          <li>Use a loop to complete the task.</li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/CanvasTenCirclesPractice',
    solutionSandbox: 'exercise/CanvasTenCirclesSolution',
  },
  {
    whyItMatters: (
      <>
        <p>
          Handling text in canvas can be tricky. Whenever possible, we should
          use HTML or SVG.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>Draw a large circle.</li>
          <li>
            Use the{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText">
              fillText
            </a>{' '}
            function to write "Hello, World!" at the center of the circle.
          </li>
          <li>Align the text vertically and horizontally.</li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/CanvasBasicTextPractice',
    solutionSandbox: 'exercise/CanvasBasicTextSolution',
  },
];
