import ReactDOM from 'react-dom';
import { ReactSpringPresetValues } from './ReactSpringPresetValues';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ReactSpringPresetValues width={800} height={300} />,
  rootElement
);
