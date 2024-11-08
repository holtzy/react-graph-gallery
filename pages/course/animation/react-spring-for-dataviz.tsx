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
import { Graph11 } from '@/viz/exercise/AnimationSimpleDivSolution/Graph';
import { Graph12 } from '@/viz/exercise/AnimationSimpleDivRotateSolution/Graph';
import { Graph2 } from '@/viz/exercise/AnimationSimpleDivHeavySolution/Graph';
import { Graph99 } from '@/viz/exercise/AnimationMultiCircleDelaySolution/Graph';

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
        fileToOpen={'Circle.tsx'}
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
        fileToOpen={'Circle.tsx'}
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
        fileToOpen={'Circle.tsx'}
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
        fileToOpen={'Circle.tsx'}
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
        <p>Just applying the very basic usage we just learned</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Create a <code>Circle.tsx</code> file that makes a{' '}
            <code>Circle</code> component
          </li>
          <li>
            Create a <code>position</code> state in <code>Graph.tsx</code>. Each
            time the user click on the SVG area, this position must toggle
            between <code>40</code> and <code>width - 40</code>
          </li>
          <li>
            Provide the position to the <code>Circle</code> component. Render a
            circle at this <code>x</code> position, animate its movement with{' '}
            <code>react-spring</code>.
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
          react-spring can animate many sorts of values. Opacity is one of them,
          but text, and colors work too!
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Same as previous exercise, but add a property for the{' '}
            <code>opacity</code>.
          </li>
          <li>
            <code>opacity</code> must toggle between <code>0.2</code> and{' '}
            <code>1</code> depending on if the circle is on the left or on the
            right.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/AnimationDefaultPractice',
    solutionSandbox: 'exercise/AnimationSimpleCircleOpacitySolution',
    fileToOpen: 'Graph.tsx',
  },
  {
    whyItMatters: (
      <>
        <p>
          <code>react-spring</code> does not only work with SVG! HTML elements
          can be animated too!
        </p>
        <p>
          note also that the spring can be made directly in the{' '}
          <code>Graph</code> component. Making a separate component to organise
          your work is nice IMO, but not required.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            In <code>Graph.tsx</code>, render a parent <code>div</code> using
            the <code>width</code> and <code>height</code> provided at the top
            of the component instead of the usual SVG area.
          </li>
          <li>
            In this <code>div</code>, render another <code>div</code>. It must
            be square, have a <code>backgroundColor</code> of <code>red</code>{' '}
            and be absolutely positioned.
          </li>
          <li>
            Now make the red <code>div</code> moves from right to left when user
            clicks on the parent div.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/AnimationDefaultPractice',
    solutionSandbox: 'exercise/AnimationSimpleDivSolution',
    fileToOpen: 'Graph.tsx',
  },
  {
    whyItMatters: (
      <>
        <p>Just a bit of fun!</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Use the <code>rotate</code> property of a div to make the rectangle
            spin when it goes from one side to another!
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/AnimationDefaultPractice',
    solutionSandbox: 'exercise/AnimationSimpleDivRotateSolution',
    fileToOpen: 'Graph.tsx',
  },
  {
    whyItMatters: (
      <>
        <p>Spring physics matters!</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Apply a mass of <code>120</code> to the moving <code>div</code>
          </li>
          <li>What happens? Why?</li>
          <li>
            Try to play with <code>friction</code> and <code>tension</code> too
            to get an intuition on how physics work.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/AnimationDefaultPractice',
    solutionSandbox: 'exercise/AnimationSimpleDivHeavySolution',
    fileToOpen: 'Graph.tsx',
  },
  {
    whyItMatters: (
      <>
        <p>
          <code>delay</code> can give some cool effects to dataviz projects. But
          use it with care, you do not want to waste people time!
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>Instead of 1 circle (exercise 1), render 3 animated circles.</li>
          <li>
            Use y positions of 50, 100, 150 respectively (you need to create a y
            prop in the Circle componetn)
          </li>
          <li>
            Add a new property called delay to the Circle component. Give values
            of 10, 100 and 1000 to the 3 circles respectively.
          </li>
          <li>
            Use this delay value to delay the start of the animation: you can
            just pass it to the useSpring hook!
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/AnimationDefaultPractice',
    solutionSandbox: 'exercise/AnimationMultiCircleDelaySolution',
    fileToOpen: 'Graph.tsx',
  },
];
