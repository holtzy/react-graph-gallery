import ReactDOM from 'react-dom';
import { numData, geoData } from './data';
import { Map } from './Map';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Map geoData={geoData} numData={numData} width={700} height={400} />,
  rootElement
);
