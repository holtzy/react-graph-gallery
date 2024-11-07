import { ReactNode } from 'react';
import { ModuleId } from './moduleList';

export type LessonStatus = 'not available' | 'wip' | 'free' | 'membersOnly';

export type Lesson = {
  name: string;
  description: ReactNode;
  readTime: number;
  link: string;
  status: LessonStatus;
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
    link: '/course/introduction/introduction-to-react',
    status: 'free',
    moduleId: 'introduction',
  },
  {
    name: "Chart libraries: don't",
    description: (
      <>
        <p>
          Why it will make you save time at the beginning, but is a bad idea on
          the long run
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/introduction/js-dataviz-libraries',
    status: 'free',
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
    link: '/course/introduction/introduction-to-d3',
    status: 'free',
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
    link: '/course/introduction/initial-setup',
    status: 'free',
    moduleId: 'introduction',
  },

  //
  //
  // SVG: your first shapes
  //
  //
  {
    name: 'Introduction to svg',
    description: (
      <>
        <p>
          SVG stands for vector graphic. Let's see why it is useful and
          widespread in dataviz.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/svg/introduction',
    status: 'free',
    moduleId: 'svg',
  },
  {
    name: 'Main SVG elements',
    description: (
      <>
        <p>
          Let's learn how to draw the basic SVG shapes: circle, rectangles,
          segment and text.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/svg/main-svg-elements',
    status: 'free',
    moduleId: 'svg',
  },
  {
    name: 'The path element',
    description: (
      <>
        <p>path is the most complicated yet most useful svg element.</p>
      </>
    ),
    readTime: 4,
    link: '/course/svg/path-element',
    status: 'free',
    moduleId: 'svg',
  },
  {
    name: 'Building shapes with d3',
    description: (
      <>
        <p>Some shapes are complicated to draw. Fortunately, d3.js is here.</p>
      </>
    ),
    readTime: 4,
    link: '/course/svg/d3-shape',
    status: 'free',
    moduleId: 'svg',
  },
  {
    name: 'SVG tips & tricks',
    description: (
      <>
        <p>path is the most complicated yet most useful svg element.</p>
      </>
    ),
    readTime: 4,
    link: '/course/svg/tips-and-tricks',
    status: 'wip',
    moduleId: 'svg',
  },

  //
  //
  // Scales
  //
  //
  {
    name: 'Introduction to scales',
    description: (
      <>
        <p>
          Thanks to SVG we now know how to build any shape anywhere on the
          screen. But we do not want to draw theme anywhere.
        </p>
        <p>
          We want to draw them on a spot determined by data. And we need a scale
          for this.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/scales/introduction',
    status: 'free',
    moduleId: 'scales',
  },
  {
    name: 'Linear Scales',
    description: (
      <>
        <p>
          Thanks to SVG we now know how to build any shape anywhere on the
          screen. But we do not want to draw theme anywhere.
        </p>
        <p>
          We want to draw them on a spot determined by data. And we need a scale
          for this.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/scales/linear-scale',
    status: 'free',
    moduleId: 'scales',
  },
  {
    name: 'Other scale types',
    description: (
      <>
        <p>
          Thanks to SVG we now know how to build any shape anywhere on the
          screen. But we do not want to draw theme anywhere.
        </p>
        <p>
          We want to draw them on a spot determined by data. And we need a scale
          for this.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/scales/other-scale-types',
    status: 'free',
    moduleId: 'scales',
  },
  {
    name: 'Project',
    description: (
      <>
        <p>
          Time to apply what we know about scales and SVG to reproduce a barplot
          from the Economist!
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/scales/project',
    status: 'free',
    moduleId: 'scales',
  },

  //
  //
  // Axes
  //
  //
  {
    name: 'Introduction',
    description: (
      <>
        <p>How to add margins around the chart withouth the headache</p>
      </>
    ),
    readTime: 2,
    link: '/course/axis/introduction',
    status: 'free',
    moduleId: 'axis',
  },
  {
    name: 'Margin and translation',
    description: (
      <>
        <p>How to add margins around the chart withouth the headache</p>
      </>
    ),
    readTime: 4,
    link: '/course/axis/margin-and-translation',
    status: 'free',
    moduleId: 'axis',
  },
  {
    name: 'Build a bottom axis',
    description: (
      <>
        <p>Let's learn how to build a bottom axis component</p>
      </>
    ),
    readTime: 8,
    link: '/course/axis/bottom-axis',
    status: 'free',
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
    link: '/course/axis/axis-variations',
    status: 'wip',
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
    link: '/course/axis/axis-with-d3',
    status: 'free',
    moduleId: 'axis',
  },
  {
    name: 'Project',
    description: (
      <>
        <p>
          Time to apply what we know about scales and SVG to reproduce a barplot
          from the Economist!
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/axis/project',
    status: 'wip',
    moduleId: 'axis',
  },
  //
  //
  // Responsiveness
  //
  //
  {
    name: 'Introduction to responsiveness',
    description: (
      <>
        <p>
          Learn the basics of what responsiveness means and why it is crucial
          for creating dynamic charts.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/responsiveness/introduction',
    status: 'free',
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
    link: '/course/responsiveness/use-dimension-hook',
    status: 'free',
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
    link: '/course/responsiveness/using-the-hook',
    status: 'free',
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
    link: '/course/responsiveness/code-organization',
    status: 'wip',
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
    link: '/course/responsiveness/common-pitfalls',
    status: 'wip',
    moduleId: 'responsiveness',
  },

  //
  //
  // Hover effect
  //
  //
  {
    name: 'What is it?',
    description: (
      <>
        <p>
          What's an hover effect? Why is it important? How to make it look good?
        </p>
      </>
    ),
    readTime: 3,
    link: '/course/hover-effect/introduction',
    status: 'free',
    moduleId: 'hover effect',
  },
  {
    name: 'Strategy 1: CSS pseudo element',
    description: (
      <>
        <p>
          First simple but weak strategy using css pseudo element. Good for
          performance, but weak in term of design.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/hover-effect/css-pseudo-class',
    status: 'free',
    moduleId: 'hover effect',
  },
  {
    name: 'Strategy 2: CSS descendant selector',
    description: (
      <>
        <p>
          With smart usage of css descending selectors, you can start creating
          good looking hover effects.
        </p>
      </>
    ),
    readTime: 10,
    link: '/course/hover-effect/css-descendant-selector',
    status: 'free',
    moduleId: 'hover effect',
  },
  {
    name: 'Strategy 3: toggle css classes',
    description: (
      <>
        <p>
          With smart usage of css descending selectors, you can start creating
          good looking hover effects.
        </p>
      </>
    ),
    readTime: 14,
    link: '/course/hover-effect/toggle-class-in-js',
    status: 'free',
    moduleId: 'hover effect',
  },
  {
    name: 'Strategy 4: react internal state',
    description: (
      <>
        <p>Perfect to build complicated UIs, but mind the performances!</p>
      </>
    ),
    readTime: 12,
    link: '/course/hover-effect/internal-state',
    status: 'free',
    moduleId: 'hover effect',
  },

  //
  //
  // Tooltip
  //
  //
  {
    name: 'Introduction',
    description: (
      <>
        <p>
          Before coding, let's check what a tooltip is, when it can be useful,
          and how to make it look good.
        </p>
      </>
    ),
    readTime: 3,
    link: '/course/tooltip/introduction',
    status: 'free',
    moduleId: 'tooltip',
  },
  {
    name: 'Tooltip component',
    description: (
      <>
        <p>Let's create a tooltip component</p>
      </>
    ),
    readTime: 4,
    link: '/course/tooltip/tooltip-component',
    status: 'free',
    moduleId: 'tooltip',
  },
  {
    name: 'Display on hover',
    description: (
      <>
        <p>
          Now, let's displays the tooltip only on hover, at the right position.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/tooltip/display-on-hover',
    status: 'free',
    moduleId: 'tooltip',
  },
  {
    name: 'Templates',
    description: (
      <>
        <p>
          Several tooltip template components ready to be used in your graph.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/tooltip/templates',
    status: 'free',
    moduleId: 'tooltip',
  },
  {
    name: 'Project',
    description: (
      <>
        <p>
          Let's create a stunning heatmap with good tooltips to apply everything
          we learnt so far.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/tooltip/project',
    status: 'free',
    moduleId: 'tooltip',
  },

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
    link: '/course/legend/introduction',
    status: 'not available',
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
    status: 'not available',
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
    status: 'not available',
    moduleId: 'legend',
  },

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
    status: 'not available',
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
    status: 'not available',
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
    status: 'not available',
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
    link: '/course/data-fetching/spinner',
    status: 'not available',
    moduleId: 'reading-data',
  },

  //
  //
  // Animation
  //
  //
  {
    name: 'Introduction',
    description: (
      <>
        <p>
          There are 2 big families of animation. Let's understand why spring
          animations are more natural.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/animation/introduction',
    status: 'wip',
    moduleId: 'animation',
  },
  {
    name: 'Introduction to react-spring for data visualization',
    description: (
      <>
        <p>
          Let's try to make the most simple animation with react-spring. Just a
          circle that moves from right to left.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/animation/react-spring-for-dataviz',
    status: 'wip',
    moduleId: 'animation',
  },
  {
    name: 'Application on a scatterplot',
    description: (
      <>
        <p>
          Now, let's create a reusable circle component that we can use to
          animate a scatterplot transition.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/animation/scatterplot',
    status: 'wip',
    moduleId: 'animation',
  },
  {
    name: 'Enter, Update, Exit',
    description: (
      <>
        <p>
          Let's see how to deal with shapes that appear, move and leave the
          graph.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/animation/enter-update-exit',
    status: 'wip',
    moduleId: 'animation',
  },
  {
    name: 'Dealing with path',
    description: (
      <>
        <p>
          Let's see how to deal with shapes that appear, move and leave the
          graph.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/animation/dealing-with-path',
    status: 'wip',
    moduleId: 'animation',
  },
  {
    name: 'Project',
    description: (
      <>
        <p>
          Let's apply everything we learnt to create a nice mirror histogram
          with animation
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/animation/project',
    status: 'wip',
    moduleId: 'animation',
  },

  //
  //
  // Canvas
  //
  //
  {
    name: 'What is it, and why is it useful?',
    description: (
      <>
        <p>
          Canvas is the alternative to SVG to increase performance. This lesson
          explains what is it and why it's faster.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/canvas/introduction',
    status: 'wip',
    moduleId: 'canvas',
  },
  {
    name: 'Drawing shapes with canvas',
    description: (
      <>
        <p>
          A quick intro to drawing circles, rectangles, lines, paths and any
          shape you need.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/canvas/drawing-shapes-with-canvas',
    status: 'wip',
    moduleId: 'canvas',
  },
  {
    name: 'Combining SVG and Canvas',
    description: (
      <>
        <p>
          Let's keep using SVG for axes, but use canvas for numerous elements.
          Your first canvas scatterplot!
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/canvas/combining-svg-and-canvas',
    status: 'free',
    moduleId: 'canvas',
  },
  {
    name: 'Using paths in Canvas',
    description: (
      <>
        <p>
          D3 builds SVG paths for us. How can we use it in a canvas context?
          Let's make a donhut chart.
        </p>
      </>
    ),
    readTime: 4,
    link: '/course/canvas/svg-path-in-canvas',
    status: 'free',
    moduleId: 'canvas',
  },
  {
    name: 'Tooltip',
    description: (
      <>
        <p>
          You don't draw the tooltip in canvas. Let's see how to mix layers to
          use the best of both worlds and display a tooltip.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    status: 'not available',
    moduleId: 'canvas',
  },
  {
    name: 'Hover effect',
    description: (
      <>
        <p>
          Let's use a little trick for a nice hover effect: using 2 canvas
          layers: one for the normal state, one for the hovered state.
        </p>
      </>
    ),
    readTime: 4,
    link: '',
    status: 'not available',
    moduleId: 'canvas',
  },
];
