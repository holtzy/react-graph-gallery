import { ReactNode } from 'react';

export type TocItem = {
  name: string;
  title: string;
  description: ReactNode;
  url: string;
  isFree?: boolean;
  isNew?: boolean;
  isAvailable?: boolean;
  isWip?: boolean; // Mark lessons that are work in progress
  isEndOfModule?: boolean; // if last lesson of module, triggers a modal when user clicks next.
  time?: number;
  exoNumber?: number;
};

export type ModuleDescription = {
  name: string;
  description: ReactNode;
  toc: TocItem[];
  moduleNumber: number;
  color: string;
};

export type CourseTableOfContent = ModuleDescription[];

export const courseTableOfContent: CourseTableOfContent = [
  {
    name: 'Introduction',
    color: 'var(--set1-red)',
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
    moduleNumber: 1,
    toc: [
      {
        name: 'What is react',
        title: 'What is react',
        description: (
          <>
            <p>
              React is the most widely used javascript library when it comes to
              building user interfaces.
            </p>
          </>
        ),
        url: '/course/introduction/introduction-to-react',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: "Chart libraries: don't",
        title: "Chart libraries: don't",
        description: (
          <>
            <p>
              Why it will make you save time at the beginning, but is a bad idea
              on the long run
            </p>
          </>
        ),
        url: '/course/introduction/js-dataviz-libraries',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'What is d3',
        title: 'What is d3',
        description: (
          <>
            <p>
              React is the most widely used javascript library when it comes to
              building user interfaces.
            </p>
          </>
        ),
        url: '/course/introduction/introduction-to-d3',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Initial setup',
        title: 'Initial setup',
        description: (
          <>
            <p>Be ready to build graph in 10 seconds.</p>
          </>
        ),
        url: '/course/introduction/initial-setup',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'SVG',
    color: 'var(--set1-orange)',
    description: (
      <>
        <p>A graph is basically a compendium of shapes drawn on a screen.</p>
        <p>
          The most common way to draw shapes in a browser is to use SVG. Let's
          learn the essential of what SVG is, step by step.
        </p>
      </>
    ),
    moduleNumber: 2,
    toc: [
      {
        name: 'Introduction to svg',
        title: 'Introduction to svg',
        description: (
          <>
            <p>
              SVG stands for vector graphic. Let's see why it is useful and
              widespread in dataviz.
            </p>
          </>
        ),
        url: '/course/svg/introduction',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Main SVG elements',
        title: 'Main SVG elements',
        description: (
          <>
            <p>
              Let's learn how to draw the basic SVG shapes: circle, rectangles,
              segment and text.
            </p>
          </>
        ),
        url: '/course/svg/main-svg-elements',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'The path element',
        title: 'The path element',
        description: (
          <>
            <p>path is the most complicated yet most useful svg element.</p>
          </>
        ),
        url: '/course/svg/path-element',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Building shapes with d3',
        title: 'Building shapes with d3',
        description: (
          <>
            <p>
              Some shapes are complicated to draw. Fortunately, d3.js is here.
            </p>
          </>
        ),
        url: '/course/svg/d3-shape',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'SVG tips & tricks',
        title: 'SVG tips & tricks',
        description: (
          <>
            <p>path is the most complicated yet most useful svg element.</p>
          </>
        ),
        url: '/course/svg/tips-and-tricks',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Scales',
    color: 'var(--set1-gold)',
    description: (
      <>
        <p>
          Your svg area goes from 0 to 500px. Your data goes from 0 to 100. If
          the value of a data point is 30, where should you draw it?
        </p>
        <p>You need a scale to find out.</p>
      </>
    ),
    moduleNumber: 3,
    toc: [
      {
        name: 'Introduction to scales',
        title: 'Introduction to scales',
        description: (
          <>
            <p>
              Thanks to SVG we now know how to build any shape anywhere on the
              screen. But we do not want to draw theme anywhere.
            </p>
            <p>
              We want to draw them on a spot determined by data. And we need a
              scale for this.
            </p>
          </>
        ),
        url: '/course/scales/introduction',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Linear Scales',
        title: 'Linear Scales',
        description: (
          <>
            <p>
              Thanks to SVG we now know how to build any shape anywhere on the
              screen. But we do not want to draw theme anywhere.
            </p>
            <p>
              We want to draw them on a spot determined by data. And we need a
              scale for this.
            </p>
          </>
        ),
        url: '/course/scales/linear-scale',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Other scale types',
        title: 'Other scale types',
        description: (
          <>
            <p>
              Thanks to SVG we now know how to build any shape anywhere on the
              screen. But we do not want to draw theme anywhere.
            </p>
            <p>
              We want to draw them on a spot determined by data. And we need a
              scale for this.
            </p>
          </>
        ),
        url: '/course/scales/other-scale-types',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Project',
        title: 'Project',
        description: (
          <>
            <p>
              Time to apply what we know about scales and SVG to reproduce a
              barplot from the Economist!
            </p>
          </>
        ),
        url: '/course/scales/project',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Axes',
    color: 'var(--set1-teal)',
    description: (
      <>
        <p>
          Now that we know how to add shapes on the graph, it is time to add
          context to it. Let's see how to draw axes.
        </p>
      </>
    ),
    moduleNumber: 4,
    toc: [
      {
        name: 'Introduction',
        title: 'Introduction',
        description: (
          <>
            <p>How to add margins around the chart withouth the headache</p>
          </>
        ),
        url: '/course/axis/introduction',
        isFree: true,
        isAvailable: true,
        time: 2,
        exoNumber: 0,
      },
      {
        name: 'Margin and translation',
        title: 'Margin and translation',
        description: (
          <>
            <p>How to add margins around the chart withouth the headache</p>
          </>
        ),
        url: '/course/axis/margin-and-translation',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Build a bottom axis',
        title: 'Build a bottom axis',
        description: (
          <>
            <p>Let's learn how to build a bottom axis component</p>
          </>
        ),
        url: '/course/axis/bottom-axis',
        isFree: true,
        isAvailable: true,
        time: 8,
        exoNumber: 0,
      },
      {
        name: 'Axis component variations',
        title: 'Axis component variations',
        description: (
          <>
            <p>
              Bottom axis? Axis with grids? Axis title? Let's see how to create
              those variations.
            </p>
          </>
        ),
        url: '/course/axis/axis-variations',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Alternative: use d3 helper',
        title: 'Alternative: use d3 helper',
        description: (
          <>
            <p>
              D3 has some great functions to draw the axes. I do not recommend
              it, but you can use them!
            </p>
          </>
        ),
        url: '/course/axis/axis-with-d3',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Project',
        title: 'Project',
        description: (
          <>
            <p>
              Time to apply what we know about scales and SVG to reproduce a
              barplot from the Economist!
            </p>
          </>
        ),
        url: '/course/axis/project',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Responsiveness',
    color: 'var(--set1-purple)',
    description: (
      <>
        <p>
          Some people have big monitors when others will read your work on their
          phone. Let's see how to make your graph look good in any situation.
        </p>
      </>
    ),
    moduleNumber: 5,
    toc: [
      {
        name: 'Introduction to responsiveness',
        title: 'Introduction to responsiveness',
        description: (
          <>
            <p>
              Learn the basics of what responsiveness means and why it is
              crucial for creating dynamic charts.
            </p>
          </>
        ),
        url: '/course/responsiveness/introduction',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Creating a useDimensions Hook',
        title: 'Creating a useDimensions Hook',
        description: (
          <>
            <p>
              Discover how to create a custom hook that listens for changes in
              dimensions, a key component for responsive charts.
            </p>
          </>
        ),
        url: '/course/responsiveness/use-dimension-hook',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Integrating the Hook with Your Graph',
        title: 'Integrating the Hook with Your Graph',
        description: (
          <>
            <p>
              Learn how to pass the results of the useDimensions hook to your
              graph components to make them fully responsive.
            </p>
          </>
        ),
        url: '/course/responsiveness/using-the-hook',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Best Practices for Code Organization',
        title: 'Best Practices for Code Organization',
        description: (
          <>
            <p>
              Explore suggested ways to organize your code when working with
              responsive charts in React and D3.
            </p>
          </>
        ),
        url: '/course/responsiveness/code-organization',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Common Pitfalls and How to Avoid Them',
        title: 'Common Pitfalls and How to Avoid Them',
        description: (
          <>
            <p>
              Identify common issues you might face when implementing responsive
              charts and learn strategies to overcome them.
            </p>
          </>
        ),
        url: '/course/responsiveness/common-pitfalls',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Hover effect',
    color: 'var(--set1-blue)',
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
    moduleNumber: 6,
    toc: [
      {
        name: 'What is an hover effect?',
        title: 'What is an hover effect?',
        description: (
          <>
            <p>
              What's an hover effect? Why is it important? How to make it look
              good?
            </p>
          </>
        ),
        url: '/course/hover-effect/introduction',
        isFree: true,
        isAvailable: true,
        time: 3,
        exoNumber: 0,
      },
      {
        name: 'Strategy 1: CSS pseudo element',
        title: 'Strategy 1: CSS pseudo element',
        description: (
          <>
            <p>
              First simple but weak strategy using css pseudo element. Good for
              performance, but weak in term of design.
            </p>
          </>
        ),
        url: '/course/hover-effect/css-pseudo-class',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Strategy 2: CSS descendant selector',
        title: 'Strategy 2: CSS descendant selector',
        description: (
          <>
            <p>
              With smart usage of css descending selectors, you can start
              creating good looking hover effects.
            </p>
          </>
        ),
        url: '/course/hover-effect/css-descendant-selector',
        isFree: true,
        isAvailable: true,
        time: 10,
        exoNumber: 0,
      },
      {
        name: 'Strategy 3: toggle css classes',
        title: 'Strategy 3: toggle css classes',
        description: (
          <>
            <p>
              With smart usage of css descending selectors, you can start
              creating good looking hover effects.
            </p>
          </>
        ),
        url: '/course/hover-effect/toggle-class-in-js',
        isFree: true,
        isAvailable: true,
        time: 14,
        exoNumber: 0,
      },
      {
        name: 'Strategy 4: react internal state',
        title: 'Strategy 4: react internal state',
        description: (
          <>
            <p>Perfect to build complicated UIs, but mind the performances!</p>
          </>
        ),
        url: '/course/hover-effect/internal-state',
        isFree: true,
        isAvailable: true,
        time: 12,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Tooltip',
    color: 'var(--set1-pink)',
    description: (
      <>
        <p>
          Let's check how to add a tooltip. Give a tooltip definition. Give
          several tooltip component starters.
        </p>
      </>
    ),
    moduleNumber: 7,
    toc: [
      {
        name: 'Introduction',
        title: 'Introduction',
        description: (
          <>
            <p>
              Before coding, let's check what a tooltip is, when it can be
              useful, and how to make it look good.
            </p>
          </>
        ),
        url: '/course/tooltip/introduction',
        isFree: true,
        isAvailable: true,
        time: 3,
        exoNumber: 0,
      },
      {
        name: 'Tooltip component',
        title: 'Tooltip component',
        description: (
          <>
            <p>Let's create a tooltip component</p>
          </>
        ),
        url: '/course/tooltip/tooltip-component',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Display on hover',
        title: 'Display on hover',
        description: (
          <>
            <p>
              Now, let's displays the tooltip only on hover, at the right
              position.
            </p>
          </>
        ),
        url: '/course/tooltip/display-on-hover',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Templates',
        title: 'Templates',
        description: (
          <>
            <p>
              Several tooltip template components ready to be used in your
              graph.
            </p>
          </>
        ),
        url: '/course/tooltip/templates',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Project',
        title: 'Project',
        description: (
          <>
            <p>
              Let's create a stunning heatmap with good tooltips to apply
              everything we learnt so far.
            </p>
          </>
        ),
        url: '/course/tooltip/project',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Reading data',
    color: 'var(--set1-green)',
    description: (
      <>
        <p>
          Your data can be a json file or a tabular format. It can be hosted
          locally or available through an API. How can you read it?
        </p>
      </>
    ),
    moduleNumber: 8,
    toc: [
      {
        name: 'local JSON file',
        title: 'local JSON file',
        description: (
          <>
            <p>Be ready to build graph in 10 seconds.</p>
          </>
        ),
        url: '',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'local csv file',
        title: 'local csv file',
        description: (
          <>
            <p>Be ready to build graph in 10 seconds.</p>
          </>
        ),
        url: '',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'data fetching',
        title: 'data fetching',
        description: (
          <>
            <p>Be ready to build graph in 10 seconds.</p>
          </>
        ),
        url: '',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'spinner for data loading',
        title: 'spinner for data loading',
        description: (
          <>
            <p>Be ready to build graph in 10 seconds.</p>
          </>
        ),
        url: '/course/data-fetching/spinner',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Legend',
    color: 'var(--set1-yellow)',
    description: (
      <>
        <p>
          Those little legends are often small, but as complicated to build as
          the main graph. This module provides a few ready to use legend
          components.
        </p>
      </>
    ),
    moduleNumber: 9,
    toc: [
      {
        name: 'Do you really need a legend?',
        title: 'Do you really need a legend?',
        description: (
          <>
            <p>
              Check the few alternatives that exist instead of using a legend
            </p>
          </>
        ),
        url: '/course/legend/introduction',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Categoric legend',
        title: 'Categoric legend',
        description: (
          <>
            <p>
              Check the few alternatives that exist instead of using a legend
            </p>
          </>
        ),
        url: '',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Continuous legend',
        title: 'Continuous legend',
        description: (
          <>
            <p>
              Check the few alternatives that exist instead of using a legend
            </p>
          </>
        ),
        url: '',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Animation',
    color: 'var(--set1-brown)',
    description: (
      <>
        <p>
          Let's dig into those smooth dataset transition that make the viz
          magical. It's challenging, but <code>react-spring</code> is of great
          help here.
        </p>
      </>
    ),
    moduleNumber: 10,
    toc: [
      {
        name: 'Introduction',
        title: 'Introduction',
        description: (
          <>
            <p>
              There are 2 big families of animation. Let's understand why spring
              animations are more natural.
            </p>
          </>
        ),
        url: '/course/animation/introduction',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Introduction to react-spring for data visualization',
        title: 'Introduction to react-spring for data visualization',
        description: (
          <>
            <p>
              Let's try to make the most simple animation with react-spring.
              Just a circle that moves from right to left.
            </p>
          </>
        ),
        url: '/course/animation/react-spring-for-dataviz',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Application on a scatterplot',
        title: 'Application on a scatterplot',
        description: (
          <>
            <p>
              Now, let's create a reusable circle component that we can use to
              animate a scatterplot transition.
            </p>
          </>
        ),
        url: '/course/animation/scatterplot',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Enter, Update, Exit',
        title: 'Enter, Update, Exit',
        description: (
          <>
            <p>
              Let's see how to deal with shapes that appear, move and leave the
              graph.
            </p>
          </>
        ),
        url: '/course/animation/enter-update-exit',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Dealing with path',
        title: 'Dealing with path',
        description: (
          <>
            <p>
              Let's see how to deal with shapes that appear, move and leave the
              graph.
            </p>
          </>
        ),
        url: '/course/animation/dealing-with-path',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Project',
        title: 'Project',
        description: (
          <>
            <p>
              Let's apply everything we learnt to create a nice mirror histogram
              with animation
            </p>
          </>
        ),
        url: '/course/animation/project',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
  {
    name: 'Canvas',
    color: 'var(--set1-grey)',
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
    moduleNumber: 11,
    toc: [
      {
        name: 'What is it, and why is it useful?',
        title: 'What is it, and why is it useful?',
        description: (
          <>
            <p>
              Canvas is the alternative to SVG to increase performance. This
              lesson explains what is it and why it's faster.
            </p>
          </>
        ),
        url: '/course/canvas/introduction',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Drawing shapes with canvas',
        title: 'Drawing shapes with canvas',
        description: (
          <>
            <p>
              A quick intro to drawing circles, rectangles, lines, paths and any
              shape you need.
            </p>
          </>
        ),
        url: '/course/canvas/drawing-shapes-with-canvas',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Combining SVG and Canvas',
        title: 'Combining SVG and Canvas',
        description: (
          <>
            <p>
              Let's keep using SVG for axes, but use canvas for numerous
              elements. Your first canvas scatterplot!
            </p>
          </>
        ),
        url: '/course/canvas/combining-svg-and-canvas',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Using paths in Canvas',
        title: 'Using paths in Canvas',
        description: (
          <>
            <p>
              D3 builds SVG paths for us. How can we use it in a canvas context?
              Let's make a donhut chart.
            </p>
          </>
        ),
        url: '/course/canvas/svg-path-in-canvas',
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Hover effect',
        title: 'Hover effect',
        description: (
          <>
            <p>
              Let's use a little trick for a nice hover effect: using 2 canvas
              layers: one for the normal state, one for the hovered state.
            </p>
          </>
        ),
        url: '/course/canvas/hover-effect',
        isFree: false,
        isAvailable: true,
        isWip: true,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Tooltip',
        title: 'Tooltip',
        description: (
          <>
            <p>
              There is no <code>onMouseMove</code> on canvas elements. How can
              we add a tooltip?
            </p>
          </>
        ),
        url: '/course/canvas/tooltip',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
      },
      {
        name: 'Animation',
        title: 'Animation',
        description: (
          <>
            <p>How to animate this canvas?</p>
          </>
        ),
        url: '/course/canvas/animation',
        isFree: false,
        isAvailable: false,
        time: 4,
        exoNumber: 0,
        isEndOfModule: true,
      },
    ],
  },
];

//
//
//
//
//
//
//
//
//
//
//
export const bonusBasicRTableOfContent: TocItem[] = [
  {
    name: 'Quick Intro to R',
    title: 'Getting Started: A Quick Introduction to R',
    description: (
      <>
        <p>
          Welcome to the world of R! If you're new here, don't worry — you don't
          need to be a coding wizard to get things done. R is a programming
          language designed with data in mind, and with the right tools, it
          becomes surprisingly intuitive.
        </p>
        <p>
          In this short bonus lesson, we'll walk you through the essential
          building blocks of R: how to store values in objects, use functions,
          and load packages. Just enough to help you feel at home before jumping
          into our data visualization course!
        </p>
      </>
    ),
    url: '/bonus/intro-to-r',
    isAvailable: true,
    time: 7,
    exoNumber: 7,
  },
  {
    name: 'Your Own Project',
    title: 'Working on Your Own R Project',
    description: (
      <>
        <p>
          This course lets you run R code directly in our sandboxes. But in real
          life, you'll need to <b>work with R in your own setup</b> to analyze
          data and create your own graphs.
        </p>
        <p>
          This bonus lesson shows how to work efficiently with R: using an{' '}
          <b>IDE</b>, writing <b>scripts</b>, loading <b>data</b>, and{' '}
          <b>visualizing</b> results without drowning in a messy workspace. By
          the end, you'll have the skills to start your own projects with
          confidence and reproducibility.
        </p>
      </>
    ),
    url: '/bonus/own-r-project',
    isAvailable: true,
    time: 8,
    exoNumber: 4,
  },
  {
    name: 'Data Wrangling Basics',
    title: 'Data Wrangling Basics: Transform Your Data Sets for ggplot2',
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: '/bonus/data-wrangling',
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: 'Publish Your Work',
    title: 'Publish Your Work: How to Share Your ggplot2 Graphic',
    description: (
      <>
        <p>
          At the end of this course you'll build great charts with ggplot2. But
          their impact stays <b>limited</b> if they never leave your local
          machine.
        </p>
        <p>
          This lesson shows how to <b>package</b>, <b>store</b>, and{' '}
          <b>share</b> your work in a way that is safe, reproducible, and easy
          for others to read and reuse.
        </p>
      </>
    ),
    url: '/bonus/publish',
    isAvailable: true,
    time: 8,
    exoNumber: 0,
  },
];

export const bonusTipsAndTricksTableOfContent: TocItem[] = [
  {
    name: 'Common Pitfalls',
    title: 'Common Pitfalls: Debugging Dilemmas & Troubleshooting Tips',
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: '/bonus/pitfalls',
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: 'Beyond Basic Geoms',
    title: 'Beyond Basic Geoms: Exploring Specialized Chart Types',
    description: (
      <>
        <p>here</p>
        <p>here</p>
      </>
    ),
    url: '/bonus/beyond-basic-geoms',
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: 'Exciting Ectensions',
    title: 'Exciting Extensions: Overview of Powerful Packages for ggplot2',
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: '/bonus/exciting-extensions',
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: 'Record Your Process',
    title: 'Record Your Process: Creating Step-by-Step Videos with camcorder',
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: '/bonus/camcorder',
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: 'Further Learning',
    title: 'Further Learning: Books, Courses & Additional Resources',
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: '/bonus/resources',
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
];

//
//
// Helper functions and types for backward compatibility
// These allow the codebase to use the old Lesson and Module types
//
//

export type LessonStatus = 'not available' | 'wip' | 'free' | 'membersOnly';

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

// Map module names to module IDs
const moduleNameToId: Record<string, ModuleId> = {
  Introduction: 'introduction',
  SVG: 'svg',
  Scales: 'scales',
  Axes: 'axis',
  Responsiveness: 'responsiveness',
  'Hover effect': 'hover effect',
  Tooltip: 'tooltip',
  'Reading data': 'reading-data',
  Legend: 'legend',
  Animation: 'animation',
  Canvas: 'canvas',
};

// Convert TocItem to Lesson format
function tocItemToLesson(
  tocItem: TocItem,
  moduleId: ModuleId
): {
  name: string;
  description: ReactNode;
  readTime: number;
  link: string;
  status: LessonStatus;
  moduleId: ModuleId;
} {
  // Determine status from TocItem properties
  let status: LessonStatus = 'not available';

  if (tocItem.isFree) {
    status = 'free';
  } else if (tocItem.isWip) {
    status = 'wip';
  } else if (tocItem.isAvailable) {
    status = 'membersOnly';
  } else {
    status = 'not available';
  }

  return {
    name: tocItem.name,
    description: tocItem.description,
    readTime: tocItem.time || 0,
    link: tocItem.url,
    status,
    moduleId,
  };
}

// Export lessonList in the old format
export const lessonList = courseTableOfContent.flatMap((module) => {
  const moduleId = moduleNameToId[module.name];
  if (!moduleId) {
    console.warn(`Unknown module name: ${module.name}`);
    return [];
  }
  return module.toc.map((tocItem) => tocItemToLesson(tocItem, moduleId));
});

// Export moduleList in the old format
export const moduleList = courseTableOfContent
  .map((module) => {
    const moduleId = moduleNameToId[module.name];
    if (!moduleId) {
      console.warn(`Unknown module name: ${module.name}`);
      return null;
    }
    return {
      id: moduleId,
      name: module.name,
      description: module.description,
    };
  })
  .filter(
    (m): m is { id: ModuleId; name: string; description: ReactNode } =>
      m !== null
  );

// Export Lesson type for backward compatibility
export type Lesson = {
  name: string;
  description: ReactNode;
  readTime: number;
  link: string;
  status: LessonStatus;
  moduleId: ModuleId;
};

// Export Module type for backward compatibility
export type Module = {
  id: ModuleId;
  name: string;
  description: ReactNode;
};
