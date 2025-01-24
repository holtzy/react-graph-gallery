import React, { useState } from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { LineChartDualYAxisDemo } from '@/viz/LineChartDualYAxis/LineChartDualYAxisDemo';
import { Button, buttonVariants } from '@/component/UI/button';
import { cn } from '@/util/utils';
import { DualRangeSlider } from '@/component/UI/dual-range-slider';
import { LineChart } from '@/viz/LineChartDualYAxis/LineChart';

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

  return (
    <Layout title="Dual Y Axis: run away" seoDescription="TODO">
      <TitleAndDescription
        title={<h1>Why you should avoid dual Y axis</h1>}
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
      <h2 id="plot">🚨 Dual Y axis charts are misleading</h2>
      <p>
        The problem with dual Y axis line charts is that the author can tweak
        the axis limits to completely change the story.
      </p>
      <p>Consider the following scenarios:</p>
      <div className="flex gap-2 items-center my-2">
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
          Apply
        </Button>
        <span className="text-sm text-slate-700">
          World GDP stale, France grows!
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
          Apply
        </Button>{' '}
        <span className="text-sm text-slate-700">
          World GDP grows, France stales!
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
          Apply
        </Button>{' '}
        <span className="text-sm text-slate-700">
          World GDP crosses france in 2011 🙈🙈🙈
        </span>
      </div>

      <LineChartDualYAxisDemo
        leftDomain={leftDomain}
        rightDomain={rightDomain}
      />

      <div
        style={{
          height: 100,
          marginLeft: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="flex justify-between">
          <DualRangeSlider
            defaultValue={leftDomain}
            max={140}
            min={0}
            step={0.5}
            onValueChange={setLeftDomain}
            className="max-w-44"
            ra
          />

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
