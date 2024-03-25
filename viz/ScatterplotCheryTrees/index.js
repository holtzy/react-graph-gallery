import ReactDOM from 'react-dom';
import { data } from './data';
import { ScatterplotCheryTreesDemo } from './ScatterplotCheryTreesDemo';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ScatterplotCheryTreesDemo data={data} width={600} height={500} />,
  rootElement
);
