import { data } from './data';
import { StackedBarplotAlternative } from './StackedBarplotAlternative';

export const BarplotStackedAlternativeDemo = ({
  width = 700,
  height = 400,
}) => <StackedBarplotAlternative data={data} width={width} height={height} />;
