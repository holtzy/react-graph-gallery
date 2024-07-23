import { useRef } from 'react';
import { colorScale } from '../utils';
import styles from './legend.module.css';

type LegendProps = {
  setHighlightedYear: (y: number | undefined) => void;
};

const start = 1950;
const end = 2100;
const step = 15;

const steps: number[] = [];
for (let i = start; i <= end; i += step) {
  steps.push(i);
}

export const Legend = ({ setHighlightedYear }: LegendProps) => {
  const legendContainerRef = useRef(null);

  const allLines = steps.map((y) => {
    return (
      <div
        key={y}
        className={'flex items-center h-2 ' + styles.yearItem}
        onMouseOver={() => {
          if (legendContainerRef.current) {
            legendContainerRef.current.classList.add(styles.hasHighlight);
          }
          setHighlightedYear(y);
        }}
        onMouseLeave={() => {
          if (legendContainerRef.current) {
            legendContainerRef.current.classList.remove(styles.hasHighlight);
          }
          setHighlightedYear(undefined);
        }}
      >
        <div
          style={{ backgroundColor: colorScale(y) }}
          className="w-full h-1"
        />

        <span className={'text-xs pl-2 pointer-events-none ' + styles.yearText}>
          {y}
        </span>
      </div>
    );
  });

  return (
    <div ref={legendContainerRef} className="relative flex flex-col w-12">
      {allLines}
    </div>
  );
};
