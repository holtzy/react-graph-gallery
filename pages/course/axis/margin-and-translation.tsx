import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { Code } from 'lucide-react';

const previousURL = '/course/axis/introduction';
const currentURL = '/course/axis/margin-and-translation';
const nextURL = '/course/axis/bottom-axis';
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
            <p>Most of the chart types use a bottom and a left axis.</p>
            <p>
              In that case, there is a need to leave some space for the tick
              label and axis titles. Let's see how to implement this.
            </p>
          </>
        }
      />

      <h2>Chart area and Bounds area</h2>
      <p>
        <p>
          The bottom and left axes are not displays at the border of the main
          chart component. Some margins are computed by the viz component. It is
          important to understand that a chart is composed by:
        </p>
        <ul className="list-disc list-inside pl-10">
          <li>
            the global chart area, often specified by the <code>width</code> and{' '}
            <code>height</code> properties of the chart components.
          </li>
          <li>
            the "bounds" area, i.e. the area located inside the x and y axis. It
            is calculated by substracting the margins
          </li>
        </ul>
      </p>

      <h2>Implementation</h2>
      <p>
        Let's start by defining the margins we want to use, as a const. This can
        be defined at the top of your file, out of the viz component, or even in
        a separate file containing all your constants.
      </p>
      <CodeBlock
        code={`
const MARGIN = {
  top: 10,
  right: 30,
  bottom: 50,
  left: 30
}
      `.trim()}
      />

      <p>
        Then we can compute, at the beginning of the viz component, the
        dimension of the boundWidth and boundHeight
      </p>

      <CodeBlock
        code={`
const boundsWidth = width - MARGIN.right - MARGIN.left;
const boundsHeight = height - MARGIN.top - MARGIN.bottom;
      `.trim()}
      />

      <p>And finally the svg is going to be rendered like this:</p>
      <CodeBlock
        code={`
<svg width={width} height={height}>
  <g
    width={boundsWidth}
    height={boundsHeight}
    transform={"translate(" + MARGIN.left + " , " + MARGIN.top].join(',')})"}
  >
    // ... all shapes go here
  </g>
</svg>
      `.trim()}
      />
      <p>Explain the translation</p>
      <p>
        Explain that for the bottom axis, an additional translation is required
        to draw it at the bottom
      </p>

      <h2>Draw the axis</h2>
      <p>
        Now that we have some space for it, it is time to actually draw the
        axis. Let's build a reusable component.
      </p>
    </LayoutCourse>
  );
}
