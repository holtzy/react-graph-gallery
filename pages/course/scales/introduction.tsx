import React, { useCallback, useState } from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { CodeSandbox } from '@/component/CodeSandbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/UI/select';
import { Sidenote } from '@/component/SideNote';
import { MoveHorizontal, MoveVertical } from 'lucide-react';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/svg/path-element';
const currentURL = '/course/scales/introduction';
const nextURL = undefined;
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  // Initial positions of the circles
  const [circles, setCircles] = useState([
    { id: 1, cx: 200, value: 0 },
    { id: 2, cx: 220, value: 50 },
    { id: 3, cx: 240, value: 60 },
    { id: 4, cx: 260, value: 82 },
    { id: 5, cx: 280, value: 100 },
  ]);
  const [draggingCircleId, setDraggingCircleId] = useState(null);

  // Handle mouse down event to start dragging
  const handleMouseDown = useCallback((e, id) => {
    setDraggingCircleId(id);
  }, []);

  // Handle mouse move event to update circle's position
  const handleMouseMove = useCallback(
    (e) => {
      if (draggingCircleId !== null) {
        const svgRect = e.currentTarget.getBoundingClientRect();
        const newCx = e.clientX - svgRect.left;
        const boundedCx = Math.min(Math.max(newCx, 0), 500);

        setCircles((prevCircles) =>
          prevCircles.map((circle) =>
            circle.id === draggingCircleId
              ? { ...circle, cx: boundedCx }
              : circle
          )
        );
      }
    },
    [draggingCircleId]
  );

  // Handle mouse up event to stop dragging
  const handleMouseUp = useCallback(() => {
    setDraggingCircleId(null);
  }, []);

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
              Building a graph requires to transform a <b>dimension</b> (a
              numeric variable in your dataset) in a <b>position</b> in pixels.
              This is done using a fundamental dataviz concept called{' '}
              <b>scale</b>.
            </p>
            <p>
              Before implementing it in the next lesson, let's describe a bit
              what this crucial concept of dataviz is.
            </p>
          </>
        }
      />

      <h2>Understanding Your SVG Area</h2>
      <p>
        Consider this SVG area with a width of 500px. You can place circles
        anywhere along this width, from the extreme left to the extreme right.
      </p>

      <h2>Your Data</h2>
      <p>Here is the dataset you’ll be working with:</p>
      <pre>
        <code>const data = [0, 50, 60, 82, 100];</code>
      </pre>

      <h2>Make a graph</h2>
      <p>
        Now is your time to work. Try to position the 5 circles at the right
        spot on the graph below.
      </p>

      <svg
        width={500}
        height={400}
        overflow={'visible'}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseDown={(e) => e.preventDefault()} // Prevent default behavior to avoid unwanted text selection
        onMouseEnter={() => setDraggingCircleId(null)}
      >
        {circles.map((circle) => (
          <>
            <circle
              key={circle.id}
              cx={circle.cx}
              cy={140}
              r={30}
              fill="#69b3a2"
              stroke="black"
              fillOpacity={1}
              onMouseDown={(e) => handleMouseDown(e, circle.id)}
            />
            <text
              x={circle.cx}
              y={140}
              textAnchor="middle"
              alignmentBaseline="central"
              fontSize={12}
            >
              {circle.value}
            </text>
          </>
        ))}

        {/* Annotation */}
        <line x1={0} x2={500} y1={200} y2={200} stroke="black" />

        <line x1={0} x2={0} y1={200} y2={200 + 5} stroke="black" />
        <text x={0} y={200 + 20} textAnchor="middle" fill="black" fontSize={14}>
          0 px
        </text>

        <line x1={250} x2={250} y1={200} y2={200 + 5} stroke="black" />
        <text
          x={250}
          y={200 + 20}
          textAnchor="middle"
          fill="black"
          fontSize={14}
        >
          250 px
        </text>

        <line x1={500} x2={500} y1={200} y2={200 + 5} stroke="black" />
        <text
          x={500}
          y={200 + 20}
          textAnchor="middle"
          fill="black"
          fontSize={14}
        >
          500 px
        </text>
      </svg>

      <h2>Mapping Data to Your Graph</h2>
      <p>
        We want to position a circle for each data point along the horizontal
        axis of the SVG. To do this, we need to scale the data values to fit
        within the SVG width.
      </p>
      <ul>
        <li>
          For a value of <code>0</code>, the circle should be placed at the
          extreme left of the SVG. This corresponds to <code>cx = 0px</code>.
        </li>
        <li>
          For the highest value in the dataset, <code>100</code>, the circle
          should be positioned at the extreme right of the SVG. This corresponds
          to <code>cx = width</code> (i.e., <code>500px</code>).
        </li>
        <li>
          For a value of <code>50</code>, which is the midpoint of our dataset,
          the circle should be positioned at the center of the SVG. This
          corresponds to <code>cx = width / 2</code> (i.e., <code>250px</code>).
        </li>
        <li>
          For a value of <code>82</code>, which is not an exact midpoint, you
          need to calculate its position proportionally. The position can be
          calculated as:
          <pre>
            <code>
              cx = (value / maxValue) * width cx = (82 / 100) * 500 = 410px
            </code>
          </pre>
        </li>
      </ul>
    </LayoutCourse>
  );
}
