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
import { Button } from '@/component/UI/button';

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

      <h2>Test your intuition</h2>
      <p>Let's test your intuition with the following exercise.</p>
      <ul>
        <li>
          1️⃣ You have a SVG area with a width of <code>500px</code>.
        </li>
        <li>
          2️⃣ You can place circles <b>anywhere</b> along this area horizontally.
        </li>
        <li>
          3️⃣ You have a dataset with 5 values: <code>0</code>, <code>50</code>,{' '}
          <code>60</code>, <code>82</code>, <code>100</code>
        </li>
      </ul>

      <p>
        &rarr; <b>How do you position your circles</b> to represent this
        dataset? Drag the circles below following your intuition:
      </p>
      <p className="text-xs">
        Note: the number in each circle represents its value in the dataset.
      </p>
      <div className="mx-auto">
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
                cursor={'pointer'}
              />
              <text
                x={circle.cx}
                y={140}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={12}
                cursor={'pointer'}
                pointerEvents={'none'}
              >
                {circle.value}
              </text>
            </>
          ))}

          {/* Annotation */}
          <line x1={0} x2={500} y1={200} y2={200} stroke="black" />

          <line x1={0} x2={0} y1={200} y2={200 + 5} stroke="black" />
          <text
            x={0}
            y={200 + 20}
            textAnchor="middle"
            fill="black"
            fontSize={14}
          >
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
      </div>

      <div>
        <Button
          onClick={() => {
            setCircles([
              { id: 1, cx: 0, value: 0 },
              { id: 2, cx: 500 / 2, value: 50 },
              { id: 3, cx: (60 / 100) * 500, value: 60 },
              { id: 4, cx: (82 / 100) * 500, value: 82 },
              { id: 5, cx: 500, value: 100 },
            ]);
          }}
        >
          Show right positions
        </Button>
      </div>

      <h2>How it actually works</h2>

      <h3>The obvious part:</h3>
      <p>
        &rarr; For a value of <code>0</code>, the circle should be placed at the
        extreme left of the SVG. This corresponds to <code>cx = 0px</code>.
      </p>
      <p>
        &rarr; For the highest value in the dataset, <code>100</code>, the
        circle should be positioned at the extreme right of the SVG. This
        corresponds to <code>cx = width</code> (i.e., <code>500px</code>).
      </p>
      <p>
        &rarr; For a value of <code>50</code>, which is the midpoint of our
        dataset, the circle should be positioned at the center of the SVG. This
        corresponds to <code>cx = width / 2</code> (i.e., <code>250px</code>).
      </p>

      <h3>The math part:</h3>
      <p>
        For a value of <code>82</code>, which is not an exact midpoint, you need
        to calculate the position <b>proportionally</b>.
      </p>
      <p>The position can be calculated as:</p>
      <CodeBlock
        code={`
// Linear scale equation
cx = (value / maxValue) * width

// cx = (82 / 100) * 500
// cx = 410px
`.trim()}
      />

      <h2>The Great News 🎁</h2>
      <p>
        Manually calculating positions for each data point would be{' '}
        <b>incredibly tedious</b> for every graph you create.
      </p>
      <p>
        Fortunately, d3.js provides a function called <code>scaleLinear()</code>{' '}
        that handles this task for you. In the next lesson, we'll explore how it
        works and simplifies your data visualization process.
      </p>
    </LayoutCourse>
  );
}
