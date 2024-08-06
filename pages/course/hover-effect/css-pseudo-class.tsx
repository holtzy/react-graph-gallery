import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { Badge } from '@/component/UI/badge';
import GraphGallery from '@/component/GraphGallery';

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
            <p>
              In the previous modules, you learned how to create a wide variety
              of static charts. 👏
            </p>
            <p>
              However, <b>interactivity</b> is essential web applications.
              Adding <b>hover effects</b> significantly enhances the user
              experience by highlighting specific series on the chart.
            </p>
            <p>
              In this module, we'll explore <b>several strategies</b> for
              implementing hover effects using both CSS and React. Before diving
              into the code, let's ensure we have a clear understanding of what
              hover effects are.
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
    </LayoutCourse>
  );
}
