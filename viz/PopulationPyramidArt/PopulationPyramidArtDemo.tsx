import { csv } from 'd3';
import { PopulationPyramid } from './PopulationPyramid';
import { useEffect, useState } from 'react';

export const PopulationPyramidArtDemo = ({ width = 700, height = 400 }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Path to your CSV file
    const csvUrl = 'path/to/your/data.csv';

    // Load CSV data
    csv(
      'https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/data/population-pyramid.csv'
    )
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error loading the CSV data', error);
      });
  }, []);

  console.log('data', data);

  return <PopulationPyramid data={data} width={width} height={height} />;
};
