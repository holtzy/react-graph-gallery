export type ChartLogo = "DataArt2150" | "Violin150" | "Density150" | "Histogram150" | "Box1150" | "Joyplot150" | "ScatterPlot150" | "Heatmap150" | "Correlogram150" | "BubblePlot150" | "ScatterConnected150" | "Bar150" | "Spider150" | "Wordcloud150" | "Parallel1150" | "Lollipop150" | "CircularBarplot150" | "Tree150" | "Venn150" | "Doughnut150" | "Pie150" | "Dendrogram150" | "Voronoi150" | "CircularPacking150" | "Line150" | "Area150" | "StackedArea150" | "Stream150" | "Time150" | "Map150" | "Choropleth150" | "MapHexbin150" | "Cartogram150" | "ConnectedMap150" | "BubbleMap150" | "Chord150" | "Network150" | "Sankey150" | "Arc150" | "Bundle150" | "Colours150" | "Interactive150" | "Anim150" | "Cheat150" | "Bad150" | "3d150" | "2dDensity150"

export type ChartId = 'all' | "violin" | "density" | "histogram" | "boxplot" | "ridgeline" | "scatter" | "heatmap" | "correlogram" | "bubble" | "connectedScatter" | "density2d" | "barplot" | "radar" | "wordcloud" | "parallel" | "lollipop" | "circularBarplot" | "treemap" | "venn" | "donut" | "pie" | "dendrogram" | "voronoi" | "circularPacking" | "line" | "area" | "stackedArea" | "stream" | "timeseries" | "map" | "choropleth" | "hexbin" | "cartogram" | "connection" | "bubbleMap" | "chordDiagram" | "network" | "sankey" | "arc" | "edgeBundling" | "colors" | "plotly" | "animation" | "cheatSheets" | "caveats" | "3d"

export type ChartFamily = "distribution" | "correlation" | "evolution" | "ranking" | "partOfAWhole" | "general" | "flow" | "map"

export type ChartTypesInfo = {
  id: ChartId,
  family: ChartFamily,
  logo: ChartLogo,
  dataToVizURL: string,
  reactURL: string,
  d3URL: string,
  label: string,
  isAvailable: boolean;
}

