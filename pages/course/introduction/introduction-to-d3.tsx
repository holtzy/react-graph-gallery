import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { Sidenote } from '@/component/SideNote';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import { LineChartSyncCursorDemo } from '@/viz/LineChartSyncCursor/LineChartSyncCursorDemo';

const previousURL = '/course/introduction/js-dataviz-libraries';
const currentURL = '/course/introduction/introduction-to-d3';
const nextURL = '/course/introduction/initial-setup';
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
            <p>d3 is THE reference when it comes to build viz on the web</p>
            <p>But we will use only a fraction of what it offers.</p>
          </>
        }
      />

      <h2>What is d3</h2>
      <p>Explain what d3 is in a nutshell.</p>
      <p>Link to d3 graph gallery.</p>

      <h2>Why is d3 so useful?</h2>
      <p>
        Give the example of an awesome d3 function. May be the treemap function?
      </p>

      <h2>Only a fraction</h2>
      <p>
        Create circle pack of all the modules. Explain that we will use only a
        fraction of this.
      </p>
    </LayoutCourse>
  );
}
