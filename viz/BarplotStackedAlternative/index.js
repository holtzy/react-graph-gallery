import ReactDOM from 'react-dom';
import { data } from './data/';
import { ChartAndTitle } from './ChartAndTitle';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ChartAndTitle data={data} width={400} height={700} />,
  rootElement
);
