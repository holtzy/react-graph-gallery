import React, { useRef, useState } from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { LineChartDualYAxisDemo } from '@/viz/LineChartDualYAxis/LineChartDualYAxisDemo';
import { Button, buttonVariants } from '@/component/UI/button';
import { cn } from '@/util/utils';
import { DualRangeSlider } from '@/component/UI/dual-range-slider';
import { useDimensions } from '@/hook/use-dimensions';

const graphDescription = (
  <>
    <p>
      A dual Y-axis chart shows the <b>evolution of two variables</b>. The first
      variable is represented by the left axis, while the right axis represents
      the second variable.
    </p>
    <p>
      This chart type is popular because comparing the evolution of two
      variables is a common need. However, it can also be <b>misleading</b> and
      should be avoided in 99% of cases. Let's explore why!
    </p>
  </>
);

export default function PostDualY() {
  const [leftDomain, setLeftDomain] = useState<[number, number]>([30, 120]);
  const [rightDomain, setRightDomain] = useState<[number, number]>([2, 3.3]);

  const [selectedScenario, setSelectedScenario] = useState(0);

  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);

  return (
    <Layout title="Dual Y Axis: run away" seoDescription="TODO">
      <TitleAndDescription
        title={<h1>The Problem with Dual Y-Axes</h1>}
        description={graphDescription}
        chartType="line"
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">Data</h2>
      <p>
        The following graph compares the evolution of GDP between 2004 and 2023
        for the world (left axis) and for France (right axis).
      </p>
      <p>
        I found the data on the{' '}
        <a
          href="https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?end=2016&start=1960&view=chart"
          target="_blank"
        >
          World Bank
        </a>{' '}
        website, inspired by this Datawrapper{' '}
        <a href="https://blog.datawrapper.de/dualaxis/" target="_blank">
          blog
        </a>
        .
      </p>

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="plot">🚨 Why Dual Y-Axis Charts Are Misleading</h2>
      <p>
        Dual Y-axis line charts are problematic because{' '}
        <b>the axis limits can be easily manipulated</b>, allowing the author to
        completely alter the perceived story.
      </p>
      <p>
        Take a look at the following examples. Each chart uses the{' '}
        <b>same data and design</b>, but the <b>axis limits</b> vary,
        dramatically changing the interpretation:
      </p>

      <div className="flex gap-2 items-center my-4">
        <Button
          onClick={() => {
            setLeftDomain([44, 300]);
            setRightDomain([2.1, 3.1]);
            setSelectedScenario(0);
          }}
          className={cn(
            buttonVariants({
              size: 'sm',
              variant: selectedScenario === 0 ? 'default' : 'secondary',
            })
          )}
        >
          Scenario 1
        </Button>
        <span className="text-sm text-slate-700">
          World flatlines, france surges!
        </span>
      </div>

      <div className="flex gap-2 items-center my-2">
        <Button
          onClick={() => {
            setLeftDomain([40, 120]);
            setRightDomain([1.8, 6]);
            setSelectedScenario(1);
          }}
          className={cn(
            buttonVariants({
              size: 'sm',
              variant: selectedScenario === 1 ? 'default' : 'secondary',
            })
          )}
        >
          Scenario 2
        </Button>{' '}
        <span className="text-sm text-slate-700">
          World surges, france flatlines!
        </span>
      </div>

      <div className="flex gap-2 items-center my-2">
        <Button
          onClick={() => {
            setLeftDomain([40, 120]);
            setRightDomain([0.6, 6]);
            setSelectedScenario(2);
          }}
          className={cn(
            buttonVariants({
              size: 'sm',
              variant: selectedScenario === 2 ? 'default' : 'secondary',
            })
          )}
        >
          Scenario 3
        </Button>{' '}
        <span className="text-sm text-slate-700">
          World crosses France in 2011 🙈🙈🙈
        </span>
      </div>

      <div className="flex gap-2 items-center my-2">
        <Button
          onClick={() => {
            setLeftDomain([40, 120]);
            setRightDomain([2, 3.11]);
            setSelectedScenario(3);
          }}
          className={cn(
            buttonVariants({
              size: 'sm',
              variant: selectedScenario === 3 ? 'default' : 'secondary',
            })
          )}
        >
          Scenario 4
        </Button>{' '}
        <span className="text-sm text-slate-700">Correct Y axis limits</span>
      </div>

      <div className="flex gap-2 items-center my-2">
        <Button
          onClick={() => {
            setLeftDomain([0, 125]);
            setRightDomain([0, 3.3]);
            setSelectedScenario(4);
          }}
          className={cn(
            buttonVariants({
              size: 'sm',
              variant: selectedScenario === 4 ? 'default' : 'secondary',
            })
          )}
        >
          Scenario 5
        </Button>{' '}
        <span className="text-sm text-slate-700">0 baseline</span>
      </div>

      <div ref={chartRef} className="w-full" style={{ height: 400 }}>
        <LineChartDualYAxisDemo
          leftDomain={leftDomain}
          rightDomain={rightDomain}
          height={chartSize.height}
          width={chartSize.width}
        />
      </div>

      <p className="mt-4 text-sm text-slate-600">
        If you prefer, you can also manually change the axis limits thanks to
        the 2 sliders below:
      </p>

      <div className="flex gap-2">
        <div className="flex flex-col gap-2 w-60">
          <span className="text-sm text-slate-600">Left axis</span>
          <DualRangeSlider
            defaultValue={leftDomain}
            max={140}
            min={0}
            step={0.5}
            onValueChange={setLeftDomain}
            className="max-w-44"
            ra
          />
        </div>
        <div className="flex flex-col gap-2 w-60">
          <span className="text-sm text-slate-600">Right axis</span>
          <DualRangeSlider
            defaultValue={rightDomain}
            max={15}
            min={0}
            step={0.1}
            onValueChange={setRightDomain}
            className="max-w-44"
            ra
          />
        </div>
      </div>

      <h2>Takeaway?</h2>
      <p>
        I don't want to write yet another post about when dual Y axes are
        acceptable or what the alternatives are. Lisa already wrote the{' '}
        <a href="https://blog.datawrapper.de/dualaxis/" target="_blank">
          definitive article
        </a>{' '}
        on this topic, it's impossible to improve upon it.
      </p>
      <p>
        My hope is that this interactive playground helps you gain a{' '}
        <b>real intuition</b> about the issue. After all, as they say, an
        interactive graph is worth a thousand words! 🙃
      </p>

      {/* <ChartOrSandbox
        vizName={'LineChartDualYAxis'}
        VizComponent={LineChartDualYAxisDemo}
        height={500}
        maxWidth={700}
        caption="Hover over a chart to see a cursor on both of them, easing the time comparison."
      /> */}

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}
