import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { TakeHome } from '@/component/TakeHome';
import { ReactSpringMostBasic } from '@/viz/ReactSpringMostBasic/ReactSpringMostBasic';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ReactSpringMostBasicDemo } from '@/viz/ReactSpringMostBasic/ReactSpringMostBasicDemo';
import { ReactSpringPresetValuesDemo } from '@/viz/ReactSpringPresetValues/ReactSpringPresetValuesDemo';
import { ReactSpringDerivingValueDemo } from '@/viz/ReactSpringDerivingValue/ReactSpringDerivingValueDemo';
import { ReactSpringTextDemo } from '@/viz/ReactSpringText/ReactSpringTextDemo';
import { Caption } from '@/component/UI/Caption';
import { CodeBlock } from '@/component/UI/CodeBlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/component/UI/accordion';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import { Graph14 } from '@/viz/exercise/AnimationSimpleCircleSolution/Graph';

const previousURL = '/course/animation/introduction';
const currentURL = '/course/animation/react-spring-for-dataviz';
const nextURL = '/course/animation/scatterplot';
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
              Web animations fall into two main categories: <b>CSS</b> and{' '}
              <b>spring-based</b> animations.
            </p>
            <p>
              In this lesson, we’ll explore <b>react-spring</b>, a popular
              library for creating spring-based animations in React. Let’s see
              how to use it to bring our <b>graph elements to life</b>.
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
      <h2>Animating a Circle</h2>
      <p>
        Let’s start with something <strong>simple</strong> for this first
        lesson.
      </p>
      <p>
        Our goal is to animate a circle moving smoothly from one position to
        another. Here’s what the final effect will look like:
      </p>

      <div className="border p-4 my-4">
        <ReactSpringMostBasic width={650} height={100} />
      </div>
      <p>
        <br />
      </p>
      <p>Pretty cool, right? 🙃</p>
      <p>
        To achieve this, we’ll use{' '}
        <a href="https://www.react-spring.dev">react-spring</a>, the most
        popular JavaScript library for spring-based animations.
      </p>

      <p>
        <br />
      </p>
      <center>
        <img src="/img/react-spring-homepage.png" width={600} />
        <Caption>
          <code>react-spring</code> homepage. The most famous lib for javascript
          animation (28k stars on github)
        </Caption>
      </center>
      <p>
        <br />
      </p>
      {/* -
-
-
-
-
-
- */}
      <h2>Full code</h2>
      <p>
        <code>react-spring</code> is incredibly powerful, but it can be a bit
        tricky to grasp, and I personally find its documentation a little
        unclear. 😞
      </p>
      <p>
        For now, the two key features we need are the <code>useSpring</code>{' '}
        hook and the <code>animated</code> component.
      </p>
      <p>
        With these two tools, we can create a <code>Circle</code> component that
        accepts a <code>position</code> prop. Whenever a new{' '}
        <code>position</code> value is passed, the circle smoothly transitions
        to its new location.
      </p>
      <p>
        Here’s how the <code>Circle</code> component looks:
      </p>

      <CodeBlock
        code={`
import { animated, useSpring } from 'react-spring';

export const Circle = ({ position }) => {

  const springProps = useSpring({
    to: {
      position: position
    },
  });

  return (
    <animated.circle
      r={38}
      cy={50}
      cx={springProps.position}
    />
  );
};

        `}
      />
      {/* -
      -
      -
      -
      -
      -
      -
      -
       */}
      <h2>Explanation</h2>
      <p>
        In this code, we’re creating a simple <code>Circle</code> component that
        renders <strong>one circle</strong>. The component takes a{' '}
        <code>position</code> property, which controls the circle’s X position.
      </p>
      <p>
        Whenever this prop updates, the circle’s position will change, but it
        will happen <strong>smoothly</strong>!
      </p>

      <p>Here’s a breakdown of what’s happening:</p>

      <h3>🚚 Import</h3>
      <p>
        Once installed with a classic <code>npm install react-spring</code>, we
        need to import:
      </p>
      <ul>
        <li>
          <code>useSpring</code>: a hook that helps us create animated values.
        </li>
        <li>
          <code>animated</code>:a special version of elements (like{' '}
          <code>&lt;circle&gt;</code>) that can be animated.
        </li>
      </ul>

      <h3>
        🌸 Using <code>useSpring</code>
      </h3>
      <ul>
        <li>
          The <code>useSpring</code> hook is used to define an animation. It
          accepts an object where we specify the properties to animate and how
          to animate them. In this case, we're animating the{' '}
          <code>position</code>.
        </li>
        <li>
          We now have access to <code>springProps.position</code>. If the
          position changes from <code>0</code> to <code>100</code>,{' '}
          <code>springProps.position</code> will smoothly transition through
          values like 1, 3, 10, 15, and so on, until it reaches 100.{' '}
          <code>react-spring</code> handles the calculation of these
          intermediate values for us!
        </li>
      </ul>

      <h3>🔗 Binding the Animation to the Circle</h3>
      <ul>
        <li>
          Instead of using a regular <code>circle</code> SVG element, we use{' '}
          <code>animated.circle</code>. React-spring provides its own animated
          version of all HTML and SVG elements!
        </li>
        <li>
          Instead of passing <code>position</code> directly to the{' '}
          <code>cx</code> property, we pass <code>springProps.position</code>,
          which contains all the intermediate values, ensuring the circle moves
          smoothly.
        </li>
      </ul>

      <ChartOrSandbox
        vizName={'ReactSpringMostBasic'}
        VizComponent={ReactSpringMostBasicDemo}
        maxWidth={800}
        height={200}
        caption="A very basic animation using react and react-spring."
      />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>⚠️ Config object or function?</AccordionTrigger>
          <AccordionContent>
            <p>
              There is something I find very confusing about useSpring hook. It
              can be used with a config object (like in my explanation), or{' '}
              <b>with a function</b>.
            </p>
            <p>
              You will see both in the{' '}
              <a href="https://www.react-spring.dev/docs/components/use-spring#usage">
                documentation
              </a>
              , what might you feel... confused.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* -
