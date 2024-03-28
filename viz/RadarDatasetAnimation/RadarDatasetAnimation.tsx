import { useState } from 'react';
import { data, dumbelData } from './data';
import { Radar } from './Radar';
import { Dumbbell } from './Dumbbell';

const BUTTONS_HEIGHT = 50;
const COLORS = ['green', '#e0ac2b', '#6689c6', '#e85252', '#9a6fb0', '#a53253'];

type RadarDatasetAnimationProps = {
  width: number;
  height: number;
};

const buttonStyle = {
  border: '1px solid #9a6fb0',
  borderRadius: '3px',
  padding: '0px 8px',
  margin: '10px 2px',
  fontSize: 14,
  color: '#9a6fb0',
  opacity: 0.7,
};

export const RadarDatasetAnimation = ({
  width,
  height,
}: RadarDatasetAnimationProps) => {
  const allGroups = data.map((d) => d.name);
  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = data.findIndex((d) => d.name === selectedGroup);
  const groupData = data[groupId];
  const groupColor = COLORS[groupId];

  if (!groupData) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          height: BUTTONS_HEIGHT,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {allGroups.map((group, i) => {
          return (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              style={{
                ...buttonStyle,
                color: COLORS[i],
                borderColor: COLORS[i],
              }}
            >
              {group}
            </button>
          );
        })}
      </div>
      <div style={{ display: 'flex' }}>
        <Radar
          data={groupData}
          width={(width / 3) * 2}
          height={height - BUTTONS_HEIGHT}
          axisConfig={[
            { name: 'ML Ops', max: 5 },
            { name: 'Data Pipelines', max: 5 },
            { name: 'Database', max: 5 },
            { name: 'Data Viz', max: 5 },
            { name: 'Storytelling', max: 5 },
            { name: 'Business Insights', max: 5 },
            { name: 'Reporting', max: 5 },
            { name: 'Experimentation', max: 5 },
            { name: 'Stats', max: 5 },
            { name: 'ML Modeling', max: 5 },
            { name: 'Deployment', max: 5 },
          ]}
          color={groupColor}
        />
        <Dumbbell width={width / 3} height={200} data={dumbelData} />
      </div>
    </div>
  );
};
