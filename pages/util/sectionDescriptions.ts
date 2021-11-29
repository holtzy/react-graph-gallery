export type ChartLogo = "Violin150" | "Density150" | "Histogram150" | "Box1150" | "Joyplot150" | "ScatterPlot150" | "Heatmap150" | "Correlogram150" | "BubblePlot150" | "ScatterConnected150" | "Bar150" | "Spider150" | "Wordcloud150" | "Parallel1150" | "Lollipop150" | "CircularBarplot150" | "Tree150" | "Venn150" | "Doughnut150" | "Pie150" | "Dendrogram150" | "CircularPacking150" | "Line150" | "Area150" | "StackedArea150" | "Stream150" | "time150" | "Map150" | "Choropleth150" | "MapHexbin150" | "Cartogram150" | "ConnectedMap150" | "BubbleMap150" | "Chord150" | "Network150" | "Sankey150" | "Arc150" | "Bundle150" | "Colours150" | "Interactive150" | "anim150" | "Cheat150" | "Bad150" | "3d150" | "2dDensity150"

export type ChartId = "violin" | "density" | "histogram" | "boxplot" | "ridgeline" | "scatter" | "heatmap" | "correlogram" | "bubble" | "connectedScatter" | "density2d" | "barplot" | "radar" | "wordcloud" | "parallel" | "lollipop" | "circularBarplot" | "treemap" | "venn" | "donut" | "pie" | "dendrogram" | "circularPacking" | "line" | "area" | "stackedArea" | "stream" | "timeseries" | "map" | "choropleth" | "hexbin" | "cartogram" | "connection" | "bubbleMap" | "chordDiagram" | "network" | "sankey" | "arc" | "edgeBundling" | "colors" | "plotly" | "animation" | "cheatSheets" | "caveats" | "3d"

export type ChartFamily = "distribution" | "correlation" | "evolution" | "ranking" | "partOfAWhole" | "general" | "flow" | "map"

export type ChartTypesInfo = {
  id: ChartId,
  family: ChartFamily,
  logo: ChartLogo,
  dataToVizURL: string,
  reactURL: string,
  label: string,
  isAvailable: boolean;
}

