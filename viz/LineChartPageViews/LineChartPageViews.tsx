import { useEffect, useState } from 'react';
import { LineChart } from './LineChart';
import { csvParse } from 'd3';

const BUTTONS_HEIGHT = 50;

type LineChartPageViewsProps = {
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

export const LineChartPageViews = ({
  width,
  height,
}: LineChartPageViewsProps) => {
  const [selectedGroup, setSelectedGroup] = useState<'melanie' | 'yan'>(
    'melanie'
  );

  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/data_page_views.csv'
      );
      const csvData = await response.text();
      const parsedData: DataItem[] = csvParse(csvData);
      setData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <div style={{ height: BUTTONS_HEIGHT }}>
        <button style={buttonStyle} onClick={() => setSelectedGroup("melanie")}>
          Melanie
        </button>
        <button style={buttonStyle} onClick={() => setSelectedGroup("yan")}>
          Yan
        </button>
      </div> */}
      <LineChart
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={data}
        selectedGroup={selectedGroup}
      />
    </div>
  );
};
