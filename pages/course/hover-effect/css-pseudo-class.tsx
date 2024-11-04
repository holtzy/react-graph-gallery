import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Badge } from '@/component/UI/badge';
import GraphGallery from '@/component/GraphGallery';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';
import { TakeHome } from '@/component/TakeHome';
import { Graph9 } from '@/viz/exercise/HoverFirstTreemapSolution/Graph';
import { Graph10 } from '@/viz/exercise/HoverDeathByStateSolution/Graph';
import { Graph11 } from '@/viz/exercise/HoverDeathByStateFixSolution/Graph';

const previousURL = '/course/hover-effect/introduction';
const currentURL = '/course/hover-effect/css-pseudo-class';
const nextURL = '/course/hover-effect/css-descendant-selector';
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
        topBadge={'Lesson ' + currentLessonId}
        description={
          <>
            <p>The simplest strategy.</p>
            <p>
              Let's explore how to use a CSS pseudo-class to modify <b>only</b>{' '}
              the graph item that is being hovered over.
            </p>
          </>
        }
      />

      <h2>What is a pseudo class</h2>
      <p>
        A CSS <b>pseudo-class</b> is a keyword added to a CSS selector that
        specifies a special state of the selected element(s). You can learn more
        about pseudo-classes in the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
          MDN doc
        </a>
        .
      </p>
      <p>
        Essentially, this means you can assign a class to each shape in a graph
        and change its appearance <b>when the user hovers</b> over it.
      </p>
      <p>Here is an example:</p>
      <CodeBlock
        code={`
.scatterplotCircle {
  cursor: pointer;
  fill-opacity: .3;
  stroke-width: 2px;
}

.scatterplotCircle:hover {
  fill-opacity: 1;
  stroke-width: 1px;
}
`.trim()}
      />

      <h2>Application on a scatterplot</h2>
      <p>
        Consider a scatterplot with multiple SVG <code>circle</code> elements,
        each assigned a <code>.scatterplotCircle</code> class. In the CSS file,
        you can set the <code>fill-opacity</code> to <code>0.3</code> using this
        class.
      </p>
      <p>
        To change the appearance on hover, use the{' '}
        <code>.scatterplotCircle:hover</code> selector to increase the opacity
        to 1.
      </p>
      <ChartOrSandbox
        vizName={'ScatterplotHoverHighlightPseudoClass'}
        VizComponent={ScatterplotHoverHighlightPseudoClassDemo}
        maxWidth={400}
        height={500}
        caption="Strategy 1: use a pseudo-class to change the appearance of the hovered marker"
      />
      <h2>Pros & Cons</h2>
      <p>
        <Badge>Pros</Badge>
      </p>
      <ul>
        <li>Easy to implement</li>
        <li>Excellent performance (no JS computation, minimal redrawing)</li>
      </ul>
      <p>
        <Badge variant="destructive">Cons</Badge>
      </p>
      <ul>
        <li>
          Poor design: non-hovered circles remain prominent, so the highlight
          effect is weak
        </li>
        <li>
          If the highlight information comes as a prop, another solution is
          needed
        </li>
      </ul>
      <h2>More examples</h2>
      <p>
        The examples below all use this strategy to implement their hover
        effect.
      </p>
      <GraphGallery
        images={['heatmapVaccination.png', 'treemap-most-basic.png']}
      />
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
            title: <span>Three circles</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[0]} />,
          },
          {
            title: <span>Your first treemap</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[1]} />,
          },
          {
            title: (
              <span>
                Death by <code>useState()</code>
              </span>
            ),
            content: <ExerciseDoubleSandbox exercise={exercises[2]} />,
          },
          {
            title: <span>Fix the mess!</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[3]} />,
          },
        ]}
      />

      <Graph11 />
    </LayoutCourse>
  );
}

const exercises: Exercise[] = [
  {
    whyItMatters: (
      <>
        <p>
          Learn the <code>:hover</code> pseudo-class once, and you'll remember
          it forever!
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>Add 3 circles in the SVG area.</li>
          <li>
            Apply the <code>:hover</code> pseudo-class to change their style on
            hover.
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/Hover3CirclesPractice',
    solutionSandbox: 'exercise/Hover3CirclesSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          The <code>:hover</code> pseudo-class is especially useful in treemaps,
          a great alternative to pie charts.
        </p>
        <p>Let's use this opportunity to create your first treemap!</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            A dataset is provided with numeric values for 5 groups (A &rarr; E).
          </li>
          <li>
            Use d3's <code>treemap()</code> function to calculate positions for
            the 5 rectangles.
          </li>
          <li>
            Render the 5 rectangles using <code>rect</code> elements in the SVG
            area.
          </li>
          <li>
            For more details, refer to the{' '}
            <Link href="/treemap">treemap section</Link> in the gallery!
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/HoverFirstTreemapPractice',
    solutionSandbox: 'exercise/HoverFirstTreemapSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          Performance matters, and can quicly become a nightmare when dealing
          with interactivity.
        </p>
        <p>This exercise shows a very common mistake: too much rerendering.</p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>A dataset containing 500,000 data points is provided.</li>
          <li>
            Create a state variable to store the ID of the data point to
            highlight. This variable should initially be set to{' '}
            <code>null</code> and can later hold a value between 0 and 500,000.
          </li>
          <li>Render all 500,000 data points as small circles.</li>
          <li>
            Display the circles in black, except for the highlighted circle,
            which should appear in red.
          </li>
          <li>
            Add an <code>onMouseOver</code> event to update the state with the
            ID of the hovered circle.
          </li>
          <li>
            Now play with the chart.{' '}
            <TakeHome>What do you think about performances?</TakeHome>
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/HoverDeathByStatePractice',
    solutionSandbox: 'exercise/HoverDeathByStateSolution',
  },

  {
    whyItMatters: (
      <>
        <p>
          When something can be achieved with CSS only, always ditch Javascript!
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Fix the previous exercise: instead of using a js state, use a css
            pseudo class for the hover effect!
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/HoverDeathByStateFixPractice',
    solutionSandbox: 'exercise/HoverDeathByStateFixSolution',
  },
];
