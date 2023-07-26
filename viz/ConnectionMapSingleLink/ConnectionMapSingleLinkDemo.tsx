import { data } from './data';
import { Map } from './Map';

export const ConnectionMapSingleLinkDemo = ({ width = 700, height = 400 }) => {
  if (width === 0) {
    return null;
  }
  return <Map data={data} width={width} height={height} />;
};
