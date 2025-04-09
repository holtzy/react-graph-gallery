import { useState } from 'react';
import { DataItem, Group, Subgroup } from './data';
import { StackedBarplotAlternative } from './StackedBarplotAlternative';
import { allSubgroups, colorScale, MARGIN } from './utils';

const TITLE_HEIGHT = 50;

type Props = {
  width: number;
  height: number;
  data: DataItem[];
};

export const ChartAndTitle = ({ width, height, data }: Props) => {
  const [highlightedSubgroup, setHighlightedSubgroup] =
    useState<Subgroup | null>(null);

  return (
    <>
      <div
        style={{ height: TITLE_HEIGHT, marginLeft: MARGIN.left, marginTop: 20 }}
      >
        <span className="text-xl tracking-wide">
          Regions - Revenue by Segment
        </span>
        <div className="flex gap-2">
          {allSubgroups.map((subGrp, i) => {
            return (
              <span
                className="text-sm cursor-pointer"
                key={i}
                style={{ color: colorScale(subGrp) }}
                onMouseEnter={() => {
                  setHighlightedSubgroup(subGrp);
                }}
                onMouseLeave={() => setHighlightedSubgroup(null)}
              >
                {subGrp}
              </span>
            );
          })}
        </div>
      </div>

      <StackedBarplotAlternative
        data={data}
        width={width}
        height={height - TITLE_HEIGHT}
        highlightedSubgroup={highlightedSubgroup}
      />
    </>
  );
};
