import { ReactNode } from 'react';

export type ModuleId =
  | 'introduction'
  | 'axis'
  | 'hover effect'
  | 'reading-data'
  | 'legend';

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