export const chartTypesInfo: ChartTypesInfo[] = [
  {
    id: "violin",
    family: "distribution",
    logo: "Violin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/violin.html",
    reactURL: "https://react-graph-gallery.com/graph/violin-plot/",
    label: "Violin",
    isAvailable: true
  },
  {
    id: "density",
    family: "distribution",
    logo: "Density150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density.html",
    reactURL: "https://react-graph-gallery.com/graph/density-plot/",
    label: "Density",
    isAvailable: false
  },
  {
    id: "histogram",
    family: "distribution",
    logo: "Histogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/histogram.html",
    reactURL: "https://react-graph-gallery.com/graph/histogram/",
    label: "Histogram",
    isAvailable: false
  },
  {
    id: "boxplot",
    family: "distribution",
    logo: "Box1150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/boxplot.html",
    reactURL: "https://react-graph-gallery.com/graph/boxplot/",
    label: "Boxplot",
    isAvailable: false
  },
  {
    id: "ridgeline",
    family: "distribution",
    logo: "Joyplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/ridgeline.html",
    reactURL: "https://react-graph-gallery.com/graph/ridgeline/",
    label: "Ridgeline",
    isAvailable: false
  },
  {
    id: "scatter",
    family: "correlation",
    logo: "ScatterPlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/scatter.html",
    reactURL: "https://react-graph-gallery.com/graph/scatter-plot/",
    label: "Scatterplot",
    isAvailable: false
  },
  {
    id: "heatmap",
    family: "correlation",
    logo: "Heatmap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/heatmap.html",
    reactURL: "https://react-graph-gallery.com/graph/heatmap/",
    label: "Heatmap",
    isAvailable: false
  },
  {
    id: "correlogram",
    family: "correlation",
    logo: "Correlogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/correlogram.html",
    reactURL: "https://react-graph-gallery.com/graph/correlogram/",
    label: "Correlogram",
    isAvailable: false
  },
  {
    id: "bubble",
    family: "correlation",
    logo: "BubblePlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubble.html",
    reactURL: "https://react-graph-gallery.com/graph/bubble-plot/",
    label: "Bubble",
    isAvailable: false
  },
  {
    id: "connectedScatter",
    family: "correlation",
    logo: "ScatterConnected150",
    dataToVizURL: "https://www.data-to-viz.com/graph/connectedscatter.html",
    reactURL: "https://react-graph-gallery.com/graph/connected-scatter-plot/",
    label: "Connected Scatter",
    isAvailable: false
  },
  {
    id: "density2d",
    family: "correlation",
    logo: "2dDensity150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density2d.html",
    reactURL: "https://react-graph-gallery.com/graph/2d-density-plot/",
    label: "2D Density",
    isAvailable: false
  },
  {
    id: "barplot",
    family: "ranking",
    logo: "Bar150",
    dataToVizURL: "https://www.data-to-viz.com/graph/barplot.html",
    reactURL: "https://react-graph-gallery.com/graph/barplot/",
    label: "Barplot",
    isAvailable: false
  },
  {
    id: "radar",
    family: "ranking",
    logo: "Spider150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/spider.html",
    reactURL: "https://react-graph-gallery.com/graph/radar-chart/",
    label: "Spider / Radar",
    isAvailable: false
  },
  {
    id: "wordcloud",
    family: "ranking",
    logo: "Wordcloud150",
    dataToVizURL: "https://www.data-to-viz.com/graph/wordcloud.html",
    reactURL: "https://react-graph-gallery.com/graph/wordcloud/",
    label: "Wordcloud",
    isAvailable: false
  },
  {
    id: "parallel",
    family: "ranking",
    logo: "Parallel1150",
    dataToVizURL: "https://www.data-to-viz.com/graph/parallel.html",
    reactURL: "https://react-graph-gallery.com/graph/parallel-plot/",
    label: "Parallel",
    isAvailable: false
  },
  {
    id: "lollipop",
    family: "ranking",
    logo: "Lollipop150",
    dataToVizURL: "https://www.data-to-viz.com/graph/lollipop.html",
    reactURL: "https://react-graph-gallery.com/graph/lollipop-plot/",
    label: "Lollipop",
    isAvailable: false
  },
  {
    id: "circularBarplot",
    family: "ranking",
    logo: "CircularBarplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularbarplot.html",
    reactURL: "https://react-graph-gallery.com/graph/circular-barplot/",
    label: "Circular Barplot",
    isAvailable: false
  },
  {
    id: "treemap",
    family: "partOfAWhole",
    logo: "Tree150",
    dataToVizURL: "https://www.data-to-viz.com/graph/treemap.html",
    reactURL: "https://react-graph-gallery.com/graph/treemap/",
    label: "Treemap",
    isAvailable: false
  },
  {
    id: "venn",
    family: "partOfAWhole",
    logo: "Venn150",
    dataToVizURL: "https://www.data-to-viz.com/graph/venn.html",
    reactURL: "https://react-graph-gallery.com/graph/venn-diagram/",
    label: "Venn Diagram",
    isAvailable: false
  },
  {
    id: "donut",
    family: "partOfAWhole",
    logo: "Doughnut150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/graph/donut-plot/",
    label: "Donut",
    isAvailable: false
  },
  {
    id: "pie",
    family: "partOfAWhole",
    logo: "Pie150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/pie.html",
    reactURL: "https://react-graph-gallery.com/graph/pie-plot/",
    label: "Pie Chart",
    isAvailable: false
  },
  {
    id: "dendrogram",
    family: "partOfAWhole",
    logo: "Dendrogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/dendrogram.html",
    reactURL: "https://react-graph-gallery.com/graph/dendrogram/",
    label: "Dendrogram",
    isAvailable: false
  },
  {
    id: "circularPacking",
    family: "partOfAWhole",
    logo: "CircularPacking150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularpacking.html",
    reactURL: "https://react-graph-gallery.com/graph/circular-packing/",
    label: "Circular Packing",
    isAvailable: false
  },
  {
    id: "line",
    family: "evolution",
    logo: "Line150",
    dataToVizURL: "https://www.data-to-viz.com/graph/line.html",
    reactURL: "https://react-graph-gallery.com/graph/line-chart/",
    label: "Line chart",
    isAvailable: false
  },
  {
    id: "area",
    family: "evolution",
    logo: "Area150",
    dataToVizURL: "https://www.data-to-viz.com/graph/area.html",
    reactURL: "https://react-graph-gallery.com/graph/area-plot/",
    label: "Area chart",
    isAvailable: false
  },
  {
    id: "stackedArea",
    family: "evolution",
    logo: "StackedArea150",
    dataToVizURL: "https://www.data-to-viz.com/graph/stackedarea.html",
    reactURL: "https://react-graph-gallery.com/graph/stacked-area-plot/",
    label: "Stacked Area",
    isAvailable: false
  },
  {
    id: "stream",
    family: "evolution",
    logo: "Stream150",
    dataToVizURL: "https://www.data-to-viz.com/graph/streamgraph.html",
    reactURL: "https://react-graph-gallery.com/graph/streamchart/",
    label: "Streamgraph",
    isAvailable: false
  },
  {
    id: "timeseries",
    family: "evolution",
    logo: "time150",
    dataToVizURL: "https://www.data-to-viz.com",
    reactURL: "https://react-graph-gallery.com/graph/timeseries/",
    label: "Timeseries",
    isAvailable: false
  },
  {
    id: "map",
    family: "map",
    logo: "Map150",
    dataToVizURL: "https://www.data-to-viz.com/graph/map.html",
    reactURL: "https://react-graph-gallery.com/graph/map/",
    label: "Map",
    isAvailable: false
  },
  {
    id: "choropleth",
    family: "map",
    logo: "Choropleth150",
    dataToVizURL: "https://www.data-to-viz.com/graph/choropleth.html",
    reactURL: "https://react-graph-gallery.com/graph/choropleth-map/",
    label: "Choropleth",
    isAvailable: false
  },
  {
    id: "hexbin",
    family: "map",
    logo: "MapHexbin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/hexbinmap.html",
    reactURL: "https://react-graph-gallery.com/graph/hexbin-map/",
    label: "Hexbin",
    isAvailable: false
  },
  {
    id: "cartogram",
    family: "map",
    logo: "Cartogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/cartogram.html",
    reactURL: "https://react-graph-gallery.com/graph/cartogram/",
    label: "Cartogram",
    isAvailable: false
  },
  {
    id: "connection",
    family: "map",
    logo: "ConnectedMap150",
    dataToVizURL: "https://www.data-to-viz.com/story/MapConnection.html",
    reactURL: "https://react-graph-gallery.com/graph/connection-map/",
    label: "Connection",
    isAvailable: false
  },
  {
    id: "bubbleMap",
    family: "map",
    logo: "BubbleMap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubblemap.html",
    reactURL: "https://react-graph-gallery.com/graph/bubble-map/",
    label: "Bubble",
    isAvailable: false
  },
  {
    id: "chordDiagram",
    family: "flow",
    logo: "Chord150",
    dataToVizURL: "https://www.data-to-viz.com/graph/chord.html",
    reactURL: "https://react-graph-gallery.com/graph/chord-diagram/",
    label: "Chord Diagram",
    isAvailable: false
  },
  {
    id: "network",
    family: "flow",
    logo: "Network150",
    dataToVizURL: "https://www.data-to-viz.com/graph/network.html",
    reactURL: "https://react-graph-gallery.com/graph/network-chart/",
    label: "Network",
    isAvailable: false
  },
  {
    id: "sankey",
    family: "flow",
    logo: "Sankey150",
    dataToVizURL: "https://www.data-to-viz.com/graph/sankey.html",
    reactURL: "https://react-graph-gallery.com/graph/sankey-diagram/",
    label: "Sankey",
    isAvailable: false
  },
  {
    id: "arc",
    family: "flow",
    logo: "Arc150",
    dataToVizURL: "https://www.data-to-viz.com/graph/arc.html",
    reactURL: "https://react-graph-gallery.com/graph/arc-diagram/",
    label: "Arc Diagram",
    isAvailable: false
  },
  {
    id: "edgeBundling",
    family: "flow",
    logo: "Bundle150",
    dataToVizURL: "https://www.data-to-viz.com/graph/edge_bundling.html",
    reactURL: "https://react-graph-gallery.com/graph/hierarchical-edge-bundling/",
    label: "Edge Bundling",
    isAvailable: false
  },
  {
    id: "colors",
    family: "general",
    logo: "Colours150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/graph/react-colors/",
    label: "Colors",
    isAvailable: false
  },
  {
    id: "plotly",
    family: "general",
    logo: "Interactive150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/graph/plotly/",
    label: "Interactivity",
    isAvailable: false
  },
  {
    id: "animation",
    family: "general",
    logo: "anim150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/graph/animation/",
    label: "Animation",
    isAvailable: false
  },
  {
    id: "cheatSheets",
    family: "general",
    logo: "Cheat150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/graph/cheat-sheets/",
    label: "Cheat sheets",
    isAvailable: false
  },
  {
    id: "caveats",
    family: "general",
    logo: "Bad150",
    dataToVizURL: "",
    reactURL: "https://www.data-to-viz.com/caveats.html",
    label: "Caveats",
    isAvailable: false
  },
  {
    id: "3d",
    family: "general",
    logo: "3d150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/graph/3d/",
    label: "3D",
    isAvailable: false
  },
];
