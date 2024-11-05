import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import Link from 'next/link';
import { Caption } from '@/component/UI/Caption';
import { ScatterplotClimateCrisisDemo } from '@/viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { TakeHome } from '@/component/TakeHome';

const previousURL = '/course/hover-effect/internal-state';
const currentURL = '/course/tooltip/introduction';
const nextURL = '/course/tooltip/tooltip-component';
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
              One of the most frustrating experiences in visual design is seeing
              a graph element on the screen but <b>missing crucial details</b>{' '}
              about it—even though that information exists!
            </p>
            <p>
              This module will end that frustration by showing you how to create{' '}
              <b>reusable tooltip components</b>. Let’s dive in.
            </p>
          </>
        }
      />
      <h2>🤔 Tooltip: Why?</h2>
      <p>
        The graph below is a <Link href="/scatter-plot">scatterplot</Link>{' '}
        originally published by Datawrapper. It shows a strong{' '}
        <b>negative correlation</b> between vulnerability to climate change and
        CO₂ emissions 😔.
      </p>
      <p>The graph looks good, and the message is clear.</p>
      <p>
        But while a few countries are labeled on the chart,{' '}
        <TakeHome>
          isn’t it frustrating not to know which country each data point
          represents
        </TakeHome>
        ?
      </p>
      <p>
        <br />
      </p>
      <p>In my opinion, it definitely is!</p>
      <p>
        This is where tooltips come into play. Try hovering over a square: an
        informative tooltip with everything you need to know will appear.
      </p>
      <ChartOrSandbox
        VizComponent={ScatterplotClimateCrisisDemo}
        vizName={'ScatterplotClimateCrisis'}
        maxWidth={700}
        height={900}
        caption={
          <span>
            Reproduction of a chart originally published by{' '}
            <a href="https://blog.datawrapper.de/climate-risk-readiness-responsibility/">
              Data Wrapper
            </a>{' '}
            using react and d3.js.
          </span>
        }
      />
      {/* -
-
-
-
-
-
-
-
-
- */}
      <h2>Design consideration</h2>
      <p>A few stuff to keep in mind to create a good tooltip:</p>
      <h3>⚡️ Fast, but not too fast</h3>
      <p>
        Tooltips should appear <b>quickly upon hovering</b>, but not so fast
        that they flicker with small mouse movements
      </p>
      <h3>💧 Show only crucial information</h3>
      <p>
        Do not <b>overwhelm</b> the user with a ton of information. Pick only
        what's truly informative. Tooltip are not always necessary, if it's just
        to remind the marker value, do not build a tooltip.
      </p>
      <h3>📍 Positionning</h3>
      <p>
        Tooltips should appear <b>near the cursor</b> without obstructing the
        view of other data points. They should <b>reposition</b> based on
        available screen space.
      </p>
      <h3>👨‍🦽 Accessibility</h3>
      <p>
        Tooltips should be accessible for all users, including those navigating
        via keyboard.
      </p>
      <h3>👯 Consistency</h3>
      <p>
        consistent formatting and style across all tooltips within the chart and
        within the application. Make tooltip style fits marker style.
      </p>
      {/* -
-
-
-
-
-
-
-
-
- */}
      <h2>Tooltip: How?</h2>
      <p>The tooltip isn’t built in SVG, but in HTML.</p>
      <p>
        Formatting text in SVG can be cumbersome, and HTML offers useful CSS
        features like borders and shadows that are perfect for tooltips.
      </p>
      <p>
        The strategy is straightforward: place a <code>div</code> on top of the
        SVG area with matching dimensions. This <code>div</code> will host the
        tooltip React component, rendering HTML directly inside it.
      </p>
      <p>
        <br />
      </p>
      <center>
        <img
          src="/excalidraw/tooltip-layer.png"
          width={550}
          alt="Anatomy of a graph with separate layers for SVG and tooltips"
        />
        <Caption>
          Anatomy of a Graph with an SVG area and an overlaying tooltip layer
        </Caption>
      </center>{' '}
      <p>
        <br />
      </p>
      <p>Now, we have two tasks ahead:</p>
      <p>1️⃣ Create a Tooltip component that displays the information.</p>
      <p>
        2️⃣ Ensure the tooltip appears only when the user hovers over a graph
        element.
      </p>{' '}
      <p>
        <br />
      </p>
      <p>That’s the plan for the next two lessons!</p>
    </LayoutCourse>
  );
}
