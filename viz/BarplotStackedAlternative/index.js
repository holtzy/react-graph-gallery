import ReactDOM from 'react-dom';
import { data } from './data/';
import { StackedBarplotAlternative } from './StackedBarplotAlternative';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StackedBarplotAlternative data={data} width={400} height={400} />,
  rootElement
);
