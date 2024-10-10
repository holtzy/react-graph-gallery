import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { CircleScaleExercise } from '@/component/interactiveTeaching/CircleScaleExercise';

const previousURL = '/course/scales/introduction';
const currentURL = '/course/scales/linear-scale';
const nextURL = '/course/scales/other-scale';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

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
              The previous lesson described the concept of{' '}
              <Link href="/course/scales/introduction">scale</Link> in data
              visualization. Scales allow, for instance, to translate a value in
              our dataset to a position on the screen.
            </p>
            <p>
              Now, let's study the most common scale type and its d3.js
              implementation: the <b>linear</b> scale and its{' '}
              <code>scaleLinear()</code> function.
            </p>
          </>
        }
      />

      <CircleScaleExercise />

      {/* -
-
-
-
-
-
- */}

      <h2>
        The <code>scaleLinear()</code> function
      </h2>
      <p>
        The <code>scaleLinear()</code> function is part of the{' '}
        <a href="https://github.com/d3/d3-scale">d3-scale</a> module of d3.js.
      </p>
      <p>
        It expects 2 inputs: a <b>domain</b> and a <b>range</b>.
      </p>
      <h3>🏠 Domain</h3>
      <p>
        Usually an array of length 2. It provides the <code>min</code> and the{' '}
        <code>max</code> of the values we have in the dataset.
      </p>
      <h3>📏 Range</h3>
      <p>
        Usually an array of length 2. It provides the start and the end of the
        positions we are targeting in pixel.
      </p>
      <p>
        The output is a function that expects only 1 argument. You give it a
        value from the domain, and it returns the corresponding value in the
        Range
      </p>

      {/* -
-
-
-
-
-
- */}

      <h2>Much more power</h2>
      <p>The scaleLinear function actually make much more than that!!!</p>
    </LayoutCourse>
  );
}
