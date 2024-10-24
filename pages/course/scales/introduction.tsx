import React, { useCallback, useState } from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Button } from '@/component/UI/button';
import { CircleScaleExercise } from '@/component/interactiveTeaching/CircleScaleExercise';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';

const previousURL = '/course/svg/path-element';
const currentURL = '/course/scales/introduction';
const nextURL = '/course/scales/linear-scale';
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
              Building a graph requires to transform a <b>dimension</b> (a
              numeric variable in your dataset) in a <b>position</b> in pixels.
              This is done using a fundamental dataviz concept called{' '}
              <b>scale</b>.
            </p>
            <p>
              Before implementing it in the next lesson, let's describe a bit
              what this crucial concept of dataviz is.
            </p>
          </>
        }
      />

      <h2>Test your intuition</h2>
      <p>Let's test your intuition with the following exercise.</p>
      <ul>
        <li>
          1️⃣ You have a SVG area with a width of <code>500px</code>.
        </li>
        <li>
          2️⃣ You can place circles <b>anywhere</b> along this area horizontally.
        </li>
        <li>
          3️⃣ You have a dataset with 5 values: <code>0</code>, <code>50</code>,{' '}
          <code>60</code>, <code>82</code>, <code>100</code>
        </li>
      </ul>

      <p>
        &rarr; <b>How do you position your circles</b> to represent this
        dataset? Drag the circles below following your intuition:
      </p>
      <p className="text-xs">
        Note: the number in each circle represents its value in the dataset.
      </p>

      <CircleScaleExercise />

      <p>
        <br /> <br />
      </p>

      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Let's do some math</span>,
            content: (
              <>
                <p>
                  I'm pretty sure you managed to put the circles at the right
                  position.
                </p>
                <p>
                  But, before reading the following, try to write down the{' '}
                  <b>function</b> that allows to go from a value in the dataset
                  to a position in pixel.
                </p>
                <p>The answer is coming below!</p>
              </>
            ),
          },
        ]}
      />

      <h2>How it actually works</h2>

      <h3>The obvious part:</h3>
      <p>
        &rarr; For a value of <code>0</code>, the circle should be placed at the
        extreme left of the SVG. This corresponds to <code>cx = 0px</code>.
      </p>
      <p>
        &rarr; For the highest value in the dataset, <code>100</code>, the
        circle should be positioned at the extreme right of the SVG. This
        corresponds to <code>cx = width</code> (i.e., <code>500px</code>).
      </p>
      <p>
        &rarr; For a value of <code>50</code>, which is the midpoint of our
        dataset, the circle should be positioned at the center of the SVG. This
        corresponds to <code>cx = width / 2</code> (i.e., <code>250px</code>).
      </p>

      <h3>The math part:</h3>
      <p>
        For a value of <code>82</code>, which is not an exact midpoint, you need
        to calculate the position <b>proportionally</b>.
      </p>
      <p>The position can be calculated as:</p>
      <CodeBlock
        code={`
// Linear scale equation
cx = (value / maxValue) * width

// cx = (82 / 100) * 500
// cx = 410px
`.trim()}
      />

      <h2>The Great News 🎁</h2>
      <p>
        Manually calculating positions for each data point would be{' '}
        <b>incredibly tedious</b> for every graph you create.
      </p>
      <p>
        Fortunately, d3.js provides a function called <code>scaleLinear()</code>{' '}
        that handles this task for you. In the next lesson, we'll explore how it
        works and simplifies your data visualization process.
      </p>
    </LayoutCourse>
  );
}
