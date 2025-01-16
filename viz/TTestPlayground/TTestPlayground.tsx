import { useState } from 'react';
import { Boxplot } from './Boxplot';
import { jStat } from 'jstat';

const HEADER_HEIGHT = 180;

export const TTestPlaygroundDemo = ({ width = 700, height = 400 }) => {
  const [sampleSize, setSampleSize] = useState(100);
  const [effectSize, setEffectSize] = useState(0);
  const [stDev, setStDev] = useState(1);

  const vals1 = generateNormalDistribution(
    10 + effectSize / 2,
    stDev,
    sampleSize
  );
  const vals2 = generateNormalDistribution(
    10 - effectSize / 2,
    stDev,
    sampleSize
  );

  const data1 = vals1.map((v) => {
    return {
      name: 'A',
      value: v,
    };
  });
  const data2 = vals2.map((v) => {
    return {
      name: 'B',
      value: v,
    };
  });
  const data = data1.concat(data2);

  const res = calculatePValue(vals1, vals2);

  const parameterSliders = (
    <div className="flex flex-col items-start gap-2 py-6">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="text-sm w-32">Sample Size:</span>
        <input
          type="range"
          min={5}
          max={200}
          value={sampleSize}
          step={5}
          onChange={(e) => setSampleSize(Number(e.target.value))}
          style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
        />
        <span className="text-sm ml-2">{sampleSize}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="text-sm w-32">Effect Size:</span>
        <input
          type="range"
          min={0}
          max={5}
          value={effectSize}
          step={0.1}
          onChange={(e) => setEffectSize(Number(e.target.value))}
          style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
        />
        <span className="text-sm ml-2">{effectSize}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="text-sm w-32">Standard Deviation</span>
        <input
          type="range"
          min={0}
          max={10}
          value={stDev}
          step={0.1}
          onChange={(e) => setStDev(Number(e.target.value))}
          style={{ height: 2, opacity: 0.5, marginLeft: 10 }}
        />
        <span className="text-sm ml-2">{stDev}</span>
      </div>
    </div>
  );

  const results = (
    <div className="pt-2">
      <span className="text-sm border rounded-sm px-2 py-1 bg-slate-100">
        {'p-value is ' + res.pValue?.toFixed(6)}
      </span>
      <span className="text-sm ml-6">
        {res.pValue <= 0.05 && <span>✅ Significant</span>}
        {res.pValue > 0.05 && <span>❌ Not Significant</span>}
      </span>
    </div>
  );

  return (
    <div>
      <div style={{ height: HEADER_HEIGHT }} className="pl-12">
        {parameterSliders}
        <hr />
        {results}
      </div>

      <Boxplot data={data} width={width} height={height - HEADER_HEIGHT} />
    </div>
  );
};

function generateNormalDistribution(
  mean: number,
  stdDev: number,
  count: number
) {
  const numbers = [];

  for (let i = 0; i < count; i++) {
    let u1 = Math.random();
    let u2 = Math.random();
    let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2); // Box-Muller transform
    let value = z0 * stdDev + mean;
    numbers.push(value);
  }

  return numbers;
}

// Function to calculate the t-statistic for a two-sample t-test
function tTestTwoSample(sample1, sample2) {
  const mean1 = jStat.mean(sample1);
  const mean2 = jStat.mean(sample2);
  const var1 = jStat.variance(sample1, true); // Use sample variance
  const var2 = jStat.variance(sample2, true);
  const n1 = sample1.length;
  const n2 = sample2.length;

  const pooledStdDev = Math.sqrt(var1 / n1 + var2 / n2);
  return (mean1 - mean2) / pooledStdDev;
}

// Function to calculate the p-value for a t-test
function calculatePValue(sample1, sample2) {
  const tStatistic = tTestTwoSample(sample1, sample2);
  const df = sample1.length + sample2.length - 2; // Degrees of freedom

  // Two-tailed p-value
  const pValue = 2 * (1 - jStat.studentt.cdf(Math.abs(tStatistic), df));
  return { tStatistic, pValue };
}
