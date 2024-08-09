import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { AxisBasicD3Demo } from '@/viz/AxisBasicD3/AxisBasicD3Demo';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';

const previousURL = '/course/axis/axis-variations';
const currentURL = '/course/axis/axis-with-d3';
const nextURL = undefined;
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
              d3 offers some very smart functions when it comes to building
              axes.
            </p>
            <p>
              I personnaly prefer to avoid using d3 rendering functions like
              this. I have more control when using react for rendering. But if
              you are familiar with d3, it can be very handy to use those
              functions, and here is how to wrap them in a usEffect
            </p>
          </>
        }
      />

      <h2>The d3 axis module</h2>
      <p>Explain what it is with links and examples</p>

      <h2>How to use in a react app.</h2>
      <p>
        If you're a d3.js afficionados and want to deal with as little react as
        possible, you can still use the good old <code>axisBottom()</code> and{' '}
        <code>axisLeft()</code> methods of d3 and wrap them in a
        <code>useEffect()</code> hook.
      </p>
      <p>Here is an example below:</p>
      <ChartOrSandbox
        vizName={'AxisBasicD3'}
        VizComponent={AxisBasicD3Demo}
        maxWidth={600}
        height={300}
        caption={
          'This axis is rendered using d3. The d3 necessary functions are called from a useEffect'
        }
      />

      <h2>Explanation</h2>
      <p>Everything starts with a ref</p>
      <CodeBlock
        code={`
const axesRef = useRef(null);
  `.trim()}
      />
    </LayoutCourse>
  );
}
