import styles from './graph.module.css';

const width = 500;
const height = 300;
const sampleSize = 100000;

const data = generateDataset(sampleSize);

export const Graph = () => {
  return (
    <svg width={500} height={300}>
      {data.map((d, i) => {
        return <circle cx={d.x} cy={d.y} r={4} className={styles.circle} />;
      })}
    </svg>
  );
};

// -
// - function to Generate Data
// -
type DataPoint = { x: number; y: number };

function generateDataset(n: number): DataPoint[] {
  const dataset: DataPoint[] = [];

  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    dataset.push({ x, y });
  }

  return dataset;
}
