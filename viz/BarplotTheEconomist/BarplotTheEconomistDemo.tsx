import { data } from './data';
import { Barplot } from './Barplot';

const HEADER_HEIGHT = 100;
const FOOTER_HEIGHT = 90;

export const BarplotTheEconomistDemo = ({ width = 700, height = 400 }) => {
  return (
    <div style={{ width }}>
      <div style={{ height: HEADER_HEIGHT }}>
        <div
          style={{
            marginTop: 14,
            width: '100%',
            height: 1,
            backgroundColor: '#e5011c',
          }}
        />
        <div style={{ width: 36, height: 9, backgroundColor: '#e5011c' }} />
        <span style={{ fontSize: 20 }}>
          <b>Escape artists</b>
        </span>
        <br />
        <span style={{ fontSize: 16 }}>
          Number of laboratory-acquired infections, 1970-2021
        </span>
      </div>

      <Barplot
        data={data}
        width={width}
        height={height - FOOTER_HEIGHT - HEADER_HEIGHT}
      />

      <div style={{ height: FOOTER_HEIGHT, fontSize: 12, color: 'grey' }}>
        <span>
          Sources: Laboratory-Acquired Infection Database; American Biological
          Safety Association
        </span>
        <br />
        <span>The Economist</span>
      </div>
    </div>
  );
};
