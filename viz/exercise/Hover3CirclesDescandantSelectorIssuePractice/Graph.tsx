import styles from './graph.module.css';

export const Graph = () => {
  return (
    <svg width={500} height={300}>
      {/* This uses "CSS in JS". Basically, a class called "circle" is added to the circle below */}
      <circle className={styles.circle} />
    </svg>
  );
};
