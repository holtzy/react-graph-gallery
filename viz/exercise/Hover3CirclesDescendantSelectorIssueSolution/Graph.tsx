import styles from './graph.module.css';

export const Graph = () => {
  return (
    <svg width={500} height={300} className={styles.container}>
      <circle cx={100} cy={100} r={40} fill="blue" className={styles.circle} />
      <circle cx={200} cy={150} r={40} fill="red" className={styles.circle} />
      <circle cx={300} cy={200} r={40} fill="green" className={styles.circle} />
    </svg>
  );
};
