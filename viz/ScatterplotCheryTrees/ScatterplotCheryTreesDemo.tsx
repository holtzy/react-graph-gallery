import { data } from './data';
import { CIRCLE_COLOR, Scatterplot } from './Scatterplot';

const SPACE_FOR_LEGEND = 40;

export const ScatterplotCheryTreesDemo = ({ width = 700, height = 400 }) => (
  <div>
    <div
      style={{
        height: SPACE_FOR_LEGEND,
        paddingLeft: 60,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <svg width={10} height={10}>
        <circle cx={5} cy={5} r={5} fill={CIRCLE_COLOR} />
      </svg>
      <span style={{ fontSize: 14, marginLeft: 10, marginRight: 40 }}>
        Plein floraison annuelle
      </span>
      <svg width={30} height={10}>
        <line x1="0" y1="5" x2="30" y2="5" stroke="black" />
      </svg>
      <span style={{ fontSize: 14, marginLeft: 10 }}>
        Moyenne de la floraison (20 ans)
      </span>
    </div>
    <Scatterplot data={data} width={width} height={height - SPACE_FOR_LEGEND} />
  </div>
);
