function generateDataSet(numPoints = 10000) {
  const data = [];

  for (let i = 0; i < numPoints; i++) {
    const x = 10 * Math.random();

    // Add a sin function to create a pattern, and then add some randomness to it
    const y = 5 + 4 * Math.sin(x) + 5 * (Math.random() - 0.1);

    data.push({ x, y });
  }

  return data;
}

export const data = generateDataSet();
