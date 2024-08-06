import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { Sidenote } from '@/component/SideNote';

const previousURL = 'course/responsiveness/common-pitfalls';
const currentURL = 'course/hover-effect/introduction';
const nextURL = 'course/hover-effect/css-pseudo-class';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);
  const currentLessonId = lessonList.findIndex((l) => l.link === currentURL);
  const currentModule = currentLesson?.moduleId;

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
        topBadge={'Lesson ' + currentLessonId}
        description={
          <>
            <p>
              <b>Interactivity</b> is crucial in data visualization, especially
              for web applications. Adding <b>hover effects</b> enhances user
              experience by highlighting specific series on the chart.
            </p>
            <p>
              This post suggests a few strategies to implement hover effects
              using css and react.
            </p>
          </>
        }
      />

      <p>Let's describe what we are going to learn.</p>

      <p>What you should consider when building hover interaction? </p>
      <p>
        Are you modifying just the element you are hovering, or other elements
        too?
      </p>
      <p>
        Are you modifying just graph elements (like all the circles, all the
        rectangles), or are you modifying other UI elements too (like tooltip,
        buttons, legends other graph...)
      </p>
      <p>
        Do you need to be carefull about performances? Nit: you probably should.
      </p>

      <div className="relative">
        <Sidenote
          text={
            <p>
              Technically speaking, tooltip are also a hover effect. But we will
              talk about them in a dedicated section.
            </p>
          }
        />
      </div>
    </LayoutCourse>
  );
}
