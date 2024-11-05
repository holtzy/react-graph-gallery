import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { TakeHome } from '@/component/TakeHome';

const previousURL = '/course/data-fetching/spinner';
const currentURL = '/course/animation/introduction';
const nextURL = '/course/animation/animate-a-circle';
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
              Welcome to the world of animation. It's passionating, but also
              very complicated.
            </p>
            <p>
              This first lesson is here to explain why animations are great in
              dataviz, when to use it or not, and what spring animations are.
            </p>
            <p>We'll dive into the code in the next lesson!</p>
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
      <h2>Animation: why?</h2>
      <p>
        Give a cool example. Explain why it can be useful to keep the context
        between 2 datasets, and that's it is eye catching.
      </p>
      <p>Salty citation</p>
      <p>Bubble plot example.</p>
      <p>Useful for dataset transition.</p>
      {/* -
-
-
-
-
-
- */}
      <h2>Yes, but</h2>
      <p>Explain that they must be used with care.</p>
      <p>An app ppl use everyday? Be very careful with it.</p>
      <p>Massive performance issues.</p>

      {/* -
-
-
-
-
-
- */}
      <h2>2 tyoes if animation</h2>
      <p>Explain CSS vs spring</p>
      <p>Introduce spring</p>

      <TakeHome>Now, let's do it!</TakeHome>
    </LayoutCourse>
  );
}
