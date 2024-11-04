import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { DonutChartHoverDemo } from '@/viz/DonutChartHover/DonutChartHoverDemo';
import { Sidenote } from '@/component/SideNote';
import Link from 'next/link';
import { Badge } from '@/component/UI/badge';
import { Caption } from '@/component/UI/Caption';
import { cn } from '@/util/utils';
import { buttonVariants } from '@/component/UI/button';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import { Graph23 } from '@/viz/exercise/PieFirstSolution/Graph';
import { Graph42 } from '@/viz/exercise/PieHoverEffectSolution/Graph';

const previousURL = '/course/hover-effect/css-descendant-selector';
const currentURL = '/course/hover-effect/toggle-class-in-js';
const nextURL = '/course/hover-effect/internal-state';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);
  const currentLessonId = lessonList.findIndex((l) => l.link === currentURL);

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
              In the previous lesson, we explored how to dim elements that are{' '}
              <b>not</b> being hovered over using a <b>CSS-only</b> approach.
            </p>
            <p>
              However, there are times when using JavaScript can provide more{' '}
              <b>precise control</b> over the hover effect. A handy technique is
              to <b>toggle classes</b> with JavaScript. Let’s take a look at how
              to do this.
            </p>
          </>
        }
      />
      <h2>🔘 Toggle Class in JavaScript</h2>
      <h3>
        1️⃣ Create a <code>ref</code>
      </h3>
      <p>
        We’ve discussed the{' '}
        <a href="https://react.dev/reference/react/useRef">useRef</a> React hook
        a few times now.
      </p>
      <p>
        This hook allows us to <b>target specific elements</b> in the DOM and
        manipulate them with JavaScript.
      </p>
      <CodeBlock
        code={`
// Define a ref for the graph container
const containerRef = useRef();

// Attach this ref to an element in the DOM
<svg ref={containerRef}>
    <circle ... />
    <circle ... />
    <circle ... />
</svg>
  `.trim()}
      />
      <h3>2️⃣ Toggle classes</h3>
      <p>
        Once we have the <code>containerRef</code> set up, we can use it to make
        changes to the SVG container from anywhere in the graph!
      </p>
      <p>
        For example, we can add an <code>onMouseEnter</code> property to the
        circle that will apply a <code>hasHighlight</code> class to the SVG
        container:
      </p>
      <CodeBlock
        code={`
<circle
  ...,
  onMouseEnter={() => {
    if (containerRef.current) {
      containerRef.current.classList.add(styles.hasHighlight);
    }
  }}
  onMouseLeave={() => {
    if (containerRef.current) {
      containerRef.current.classList.remove(styles.hasHighlight);
    }
  }}
/>
  `.trim()}
      />
      <h3>3️⃣ Use it for styling</h3>
      <div className="relative">
        <Sidenote
          text={
            <p>
              A compound class selector combines multiple class names to target
              elements that match <b>all</b> of the specified classes. For
              example: <code>.class1.class2</code> .
            </p>
          }
        />
        <p>
          We can use CSS{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector">
            compound class selectors
          </a>{' '}
          to apply different styles based on whether the{' '}
          <code>.hasHighlight</code> class is present!
        </p>
      </div>
      <p>
        For example, we can set the opacity of all "slices" in the container to{' '}
        <code>1</code>, except when the container has the{' '}
        <code>.hasHighlight</code> class, in which case the opacity will be set
        to <code>0.2</code>:
      </p>
      <CodeBlock
        code={`
.container .slice {
  opacity: 1;
  cursor: pointer;
}

.container.hasHighlight .slice {
  opacity: 0.2;
}
  `}
      />
      <h2>🍩 Application: Donut Chart with Hover Effect</h2>
      <p>
        A donut chart is a variation of the more well-known{' '}
        <Link href="/pie-plot">pie chart</Link>. It is easy to create using the{' '}
        <code>pie()</code> function from D3.js.
      </p>
      <p>
        The following example demonstrates the technique described earlier. When
        a slice is hovered over, a class is added to the SVG container,
        resulting in a CSS change for all the other slices.
      </p>
      <ChartOrSandbox
        vizName={'DonutChartHover'}
        VizComponent={DonutChartHoverDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with hover interaction using the class toggle strategy."
      />
      <h2>Pros & Cons</h2>
      <p>
        <Badge>Pros</Badge>
      </p>
      <ul>
        <li>Fine control over interactions via JavaScript</li>
        <li>Performance-friendly: no re-rendering required</li>
      </ul>
      <p>
        <Badge variant="destructive">Cons</Badge>
      </p>
      <ul>
        <li>
          Doesn't align with React’s central state management approach, which
          can make managing state more challenging.
        </li>
      </ul>
      <h2>More examples</h2>
      <p>
        The examples below all use this strategy to implement their hover
        effect.
      </p>
      <center>
        <video controls width="600">
          <source src="/video/pyramid-legend.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Caption>
          Check the legend on the left hand side: it uses class toggle for its
          hover effect!
        </Caption>
        <Link
          className={cn(buttonVariants(), 'no-underline')}
          href={'/example/population-pyramid'}
        >
          Visit project
        </Link>
        <Graph42 />
      </center>
      {/* -
-
-
-
-
-
- */}
      <h2>Exercices</h2>
      <ExerciseAccordion
        localStorageId={currentLesson.link}
        exercises={[
          {
            title: <span>Your first pie chart! 🍰</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[0]} />,
          },
          {
            title: <span>Pie chart with hover effect</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[1]} />,
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
          Time to learn a new chart type! Check the{' '}
          <Link href="/pie-plot">pie chart</Link> page for the full in-depth
          tutorial.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>A dataset is provided in the sandbox folder.</li>
          <li>Build a pie chart representing this dataset.</li>
          <li>
            Read the <Link href="/pie-plot">pie chart</Link> section for help on
            <code>d3.pie()</code> and <code>d3.arc()</code>.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/PieFirstPractice',
    solutionSandbox: 'exercise/PieFirstSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          Descendant selectors are fantastic for creating advanced hover effects
          with only CSS!
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Add a class <code>rowsContainer</code> to the SVG container and a
            class <code>row</code> to each row.
          </li>
          <li>
            Using a CSS descendant selector, highlight the hovered row and dim
            other rows.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/LollipopHoverEffectPractice',
    solutionSandbox: 'exercise/LollipopHoverEffectSolution',
  },
];
