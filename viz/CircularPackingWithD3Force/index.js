import ReactDOM from 'react-dom';
import { data } from './data/';
import { CirclePacking } from './CirclePacking';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <CirclePacking data={data} width={400} height={400} />,
  rootElement
);
