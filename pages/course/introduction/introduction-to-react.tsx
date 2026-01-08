import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { Sidenote } from '@/component/SideNote';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import { LineChartSyncCursorDemo } from '@/viz/LineChartSyncCursor/LineChartSyncCursorDemo';
import { Caption } from '@/component/UI/Caption';
import { CodeSandbox } from '@/component/CodeSandbox';

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
              interactive user interfaces through <b>reusable components</b>.
              Developed by Facebook, it simplifies the process of managing
              application state and updating the user interface efficiently.
            </p>
            <p>
              This lesson will offer a concise overview of React and its key
              features.
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
-
- */}
      <h2>Why React?</h2>
      <p>
        React was introduced in 2013, transforming the landscape of web
        development.
      </p>
      <p>
        Prior to its <b>component-based architecture</b>, building web
        applications was complex and cumbersome.
      </p>

      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/img/react-website.png"
          style={{ width: '100%', maxWidth: 400 }}
          alt="Screenshot of the React website front page"
        />
        <Caption>
          If you make charts for the web and don't know react, you're missing
          out!
        </Caption>
      </div>
      <p>
        This is particularly evident in applications that involve{' '}
        <b>data visualization</b>. The ability to create reusable components,
        like a <code>Scatterplot</code> component, that can be utilized
        throughout your app, is a game-changer for your development process.
      </p>
      <p>
        <br />
      </p>
      <p>
        If you're building a data visualization application, React offers
        everything you need:
      </p>
      <ul>
        <li>
          Robust <b>state management</b>, perfectly suited for dynamic data.
        </li>
        <li>
          A <b>component-driven approach</b>, ideal for creating interactive
          visualizations.
        </li>
        <li>
          Extensive community support and comprehensive <b>documentation</b>.
        </li>
      </ul>
      {/* -
-
-
-
-
-
-
- */}
      <h2>Expected knowledge</h2>
      <p>
        This course focuses on <strong>Data Visualization</strong> using React.
      </p>
      <p>
        We won’t cover the basics of React, as that’s a vast topic deserving its
        own dedicated course! For a solid introduction, check out this{' '}
        <a
          href="https://www.codecademy.com/learn/learn-react-introduction"
          target="_blank"
        >
          intro by Codecademy
        </a>
        .
      </p>
      <p>
        Basically, you should just be able to understand what's happening in
        this sandbox:
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="HTMLCircle" />
      </div>
      <p>
        <br />
        That's it, no need to be a React expert.
      </p>
      <p>
        Even <b>seasoned developers</b> will find valuable insights here:
        creating visualizations with React and D3 involves <b>specialized</b>{' '}
        knowledge that differs significantly from typical UI development.
      </p>
      <p>
        Lastly, you don’t need prior experience with D3 to get started! We’ll
        use it sparingly and provide a thorough explanation of how it works.
      </p>

      {/* -
-
-
-
-
-
-
- */}
      <h2>🤔Alternatives</h2>
      <p>
        While React is a leading choice for building user interfaces, there are
        notable alternatives, primarily <a href="https://vuejs.org">Vue</a> and{' '}
        <a href="https://angular.dev">Angular</a>. Additionally,{' '}
        <a href="https://svelte.dev">Svelte</a> has gained considerable traction
        within the data visualization community.
      </p>
      <p>
        However, React's popularity is significantly larger, as illustrated in
        the graph below from{' '}
        <a href="https://npmtrends.com/@angular/core-vs-react-vs-svelte-vs-vue">
          npmtrends
        </a>
        .
      </p>
      <p>
        For further insights, you can explore a variety of metrics on{' '}
        <a href="https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190">
          this repository
        </a>
        . It's clear to me that React has established itself as the de-facto
        library for creating user interfaces and is here to stay.
      </p>

      <div className="flex flex-col items-center mt-8 mb-12">
        <img
          src="/img/js-lib-download-npm-trend.png"
          style={{ width: '100%', maxWidth: 900 }}
          alt="schema showing the number of download evolution of the main JS libraries"
        />
        <Caption>
          Evolution of the number of downloads for React (green), Angular, Vue
          and Svelte
        </Caption>
      </div>
    </LayoutCourse>
  );
}
