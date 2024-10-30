import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { TakeHome } from '@/component/TakeHome';

const previousURL = '/course/responsiveness/introduction';
const currentURL = '/course/responsiveness/use-dimension-hook';
const nextURL = '/course/responsiveness/using-the-hook';
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
              The visualization component is going to be <b>wrapped</b> in a
              responsive <code>div</code>. We need a way to retrieve this
              container's dimensions.
            </p>
            <p>
              To achieve this, let's create a hook called{' '}
              <code>useDimensions</code>.
            </p>
          </>
        }
      />
      <h2>What is a hook</h2>
      <p>
        A hook is a special function that lets you use state and other React
        features in functional components, as explained{' '}
        <a href="https://reactjs.org/docs/hooks-intro.html">
          in the documentation
        </a>
        .
      </p>
      <p>
        That's exactly what we need! A function that we can <b>reuse</b> in all
        our chart components and that manages its <b>internal state</b>.
      </p>

      <h2 id="dimension hook">🎣 Hook to get the container dimensions</h2>
      <p>That's how the hook looks like:</p>
      <CodeBlock
        code={`
import { useEffect, useLayoutEffect, useState } from "react";

// Hook to retrieve the dimensions of a div.
// react-graph-gallery.com
export const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {

  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);

  return dimensions;
}
`.trim()}
      />
      <p>
        This hook is essentially a function that checks the{' '}
        <code>offsetWidth</code> and <code>offsetHeight</code> of a provided{' '}
        <code>ref</code>.
      </p>
      <br />
      <p>
        An event listener for the <code>resize</code> event is added to the{' '}
        <code>window</code> to ensure the dimensions are updated when the window
        size changes.
      </p>
      <p>
        I do not want to go too much in depth on how it works. More importantly,
        let's see <TakeHome>how to use it</TakeHome>!
      </p>
    </LayoutCourse>
  );
}
