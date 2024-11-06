import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { LineChartDatasetTransitionDemo } from '@/viz/LineChartDatasetTransition/LineChartDatasetTransitionDemo';
import { StreamGraphShapeTransitionDemo } from '@/viz/StreamGraphShapeTransition/StreamGraphShapeTransitionDemo';
import { DonutBarplotTransitionDemo } from '@/viz/DonutBarplotTransition/DonutBarplotTransitionDemo';

const previousURL = '/course/animation/enter-update-exit';
const currentURL = '/course/animation/dealing-with-path';
const nextURL = '/course/animation/project';
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
              Thanks to the previous lessons we have a pretty solid
              understanding of react-spring, allowing to animate all the shapes
              on a graph, leading to a pretty nice bubble chart smooth
              transition.
            </p>
            <p>
              There is one piece missing in the puzzle though. How are we going
              to deal with path, to build transitions on charts like the line
              chart or the streamgraph?
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
      <h2>The problem</h2>
      <p>
        Until now we've aanimated the transition of many features: position,
        size, color, text...
      </p>
      <p>
        This is kind of straightforward! If I tell you to animate a position
        from 0 to 100, you understand that you just need to infer positions
        (numbers) between those 2 values.
      </p>
      <p>
        Now, if the first path is M0,100 L 100,200 and that the next path is
        M100,150 L200, 300, it is not so obvious how to go from 1 to the other!
      </p>

      {/* -
-
-
-
-
-
- */}
      <h2>The good news</h2>
      <p>
        react spring KNOWS how to transition between paths that have the same
        number of points.
      </p>
      <ChartOrSandbox
        vizName={'LineChartDatasetTransition'}
        VizComponent={LineChartDatasetTransitionDemo}
        height={400}
        maxWidth={600}
        caption="Click on the buttons to trigger a smooth transition between the 2 line charts."
      />

      {/* -
-
-
-
-
-
- */}
      <h2>The bad news</h2>
      <p>
        react spring does NOT know how to transition between 2 paths that are
        highly different = not the same number of points. In this case, we need
        to use custom interpolation and the best tool for that is flubber.
      </p>
      <ChartOrSandbox
        vizName={'StreamGraphShapeTransition'}
        VizComponent={StreamGraphShapeTransitionDemo}
        height={600}
        maxWidth={600}
        caption="Try d3.js various options to offset the data and smooth shapes. See a smooth transition between options."
      />
      <p>Even fursther, show the boxplot - violin plot transition</p>
      <ChartOrSandbox
        vizName={'DonutBarplotTransition'}
        VizComponent={DonutBarplotTransitionDemo}
        maxWidth={500}
        height={400}
        caption="Transition from a pie chart to a barplot with a smooth animation using the buttons on top."
      />
    </LayoutCourse>
  );
}
