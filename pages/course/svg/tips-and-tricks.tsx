import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';

const previousURL = '/course/introduction/initial-setup';
const currentURL = '/course/introduction/what-is-svg';
const nextURL = '/course/introduction/what-is-svg';
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
              Let's create a confortable working environment: let's use Next.js.
            </p>
          </>
        }
      />

      <p>
        You cannot change the background color of an SVG area. You need to draw
        a rectangle on top.
      </p>
      <p>
        Aligning text has a weird terminology: textAnchor and alignment
        baseline.
      </p>
      <p>You can group svg items using the g tag.</p>
      <p>
        Talk about stroke, fill, color that do not work the same way as div.
      </p>
      <p>Talk about css specificity</p>
      <p>Talk about text specificity in SVG vs HTML</p>
      <p>
        SVG dimensions: what happens with "100%". Link to responsiveness module.
      </p>
      <p>Talk about filter and blur effects, gradients</p>

      <p>SVG layers are drawn one on top of each other -- order matters.</p>

      <p>Talk about blury SVG elements: crispEdges</p>
    </LayoutCourse>
  );
}
