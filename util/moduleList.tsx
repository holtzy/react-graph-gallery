import { ReactNode } from 'react';

export type ModuleId =
  | 'introduction'
  | 'svg'
  | 'axis'
  | 'hover effect'
  | 'reading-data'
  | 'legend';

export type Module = {
  id: ModuleId;
  name: string;
  description: ReactNode;
};

export const moduleList: Module[] = [
  {
    id: 'introduction',
    name: 'Introduction',
    description: (
      <>
        <p>
          <a href="https://react.dev" target="_blank">
            React
          </a>{' '}
          and{' '}
          <a href="https://d3js.org" target="_blank">
            D3.js
          </a>{' '}
          form the most powerful combo for web graph creation, enabling highly
          flexible and readable code. While you're likely familiar with React,
          you might not know that D3 is the <b>essential JavaScript library</b>{' '}
          for data visualization.
        </p>
        <p>
          This module provides a quick overview of the <b>tools needed</b> to
          create great charts in a browser.
        </p>
      </>
    ),
  },

  {
    id: 'svg',
    name: 'Drawing shapes with SVG',
    description: (
      <>
        <p>A graph is basically a compendium of shapes drawn on a screen.</p>
        <p>
          The most common way to draw shapes in a browser is to use SVG. Let's
          learn the essential of what SVG is, step by step.
        </p>
      </>
    ),
  },

  {
    id: 'axis',
    name: 'Drawing axes',
    description: (
      <>
        <p>
          Now that we know how to add shapes on the graph, it is time to add
          context to it. Let's see how to draw axes.
        </p>
      </>
    ),
  },
];
