import { data } from './data';
import { Scatterplot } from './Scatterplot';

const HEADER_HEIGHT = 120;
const PADDING = 20;

export const ScatterplotClimateCrisisDemo = ({ width = 700, height = 400 }) => (
  <div style={{ paddingTop: PADDING, paddingBottom: PADDING }}>
    <div style={{ height: HEADER_HEIGHT }}>
      <p
        style={{
          color: '#000',
          // fontFamily: "Roboto,sans-serif",
          fontSize: 22,
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        The countries with the highest vulnerability to climate change have the
        lowest CO2 emissions
      </p>
      <p
        style={{
          color: '#000',
          // fontFamily: "Roboto,sans-serif",
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 1.2,
        }}
      >
        All countries sorted by their <b>vulnerability</b> and <b>readiness</b>{' '}
        to climate change. The <b>size shows the CO2 emission</b> per person in
        that country.
      </p>
    </div>
    <Scatterplot
      data={data}
      width={width}
      height={height - HEADER_HEIGHT - 2 * PADDING}
    />
  </div>
);
