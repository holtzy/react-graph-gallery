import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { LineChartDatasetTransitionDemo } from '@/viz/LineChartDatasetTransition/LineChartDatasetTransitionDemo';
import { HistogramDatasetTransitionDemo } from '@/viz/HistogramDatasetTransition/HistogramDatasetTransitionDemo';
import { RadarDatasetAnimationDemo } from '@/viz/RadarDatasetAnimation/RadarDatasetAnimationDemo';

const previousURL = '/course/animation/dealing-with-path';
const currentURL = '/course/animation/project';
const nextURL = '/course/canvas/introduction';
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
              Let's apply everything we know to create a good, interactive viz!
            </p>
          </>
        }
      />

      <ChartOrSandbox
        vizName={'RadarDatasetAnimation'}
        VizComponent={RadarDatasetAnimationDemo}
        maxWidth={900}
        height={1000}
        caption="Dive deep into the 4 main types of Data Professionals. Understand their main required competencies, their salary ranges and their popularity."
      />
    </LayoutCourse>
  );
}
