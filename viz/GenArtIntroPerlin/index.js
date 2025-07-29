import ReactDOM from 'react-dom';
import { data } from './data';
import { Plot } from './Plot';

const rootElement = document.getElementById('root');
ReactDOM.render(<Plot width={400} height={400} />, rootElement);
