type GraphExample = {
  link: string;
  title: string;
  description: string;
  img: string;
  alt: string;
};

export const graphExampleList: GraphExample[] = [
  //
  // Scatterplot
  //
  {
    link: '/scatter-plot#scales%20and%20axes',
    title: 'Scales and axes',
    description: 'How to map your data in a 2d space, and how to draw the axes',
    img: 'axis-basic-demo.png',
    alt: 'Picture of an empty chart area with X and Y axes',
  },
  {
    link: '/scatterplot',
    title: 'Scatterplot Hover effect',
    description:
      'How to add a hover effect to highlight a group on a scatterplot',
    img: 'scatterplotHoverEffect.gif',
    alt: 'GIF of a scatterplot with hover effect',
  },
  {
    link: '/scatter-plot#circles',
    title: 'Basic scatter plot',
    description: 'Add circles to get a basic scatter plot',
    img: 'scatterplot-most-basic.png',
    alt: 'Most basic scatterplot made with react and d3',
  },
  {
    link: '/scatter-plot#tooltip',
    title: 'Add tooltip',
    description:
      'Get more details about each datapoint by adding a tooltip on hover',
    img: 'scatterplot-tooltip.png',
    alt: 'Scatterplot with tooltip made with react and d3',
  },
  {
    link: '/scatter-plot#hover%20effect',
    title: 'Add a hover effect',
    description: 'Highlight a specific group on hover',
    img: 'scatterplot-hover-effect.png',
    alt: 'Scatterplot with hover effect made with react and d3',
  },
  {
    link: '/scatter-plot#real%20life',
    title: 'Real life use-case',
    description:
      'Reproduction of a data wrapper chart representing countries CO2 data',
    img: 'scatterplot-co2.png',
    alt: 'Real life example of a scatterplot made with react and d3',
  },
  //
  // Heatmap
  //
  {
    link: '/heatmap',
    title: 'Basic heatmap',
    description: 'Most basic heatmap',
    img: 'heatmapBasic.png',
    alt: 'Picture of a simple heatmap made with react and d3.js',
  },
  {
    link: '/heatmap#tooltip',
    title: 'Heatmap with tooltip',
    description: 'Learn how to add a tooltip to a heatmap with react',
    img: 'heatmapTooltip.png',
    alt: 'Picture of a heatmap with a tooltip that appears on hover',
  },
  {
    link: '/heatmap#legend',
    title: 'Continuous color scale',
    description:
      'How to add a color legend to your chart that uses a continuous color scale',
    img: 'continuousColorLegend.png',
    alt: 'Picture of a continuous color scale built with d3.js',
  },
  {
    link: '/heatmap#application',
    title: 'Vaccination heatmap',
    description:
      'Reproduction of a famous vaccination heatmap using d3 and react',
    img: 'heatmapVaccination.png',
    alt: 'Picture of a heatmap showing the effect of vaccination, built with react and d3',
  },
  //
  // Correlogram
  //
  {
    link: '/correlogram',
    title: 'Basic correlogram',
    description: 'Learn how to build a correlogram with react and d3',
    img: 'correlogramBasic.png',
    alt: 'Picture of a correlogram built with react and d3',
  },
  //
  // Bubble plot
  //
  {
    link: '/bubble-plot',
    title: 'Bubble plot',
    description: 'Learn how to build a bubble plot with react and d3.js',
    img: 'bubble-plot-with-legend.png',
    alt: 'Picture of a simple bubble plot with a legend made with react and d3.js',
  },
  {
    link: '/bubble-plot#transition',
    title: 'Bubble plot data set transition',
    description: 'How to smoothly animate the transition between dataset',
    img: 'bubble-plot-dataset-transition.gif',
    alt: 'GIF of a bubble plot smoothly transitioning data',
  },
  //
  // 2d density
  //
  {
    link: '/2d-density-plot',
    title: 'Hexbin chart',
    description:
      'A hexbin chart split the figure in hexagons to show a 2d density',
    img: '2d-density-plot.png',
    alt: 'Picture of a hexbin chart made with React and d3.js',
  },
  //
  // Connected scatter
  //
  {
    link: '/connected-scatter-plot',
    title: 'Simple connected scatterplot',
    description:
      'A very simple connected scatter plot showing the evolution of 1 numeric variable',
    img: 'connected-scatterplot-basic.png',
    alt: 'Picture of a connected scatter plot made with React and d3.js',
  },

  //
  // Boxplot
  //
  {
    link: '/example/boxplot-jitter',
    title: 'Boxplot with jitter',
    description:
      'Add individual data points using jitter on top of the boxplot',
    img: 'boxplot-jitter.png',
    alt: 'Picture of a boxplot with jitter built using react and d3.js',
  },
  {
    link: '/boxplot#box%20component',
    title: 'Boxplot shape',
    description: 'How to build a boxplot shape in SVG',
    img: 'boxplotShape.png',
    alt: 'Picture of a box component, allowing to build a boxplot later on',
  },
  {
    link: '/boxplot',
    title: 'Basic boxplot',
    description: 'How to build a basic boxplot with react',
    img: 'boxplotBasic.png',
    alt: 'Picture of a basic boxplot built with react and d3',
  },

  //
  // Histogram
  //
  {
    link: '/histogram',
    title: 'Histogram',
    description: 'Learn how to build a histogram with react and d3.js',
    img: 'histogram-basic.png',
    alt: 'Picture of a simple histogram made with react and d3.js',
  },
  {
    link: '/histogram#transition',
    title: 'Histogram dataset transition',
    description: 'How to animate the transition between datasets',
    img: 'histogram-dataset-transition.gif',
    alt: 'GIF of a histogram with animated data transition',
  },
  {
    link: '/example/histogram-mirror',
    title: 'Mirror histogram',
    description:
      'Create a mirror histogram to compare the distribution of 2 groups in a dataset',
    img: 'histogram-mirror.png',
    alt: 'picture of a mirror histogram made with react and d3.js',
  },
  {
    link: '/example/histogram-small-multiple',
    title: 'Small multiple',
    description:
      'Create one panel per group to show its distribution separately',
    img: 'histogram-small-multiple.png',
    alt: 'Picture of a histogram with small multiple built with react and d3.js',
  },
  {
    link: '/example/histogram-with-several-groups',
    title: 'Multiple groups',
    description:
      'A histogram with <b>multiple</b> groups displayed on the same axis.',
    img: 'histogram-with-several-groups.png',
    alt: 'Picture of a histogram with multiple groups built with react and d3.js',
  },
  //
  // Violin
  //
  {
    link: '/violin-plot',
    title: 'Violin to Boxplot transition',
    description:
      'Using shape morphism to smoothly transition from a boxplot to a violin and reverse',
    img: 'violinBoxplotTransition.png',
    alt: 'gif of a violin plot smoothly transitioning to a boxplot using shape morphism',
  },
  {
    link: '/violin-plot#bucket%20size',
    title: 'Bucket size effect',
    description:
      'Interactive example showing the bucket size effect on a violin chart',
    img: 'violin-bucket-size-effect.gif',
    alt: 'GIF showing a violin plot with varying bucket size',
  },
  {
    link: '/violin-plot#violin%20component',
    title: 'Violin shape',
    description: 'How to build the shape of a violin with SVG',
    img: 'violinShape.png',
    alt: 'Picture of a violin shape built with react and d3',
  },
  {
    link: '/violin-plot',
    title: 'Boxplot to Violin plot',
    description:
      'Interactive example showing the difference between a boxplot and a violin',
    img: 'boxplot-violin-transition.gif',
    alt: 'GIF showing a mirror transition between a boxplot and a violin plot',
  },
  {
    link: '/violin-plot',
    title: 'Basic violin plot',
    description: 'Learn how to build a basic violin chart with d3 and react',
    img: 'violinBasic.png',
    alt: 'Picture of a basic violin chart built in react',
  },
  {
    link: '/violin-plot#bucket%20size',
    title: 'Violin with variable bucket size',
    description: 'A violin plot with a slider to change the bucket size in use',
    img: 'violinBucketSize.png',
    alt: 'Picture of a violin plot with variable bucket size',
  },

  //
  // Barplot
  //
  {
    link: '/barplot',
    title: 'Basic barplot',
    description: 'Most basic barplot built with React and d3',
    img: 'barplot-basic.png',
    alt: 'Picture of a horizontal barplot made with React and d3',
  },
  {
    link: '/example/barplot-data-transition-animation',
    title: 'Barplot dataset transition',
    description: 'How to smoothly animate the transition between dataset',
    img: 'barplotDatasetAnimation.gif',
    alt: 'GIF of a data update on a React barplot',
  },
  {
    link: '/example/barplot-stacked-horizontal',
    title: 'Horizontal Stacked Barplot',
    description: 'Represent group and subgroup values by stacking the data',
    img: 'barplot-stacked-horizontal.png',
    alt: 'Picture of a stacked barchart made with react and d3',
  },
  {
    link: '/example/barplot-stacked-vertical',
    title: 'Vertical Stacked Barplot',
    description: 'Represent group and subgroup values by stacking the data',
    img: 'barplot-stacked-vertical.png',
    alt: 'Picture of a vertical stacked barchart made with react and d3',
  },
  //
  // density
  //
  {
    link: '/density-plot',
    title: 'Basic density plot',
    description: 'Most basic density plot built with React and d3',
    img: 'densityBasic.png',
    alt: 'Picture of a basic density plot built with React and d3',
  },
  {
    link: '/density-plot#variations',
    title: 'Density plot with multiple groups',
    description: 'How to add several groups on the same density plot',
    img: 'densityMultipleGroups.png',
    alt: 'Picture of a density plot with multiple groups',
  },
  //
  // Ridgeline
  //
  {
    link: '/ridgeline',
    title: 'Basic ridgeline chart',
    description: 'Most basic version of a ridgeline plot',
    img: 'ridgelineBasic.png',
    alt: 'Picture of a basic ridgeline chart built with react and d3',
  },

  //
  // Line Chart
  //
  {
    link: '/line-chart#basic',
    title: 'Most basic line chart',
    description: 'The most basic line chart one can make using d3 and react',
    img: 'line-chart-basic.png',
    alt: 'Picture of a very simple line chart made with react and d3',
  },
  {
    link: '/line-chart#transition',
    title: 'Line chart with dataset transition',
    description:
      'How to smoothly animate the transition between 2 dataset on a line chart',
    img: 'line-chart-data-transition.gif',
    alt: 'GIF of a line chart that animates between 2 dataset',
  },
  //
  // Area Plot
  //
  {
    link: '/area-plot',
    title: 'Basic Area Chart',
    description:
      'Most basic version of an area chart made with react and d3.js',
    img: 'area-chart-basic.png',
    alt: 'Picture of a basic area chart made with React and D3',
  },
  //
  // Stacked area
  //
  {
    link: '/stacked-area-plot',
    title: 'Basis stacked area chart',
    description:
      'Most basic version of a stacked area chart. Explains how to use the stack() function of d3.js',
    img: 'stacked-area-plot-basic.png',
    alt: 'picture of a basic stacked area plot made with react',
  },
  //
  // Stream Chart
  //
  {
    link: '/streamchart',
    title: 'Basic Streamgraph',
    description: 'Most basic streamgraph one can build using d3 and react',
    img: 'streamgraph-basic.png',
    alt: 'Picture of a basic streamgraph made using Reacrt and d3.js',
  },
  {
    link: '/streamchart#hover&effect',
    title: 'Streamgraph with hover effect',
    description:
      'How to add a hover effect on a streamgraph to highlight a group',
    img: 'streamgraph-hover-effect.gif',
    alt: 'GIF of a streamgraph react component that supports hover effect',
  },
  {
    link: '/streamchart#transition',
    title: 'Offset and Smoothing transition',
    description:
      'An interactive streamgraph example showing how to animate transition between the chart stacking features.',
    img: 'streamgraph-offset-type-transition.gif',
    alt: 'GIF of a streamgraph',
  },
  {
    link: '/streamchart#application',
    title: 'Streamgraph application',
    description:
      'Streamgraph with a slider to zoom on a time stamp and with interactive inline legends',
    img: 'streamgraph-application.gif',
    alt: 'GIF of a streamgraph with multiple interactive features',
  },

  //
  // Circle Packing
  //
  {
    link: '/circular-packing',
    title: 'Most basic circular packing chart',
    description:
      'The most basic circular packing chart one can make using d3.js and React.',
    img: 'circle-pack-basic.png',
    alt: 'Picture of a very basic circle packing chart',
  },
  {
    link: '/circular-packing',
    title: 'Circular packing: 2 levels of hierarchy',
    description:
      'A simple circular packing chart with 2 levels of hierarchy built with React and d3.',
    img: 'circle-pack-2-levels.png',
    alt: 'Picture of a very basic circle packing chart with 2 levels of hierarchy',
  },
  {
    link: '/example/circle-packing-with-d3-force',
    title: 'Circle Pack with d3-force',
    description:
      'Another approach to build a circle packing chart using physical forces to compute node positions.',
    img: 'circle-pack-d3-force.png',
    alt: 'Picture of a circle packing chart made using the d3-force plugin',
  },

  //
  // Arc diagram
  //
  {
    link: '/example/arc-diagram-vertical',
    title: 'Vertical arc diagram',
    description:
      'The vertical version of the arc diagram is more convenient to display labels',
    img: 'vertical-arc-diagram.png',
    alt: 'Picture of a vertical arc diagram',
  },

  //
  // Network Chart
  //
  {
    link: '/network-chart#rendering',
    title: 'Most basic network chart',
    description:
      'Most basic network chart using the d3-force plugin to apply physical forces.',
    img: 'network-chart-basic.png',
    alt: 'Picture of a very simple network chart built with React and D3.js.',
  },
  {
    link: '/network-chart#rendering',
    title: 'Play with forces',
    description:
      'A playground to discover the effect of the various forces you can apply to your particles',
    img: 'network-chart-force-playground.png',
    alt: 'Picture of a playground allowing to play with the various d3 forces',
  },
  {
    link: '/example/network-diagram-with-colored-groups',
    title: 'Force directed graph',
    description:
      'A force directed network chart showing character co-occurence in les miserables',
    img: 'network-les-miserables.png',
    alt: 'Picture of a force directed network chart showing character co-occurence in les miserables',
  },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
  //   {
  //     link: "",
  //     title: "",
  //     description: "",
  //     img: "",
  //     alt: "",
  //   },
];
