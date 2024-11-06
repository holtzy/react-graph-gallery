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

const previousURL = '/course/animation/introduction';
const currentURL = '/course/animation/animate-a-circle';
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
            <p>We'll rely on react-spring for animation!</p>
            <p>Let's see what it is, and how to use it!</p>
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
      <h2>Most basic example</h2>
      <p>Explain the code: animated.circle, springProps...</p>
      <ReactSpringMostBasic width={650} height={300} />

      <h2>Full code</h2>
      <p>
        Explain that react-spring reacts to update onnthe document and triggers
        the animation!
      </p>
      <ChartOrSandbox
        vizName={'ReactSpringMostBasic'}
        VizComponent={ReactSpringMostBasicDemo}
        maxWidth={800}
        height={200}
        caption="A very basic animation using react and react-spring."
      />
      <p>
        Add a note on the API here: explain that we are using the config mode,
        but the function mode exists too. Put this in an accordion.
        https://www.react-spring.dev/docs/components/use-spring#usage
      </p>

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
