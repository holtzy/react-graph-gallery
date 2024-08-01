import ReactDOM from 'react-dom';
import { data } from './data';
import { ResponsiveDensityChart } from './DensityChart';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <div style={{ width: '100%', height: '100%' }}>
    <ResponsiveDensityChart data={data} />
  </div>,
  rootElement
);