export const chartTypesInfo: ChartTypesInfo[] = [
  {
    id: "all",
    family: "general",
    logo: "DataArt2150",
    dataToVizURL: "https://www.data-to-viz.com",
    d3URL: "https://www.d3-graph-gallery.com",
    reactURL: "https://react-graph-gallery.com/all",
    label: "All charts",
    isAvailable: true
  },
  {
    id: "violin",
    family: "distribution",
    logo: "Violin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/violin.html",
    d3URL: "https://www.d3-graph-gallery.com/violin",
    reactURL: "https://react-graph-gallery.com/violin-plot",
    label: "Violin",
    isAvailable: true
  },
  {
    id: "density",
    family: "distribution",
    logo: "Density150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density.html",
    d3URL: "https://www.d3-graph-gallery.com/density",
    reactURL: "https://react-graph-gallery.com/density-plot",
    label: "Density",
    isAvailable: true
  },
  {
    id: "histogram",
    family: "distribution",
    logo: "Histogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/histogram.html",
    d3URL: "https://www.d3-graph-gallery.com/histogram",
    reactURL: "https://react-graph-gallery.com/histogram",
    label: "Histogram",
    isAvailable: true
  },
  {
    id: "boxplot",
    family: "distribution",
    logo: "Box1150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/boxplot.html",
    d3URL: "https://www.d3-graph-gallery.comt/boxplot",
    reactURL: "https://react-graph-gallery.com/boxplot",
    label: "Boxplot",
    isAvailable: true
  },
  {
    id: "ridgeline",
    family: "distribution",
    logo: "Joyplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/ridgeline.html",
    d3URL: "https://www.d3-graph-gallery.com/ridgeline",
    reactURL: "https://react-graph-gallery.com/ridgeline",
    label: "Ridgeline",
    isAvailable: true
  },
  {
    id: "scatter",
    family: "correlation",
    logo: "ScatterPlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/scatter.html",
    d3URL: "https://www.d3-graph-gallery.com/scatter",
    reactURL: "https://react-graph-gallery.com/scatter-plot",
    label: "Scatterplot",
    isAvailable: true
  },
  {
    id: "heatmap",
    family: "correlation",
    logo: "Heatmap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/heatmap.html",
    d3URL: "https://www.d3-graph-gallery.com/heatmap",
    reactURL: "https://react-graph-gallery.com/heatmap",
    label: "Heatmap",
    isAvailable: true
  },
  {
    id: "correlogram",
    family: "correlation",
    logo: "Correlogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/correlogram.html",
    d3URL: "https://www.d3-graph-gallery.com/correlogram",
    reactURL: "https://react-graph-gallery.com/correlogram",
    label: "Correlogram",
    isAvailable: true
  },
  {
    id: "bubble",
    family: "correlation",
    logo: "BubblePlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubble.html",
    d3URL: "https://www.d3-graph-gallery.com/bubble",
    reactURL: "https://react-graph-gallery.com/bubble-plot",
    label: "Bubble",
    isAvailable: true
  },
  {
    id: "connectedScatter",
    family: "correlation",
    logo: "ScatterConnected150",
    dataToVizURL: "https://www.data-to-viz.com/graph/connectedscatter.html",
    d3URL: "https://www.d3-graph-gallery.com/connectedscatter",
    reactURL: "https://react-graph-gallery.com/connected-scatter-plot",
    label: "Connected Scatter",
    isAvailable: false
  },
  {
    id: "density2d",
    family: "correlation",
    logo: "2dDensity150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density2d.html",
    d3URL: "https://www.d3-graph-gallery.com/density2d",
    reactURL: "https://react-graph-gallery.com/2d-density-plot",
    label: "2D Density",
    isAvailable: false
  },
  {
    id: "barplot",
    family: "ranking",
    logo: "Bar150",
    dataToVizURL: "https://www.data-to-viz.com/graph/barplot.html",
    d3URL: "https://www.d3-graph-gallery.com/barplot",
    reactURL: "https://react-graph-gallery.com/barplot",
    label: "Barplot",
    isAvailable: true
  },
  {
    id: "radar",
    family: "ranking",
    logo: "Spider150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/spider.html",
    d3URL: "https://www.d3-graph-gallery.comt/spider",
    reactURL: "https://react-graph-gallery.com/radar-chart",
    label: "Spider / Radar",
    isAvailable: false
  },
  {
    id: "wordcloud",
    family: "ranking",
    logo: "Wordcloud150",
    dataToVizURL: "https://www.data-to-viz.com/graph/wordcloud.html",
    d3URL: "https://www.d3-graph-gallery.com/wordcloud",
    reactURL: "https://react-graph-gallery.com/wordcloud",
    label: "Wordcloud",
    isAvailable: true
  },
  {
    id: "parallel",
    family: "ranking",
    logo: "Parallel1150",
    dataToVizURL: "https://www.data-to-viz.com/graph/parallel.html",
    d3URL: "https://www.d3-graph-gallery.com/parallel",
    reactURL: "https://react-graph-gallery.com/parallel-plot",
    label: "Parallel",
    isAvailable: false
  },
  {
    id: "lollipop",
    family: "ranking",
    logo: "Lollipop150",
    dataToVizURL: "https://www.data-to-viz.com/graph/lollipop.html",
    d3URL: "https://www.d3-graph-gallery.com/lollipop",
    reactURL: "https://react-graph-gallery.com/lollipop-plot",
    label: "Lollipop",
    isAvailable: true
  },
  {
    id: "circularBarplot",
    family: "ranking",
    logo: "CircularBarplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularbarplot.html",
    d3URL: "https://www.d3-graph-gallery.com/circularbarplot",
    reactURL: "https://react-graph-gallery.com/circular-barplot",
    label: "Circular Barplot",
    isAvailable: true
  },
  {
    id: "treemap",
    family: "partOfAWhole",
    logo: "Tree150",
    dataToVizURL: "https://www.data-to-viz.com/graph/treemap.html",
    d3URL: "https://www.d3-graph-gallery.com/treemap",
    reactURL: "https://react-graph-gallery.com/treemap",
    label: "Treemap",
    isAvailable: false
  },
  // {
  //   id: "venn",
  //   family: "partOfAWhole",
  //   logo: "Venn150",
  //   dataToVizURL: "https://www.data-to-viz.com/graph/venn.html",
  //   d3URL: "https://www.d3-graph-gallery.com/venn",
  //   reactURL: "https://react-graph-gallery.com/venn-diagram",
  //   label: "Venn Diagram",
  //   isAvailable: false
  // },
  {
    id: "donut",
    family: "partOfAWhole",
    logo: "Doughnut150",
    dataToVizURL: "https://www.data-to-viz.com/graph/donut.html",
    d3URL: "https://d3-graph-gallery.com/donut.html",
    reactURL: "https://react-graph-gallery.com/donut",
    label: "Donut",
    isAvailable: true
  },
  {
    id: "pie",
    family: "partOfAWhole",
    logo: "Pie150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/pie.html",
    d3URL: "https://www.d3-graph-gallery.comt/pie",
    reactURL: "https://react-graph-gallery.com/pie-plot",
    label: "Pie Chart",
    isAvailable: true
  },
  {
    id: "dendrogram",
    family: "partOfAWhole",
    logo: "Dendrogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/dendrogram.html",
    d3URL: "https://www.d3-graph-gallery.com/dendrogram",
    reactURL: "https://react-graph-gallery.com/dendrogram",
    label: "Dendrogram",
    isAvailable: true
  },
  {
    id: "voronoi",
    family: "partOfAWhole",
    logo: "Voronoi150",
    dataToVizURL: "https://www.data-to-viz.com",
    d3URL: "https://www.d3-graph-gallery.com",
    reactURL: "https://react-graph-gallery.com/voronoi",
    label: "Voronoi",
    isAvailable: false
  },
  {
    id: "circularPacking",
    family: "partOfAWhole",
    logo: "CircularPacking150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularpacking.html",
    d3URL: "https://www.d3-graph-gallery.com/circularpacking",
    reactURL: "https://react-graph-gallery.com/circular-packing",
    label: "Circular Packing",
    isAvailable: false
  },
  {
    id: "line",
    family: "evolution",
    logo: "Line150",
    dataToVizURL: "https://www.data-to-viz.com/graph/line.html",
    d3URL: "https://www.d3-graph-gallery.com/line",
    reactURL: "https://react-graph-gallery.com/line-chart",
    label: "Line chart",
    isAvailable: true
  },
  {
    id: "area",
    family: "evolution",
    logo: "Area150",
    dataToVizURL: "https://www.data-to-viz.com/graph/area.html",
    d3URL: "https://www.d3-graph-gallery.com/area",
    reactURL: "https://react-graph-gallery.com/area-plot",
    label: "Area chart",
    isAvailable: false
  },
  {
    id: "stackedArea",
    family: "evolution",
    logo: "StackedArea150",
    dataToVizURL: "https://www.data-to-viz.com/graph/stackedarea.html",
    d3URL: "https://d3-graph-gallery.com/stackedarea",
    reactURL: "https://react-graph-gallery.com/stacked-area-plot",
    label: "Stacked Area",
    isAvailable: true
  },
  {
    id: "stream",
    family: "evolution",
    logo: "Stream150",
    dataToVizURL: "https://www.data-to-viz.com/graph/streamgraph.html",
    d3URL: "https://www.d3-graph-gallery.com/streamgraph",
    reactURL: "https://react-graph-gallery.com/streamchart",
    label: "Streamgraph",
    isAvailable: true
  },
  {
    id: "timeseries",
    family: "evolution",
    logo: "Time150",
    dataToVizURL: "https://www.data-to-viz.com",
    d3URL: "https://www.d3-graph-gallery.com",
    reactURL: "https://react-graph-gallery.com/timeseries",
    label: "Timeseries",
    isAvailable: false
  },
  {
    id: "map",
    family: "map",
    logo: "Map150",
    dataToVizURL: "https://www.data-to-viz.com/graph/map.html",
    d3URL: "https://www.d3-graph-gallery.com/map",
    reactURL: "https://react-graph-gallery.com/map",
    label: "Map",
    isAvailable: false
  },
  {
    id: "choropleth",
    family: "map",
    logo: "Choropleth150",
    dataToVizURL: "https://www.data-to-viz.com/graph/choropleth.html",
    d3URL: "https://www.d3-graph-gallery.com/choropleth",
    reactURL: "https://react-graph-gallery.com/choropleth-map",
    label: "Choropleth",
    isAvailable: false
  },
  {
    id: "hexbin",
    family: "map",
    logo: "MapHexbin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/hexbinmap.html",
    d3URL: "https://www.d3-graph-gallery.com/hexbinmap",
    reactURL: "https://react-graph-gallery.com/hexbin-map",
    label: "Hexbin",
    isAvailable: false
  },
  {
    id: "cartogram",
    family: "map",
    logo: "Cartogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/cartogram.html",
    d3URL: "https://www.d3-graph-gallery.com/cartogram",
    reactURL: "https://react-graph-gallery.com/cartogram",
    label: "Cartogram",
    isAvailable: false
  },
  {
    id: "connection",
    family: "map",
    logo: "ConnectedMap150",
    dataToVizURL: "https://www.data-to-viz.com/story/MapConnection.html",
    d3URL: "https://www.d3-graph-gallery.com/MapConnection",
    reactURL: "https://react-graph-gallery.com/connection-map",
    label: "Connection",
    isAvailable: false
  },
  {
    id: "bubbleMap",
    family: "map",
    logo: "BubbleMap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubblemap.html",
    d3URL: "https://www.d3-graph-gallery.com/bubblemap",
    reactURL: "https://react-graph-gallery.com/bubble-map",
    label: "Bubble",
    isAvailable: false
  },
  {
    id: "chordDiagram",
    family: "flow",
    logo: "Chord150",
    dataToVizURL: "https://www.data-to-viz.com/graph/chord.html",
    d3URL: "https://www.d3-graph-gallery.com/chord",
    reactURL: "https://react-graph-gallery.com/chord-diagram",
    label: "Chord Diagram",
    isAvailable: false
  },
  {
    id: "network",
    family: "flow",
    logo: "Network150",
    dataToVizURL: "https://www.data-to-viz.com/graph/network.html",
    d3URL: "https://www.d3-graph-gallery.com/network",
    reactURL: "https://react-graph-gallery.com/network-chart",
    label: "Network",
    isAvailable: false
  },
  {
    id: "sankey",
    family: "flow",
    logo: "Sankey150",
    dataToVizURL: "https://www.data-to-viz.com/graph/sankey.html",
    d3URL: "https://www.d3-graph-gallery.com/sankey",
    reactURL: "https://react-graph-gallery.com/sankey-diagram",
    label: "Sankey",
    isAvailable: false
  },
  {
    id: "arc",
    family: "flow",
    logo: "Arc150",
    dataToVizURL: "https://www.data-to-viz.com/graph/arc.html",
    d3URL: "https://www.d3-graph-gallery.com/arc",
    reactURL: "https://react-graph-gallery.com/arc-diagram",
    label: "Arc Diagram",
    isAvailable: false
  },
  {
    id: "edgeBundling",
    family: "flow",
    logo: "Bundle150",
    dataToVizURL: "https://www.data-to-viz.com/graph/edge_bundling.html",
    d3URL: "https://www.d3-graph-gallery.com/edge_bundling",
    reactURL: "https://react-graph-gallery.com/hierarchical-edge-bundling",
    label: "Edge Bundling",
    isAvailable: false
  },
  {
    id: "colors",
    family: "general",
    logo: "Colours150",
    dataToVizURL: "",
    d3URL: "",
    reactURL: "https://react-graph-gallery.com/react-colors",
    label: "Colors",
    isAvailable: false
  },
  {
    id: "plotly",
    family: "general",
    logo: "Interactive150",
    dataToVizURL: "",
    d3URL: "",
    reactURL: "https://react-graph-gallery.com/plotly",
    label: "Interactivity",
    isAvailable: false
  },
  {
    id: "animation",
    family: "general",
    logo: "Anim150",
    dataToVizURL: "",
    d3URL: "",
    reactURL: "https://react-graph-gallery.com/animation",
    label: "Animation",
    isAvailable: false
  },
  {
    id: "cheatSheets",
    family: "general",
    logo: "Cheat150",
    dataToVizURL: "",
    d3URL: "",
    reactURL: "https://react-graph-gallery.com/cheat-sheets",
    label: "Cheat sheets",
    isAvailable: false
  },
  {
    id: "caveats",
    family: "general",
    logo: "Bad150",
    dataToVizURL: "",
    d3URL: "",
    reactURL: "https://www.data-to-viz.com/caveats.htm",
    label: "Caveats",
    isAvailable: false
  },
  // {
  //   id: "3d",
  //   family: "general",
  //   logo: "3d150",
  //   dataToVizURL: "",
  //   d3URL: "",
  //   reactURL: "https://react-graph-gallery.com/3d",
  //   label: "3D",
  //   isAvailable: false
  // },
]
