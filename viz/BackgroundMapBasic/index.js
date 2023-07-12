import ReactDOM from 'react-dom';
import { data } from './data/';
import { Map } from './Map';

const rootElement = document.getElementById('root');
ReactDOM.render(<Map data={data} width={400} height={400} />, rootElement);
