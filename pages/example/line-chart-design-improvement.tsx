import React, { useState } from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { LineChart } from '@/viz/LineChartDesignImprovement/LineChart';
import { addQuarterlyNoise, data } from '@/viz/LineChartDesignImprovement/data';
import { Switch } from '@/component/UI/switch';
import { Label } from '@/component/UI/label';
import { Button } from '@/component/UI/button';

const graphDescription = (
  <>
    <p>Let's take a line chart and make it look good.</p>
  </>
);

export default function Home() {
  const [hasSpine, setHasSpine] = useState(true);
  const [hasLegend, setHasLegend] = useState(true);
  const [hasHighlight, setHasHighlight] = useState(false);
  const [hasGrid, setHasGrid] = useState(true);
  const [hasGoodYAxis, setHasGoodYAxis] = useState(false);
  const [hasGoodXAxis, setHasGoodXAxis] = useState(false);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleImprove = async () => {
    setHasSpine(true);
    setHasLegend(true);
    setHasHighlight(false);
    setHasGrid(true);
    setHasGoodYAxis(false);
    setHasGoodXAxis(false);

    await wait(1000);
    setHasSpine(false);

    await wait(1000);
    setHasLegend(false);

    await wait(1000);
    setHasHighlight(true);

    await wait(1000);
    setHasGrid(false);

    await wait(1000);
    setHasGoodYAxis(true);

    await wait(1000);
    setHasGoodXAxis(true);
  };

  const handleReset = async () => {
    setHasSpine(true);
    setHasLegend(true);
    setHasHighlight(false);
    setHasGrid(true);
    setHasGoodYAxis(false);
    setHasGoodXAxis(false);
  };

  return (
    <Layout title="Line chart revamp." seoDescription="TODO">
      <TitleAndDescription
        title="Vertical arc diagram"
        description={graphDescription}
        chartType="arc"
      />

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">Let's do it</h2>
      <div>
        <div className="flex items-center space-x-2">
          <Switch
            id="spine"
            checked={hasSpine}
            onCheckedChange={(value) => setHasSpine(value)}
          />
          <Label htmlFor="spine" className="font-normal">
            Spine
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="legend"
            checked={hasLegend}
            onCheckedChange={(value) => setHasLegend(value)}
          />
          <Label htmlFor="legend" className="font-normal">
            Legend
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="highlight"
            checked={hasHighlight}
            onCheckedChange={(value) => setHasHighlight(value)}
          />
          <Label htmlFor="legend" className="font-normal">
            highlight
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="grid"
            checked={hasGrid}
            onCheckedChange={(value) => setHasGrid(value)}
          />
          <Label htmlFor="legend" className="font-normal">
            grid
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="betterY"
            checked={hasGoodYAxis}
            onCheckedChange={(value) => setHasGoodYAxis(value)}
          />
          <Label htmlFor="betterY" className="font-normal">
            Better Y axis
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="betterX"
            checked={hasGoodXAxis}
            onCheckedChange={(value) => setHasGoodXAxis(value)}
          />
          <Label htmlFor="betterX" className="font-normal">
            Better X axis
          </Label>
        </div>
      </div>

      <div className="flex gap-2 my-4">
        <Button onClick={handleReset} variant={'outline'}>
          Reset
        </Button>
        <Button onClick={handleImprove}>Improve step by step</Button>
      </div>

      <LineChart
        data={addQuarterlyNoise(data, 1)}
        width={600}
        height={400}
        hasSpine={hasSpine}
        hasLegend={hasLegend}
        hasHighlight={hasHighlight}
        hasGrid={hasGrid}
        hasGoodYAxis={hasGoodYAxis}
        hasGoodXAxis={hasGoodXAxis}
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}
