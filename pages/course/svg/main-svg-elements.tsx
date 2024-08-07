import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/svg/introduction';
const currentURL = '/course/svg/main-svg-elements';
const nextURL = undefined;
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
              In the previous lesson we learnt what SVG is and how to draw a
              circle with it.
            </p>
            <p>
              We'll need other shapes to make graphs: rectangle, text, segment.
              Let's see how to make them too.
            </p>
          </>
        }
      />

      <h2>Rectangle</h2>
      <p>
        SVG rectangles are created using the <code>&lt;rect&gt;</code> element,
        which requires the position and size attributes. The <code>x</code> and{' '}
        <code>y</code> attributes specify the coordinates of the top-left
        corner, while <code>width</code> and <code>height</code> determine the
        size of the rectangle.
      </p>
      <p>
        For example, this code will draw a blue rectangle with the top-left
        corner at (10,10) and dimensions of 80x50.
      </p>
      <CodeBlock
        code={`
<rect x="10" y="10" width="80" height="50" fill="blue" />
`.trim()}
      />
      <p>
        Here is an interactive example so that you can experiment with
        rectangles and understand how they work.
      </p>

      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgRectangle" />
      </div>

      <h2>Line</h2>
      <p>
        <p>
          SVG lines are created using the <code>&lt;line&gt;</code> element,
          which requires the starting (<code>x1</code>, <code>y1</code>) and
          ending (<code>x2</code>, <code>y2</code>) coordinates as attributes.
        </p>
        <p>
          For example, this code will draw a black line from the point (0,0) to
          the point (100,100).
        </p>
        <CodeBlock
          code={`
<line x1="0" y1="0" x2="100" y2="100" stroke="black"/>
`.trim()}
        />
      </p>
      <p>
        Here is an interactive example so that you can play a bit with lines and
        understand how they work.
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="SvgLine" />
      </div>

      <h2>Text</h2>
      <p>
        SVG text is created using the <code>&lt;text&gt;</code> element, which
        requires coordinates to specify where the text should be placed. The{' '}
        <code>x</code> and <code>y</code> attributes define the position of the
        starting point of the text.
      </p>
      <p>
        For example, this code will display the text "Hello, SVG!" at the
        coordinates (50,50).
      </p>
      <CodeBlock
        code={`
<text x="50" y="50" fill="black">Hello, SVG!</text>
`.trim()}
      />
      <p>
        Here is an interactive example so that you can experiment with text and
        understand how it works.
      </p>
    </LayoutCourse>
  );
}
