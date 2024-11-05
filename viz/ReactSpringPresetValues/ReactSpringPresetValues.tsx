import { useState } from 'react';
import { Circle, Preset } from './Circle';

type ReactSpringPresetValuesProps = {
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

export const ReactSpringPresetValues = ({
  width,
  height,
}: ReactSpringPresetValuesProps) => {
  const [position, setPosition] = useState(40);
  const [selectedPreset, setSelectedPreset] = useState<Preset>('default');

  const values: Preset[] = [
    'default',
    'gentle',
    'wobbly',
    'stiff',
    'slow',
    'molasses',
  ];

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
        <select
          value={selectedPreset}
          onChange={(event) => {
            setSelectedPreset(event.target.value);
          }}
          style={{ padding: '8px', fontSize: '16px' }}
        >
          {values.map((v) => {
            return <option value={v}>{v}</option>;
          })}
        </select>
      </div>

      {/* Viz */}
      <svg width={width} height={height} style={{ overflow: 'visible' }}>
        <Circle
          position={position}
          color={position === 40 ? '#9a6fb0' : '#69b3a2'}
          preset={selectedPreset}
        />
      </svg>
    </div>
  );
};
