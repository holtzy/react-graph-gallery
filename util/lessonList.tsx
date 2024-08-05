import { ReactNode } from 'react';
import { ModuleId } from './moduleList';

export type Lesson = {
  name: string;
  description: ReactNode;
  readTime: number;
  link: string;
  isAvailable: boolean;
  moduleId: ModuleId;
};

export const lessonList: Lesson[] = [
  //
  //
  // Introduction
  //
  //
  {
    name: 'What is react',
    description: (
      <>
        <p>
          React is the most widely used javascript library when it comes to
          building user interfaces.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'introduction',
  },
  {
    name: 'What is d3',
    description: (
      <>
        <p>
          React is the most widely used javascript library when it comes to
          building user interfaces.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'introduction',
  },
  {
    name: 'Do not use a viz library!',
    description: (
      <>
        <p>
          Why it will make you save time at the beginning, but is a bad idea on
          the long run
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'introduction',
  },
  {
    name: 'Initial setup',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'introduction',
  },

  //
  //
  // SVG: your first shapes
  //
  //
  {
    name: 'What is SVG',
    description: (
      <>
        <p>
          SVG stands for vector graphic. Let's see why it is useful and
          widespread in dataviz.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'svg',
  },
  {
    name: 'Your first circle',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'svg',
  },
  {
    name: 'Your first rectangle',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'svg',
  },
  {
    name: 'Your first path',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'svg',
  },

  //
  //
  // Axes
  //
  //
  {
    name: 'Margin and translation',
    description: (
      <>
        <p>How to add margins around the chart withouth the headache</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'axis',
  },
  {
    name: 'Your first axis component',
    description: (
      <>
        <p>
          Let's build a react component that adds an axis on the left of the
          chart
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'axis',
  },
  {
    name: 'Axis component variations',
    description: (
      <>
        <p>
          Bottom axis? Axis with grids? Axis title? Let's see how to create
          those variations.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'axis',
  },
  {
    name: 'Alternative: use d3 helper',
    description: (
      <>
        <p>
          D3 has some great functions to draw the axes. I do not recommend it,
          but you can use them!
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'axis',
  },

  //
  //
  // Responsiveness
  //
  //
  {
    name: 'Understanding Responsiveness',
    description: (
      <>
        <p>
          Learn the basics of what responsiveness means and why it is crucial
          for creating dynamic charts.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'responsiveness',
  },
  {
    name: 'Creating a useDimensions Hook',
    description: (
      <>
        <p>
          Discover how to create a custom hook that listens for changes in
          dimensions, a key component for responsive charts.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'responsiveness',
  },
  {
    name: 'Integrating the Hook with Your Graph',
    description: (
      <>
        <p>
          Learn how to pass the results of the useDimensions hook to your graph
          components to make them fully responsive.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'responsiveness',
  },
  {
    name: 'Best Practices for Code Organization',
    description: (
      <>
        <p>
          Explore suggested ways to organize your code when working with
          responsive charts in React and D3.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'responsiveness',
  },
  {
    name: 'Common Pitfalls and How to Avoid Them',
    description: (
      <>
        <p>
          Identify common issues you might face when implementing responsive
          charts and learn strategies to overcome them.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'responsiveness',
  },

  //
  //
  // Hover effect
  //
  //

  //
  //
  // Tooltip
  //
  //

  //
  //
  // Legend
  //
  //
  {
    name: 'Do you really need a legend?',
    description: (
      <>
        <p>Check the few alternatives that exist instead of using a legend</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'legend',
  },
  {
    name: 'Categoric legend',
    description: (
      <>
        <p>Check the few alternatives that exist instead of using a legend</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'legend',
  },
  {
    name: 'Continuous legend',
    description: (
      <>
        <p>Check the few alternatives that exist instead of using a legend</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'legend',
  },

  //
  //
  // Animation
  //
  //

  //
  //
  // Reading data
  //
  //
  {
    name: 'local JSON file',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'reading-data',
  },
  {
    name: 'local csv file',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'reading-data',
  },
  {
    name: 'data fetching',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'reading-data',
  },
  {
    name: 'spinner for data loading',
    description: (
      <>
        <p>Be ready to build graph in 10 seconds.</p>
      </>
    ),
    readTime: 4,
    link: '',
    isAvailable: false,
    moduleId: 'reading-data',
  },

  //
  //
  // Colors
  //
  //

  //
  //
  // Canvas
  //
  //

  //
  //
  // Miscellaneous
  //
  //
];
