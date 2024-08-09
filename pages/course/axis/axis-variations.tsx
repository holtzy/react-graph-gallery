import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ExerciseAccordion } from '@/component/ExerciseAccordion';
import Link from 'next/link';

const previousURL = '/course/axis/bottom-axis';
const currentURL = '/course/axis/axis-variations';
const nextURL = '/course/axis/axis-with-d3';
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
              In the previous lesson we made a reusable component for the bottom
              axis.
            </p>
            <p>
              This lesson suggests many variation: left axis, adding grids,
              dealing with titles...
            </p>
          </>
        }
      />

      <h2>Left axis</h2>

      <h2>Gallery</h2>
      <p>
        Show a gallery with the various axis styles available in the gallery.
      </p>
    </LayoutCourse>
  );
}
