import React from 'react';
import { Layout } from '@/component/Layout';
import TitleAndDescription from '@/component/TitleAndDescription';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import ChartFamilySection from '@/component/ChartFamilySection';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ScatterplotHoverHighlightTwoLayersDemo } from '@/viz/ScatterplotHoverHighlightTwoLayers/ScatterplotHoverHighlightTwoLayersDemo';
import { DonutChartHoverDemo } from '@/viz/DonutChartHover/DonutChartHoverDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import Link from 'next/link';
import { Badge } from '@/component/UI/badge';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { ScatterplotHoverHighlightDimDemo } from '@/viz/ScatterplotHoverHighlightDim/ScatterplotHoverHighlightDimDemo';
import GraphGallery from '@/component/GraphGallery';

const graphDescription = (
  <>
    <p>
      <b>Interactivity</b> is crucial in data visualization, especially for web
      applications. Adding <b>hover effects</b> enhances user experience by
      highlighting specific series on the chart.
    </p>
    <p>
      This post suggests a few strategies to implement hover effects using css
      and react.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Hover interaction on a chart with React"
      seoDescription="How to add a hover effect on a chart built with d3.js and React"
    >
      <TitleAndDescription
        title="Hover interaction on a chart with React"
        description={graphDescription}
      />

      <blockquote>
        {' '}
        Note: this article does not talk about tooltips that has its{' '}
        <Link href="/articles">dedicated section</Link>.
      </blockquote>

      {/*
      //
      //
      //
      */}
      <h2 id="dim other groups">4️⃣ Internal state & event listener</h2>
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
      <GraphGallery
        images={['line-chart-synced-cursor.gif', 'streamgraph-application.gif']}
      />

      {/*
      //
      //
      //
      */}
      <h2 id="canvas">4️⃣ Canvas</h2>
      <p>
        Using the <code>useDimensions</code> hook described above is pretty
        straight-forward. You first need to create a <code>ref</code> using the
        react <code>useRef()</code>
        function:
      </p>
      {/* <CodeBlock code={snippet2} /> */}
      <ChartOrSandbox
        vizName={'ScatterplotHoverHighlightTwoLayers'}
        VizComponent={ScatterplotHoverHighlightTwoLayersDemo}
        maxWidth={400}
        height={500}
        caption="Use dimming to highlight a specific point"
      />
      <br />

      <br />
      <br />

      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />

      <ChartFamilySection chartFamily="general" />
    </Layout>
  );
}
