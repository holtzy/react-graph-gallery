import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { ArcDiagramVerticalDemo } from 'viz/ArcDiagramVertical/ArcDiagramVerticalDemo';
import { LinkAsButton } from 'component/LinkAsButton';
import { ScatterplotCanvasBasicDemo } from 'viz/ScatterplotCanvas/ScatterplotCanvasBasicDemo';
import { ScatterplotR2PlaygroundDemo } from '@/viz/ScatterplotR2Playground/ScatterplotR2PlaygroundDemo';

const graphDescription = (
  <>
    <p>
      <b>R²</b> and <b>correlation</b> are often seen as definitive measures to
      validate the relationship between two variables.
    </p>
    <p>
      This post features an interactive sandbox that explores several edge
      cases, demonstrating how relying on these summary statistics without
      visualizing the data can be <b>dangerously misleading</b>.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Why R² Alone Fails"
      seoDescription="An interactive scatterplot that lets you move dots and instantly see the R² update in real time, revealing just how misleading this metric can be without proper context."
    >
      <TitleAndDescription
        title="Why R² Alone Fails"
        description={graphDescription}
        chartType="scatter"
      />

      {/*
      //
      // What is R2
      //
      */}
      <h2 id="definition">🤔 What are R2 and correlation?</h2>
      <h3>&rarr; r2</h3>
      <p>
        R², or the{' '}
        <a
          href="https://en.wikipedia.org/wiki/Coefficient_of_determination"
          target="_blank"
        >
          coefficient of determination
        </a>
        , measures the <b>proportion of variance</b> in the <u>dep</u>endent
        variable that is explained by the <u>indep</u>endent variable in a
        regression model.
      </p>
      <p>
        It ranges from <code>0</code> to <code>1</code>, with higher values
        indicating a stronger linear relationship.
      </p>

      <h3>&rarr; correlation</h3>
      <p>
        The{' '}
        <a
          href="https://en.wikipedia.org/wiki/Correlation_coefficient"
          target="_blank"
        >
          correlation coefficient
        </a>{' '}
        (<code>r</code>) measures the <b>strength</b> and <b>direction</b> of a
        linear relationship between two variables, ranging from <code>-1</code>{' '}
        to <code>1</code>. R² is actually the square of the correlation
        coefficient in a simple linear regression!
      </p>
      <p>
        The correlation describes the <b>relationship</b> directly, R² focuses
        on the <b>explanatory power </b>of a regression model.
      </p>

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="sandbox">🎮 Scatterplot, R², and Draggable Circles</h2>
      <p>
        Summary statistics are popular because they condense large datasets into
        a few <b>easy-to-understand numbers</b>. However, relying solely on them
        can lead to a <b>false sense of clarity</b>.
      </p>
      <p>
        The graph below showcases datasets with high R² and correlation values,
        even when there's clearly <b>no meaningful relationship</b> between x
        and y.
      </p>
      <p>
        Bonus: the circles are <b>draggable</b>! Experiment by moving them
        around and watch how the R² and correlation change in real time. It’s a
        great way to build intuition about these metrics.
      </p>

      <ChartOrSandbox
        vizName={'ScatterplotR2PlaygroundDemo'}
        VizComponent={ScatterplotR2PlaygroundDemo}
        maxWidth={500}
        height={580}
        caption="A scatterplot made with React, using SVG for the axes and Canvas for the markers to improve performance."
      />

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}
