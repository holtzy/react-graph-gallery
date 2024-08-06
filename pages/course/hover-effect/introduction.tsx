import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { Sidenote } from '@/component/SideNote';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { ScatterplotHoverHighlightDimDemo } from '@/viz/ScatterplotHoverHighlightDim/ScatterplotHoverHighlightDimDemo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/component/UI/tabs';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import { LineChartSyncCursorDemo } from '@/viz/LineChartSyncCursor/LineChartSyncCursorDemo';

const previousURL = '/course/responsiveness/common-pitfalls';
const currentURL = '/course/hover-effect/introduction';
const nextURL = '/course/hover-effect/css-pseudo-class';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);
  const currentLessonId = lessonList.findIndex((l) => l.link === currentURL);

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
              In the previous modules, you learned how to create a wide variety
              of static charts. 👏
            </p>
            <p>
              However, <b>interactivity</b> is essential web applications.
              Adding <b>hover effects</b> significantly enhances the user
              experience by highlighting specific series on the chart.
            </p>
            <p>
              In this module, we'll explore <b>several strategies</b> for
              implementing hover effects using both CSS and React. Before diving
              into the code, let's ensure we have a clear understanding of what
              hover effects are.
            </p>
          </>
        }
      />

      <h2>Definition</h2>
      <p>
        A <b>hover effect</b> is a visual change that occurs when a user moves
        their cursor over a specific element on a webpage.
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
      <p>When implementing a hover effect, you should be careful about:</p>
      <ul>
        <li>
          <b>Design</b>: hover effect is visually appealing and enhances the
          user experience. It is consistent with the overall design of your
          application and does not distract or confuse the user.
        </li>
        <li>
          <b>Performance</b>: hover effect is fast: no lag or delay. It does not
          significantly impact the performance of your application, especially
          when dealing with large datasets or complex viz.
        </li>
      </ul>

      <h2>Three Types of Hover Effects</h2>
      <p>
        In my opinion, there are three main types of hover effects: those that
        only modify the <b>hovered graph item</b>, those that modify{' '}
        <b>other graph markers</b>, and those that affect{' '}
        <b>other related elements</b> in the user interface.
      </p>
      <p>Click the button below to see examples of all three types:</p>
      <p>
        <br />
      </p>
      <Tabs defaultValue="type1">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="type1">Hovered item only</TabsTrigger>
          <TabsTrigger value="type2">All graph items</TabsTrigger>
          <TabsTrigger value="type3">Other related elements</TabsTrigger>
        </TabsList>
        <TabsContent value="type1">
          <div className="w-full flex items-center">
            <ScatterplotHoverHighlightPseudoClassDemo
              width={400}
              height={400}
            />
            <div>
              <p>
                Observe this graph: when you hover over a circle,{' '}
                <b>its style changes</b> slightly!
              </p>
              <p>
                While this isn't the most dramatic visual effect, it is very{' '}
                <b>easy</b> to implement using a single CSS{' '}
                <i>pseudo-element</i>.
              </p>
              <p>We'll learn how to implement this in the next lesson.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="type2">
          <div className="w-full flex items-center gap-4 mt-8">
            <TreemapHoverEffectDemo width={350} height={350} />
            <div>
              <p>
                This time, hovering over a group will highlight it{' '}
                <b>while dimming all the other groups</b>.
              </p>
              <p>
                This effect can be achieved solely with CSS (if the same effect
                is applied to all other groups) <b>or</b> by toggling a CSS
                class using JavaScript.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="type3">
          <p>
            <br />
            Sometimes you may want to modify a UI element that is{' '}
            <b>not part of your chart</b> renderer. In this case, CSS alone
            won't suffice. You need to set a <b>React state</b> at the top of
            your application tree to update all the necessary elements on hover.
          </p>
          <LineChartSyncCursorDemo width={700} height={350} />
          <p>
            In the graph above, hovering over chart #1 will also update chart
            #2, thanks to a shared state. This will be covered in the final
            lesson of this module.
          </p>
        </TabsContent>
      </Tabs>

      <h2>Let's code</h2>
      <p>Enough theory.</p>
      <p>
        Let's dive into the simplest hover effect you can create: just a few
        lines of CSS using pseudo-elements.
      </p>
    </LayoutCourse>
  );
}
