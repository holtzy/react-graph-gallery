import ReactDOM from 'react-dom';
import { NetworkDiagramAndSliders } from './NetworkDiagramAndSliders';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <NetworkDiagramAndSliders width={400} height={400} />,
  rootElement
);
