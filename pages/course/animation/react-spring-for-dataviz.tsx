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
      <p>Redo the circle</p>
      <p>Click on a div to animate value</p>
      <p>Make a rect rotate</p>
      <p>Make a very big mass with no friction</p>
      <p>Make something with 3 elements</p>
    </LayoutCourse>
  );
}
