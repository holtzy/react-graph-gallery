import { Slider } from '@/component/UI/slider';
import { data } from './data';
import { LineChart } from './LineChart';
import { useState } from 'react';
import { DualRangeSlider } from '@/component/UI/dual-range-slider';

const HEADER_HEIGHT = 70;

export const LineChartDualYAxisDemo = ({ width = 700, height = 400 }) => {
  const [leftDomain, setLeftDomain] = useState<[number, number]>([30, 120]);
  const [rightDomain, setRightDomain] = useState<[number, number]>([2, 3.3]);

  return (
    <div>
      {/* Row 1 = slider */}
      <div
        style={{
          height: HEADER_HEIGHT,
          marginLeft: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="flex justify-between">
          <DualRangeSlider
            defaultValue={leftDomain}
            max={140}
            min={0}
            step={0.5}
            onValueChange={setLeftDomain}
            className="max-w-44"
            ra
          />

          <DualRangeSlider
            defaultValue={rightDomain}
            max={15}
            min={0}
            step={0.1}
            onValueChange={setRightDomain}
            className="max-w-44"
            ra
          />
        </div>
      </div>
      <LineChart
        data={data}
        width={width}
        height={height - HEADER_HEIGHT}
        domainLeft={leftDomain}
        domainRight={rightDomain}
      />
    </div>
  );
};