-
-
-
-
-
- */}

      <h2>🔥 Spring Config</h2>
      <p>
        Spring animations follow physics laws to make the animation feel
        natural. There are three key properties you can control to adjust the
        feel of the animation: <code>mass</code>, <code>friction</code>, and{' '}
        <code>tension</code>.
      </p>
      <p>
        You can customize these properties in the <code>useSpring</code> hook
        like this:
      </p>
      <CodeBlock
        code={`
const springProps = useSpring({
  to: { position, color },
  config: {
    mass: 5,
    friction: 120,
    tension: 120,
  }
});
  `}
      />

      <p>
        But honestly, I strongly advise using one of the{' '}
        <strong>presets</strong> provided by the library, as they offer great
        results right out of the box.
      </p>
      <p>Check out the preset effects in the example below:</p>
      <ChartOrSandbox
        vizName={'ReactSpringPresetValues'}
        VizComponent={ReactSpringPresetValuesDemo}
        maxWidth={800}
        height={200}
        caption={
          <p>
            <code>react-spring</code> offers a few presets for the animation
            feel. Try them in this sandbox!
          </p>
        }
      />
      <p>To use one of the presets, you can do something like this:</p>
      <CodeBlock
        code={`
const springProps = useSpring({
  position: 100,
  config: config.default
});
  `}
      />

      {/* -
-
-
-
-
-
- */}
      <h2>Deriving Values</h2>
      <p>
        Animating a value directly using <b>react-spring</b>, like we did for
        the position property, is straightforward.
      </p>
      <p>
        However, in data visualization, we often need to{' '}
        <b>derive one value from another</b>.
      </p>
      <p>
        For example, suppose we want the size of the circle to be proportional
        to the X position. You might think that we could simply use the{' '}
        <code>springProps.position</code> value as a regular number, like this:
      </p>
      <CodeBlock
        code={`
return (
  <animated.circle
    cx={springProps.position}
    cy={50}
    r={springProps.position / 10} // This will not work! 😱
  />
);
  `}
      />
      <p>
        Instead, to achieve this, we need to use the <code>to()</code> method of
        the <code>springProps.position</code> property, like so:
      </p>
      <CodeBlock
        code={`
return (
  <animated.circle
    cx={springProps.position}
    cy={50}
    r={springProps.position.to((pos) => pos / 10)}
  />
);
  `}
      />
      <p>
        This is called <b>interpolation</b> in <code>react-spring</code>{' '}
        terminology. You can learn more about it in the full documentation{' '}
        <a
          href="https://www.react-spring.dev/docs/advanced/interpolation"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>Let’s take a look at the result!</p>

      <ChartOrSandbox
        vizName={'ReactSpringDerivingValue'}
        VizComponent={ReactSpringDerivingValueDemo}
        maxWidth={800}
        height={200}
        caption="Smooth animation where circle size is derived from X position."
      />

      <h2>Animating Text</h2>
      <p>
        So far, we’ve only animated numerical values—like smoothly transitioning
        the position from <code>1</code> to <code>100</code>.
      </p>
      <p>
        But <code>react-spring</code> is much more powerful than that! It can
        animate almost anything, including <b>text</b> and <b>colors</b>!
      </p>
      <p>In the example below, watch how the number evolves progressively:</p>

      <ChartOrSandbox
        vizName={'ReactSpringText'}
        VizComponent={ReactSpringTextDemo}
        maxWidth={800}
        height={200}
        caption="Demo: react-spring can also animate text, colors and so much more!"
      />

      <h2>Exercises</h2>

      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Your first animated circle!</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[0]} />,
          },
          {
            title: <span>Opacity? 👻</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[1]} />,
          },
          {
            title: (
              <span>
                Let's make this <code>div</code> moves
              </span>
            ),
            content: <ExerciseDoubleSandbox exercise={exercises[2]} />,
          },
          {
            title: <span>Rotate this rect</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[3]} />,
          },
          {
            title: <span>Is it to heavy?</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[4]} />,
          },
          {
            title: <span>Three elements</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[5]} />,
          },
        ]}
      />
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
    practiceSandbox: 'exercise/AnimationDefaultPractice',
    solutionSandbox: 'exercise/AnimationSimpleCircleSolution',
    fileToOpen: 'Graph.tsx',
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
