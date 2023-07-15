import { numData, geoData } from './data';
import { Map } from './Map';

export const ChoroplethMapBasicDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return (
    <Map geoData={geoData} numData={numData} width={width} height={height} />
  );
};
