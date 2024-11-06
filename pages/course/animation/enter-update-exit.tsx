import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ReactSpringEnterExitIssue } from '@/viz/ReactSpringEnterExitIssue/ReactSpringEnterExitIssue';

const previousURL = '/course/animation/scatterplot';
const currentURL = '/course/animation/enter-update-exit';
const nextURL = '/course/animation/dealing-with-path';
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
              In the previous lesson we've made our first animated scatterplot!
              🎉
            </p>
            <p>
              But it was an easy one: the same exact group were available in
              each dataset. Now how do we manage groups that enter for the first
              time, or are not available anymore?
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

      <p>I need an example where I see a disparition and an apparition</p>
      <ReactSpringEnterExitIssue width={500} height={300} />

      <p>
        Ok but there is a problem now: how do we deal with the data points that
        enter the dataset, or the one that exit?
      </p>
      <p>That's the plan for the next lesson.</p>

      <p>
        For the enter part, we can manage it thanks to the <code>from</code>{' '}
        property of <code>useSpring</code>
      </p>
      <p>
        For the exit part, I would need to make it using another hook:{' '}
        <code>useTransition</code>
      </p>

      <h2>Element id</h2>
      <p>
        Explain what happens if the elements are not in the right order? Explain
        that the key of the element is important
      </p>
    </LayoutCourse>
  );
}
