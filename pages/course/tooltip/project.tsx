import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { HeatmapVaccinationDemo } from '@/viz/HeatmapVaccination/HeatmapVaccinationDemo';
import { CodeBlock } from '@/component/UI/CodeBlock';
import Link from 'next/link';
import { buttonVariants } from '@/component/UI/button';
import { cn } from '@/util/utils';

const previousURL = '/course/tooltip/templates';
const currentURL = '/course/tooltip/project';
const nextURL = '/course/legend/introduction';
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
              We’ve covered a lot in the previous modules! 🎉 Now, let’s put it
              all together by recreating one of the most famous heatmaps. This
              exercise will include features like hover effects, tooltips,
              responsiveness, color scales, and more.
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
- */}
      <h2>📍 Our Objective</h2>
      <p>
        In this lesson, our goal is to recreate a <b>famous heatmap</b> that
        illustrates the impact of vaccination on measles infection rates.
      </p>
      <p>This heatmap includes several great features:</p>
      <ul>
        <li>Clear, intuitive color scale</li>
        <li>Legend</li>
        <li>Tooltip</li>
        <li>Hover effect</li>
      </ul>

      <p>
        <br />
      </p>

      <HeatmapVaccinationDemo width={650} height={550} />
      {/* -
-
-
-
-
-
- */}
      <h2>The Data</h2>
      <p>The dataset is straightforward!</p>
      <p>
        It’s an array where each item represents a cell. The <code>x</code>{' '}
        value is the year, mapped to the X-axis. The <code>y</code> value is the
        US state, mapped to the Y-axis. Finally, the <code>value</code> is used
        to determine the cell color.
      </p>

      <CodeBlock
        code={`
const data = [
  {
    x: 1928,
    y: "Alaska",
    value: null
  },
  {
    x: 1928,
    y: "Ala.",
    value: 334.9621212
  },
      `.trim()}
      />
      <p>
        You can find the complete js object{' '}
        <a href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/HeatmapVaccination/data.ts">
          here
        </a>
        .
      </p>
      <p>
        <Link
          className={cn('no-underline', buttonVariants({ variant: 'default' }))}
          href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/HeatmapVaccination/data.ts"
        >
          Get full data
        </Link>
      </p>

      {/* -
-
-
-
-
-
- */}
      <h2>Good Luck!</h2>
      <p>Here are a few helpful hints</p>
      <h3>🌈 Color scale</h3>
      <p>
        The color scale is not straightforward. It is built like below. See the
        power of <code>scaleLinear</code>? it can interpolate between several
        colors in an array.
      </p>
      <CodeBlock
        code={`

const COLORS = [
  "#e7f0fa",
  "#c9e2f6",
  "#95cbee",
  "#0099dc",
  "#4ab04a",
  "#ffd73e",
  "#eec73a",
  "#e29421",
  "#e29421",
  "#f05336",
  "#ce472e",
];

const THRESHOLDS = [
  0, 0.01, 0.02, 0.03, 0.09, 0.1, 0.15, 0.25, 0.4, 0.5, 1,
];


const colorScale = d3
  .scaleLinear<string>()
  .domain(THRESHOLDS.map((t) => t * max))
  .range(COLORS);
      `}
      />

      <h3>🦄 Color legend</h3>
      <p>
        Take a few seconds to think about how you would build it. Also, did you
        notice that a little arrow appears on the legend when a cell is hovered
        over?
      </p>
      <p>
        Once you have a good idea, read and use the code of the legend component
        <a href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/HeatmapVaccination/ColorLegend.tsx">
          here
        </a>
        .
      </p>
      <p>
        <Link
          className={cn('no-underline', buttonVariants({ variant: 'default' }))}
          href="https://github.com/holtzy/react-graph-gallery/blob/main/viz/HeatmapVaccination/ColorLegend.tsx"
        >
          Legend Component
        </Link>
      </p>

      <h3>📏 Scales</h3>
      <p>
        x and y scales are band scales made with <code>scaleBand()</code>
      </p>
      {/* -
-
-
-
-
-
- */}
      <h2>Solution</h2>
      <ChartOrSandbox
        VizComponent={HeatmapVaccinationDemo}
        vizName={'HeatmapVaccination'}
        maxWidth={800}
        height={550}
        caption={
          'Number of Measles infected people over 70-some years and across all 50 states. Can you guess when a vaccine was introduced?'
        }
      />
    </LayoutCourse>
  );
}
