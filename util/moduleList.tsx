import { ReactNode } from 'react';

export type ModuleId =
  | 'introduction'
  | 'svg'
  | 'scales'
  | 'axis'
  | 'responsiveness'
  | 'hover effect'
  | 'tooltip'
  | 'reading-data'
  | 'legend'
  | 'animation'
  | 'canvas';

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
          While you're likely familiar with React, you might not know that D3 is
          the <b>essential JavaScript library</b> for data visualization.
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
    name: 'SVG',
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
    id: 'scales',
    name: 'Scales',
    description: (
      <>
        <p>
          Your svg area goes from 0 to 500px. Your data goes from 0 to 100. If
          the value of a data point is 30, where should you draw it?
        </p>
        <p>You need a scale to find out.</p>
      </>
    ),
  },

  {
    id: 'axis',
    name: 'Axes',
    description: (
      <>
        <p>
          Now that we know how to add shapes on the graph, it is time to add
          context to it. Let's see how to draw axes.
        </p>
      </>
    ),
  },

  {
    id: 'responsiveness',
    name: 'Responsiveness',
    description: (
      <>
        <p>
          Some people have big monitors when others will read your work on their
          phone. Let's see how to make your graph look good in any situation.
        </p>
      </>
    ),
  },

  {
    id: 'hover effect',
    name: 'Hover effect',
    description: (
      <>
        <p>
          You want something to happen when a graph element is hovered. This
          module dives into several strategies using CSS and Javascript. It
          provides a clear mental modal of the main use cases and how to deal
          with each of them.
        </p>
      </>
    ),
  },

  {
    id: 'tooltip',
    name: 'Tooltip',
    description: (
      <>
        <p>
          Let's check how to add a tooltip. Give a tooltip definition. Give
          several tooltip component starters.
        </p>
      </>
    ),
  },

  {
    id: 'reading-data',
    name: 'Reading data',
    description: (
      <>
        <p>
          Your data can be a json file or a tabular format. It can be hosted
          locally or available through an API. How can you read it?
        </p>
      </>
    ),
  },

  {
    id: 'legend',
    name: 'Legend',
    description: (
      <>
        <p>
          Those little legends are often small, but as complicated to build as
          the main graph. This module provides a few ready to use legend
          components.
        </p>
      </>
    ),
  },

  {
    id: 'animation',
    name: 'Animation',
    description: (
      <>
        <p>
          Let's dig into those smooth dataset transition that make the viz
          magical. It's challenging, but <code>react-spring</code> is of great
          help here.
        </p>
      </>
    ),
  },

  {
    id: 'canvas',
    name: 'Canvas',
    description: (
      <>
        <p>
          With thousands of shapes on your graph, using SVG will make your graph
          slow.
        </p>
        <p>
          Canvas is an alternative way to draw on a screen. Much more
          performant, but harder to deal with.
        </p>
      </>
    ),
  },
];
