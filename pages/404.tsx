import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import Link from 'next/link';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import { ScatterplotClimateCrisisDemo } from 'viz/ScatterplotClimateCrisis/ScatterplotClimateCrisisDemo';

const graphDescription = (
  <>
    <p>It looks like the place you are looking for does not exist 🙈</p>
    <p>
      You probably want to go back to the <Link href="/">gallery homepage</Link>
      !
    </p>
    <p>
      I'm in a good mood, so here is a chart example for you just in case you
      are interested in React and d3.js ☀️
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="How to build a scatter plot with React and D3."
      seoDescription="A step-by-step guide to build your very own scatterplot from scratch. Comes with explanations, code sandboxes, and ready-to-use templates."
    >
      <TitleAndDescription
        title={
          <h1>
            Oh No!{' '}
            <span className="text-gray-600 font-light hidden sm:inline">
              (404)
            </span>
          </h1>
        }
        description={graphDescription}
        chartType="scatter"
      />

      <ChartOrSandbox
        VizComponent={ScatterplotClimateCrisisDemo}
        vizName={'ScatterplotClimateCrisis'}
        maxWidth={700}
        height={900}
        caption={
          <span>
            Reproduction of a chart originally published by{' '}
            <a href="https://blog.datawrapper.de/climate-risk-readiness-responsibility/">
              Data Wrapper
            </a>{' '}
            using react and d3.js.
          </span>
        }
      />
      <div className="mt-20" />
    </Layout>
  );
}
