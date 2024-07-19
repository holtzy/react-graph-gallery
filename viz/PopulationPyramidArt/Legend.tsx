import { useRef } from 'react';
import { colorScale } from './utils';
import styles from './legend.module.css';

type LegendProps = {
  setHighlightedYear: (y: number | undefined) => void;
  highlightedYear: number | undefined;
};

const start = 1950;
const end = 2100;
const step = 15;

const steps: number[] = [];
for (let i = start; i <= end; i += step) {
  steps.push(i);
}

export const Legend = ({
  setHighlightedYear,
  highlightedYear,
}: LegendProps) => {
  const legendContainerRef = useRef(null);

  const allLines = steps.map((y) => {
    return (
      <div
        className={'flex items-center h-2 ' + styles.yearItem}
        onMouseOver={() => {
          if (legendContainerRef.current) {
            legendContainerRef.current.classList.add(styles.hasHighlight);
          }
          // setHighlightedYear(y);
        }}
        onMouseLeave={() => {
          if (legendContainerRef.current) {
            legendContainerRef.current.classList.remove(styles.hasHighlight);
          }
          // setHighlightedYear(undefined);
        }}
      >
        <div
          style={{ backgroundColor: colorScale(y) }}
          className="w-full h-1"
        />

        <span
          className={
            'text-xs text-white pl-2 pointer-events-none ' + styles.yearText
          }
        >
          {y}
        </span>
      </div>
    );
  });

  return (
    <div ref={legendContainerRef} className="relative flex flex-col w-12">
      {allLines}

      <div className="absolute top-0 left-0 transform -translate-x-full -translate-y-1/2">
        <span className="text-xs text-white pr-2">1950</span>
      </div>

      <div className="absolute bottom-0 left-0 transform -translate-x-full translate-y-1/2">
        <span className="text-xs text-white pr-2">2100</span>
      </div>
    </div>
  );
};
