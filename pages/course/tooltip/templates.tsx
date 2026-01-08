import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotTooltipDemo } from '@/viz/ScatterplotTooltip/ScatterplotTooltipDemo';
import { ScatterplotVoronoiTooltipDemo } from '@/viz/ScatterplotVoronoiTooltip/ScatterplotVoronoiTooltipDemo';
import { ScatterplotClimateCrisisDemo } from '@/viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo';
import { HeatmapTooltipSwapDemo } from '@/viz/HeatmapTooltipSwap/HeatmapTooltipSwapDemo';

const previousURL = '/course/tooltip/display-on-hover';
const currentURL = '/course/tooltip/templates';
const nextURL = '/course/tooltip/project';
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
              Thanks to the previous lessons, we now have a solid mental model
              of how a <code>Tooltip</code> component works.
            </p>
            <p>
              This lesson brings together all the examples from the gallery that
              feature tooltips, providing you with inspiration and code for your
              own projects.
            </p>
          </>
        }
      />

      <h2>Scatter plot</h2>
      <ChartOrSandbox
        VizComponent={ScatterplotTooltipDemo}
        vizName={'ScatterplotTooltip'}
        maxWidth={500}
        height={500}
        caption="Scatterplot with tooltip. Hover over a circle to get the corresponding country name."
      />
      <h2>Tooltip with Dynamic Direction</h2>
      <p>
        To prevent tooltips from extending outside the chart area, adjust their
        direction based on the hovered element's position, displaying them on
        the left or right as needed.
      </p>

      <ChartOrSandbox
        VizComponent={HeatmapTooltipSwapDemo}
        vizName={'HeatmapTooltipSwap'}
        maxWidth={800}
        height={400}
        caption="Scatterplot with tooltip. Hover over a circle to get the corresponding country name."
      />

      <h2>Voronoi detection</h2>
      <ChartOrSandbox
        VizComponent={ScatterplotVoronoiTooltipDemo}
        vizName={'ScatterplotVoronoiTooltip'}
        maxWidth={600}
        height={600}
        caption={
          'A scatterplot with tooltip. The closest point is detected using Voronoi to trigger the tooltip apparition.'
        }
      />

      <h2>Bubble plot</h2>
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
    </LayoutCourse>
  );
}
