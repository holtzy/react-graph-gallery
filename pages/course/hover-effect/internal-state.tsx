import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ScatterplotHoverHighlightDimDemo } from '@/viz/ScatterplotHoverHighlightDim/ScatterplotHoverHighlightDimDemo';
import { Badge } from '@/component/UI/badge';
import GraphGallery from '@/component/GraphGallery';
import { Caption } from '@/component/UI/Caption';
import Link from 'next/link';
import { ConnectionBarPieDemo } from '@/viz/ConnectionBarPie/ConnectionBarPieDemo';

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
        selectedLesson={currentLesson}
        description={
          <>
            <p>
              We've already explored three different strategies for adding hover
              effects to a chart! 😳 Each relies heavily on CSS, which is ideal
              as it requires <b>minimal redrawing</b>.
            </p>
            <p>
              However, sometimes a more traditional React approach is needed,
              using a <b>central state</b> to trigger redraws when the state
              updates. Let’s explore why. ⬇️
            </p>
          </>
        }
      />

      <h2>⚙️ Why and How</h2>
      <p>
        Imagine you have multiple UI components. Say, a{' '}
        <Link href="/barplot">barplot</Link> and a{' '}
        <Link href="/pie-plot">pie chart</Link>, both displaying numbers for the
        same groups.
      </p>
      <p>
        When you hover over Group <code>B</code> on the barplot, you also want
        group <code>B</code> to be highlighted on the pie chart. This setup is
        common in dashboards.
      </p>
      <p>
        The CSS-focused strategies we've used before <b>won’t work here</b>.
        Instead, we need a<b> parent component </b>that wraps both charts and
        manages a <b>shared state</b>. When one chart is hovered, it updates the
        shared state, which in turn updates both charts.
      </p>

      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/excalidraw/state-update.png"
          style={{ maxWidth: 650 }}
          alt="Anatomy of a state update connection 2 charts."
        />
        <Caption>
          Anatomy of a state update, connecting 2 charts together.
        </Caption>
      </div>

      <p>Here’s a step-by-step breakdown:</p>
      <p>
        1️⃣ The mouse hovers over group <code>B</code> on the bar plot,
        triggering a function thanks to <code>onMouseEnter</code>
      </p>
      <p>
        2️⃣ This function calls <code>setHoverGroup</code>, updating the{' '}
        <b>global state</b> in the parent component.
      </p>
      <p>
        3️⃣ <code>hoveredGroup</code>, the global state, is passed to the pie
        chart as a prop.
      </p>
      <p>
        4️⃣ When <code>hoveredGroup</code> updates, the pie chart re-renders,
        highlighting the group <code>B</code> slice.
      </p>
      {/* -
-
-
-
-
-
- */}

      <h2>Let's code!</h2>
      <h3>1️⃣ Internal state</h3>
      <p>
        First, we need an internal state (called <code>hoveredGroup</code>) that
        stores which group is hovered hover. It can also be <code>null</code> if
        there is nothing hovered!
      </p>
      <p>
        This is possible thanks to the{' '}
        <a href="https://react.dev/reference/react/useState">useState</a> hook:
      </p>
      <CodeBlock
        code={`
const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);
`.trim()}
      />
      <h3>2️⃣ Updating the state</h3>
      <p>
        Now, this state needs to be updated when a user hovers over a bar in the{' '}
        <code>Barplot</code> component.
      </p>
      <p>
        To do so, the <code>setHoveredGroup()</code> function can be passed as a
        prop to the Barplot component.
      </p>
      <CodeBlock
        code={`
<Barplot width={300} height={300} setHoveredGroup={setHoveredGroup}>`.trim()}
      />
      <p>
        Then, the <code>onMouseOver</code> attribute of each rectangle can call
        this setter function!
      </p>
      <CodeBlock
        code={`
<svg>
  {data.map(d => {
    return(
      <rect
        x={}
        y={}
        onMouseOver={() => setHoveredGroup(d.group)} // update the state
        onMouseLeave={() => setHoveredGroup(null)} // and to set it back to null
</svg>`.trim()}
      />
      <p>That's it, the state is updated!</p>

      <h3>3️⃣ Update the pie chart</h3>
      <p>
        <code>hoveredGroup</code> is now updated. We just have to pass it to the
        pie chart component!
      </p>
      <CodeBlock
        code={`
<Pie width={300} height={300} hoveredGroup={hoveredGroup}>`.trim()}
      />
      <p>
        This will trigger a rerender of the <code>Pie</code> component, since a
        prop just changed.
      </p>

      <h3>4️⃣ Highlight a slice</h3>
      <p>
        Now, we can use the value of <code>hoveredGroup</code> in the rendering
        logic to change the style of the slice that must be highlighted.
      </p>
      <CodeBlock
        code={`
<path
    fill = {d.group === hoveredGroup ? "blue" : "red"}
/>
`.trim()}
      />
      {/* -
-
-
-
-
-
- */}
      <h2>Example</h2>
      <p>
        Here’s a preview of this strategy in action. Hover over one graph, and
        watch the <b>corresponding section</b> in the other graph highlight as
        well:
      </p>

      <ChartOrSandbox
        vizName={'ConnectionBarPie'}
        VizComponent={ConnectionBarPieDemo}
        maxWidth={800}
        height={400}
        caption="Two graphs inter-connected thanks to a hover effect"
      />
      {/* -
-
-
-
-
-
- */}
      <h2>Pros & Cons</h2>

      <p>
        <Badge>Pros</Badge>
      </p>
      <ul>
        <li>
          Enables synchronization across <b>multiple</b> UI components, allowing
          hover effects, tooltips, and text highlights to update together.
          Highly versatile.
        </li>
        <li>
          Provides flexibility for hover effects by using JavaScript animations,
          for instance, with <code>react-spring</code>.
        </li>
      </ul>

      <p>
        <Badge variant="destructive">Cons</Badge>
      </p>
      <ul>
        <li>
          Performance 🚨🚨🚨: Redrawing all elements on each hover event can
          significantly impact performance, especially with many elements, such
          as thousands of circles.
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

      {/* -
-
-
-
-
-
- */}
      <h2>Exercise</h2>
      <p>
        Open a new sandbox, and build the barplot + pie chart example above from
        scratch!
      </p>

      <p>
        <br />
        <br />
      </p>
      <blockquote className="bg-fuchsia-50 py-8">
        <p>
          Remember, this strategy can have <b>performance drawbacks</b>! We'll
          cover a workaround using Canvas later in this course.
        </p>
      </blockquote>
    </LayoutCourse>
  );
}
