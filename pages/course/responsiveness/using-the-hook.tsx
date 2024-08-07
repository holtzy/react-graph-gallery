import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { CodeSandbox } from '@/component/CodeSandbox';

const previousURL = '/course/responsiveness/use-dimension-hook';
const currentURL = '/course/responsiveness/using-the-hook';
const nextURL = '/course/responsiveness/code-organization';
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
              We have a hook that listens for changes in a div's dimensions and
              returns those dimensions.
            </p>
            <p>
              Now, it's time to use this hook to inject the dimensions into our
              graph!
            </p>
          </>
        }
      />
      <h2>Create a ref</h2>
      <p>
        Start by creating a <code>ref</code> using the React{' '}
        <code>useRef()</code> function.
      </p>
      <p>
        A <code>ref</code> allows you to target and interact with a specific
        HTML element in the DOM of your application.
      </p>
      <CodeBlock code={snippet2} />
      <br />
      <p>
        Finally, pass the <code>chartRef</code> to the container you want to
        monitor.
      </p>
      <CodeBlock code={snippet4} />

      <h2>Use the hook</h2>
      <p>
        Then, pass this newly created <code>chartRef</code> to the hook:
      </p>
      <CodeBlock code={snippet3} />
      <br />
      <p>
        You now have an object called <code>chartSize</code> with two
        properties: <code>height</code> and <code>width</code>. These properties
        can be used in your chart component. 🔥
      </p>
      <blockquote>
        Pro tip: Before building a responsive visualization, use{' '}
        <code>console.log()</code> to check the <code>chartSize</code> object
        and ensure everything is working correctly.
      </blockquote>
      {/*
      //
      // Use the hook
      //
      */}
      <h2 id="application">📊 Application</h2>
      <p>
        You’re all set! Just pass the values from <code>chartSize</code> to the
        visualization component, and it will become responsive.
      </p>
      <p>Here is a full example with code:</p>
      <br />
      <div style={{ maxWidth: 2000 }} className="full-bleed w-full z-50">
        <CodeSandbox vizName={'DensityChartResponsive'} />
      </div>
    </LayoutCourse>
  );
}

const snippet2 = `
const chartRef = useRef(null);
`.trim();

const snippet3 = `
const chartSize = useDimensions(chartRef);
`.trim();

const snippet4 = `
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();
