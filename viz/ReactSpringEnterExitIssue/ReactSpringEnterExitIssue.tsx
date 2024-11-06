import { useState } from 'react';
import { Circle } from './Circle';
import { data1, data2 } from './data';
import { Graph } from './Graph';

type ReactSpringEnterExitIssueProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: '1px solid #9a6fb0',
  borderRadius: '3px',
  padding: '4px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#9a6fb0',
  opacity: 0.7,
};

export const ReactSpringEnterExitIssue = ({
  width,
  height,
}: ReactSpringEnterExitIssueProps) => {
  const [data, setData] = useState(data1);

  return (
    <div>
      {/* Buttons */}
      <div>
        <button style={buttonStyle} onClick={() => setData(data1)}>
          Data 1
        </button>
        <button style={buttonStyle} onClick={() => setData(data2)}>
          Data 2
        </button>
      </div>

      {/* Viz */}
      <Graph data={data} />
    </div>
  );
};
