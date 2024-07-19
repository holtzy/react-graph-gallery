import { colorScale } from './utils';

type LegendProps = {
  setHighlightedYear: (y: number | undefined) => void;
  highlightedYear: number;
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
  const allLines = steps.map((y) => {
    return (
      <div className="flex items-center" style={{ height: 1 }}>
        <div
          style={{ backgroundColor: colorScale(y) }}
          className="w-full h-full"
          onMouseOver={() => {
            setHighlightedYear(y);
          }}
          onMouseLeave={() => {
            setHighlightedYear(undefined);
          }}
        />

        <span className="text-xs text-white pl-2">{y}</span>
      </div>
    );
  });

  return (
    <div className="relative flex flex-col w-12 " style={{ gap: 6 }}>
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
