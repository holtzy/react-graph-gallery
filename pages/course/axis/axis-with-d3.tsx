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
import { Caption } from '@/component/UI/Caption';
import { TakeHome } from '@/component/TakeHome';
import { Sidenote } from '@/component/SideNote';

const previousURL = '/course/axis/axis-variations';
const currentURL = '/course/axis/axis-with-d3';
const nextURL = '/course/axis/project';
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
              The previous lessons taught us how to build React{' '}
              <b>axis components</b> that can be used in any of your charts.
            </p>
            <p>
              However, there's an alternative worth mentioning:{' '}
              <b>D3 can also draw axes</b>. Let's explore this option and see
              which one works best for you.
            </p>
          </>
        }
      />

      <h2>The d3 axis module</h2>
      <p>
        D3 has a{' '}
        <a href="https://d3js.org/d3-axis" target="_blank">
          whole module
        </a>{' '}
        dedicated to drawing axes! It is called ... <code>d3-axis</code> 🙃
      </p>
      <p>
        It performs essentially the same function as the <code>AxisBottom</code>{' '}
        and
        <code>AxisLeft</code> components we created in the previous lesson:
        taking a scale and <b>rendering</b> lines and ticks based on it on the
        screen.
      </p>

      <p>
        <br />
      </p>
      <center>
        <img
          src="/img/d3-axis-overview.png"
          width={700}
          className="border p-2"
        />
        <Caption>
          <p>
            A few axes made with d3.js and its <code>d3-axis</code> module.
          </p>
        </Caption>
      </center>

      <h2>😳 Did you say rendering?</h2>
      <p>
        <TakeHome>We have a challenge</TakeHome>: in a React environment where
        rendering is managed by React, how can we <b>delegate</b> part of the
        rendering process to D3?
      </p>
      <p>
        This is possible using a react <code>useEffect()</code>!
      </p>
      <p>Here is an example:</p>
      <ChartOrSandbox
        vizName={'AxisBasicD3'}
        VizComponent={AxisBasicD3Demo}
        maxWidth={600}
        height={300}
        caption={
          'This axis is rendered using d3. The d3 necessary functions are called from a useEffect'
        }
      />
      {/* -
      -
      -
      -
      -
       */}
      <h2>How to Use D3 to Render Axes in a React App</h2>
      <p>Let's clarify the code from the example above.</p>

      <h3>
        ⛳️ Using a <code>ref</code>
      </h3>
      <p>
        A <a href="https://react.dev/reference/react/useRef">ref</a> acts as a
        pointer to a specific part of the DOM. We need to initialize a{' '}
        <code>ref</code> and assign it to the SVG element we want to manipulate
        with JavaScript later on.
      </p>
      <p>
        To create the <code>ref</code>, use the following code:
      </p>
      <CodeBlock
        code={`
const axesRef = useRef(null);
  `.trim()}
      />
      <p>
        Next, assign the <code>ref</code> to the <code>&lt;g&gt;</code> element
        where D3 will render the axis:
      </p>
      <CodeBlock
        code={`
<g
  width={boundsWidth}
  height={boundsHeight}
  ref={axesRef}
  transform={...do the translate}
/>
  `.trim()}
      />

      <h3>
        🔧 Implementing a <code>useEffect</code> to modify the <code>ref</code>
      </h3>
      <p>
        Now, we need a{' '}
        <a href="https://react.dev/reference/react/useEffect">useEffect</a> that
        selects this <code>ref</code> and applies changes to it.
      </p>
      <p>
        The <code>useEffect</code> hook allows us to run a function each time
        the component mounts and whenever specified variables are updated.
      </p>
      <CodeBlock
        code={`
useEffect(() => {
  const svgElement = d3.select(axesRef.current);
  // Now do some stuff to this svgElement...
}, [xScale, width]); // Rerun this function when xScale or chart width changes to redraw the axis
  `.trim()}
      />

      <h3>✏️ Let's draw</h3>
      <p>
        Now we can use some d3.js code inside the <code>useEffect</code>. This
        will draw a bottom axis!
      </p>
      <div className="relative">
        <Sidenote
          text={
            <p>
              This code is often considered <b>imperative</b>, whereas React
              code is typically <b>declarative</b>.
            </p>
          }
        />
        <CodeBlock
          code={`
const svgElement = d3.select(axesRef.current);

// remove potential previous axes
svgElement.selectAll("*").remove();

// d3 code to render a bottom axis:
const xAxisGenerator = d3.axisBottom(xScale);
svgElement
  .append("g")
  .attr("transform", "translate(0," + boundsHeight + ")")
  .call(xAxisGenerator);

  `.trim()}
        />
      </div>
      <p>Done! 🎉</p>

      <h2>So, React or D3.js for Axes?</h2>
      <p>
        Both options have their merits, each with its own set of pros and cons.
        Personally, <TakeHome>I prefer the React component approach</TakeHome>{' '}
        for creating axes. Here’s why:
      </p>
      <p>
        <br />
      </p>
      <p>
        🎨 <strong>Styling:</strong> You can customize axis elements
        individually, allowing for precise styling.
      </p>
      <p>
        🔄 <strong>Lifecycle:</strong> When using D3 to create axes, they
        operate outside of React's lifecycle events, making it challenging to
        ensure they update at the right times.
      </p>
      <p>
        ♻️ <strong>Reusability:</strong> React emphasizes the creation of
        reusable components. Building axes with D3 each time goes against this
        philosophy, which simplifies development.
      </p>
      <p>
        🛠️ <strong>Maintainability / Readability:</strong> Other developers in
        your organization will likely find it easier to understand the SVG
        markup of the AxisBottom component compared to the D3.js functions from
        the d3-axis module.
      </p>
    </LayoutCourse>
  );
}
