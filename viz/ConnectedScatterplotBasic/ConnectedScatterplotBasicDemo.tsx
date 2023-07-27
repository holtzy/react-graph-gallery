import { data } from './data';
import { ConnectedScatterplot } from './ConnectedScatterplot';

export const ConnectedScatterplotBasicDemo = ({
  width = 700,
  height = 400,
}) => <ConnectedScatterplot data={data} width={width} height={height} />;
