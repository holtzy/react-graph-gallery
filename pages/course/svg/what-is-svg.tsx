import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';

const previousURL = '/course/svg/initial-setup';
const currentURL = '/course/svg/what-is-svg';
const nextURL = '/course/svg/what-is-svg';
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

      <h2>What is SVG</h2>
      <p>
        Scalable Vector Graphics (SVG) is an XML-based format for vector
        graphics. Unlike raster graphics which are made up of pixels, SVG uses
        vector data (points, lines, and curves) to create images. This means SVG
        images are resolution-independent and can scale up or down without
        losing quality.
      </p>

      <h2>Most simple example</h2>
      <p>
        Always starts with a <code>&lt;svg&gt;</code> element: The root
        container for all SVG elements. Note that this is called inline SVG, in
        opposition with svg files where the whole SVG content is written in its
        own file.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>
          <strong>Scalability:</strong> SVG images maintain their quality at any
          size, making them ideal for responsive design. Whether viewed on a
          small mobile screen or a large desktop monitor, SVG graphics look
          crisp and clear.
        </li>
        <li>
          <strong>Interactivity:</strong> SVG elements can be styled and
          animated using CSS and JavaScript, allowing for dynamic and
          interactive graphics. This makes SVG a powerful tool for creating
          engaging data visualizations.
        </li>
        <li>
          <strong>Accessibility:</strong> Text within SVG is searchable and
          accessible by screen readers. This enhances the accessibility of web
          content, making it more usable for people with disabilities.
        </li>
        <li>
          <strong>Performance:</strong> SVG files are often smaller in size
          compared to raster images, especially for complex graphics. This can
          lead to faster load times and improved performance of web pages.
        </li>
      </ul>

      <h2>Limitations </h2>
      <p>
        Talk about performances, how it make the DOM too heavy and slows down
        everything.
      </p>
    </LayoutCourse>
  );
}
