import { useState } from 'react';

const width = 500;
const height = 300;
const sampleSize = 100000;

const data = generateDataset(sampleSize);

export const Graph = () => {
  // Start with a state here!

  return (
    <svg width={500} height={300}>
      {/* Map through data, render one circle per item, use the state for the hover effect */}
    </svg>
  );
};

// -
// -
// -
// - function to Generate Data
// -// -
// -
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
