import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { Sidenote } from '@/component/SideNote';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import { LineChartSyncCursorDemo } from '@/viz/LineChartSyncCursor/LineChartSyncCursorDemo';

const previousURL = undefined;
const currentURL = '/course/introduction/introduction-to-react';
const nextURL = '/course/introduction/js-dataviz-libraries';
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
              React is a <b>JavaScript library</b> used for creating dynamic and
              interactive user interfaces through reusable components. Developed
              by Facebook, it simplifies the process of managing application
              state and updating the user interface efficiently.
            </p>
            <p>
              This lesson will offer a concise overview of React and its key
              features.
            </p>
          </>
        }
      />

      <h2>Why React?</h2>
      <p>Explain why react is great?</p>
      <ul>
        <li>
          Widespread, full of doc. Show a graph that compares with others.
        </li>
        <li>Great state management: exactly what we need</li>
        <li>
          Based on the concept of component: exactly what we need for dataviz
        </li>
      </ul>

      <h2>Expected knowledge</h2>
      <p>
        Explain that this is not a react course. If you know nothing about
        react, you gonna struggle here. So learn somewhere first.
      </p>
      <p>
        Explain that building viz is a very specific need, thus this course.
      </p>
    </LayoutCourse>
  );
}
