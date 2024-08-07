import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';

const previousURL = '/course/svg/introduction';
const currentURL = '/course/svg/main-svg-elements';
const nextURL = undefined;
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
              In the previous lesson we learnt what SVG is and how to draw a
              circle with it.
            </p>
            <p>
              We'll need other shapes to make graphs: rectangle, text, segment.
              Let's see how to make them too.
            </p>
          </>
        }
      />

      <h2>Rectangle</h2>
      <p>Explain why react is great?</p>
      <p>Talk about the setup I recommend: next.js + Typescript</p>
      <p>Talk about style management in next.</p>
      <p>Say I like shadCn UI and tailwind, but won't be used in the course.</p>
      <p>Talk about my boiler plate.</p>
    </LayoutCourse>
  );
}
