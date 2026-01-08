import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';

const previousURL = '/course/responsiveness/code-organization';
const currentURL = '/course/responsiveness/common-pitfalls';
const nextURL = '/course/hover-effect/introduction';
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
      <h2 id="caveats">🐞 Caveats</h2>
      <p>
        Here are some potential caveats to consider when using the{' '}
        <code>useDimensions</code> hook:
      </p>
      <h3>1️⃣ Container Needs Dimensions</h3>
      <p>
        In HTML, not all <code>&lt;div&gt;</code> elements have dimensions by
        default. If a <code>&lt;div&gt;</code> lacks dimensions, the{' '}
        <code>useDimensions</code> hook won't be able to measure it!
      </p>
      <ul>
        <li>
          An inline <code>&lt;div&gt;</code> cannot have width and height.
        </li>
        <li>
          By default, a <code>&lt;div&gt;</code> has no height. Its width is
          100%, but its height is determined by its content. This means that
          without content, the <code>&lt;div&gt;</code> will have no height.
        </li>
      </ul>
      <h3>2️⃣ Performance</h3>
      <p>
        When the graph dimensions change, ensure that you only recompute what is
        necessary within the visualization component. <code>useMemo</code> and{' '}
        <code>useCallback</code> are valuable tools for optimizing performance.
      </p>
      <h3>3️⃣ Design</h3>
      <p>
        A graph is not merely a piece of text; its aspect ratio significantly
        affects its appearance. A wide graph might look great, while a narrower
        version may not. Sometimes, adapting the chart type based on window size
        is the best approach.
      </p>
      <h3>4️⃣ Zero Dimensions</h3>
      <p>
        Be cautious with the <code>useDimensions</code> hook. When your app
        first loads, the reference dimensions might be null or zero. Ensure your
        code handles this scenario properly to avoid errors.
      </p>
    </LayoutCourse>
  );
}
