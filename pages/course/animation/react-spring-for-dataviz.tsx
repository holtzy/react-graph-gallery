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
        Let’s keep it <b>simple</b> for this first lesson! Our goal is to
        animate a circle transitioning from one position to another. Here’s the
        result:
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
      <h2>Explanation</h2>
      <p>
        In this code, we are creating a simple animated circle that moves
        smoothly based on the position prop passed to the Circle component.
      </p>

      <p>Here's a breakdown of what's happening:</p>

      <h3>Import</h3>
      <ul>
        <li>
          <strong>useSpring</strong> is a hook from the react-spring library
          that helps us create animated values.
        </li>
        <li>
          <strong>animated</strong> is a special version of elements (like{' '}
          <code>&lt;circle&gt;</code>) that can be animated with react-spring.
        </li>
      </ul>

      <h3>Using useSpring:</h3>
      <ul>
        <li>
          Inside the Circle component, we call <code>useSpring</code> to define
          the animation.
        </li>
        <li>
          The <code>useSpring</code> hook takes an object where we specify the
          animation properties.
        </li>
        <li>
          In this case, we're animating the position of the circle, setting it
          to the value of the <code>position</code> prop.
        </li>
      </ul>

      <h3>Binding the animation to the circle:</h3>
      <ul>
        <li>
          The <code>springProps</code> returned by <code>useSpring</code>{' '}
          contains the animated values.
        </li>
        <li>
          Specifically, we have <code>springProps.position</code>, which will
          smoothly transition to the new position value whenever it changes.
        </li>
        <li>
          The <code>cx</code> (center x) attribute of the{' '}
          <code>&lt;circle&gt;</code> element is set to{' '}
          <code>springProps.position</code>, meaning the circle will move
          horizontally based on this animated value.
        </li>
      </ul>

      <h3>The animated.circle component:</h3>
      <ul>
        <li>
          Instead of a regular <code>&lt;circle&gt;</code> element, we use{' '}
          <code>&lt;animated.circle&gt;</code>, which allows the circle to be
          animated using the values defined in <code>springProps</code>.
        </li>
      </ul>

      <p>
        The result is that whenever the <code>position</code> prop changes, the
        circle will smoothly animate from its current position to the new one,
        creating a fluid motion effect.
      </p>

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
              can be used with a config object (like in my explanation), or with
              a function.
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

      <h2>Spring config</h2>
      <p>You can custom mass, friction manually</p>
      <p>
        But honnestly I strongly advise to use one of the preset that is offered
        by the lib
      </p>
      <ChartOrSandbox
        vizName={'ReactSpringPresetValues'}
        VizComponent={ReactSpringPresetValuesDemo}
        maxWidth={800}
        height={200}
        caption="A very basic animation using react and react-spring."
      />

      <h2>Deriving value?</h2>
      <p>
        Let's say I want the circle size to be proportional to its x position?
      </p>
      <ChartOrSandbox
        vizName={'ReactSpringDerivingValue'}
        VizComponent={ReactSpringDerivingValueDemo}
        maxWidth={800}
        height={200}
        caption="A very basic animation using react and react-spring."
      />

      <h2>Text</h2>
      <ChartOrSandbox
        vizName={'ReactSpringText'}
        VizComponent={ReactSpringTextDemo}
        maxWidth={800}
        height={200}
        caption="A very basic animation using react and react-spring."
      />

      <h2>Exercices</h2>
      <p>Redo the circle</p>
      <p>Click on a div to animate value</p>
      <p>Make a rect rotate</p>
      <p>Make a very big mass with no friction</p>
      <p>Make something with 3 elements</p>
    </LayoutCourse>
  );
}
