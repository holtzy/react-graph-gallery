import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { DonutChartHoverDemo } from '@/viz/DonutChartHover/DonutChartHoverDemo';

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

      <h2>Toggle class in JS</h2>
      <p>
        Problem above: when mouse enter the chart area, triggers effect even if
        no marker hovered over.
      </p>
      <p>
        Solution: CSS compound class selecter (
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector">
          MDN doc
        </a>
        )
      </p>
      <p>
        In CSS, a compound class selector combines multiple class names to
        target elements that match all of the specified classes.
      </p>
      <p>
        We can use the same css as the above example, but add the highlight
        class using javascript:
      </p>
      <CodeBlock
        code={`
onMouseEnter={() => {
  if (ref.current) {
    ref.current.classList.add(styles.hasHighlight);
  }
}}
onMouseLeave={() => {
  if (ref.current) {
    ref.current.classList.remove(styles.hasHighlight);
  }
}}
`.trim()}
      />
      <ChartOrSandbox
        vizName={'DonutChartHover'}
        VizComponent={DonutChartHoverDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />

      <h2>Pros & Cons</h2>

      <h2>More examples</h2>
      <p>
        The examples below all use this strategy to implement their hover
        effect.
      </p>
    </LayoutCourse>
  );
}
