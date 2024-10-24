import { Button } from '@/component/UI/button';
import { useCallback, useState } from 'react';

const INITIAL_POSITIONS = [
  { id: 1, cx: 370, value: 0 },
  { id: 2, cx: 280, value: 50 },
  { id: 3, cx: 150, value: 60 },
  { id: 4, cx: 260, value: 82 },
  { id: 5, cx: 80, value: 100 },
];

export const CircleScaleExercise = () => {
  // Initial positions of the circles
  const [circles, setCircles] = useState(INITIAL_POSITIONS);
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
    <>
      <div className="mx-auto">
        <svg
          width={500}
          height={320}
          overflow={'visible'}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseDown={(e) => e.preventDefault()} // Prevent default behavior to avoid unwanted text selection
          onMouseEnter={() => setDraggingCircleId(null)}
        >
          {circles.map((circle) => (
            <g key={circle.id}>
              <circle
                cx={circle.cx}
                cy={140}
                r={30}
                fill="#69b3a2"
                stroke="black"
                fillOpacity={1}
                onMouseDown={(e) => handleMouseDown(e, circle.id)}
                cursor={'pointer'}
                style={{
                  transition: 'cx 0.5s ease', // Smooth transition for the x-position
                }}
                onMouseEnter={(e) => (e.target.style.transition = 'none')} // Disable transition on hover
                onMouseLeave={(e) =>
                  (e.target.style.transition = 'transform 0.5s ease')
                } // Re-enable transition when hover ends
              />
              <text
                x={0}
                y={140}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize={12}
                cursor={'pointer'}
                pointerEvents={'none'}
                style={{
                  transition: 'transform 0.5s ease', // Smooth transition for position
                  transform: `translateX(${circle.cx}px)`,
                }}
                onMouseEnter={(e) => (e.target.style.transition = 'none')} // Disable transition on hover
                onMouseLeave={(e) =>
                  (e.target.style.transition = 'transform 0.5s ease')
                } // Re-enable transition when hover ends
              >
                {circle.value}
              </text>
            </g>
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

      <div className="w-full flex justify-center gap-2">
        <Button
          variant={'outline'}
          onClick={() => {
            setCircles(INITIAL_POSITIONS);
          }}
        >
          Reset
        </Button>
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
    </>
  );
};
