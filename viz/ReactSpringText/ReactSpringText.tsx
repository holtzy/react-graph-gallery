import { useState } from 'react';
import { Circle } from './Circle';

type ReactSpringTextProps = {
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

export const ReactSpringText = ({ width, height }: ReactSpringTextProps) => {
  const [position, setPosition] = useState(40);

  return (
    <div>
      {/* Buttons */}
      <div>
        <button style={buttonStyle} onClick={() => setPosition(40)}>
          Left
        </button>
        <button style={buttonStyle} onClick={() => setPosition(width - 40)}>
          Right
        </button>
      </div>

      {/* Viz */}
      <svg width={width} height={height} style={{ overflow: 'visible' }}>
        <Circle
          position={position}
          color={position === 40 ? '#9a6fb0' : '#69b3a2'}
        />
      </svg>
    </div>
  );
};
