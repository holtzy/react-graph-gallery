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

const snippet1 = `
.circle {
  fill-opacity: 1;
}
.svgArea:hover .circle {
  fill-opacity: .1;
}
.svgArea .circle:hover {
  fill-opacity: 1;
}
`.trim();

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
      <h2 id="dim other groups">2️⃣ Dim other groups with CSS only</h2>
      <p>
        More elegant in term of design. Requires to dim all series by adding a
        class to the parent div. Then highlight the hovered shape by removing
        it's dim.
      </p>
      <p>Do it for treemap</p>
      <CodeBlock code={snippet1} />
      <ChartOrSandbox
        vizName={'TreemapHoverEffect'}
        VizComponent={TreemapHoverEffectDemo}
        maxWidth={600}
        height={400}
        caption="Hover over a group on the treemap to see the other groups fading."
      />
      <p>
        <u>Pro</u>: Better design. Easy to implement.
        <br />
        <u>Con</u>: If mouse enter chart area withouth hovering a circle, I'm
        still fading everything. I can highlight a circle that is below another.
        Perf issue if many dots?
      </p>

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
