import ReactDOM from 'react-dom';
import { ReactSpringDerivingValue } from './ReactSpringDerivingValue';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ReactSpringDerivingValue width={800} height={300} />,
  rootElement
);
