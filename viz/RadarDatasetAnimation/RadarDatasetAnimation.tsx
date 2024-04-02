import { useState } from 'react';
import { data, dumbelData, timeseriesData } from './data';
import { Radar } from './Radar';
import { Dumbbell } from './Dumbbell';
import { LineChart } from './LineChart';

const HEADER_HEIGHT = 130; // button + title
const MARGIN_BOTTOM = 70;
const COLORS = ['green', '#e0ac2b', '#6689c6', '#e85252', '#9a6fb0'];

const buttonStyle = {
  border: '1px solid',
  borderRadius: '3px',
  padding: '0px 8px',
  margin: '10px 2px',
  fontSize: 14,
  opacity: 0.7,
};

type RadarDatasetAnimationProps = {
  width: number;
  height: number;
};

export const RadarDatasetAnimation = ({
  width,
  height,
}: RadarDatasetAnimationProps) => {
  const allGroups = data.map((d) => d.name);
  const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);

  const groupId = data.findIndex((d) => d.name === selectedGroup);
  const groupName = allGroups[groupId];
  const groupColor = COLORS[groupId];

  const groupRadarData = data[groupId];

  const groupDumbelData = dumbelData.find((d) => d.name === selectedGroup);

  const groupLineData = timeseriesData.map((d) => {
    const [year, month] = d.Month.split('-');
    const date = new Date(Number(year), Number(month) - 1, 1);
    return {
      x: date,
      value: d[groupName],
    };
  });

  if (!groupRadarData || !groupDumbelData || !groupLineData) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          height: HEADER_HEIGHT,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 70,
        }}
      >
        <h1>Types of Data Professionals</h1>
        <p
          style={{
            fontSize: 14,
            color: 'grey',
            maxWidth: 600,
            lineHeight: 1.5,
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          The field of data offers a diverse array of <b>job titles</b>, making
          it challenging to navigate without <b>getting lost in the jargon</b>{' '}
          and uncertainty about which roles to pursue. The charts below offer
          deeper insights into the <b>competencies needed</b>,{' '}
          <b>salary ranges</b>, and <b>popularity trends</b> for the four
          primary job titles.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {allGroups.map((group, i) => {
            const isSelected = group === selectedGroup;
            return (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                style={{
                  ...buttonStyle,
                  color: isSelected ? 'white' : COLORS[i],
                  borderColor: COLORS[i],
                  backgroundColor: isSelected ? groupColor : 'white',
                }}
              >
                {group}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Radar
          data={groupRadarData}
          width={(width / 3) * 2 - 50}
          height={height - HEADER_HEIGHT - MARGIN_BOTTOM}
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
        <div
          style={{
            height: height - HEADER_HEIGHT - MARGIN_BOTTOM,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Dumbbell
            width={width / 3}
            height={150}
            data={groupDumbelData}
            color={groupColor}
          />
          <LineChart
            data={groupLineData}
            width={width / 3}
            height={250}
            color={groupColor}
          />
        </div>
      </div>
    </div>
  );
};
