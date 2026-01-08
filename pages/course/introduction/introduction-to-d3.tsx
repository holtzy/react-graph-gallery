import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { Sidenote } from '@/component/SideNote';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import { LineChartSyncCursorDemo } from '@/viz/LineChartSyncCursor/LineChartSyncCursorDemo';
import { Caption } from '@/component/UI/Caption';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { Treemap2LevelsDemo } from '@/viz/Treemap2Levels/Treemap2LevelsDemo';
import Link from 'next/link';

const previousURL = '/course/introduction/js-dataviz-libraries';
const currentURL = '/course/introduction/introduction-to-d3';
const nextURL = '/course/introduction/initial-setup';
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
              <a href="https://d3js.org">D3.js</a> is a powerful JavaScript
              library that offers a wide range of functions for creating dynamic
              graphs and visualizations.
            </p>
            <p>
              Its popularity is <b>immense</b>; you’ll find it hard to encounter
              a web-based graph that doesn’t leverage D3 in some capacity. Let’s
              explore why it’s become such an essential tool.
            </p>
          </>
        }
      />
      {/* -
-
-
-
-
-
-
- */}
      <h2>🌳 Try to make a treemap</h2>
      <p>
        Do you know what a{' '}
        <a href="https://www.data-to-viz.com/graph/treemap.html">treemap</a> is?
      </p>
      <p>
        It is this kind of graph, where rectangles are used to represent
        hierarchical data, with size <b>proportional</b> to a value:
      </p>
      <ChartOrSandbox
        vizName={'Treemap2Levels'}
        VizComponent={Treemap2LevelsDemo}
        maxWidth={600}
        height={400}
        caption="A basic treemap made with React and D3.js"
      />
      <p>
        Drawing rectangles with React and some <code>div</code>s is simple. But{' '}
        <b>how do you calculate the coordinates</b> to ensure each rectangle's
        area matches its corresponding value? 🙈
      </p>
      <p>
        That's exactly what the <code>treemap()</code> function in d3.js does
        for you.
      </p>
      <p>And that's why we need d3!</p>
      <p>
        <br />
      </p>
      <blockquote>
        Note: the React Graph Gallery has a whole section on{' '}
        <Link href="/treemap">treemaps</Link>! But do not try to understand the
        code for now!
      </blockquote>
      {/* -
-
-
-
-
-
-
- */}
      <h2>❌ Not a Charting library</h2>
      <p>
        It's important to understand that D3 is <b>not a charting library</b>.
      </p>
      <p>
        A charting library would offer a ready-made <code>Scatterplot</code>{' '}
        component where you pass some properties, and it renders the chart for
        you.
      </p>
      <p>
        D3 doesn’t do that. It provides utility functions to help you create
        your scatterplot, but <b>it won’t build it for you</b>.
      </p>
      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/img/d3-website-overview.png"
          style={{ width: '100%', maxWidth: 900 }}
          alt="Screenshot of the d3.js website"
        />
        <Caption>D3.js website screenshot.</Caption>
      </div>
      <p>
        That's why d3 is ideal for "bespoke" dataviz. It requires more effort
        but gives you <b>complete control</b> for any customization.
      </p>
      {/* -
-
-
-
-
-
-
- */}
      <h2>🗡️ Only a fraction</h2>
      <p>
        D3.js offers a wide range of functions, which can be grouped into two
        main categories:
      </p>

      <h3>📐 Math functions</h3>
      <p>
        These include functions like <code>treemap()</code> mentioned earlier.
        They return numbers, positions, colors, or text, but don’t interact with
        the DOM.
      </p>

      <h3>✍️ Rendering functions</h3>
      <p>
        Functions that modify the DOM, like <code>append</code>, which can add
        elements (e.g., a circle) to an SVG.
      </p>

      <p>
        <br />
      </p>
      <p>
        Here’s the good news: in a React environment, we only need D3's math
        functions, since all the rendering will be handled by React and its JSX!
      </p>
    </LayoutCourse>
  );
}
