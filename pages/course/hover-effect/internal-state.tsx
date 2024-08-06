import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { DonutChartHoverDemo } from '@/viz/DonutChartHover/DonutChartHoverDemo';
import { ScatterplotHoverHighlightDimDemo } from '@/viz/ScatterplotHoverHighlightDim/ScatterplotHoverHighlightDimDemo';
import { Badge } from '@/component/UI/badge';
import GraphGallery from '@/component/GraphGallery';

const previousURL = '/course/hover-effect/toggle-class-in-js';
const currentURL = '/course/hover-effect/internal-state';
const nextURL = '';
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

      <h2>Internal state & event listener</h2>
      <p>Add onMouseEnter event listener to all circle</p>
      <p>Set an internal state</p>
      <p>Trigger a redraw of all circles with conditional state.</p>

      <p>
        As for the tooltip example above, everything starts with an internal
        state (called <code>hoveredGroup</code>) that stores which circle is
        hovered hover.
      </p>
      <CodeBlock
        code={`
const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
`.trim()}
      />
      <p>
        Now, this state needs to be updated when a user hovers over the circle.{' '}
        <code>setHoveredGroup</code> can be passed as a callback to the{' '}
        <code>onMouseOver</code> attribute of each circle.
      </p>
      <p>
        On top of this, some specific css classes can be attributed to circles
        depending on the circle that is hovered hover. In the example above, a
        class called <code>dimmed</code> is added to circles that must
        disappear.
      </p>
      <p>To put it in a nutshell, the circles are created as follows:</p>
      <CodeBlock
        code={`
const allShapes = data.map((d, i) => {
  const className = // class if the circle depends on the hover state
    hoveredGroup && d.group !== hoveredGroup
      ? styles.scatterplotCircle + " " + styles.dimmed
      : styles.scatterplotCircle;

  return (
    <circle
      key={i}
      r={5}
      cx={xScale(d.x)}
      cy={yScale(d.y)}
      className={className} // class is attributed here
      stroke={colorScale(d.group)}
      fill={colorScale(d.group)}
      onMouseOver={() => setHoveredGroup(d.group)} // callback to update the state
      onMouseLeave={() => setHoveredGroup(null)} // and to set it back to null
    />
  );
});
`.trim()}
      />
      <p>
        Last but not least, some css needs to be added to customize the circle
        depending on if they are in default, <code>.dimmed</code> or{' '}
        <code>:hover</code> mode.
      </p>
      <p>
        Note that the <code>filter: saturate(0)</code> is a good way to dim
        unwanted circles. Also, playing with <code>transition-delay</code> and{' '}
        <code>transition-duration</code> adds to animate the transition is a
        nice touch you should consider. Check the code below the example to see
        the full css.
      </p>
      <ChartOrSandbox
        vizName={'ScatterplotHoverHighlightDim'}
        VizComponent={ScatterplotHoverHighlightDimDemo}
        maxWidth={800}
        height={400}
        caption="TODO."
      />

      <h2>Pros & Cons</h2>
      <p>
        <Badge>Pros</Badge>
      </p>
      <ul>
        <li>
          Allows to sync the hover effect with other UI updates. The hovered
          state can be used to update any other react components in the
          application. Like tooltip or another graph.
        </li>
        <li>
          Using javascript to trigger the animation can give more flexibility to
          customize the hover effect, using react-spring for instance.
        </li>
      </ul>
      <p>
        <Badge variant="destructive">Cons</Badge>
      </p>
      <ul>
        <li>
          Performance 🚨. Here we are redrawing all the circles each time a
          hover effect is hovered. This can be dramatic if you have thousands of
          circles!
        </li>
      </ul>

      <h2>More examples</h2>
      <p>
        The examples below all use this strategy to implement their hover
        effect.
      </p>
      <GraphGallery
        images={['line-chart-synced-cursor.gif', 'streamgraph-application.gif']}
      />
    </LayoutCourse>
  );
}
