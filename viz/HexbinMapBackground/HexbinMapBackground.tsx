import { geoData } from './data';
import { Map } from './Map';

export const HexbinMapBackgroundDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <Map geoData={geoData} width={width} height={height} />;
};
