import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Badge } from '@/component/UI/badge';
import GraphGallery from '@/component/GraphGallery';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import Link from 'next/link';
import {
  Exercise,
  ExerciseDoubleSandbox,
} from '@/component/ExerciseDoubleSandbox';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import { Graph9 } from '@/viz/exercise/LollipopFirstSolution/Graph';
import { Graph12 } from '@/viz/exercise/LollipopHoverEffectSolution/Graph';
import { Graph22 } from '@/viz/exercise/Hover3CirclesDescandantSelectorIssueSolution/Graph';

const previousURL = '/course/hover-effect/css-pseudo-class';
const currentURL = '/course/hover-effect/css-descendant-selector';
const nextURL = '/course/hover-effect/toggle-class-in-js';
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
            <p>
              In the previous lesson, we learned how to modify a hovered graph
              item using the <code>:hover</code> CSS pseudo-class.
            </p>
            <p>
              However, this approach has <b>design limitations</b>. To achieve a
              more effective highlighting effect, it's better to simultaneously{' '}
              <b>dim the other graph items</b>.
            </p>
            <p>
              This can be accomplished using CSS alone, with the help of the CSS
              descendant selector.
            </p>
          </>
        }
      />

      <h2>What is a css descendant selector?</h2>

      <p>
        A{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">
          descendant selector
        </a>{' '}
        allows to target elements that are children of another element.
      </p>
      <p>Here’s an example:</p>
      <CodeBlock
        code={`
.rectangle {
  opacity: 1;
}
.container:hover .rectangle {
  opacity: .1;
}
.container .rectangle:hover {
  opacity: 1;
}
`.trim()}
      />
      <p>
        We assign a class called <code>container</code> to the SVG container and
        a class called <code>rectangle</code> to each rectangle in the chart.
      </p>
      <p>
        Then we set the default rectangle <code>opacity</code> to 1. Using the
        descendant selector, you can reduce the opacity of all rectangles to 0.1
        when the <code>container</code> is hovered.
      </p>
      <p>
        Then, use a hover selector to set the opacity of the hovered rectangle
        back to 1.
      </p>

      <h2>Application: treemap</h2>
      <ChartOrSandbox
        vizName={'TreemapHoverEffect'}
        VizComponent={TreemapHoverEffectDemo}
        maxWidth={600}
        height={400}
        caption="Strategy 2: use CSS descendant combinator to dim all markers except the one that is hovered."
      />

      <h2>Pros & Cons</h2>
      <p>
        <Badge>Pros</Badge>
      </p>
      <ul>
        <li>Easy to implement</li>
        <li>Improves design by making hover effects more noticeable</li>
        <li>Excellent performance (no JS computation, minimal redrawing)</li>
      </ul>
      <p>
        <Badge variant="destructive">Cons</Badge>
      </p>
      <ul>
        <li>
          Fades all circles if the mouse enters the chart area without hovering
          over a specific circle. This technique works for chart where the whole
          svg area is covered by markers, like a{' '}
          <Link href="/treemap">treemap</Link>.
        </li>
        <li>
          Cannot highlight circles that are obscured by other elements.
          (Potentially fixed using <code>z-index</code>).
        </li>
      </ul>

      <h2>More examples</h2>
      <p>
        The examples below all use this strategy to implement their hover
        effect.
      </p>
      <GraphGallery
        images={[
          'lollipop-plot-hover-effect.png',
          'streamgraph-hover-effect.gif',
        ]}
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
            title: <span>Your first lollipop! 🍭</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[0]} />,
          },
          {
            title: <span>Lollipop with hover effect</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[1]} />,
          },
          {
            title: <span>Scatterplot = problem 🚨</span>,
            content: <ExerciseDoubleSandbox exercise={exercises[2]} />,
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
          With the SVG and D3 foundations you’ve built, creating a new chart
          type becomes a breeze!
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>A dataset is provided in the sandbox folder.</li>
          <li>
            Build a Cleveland chart with this dataset. (This chart is a
            variation of the lollipop plot and is helpful for comparing two
            values across multiple groups.)
          </li>
          <li>Check the solution tab to see the intended chart appearance.</li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/LollipopFirstPractice',
    solutionSandbox: 'exercise/LollipopFirstSolution',
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

  {
    whyItMatters: (
      <>
        <p>
          The descendant selector technique has limitations! It doesn’t work
          when the SVG area isn’t fully filled with elements.
        </p>
      </>
    ),
    toDo: (
      <>
        <ul>
          <li>
            Use the CSS descendant selector technique to dim circles that aren’t
            hovered over when one circle is hovered.
          </li>
          <li>
            What happens when your mouse enters the SVG area but doesn’t reach
            any circles?
          </li>
        </ul>
      </>
    ),
    practiceSandbox: 'exercise/Hover3CirclesDescendantSelectorIssuePractice',
    solutionSandbox: 'exercise/Hover3CirclesDescendantSelectorIssueSolution',
  },
];
