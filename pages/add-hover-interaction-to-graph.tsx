import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import { ChartOrSandbox } from '../component/ChartOrSandbox';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { Scatterplot as ScatterplotHoverHighlight } from '../viz/ScatterplotHoverHighlightPseudoClass/Scatterplot';
import { data } from '../viz/ScatterplotHoverHighlightPseudoClass/data';
import { Caption } from '../component/UI/Caption';
import { ScatterplotHoverHighlightDemo } from '../viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightDemo';
import { ScatterplotHoverHighlightTwoLayersDemo } from '../viz/ScatterplotHoverHighlightTwoLayers/ScatterplotHoverHighlightTwoLayersDemo';
import { DonutChartHoverDemo } from '../viz/DonutChartHover/DonutChartHoverDemo';
import { TreemapHoverEffectDemo } from '../viz/TreemapHoverEffect/TreemapHoverEffectDemo';
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
      <h2 id="hover pseudo class">
        1️⃣ The <code>:hover</code> css pseudo class
      </h2>
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

      {/*
      //
      //
      //
      */}
      <h2 id="dim-other-groups">2️⃣ Dim Other Groups with CSS Only</h2>
      <p>
        The previous strategy falls short in terms of design. While it
        highlights the hovered marker, it doesn't sufficiently <b>dim</b> the
        other markers to make the hover effect <b>stand out</b>.
      </p>
      <p>
        This can be improved using a{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator">
          descendant selector
        </a>
        , which allows you to target elements that are children of another
        element.
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

      <ChartOrSandbox
        vizName={'TreemapHoverEffect'}
        VizComponent={TreemapHoverEffectDemo}
        maxWidth={600}
        height={400}
        caption="Strategy 2: use CSS descendant combinator to dim all markers except the one that is hovered."
      />

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
      <GraphGallery
        images={[
          'bubble-plot-with-legend.png',
          '2d-density-plot.png',
          'correlogramBasic.png',
          'scatterplot-tooltip-with-voronoi-for-closest-point-detection.gif',
          'scatterplot-basic-canvas.png',
          'timeseries-moving-average.png',
        ]}
      />

      {/*
      //
      //
      //
      */}
      <h2 id="dim other groups">3️⃣ Toggle class in JS</h2>
      <p>
        More elegant in term of design. Requires to dim all series by adding a
        class to the parent div. Then highlight the hovered shape by removing
        it's dim.
      </p>
      <ChartOrSandbox
        vizName={'DonutChartHover'}
        VizComponent={DonutChartHoverDemo}
        maxWidth={800}
        height={400}
        caption="A donut chart with clean inline legends, built thanks to the centroid function of d3.js."
      />

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
          application.
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
