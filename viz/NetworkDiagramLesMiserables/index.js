import ReactDOM from 'react-dom';
import { data } from './data/';
import { NetworkDiagram } from './NetworkDiagram';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <NetworkDiagram data={data} width={400} height={400} />,
  rootElement
);
