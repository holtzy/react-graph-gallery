import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import Link from "next/link";
import { BlogPostItem } from "../component/BlogPostItem";

const graphDescription = (
  <p>
    On top of set of chart examples, the react graph gallery provides some more
    generic blog posts desribing how to make <code>react</code> and{" "}
    <code>d3.js</code> work together. Here is a list of the main concepts you
    need to know to build your own viz.
  </p>
);

export default function HowTo() {
  return (
    <Layout
      title="How to make react and d3.js work together"
      seoDescription="A list of blog posts describing the main concepts behind a viz built wih react and d3.js"
    >
      <TitleAndDescription
        title="How to make d3.js work with react"
        description={graphDescription}
      />

      <BlogPostItem
        title={"Using react and d3.js: The 2 strategies"}
        timeToRead={4}
        link="how-to-includes-a-d3-chart-in-react"
        isAvailable={false}
        categories={["fundamental"]}
      >
        <span>
          React modifies the DOM. So does d3.js. It makes it advanced to make
          them work together. This blog post describes the 2 main strategies to
          do so.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Axes: build them with react (and a bit of d3)"}
        timeToRead={8}
        link="build-axis-with-react"
        isAvailable={true}
        categories={["fundamental", "axis"]}
      >
        <span>
          Most of the viz types need some axes to be insightful. This post
          explains how to build them from a d3 scale, using the tick() method of
          d3 to create re-usable react components.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Responsiveness: a hook that makes your viz fits its container"}
        timeToRead={5}
        link="make-a-graph-responsive"
        isAvailable={true}
        categories={["fundamental", "responsiveness", "interaction"]}
      >
        <span>
          Viz components often take a <code>width</code> and a{" "}
          <code>height</code> properties as input. This blogposts explains how
          to build a wrapper around it that computes the parent's div dimension
          and pass it as props
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Hover interaction"}
        timeToRead={6}
        link="add-hover-interaction-to-graph"
        isAvailable={true}
        categories={["fundamental", "interaction"]}
      >
        <span>
          <b>Interactivity</b> is an important part of dataviz when working in
          the browser. Adding a hover effect can improve the user experience by
          highlighting a series on the chart. Here are a couple way to implement
          it, always keeping performances in mind.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Graph to graph interaction"}
        timeToRead={10}
        link="cross-graph-highlight-interaction"
        isAvailable={true}
        categories={["interaction", "advanced"]}
      >
        <span>
          Let's say you have a choropleth map on a side, a timeseries on the
          other. How can you add cross-viz interactions, like hovering a country
          to highlight its trend on the timeseries?
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Spring animations with react spring"}
        timeToRead={5}
        link="react-dataviz-animation-with-react-spring"
        isAvailable={true}
        categories={["fundamental", "animation"]}
      >
        <span>
          It's often necessary to transition between 2 ys of a graph.
          React-spring is here to help, allowing to use spring animations
          easily.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={
          "Shape morphism: animate the transition between 2 distincts charts"
        }
        timeToRead={5}
        link="shape-morphism-for-dataviz-with-react"
        isAvailable
        categories={["advanced", "animation"]}
      >
        <span>
          How can we build a smooth transition between a{" "}
          <Link href="/pie-plot">pie chart</Link> and a barplot? The{" "}
          <code>flubber</code> js library allows to interpolate shapes and{" "}
          <code>react-spring</code> can animate this interpolation.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Improve chart performance with Canvas"}
        timeToRead={5}
        link="to-do"
        isAvailable={false}
        categories={["fundamental", "canvas"]}
      >
        <span>
          Rendering a chart using svg is limited in term of performace. The DOM
          gets to crowded and updating it ends up being slow. Using canvas is
          the best workaround but you need to be able to draw your svg path
          using it!
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Fix the blurry canvas on Retina screens"}
        timeToRead={5}
        link="fix-canvas-blurry-dataviz"
        isAvailable={true}
        categories={["canvas", "advanced"]}
      >
        <span>
          When using canvas for your viz, the result will be blurry on retina
          screens if you don't scale the canvas properly. Here is why and how to
          implement it.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Stacked barplot: how to deal with negative values"}
        timeToRead={6}
        link="stacked-barplot-with-negative-values"
        isAvailable={true}
        categories={["fundamental", "axis"]}
      >
        <span>
          A stacked barchart displays the values of items split in group and
          subgroups. It's a quite common chart type, but dealing with negative
          values in the dataset brings some interesting dataviz discussions.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"What is a color"}
        timeToRead={3}
        link="what-is-a-color"
        isAvailable={true}
        categories={["fundamental", "axis"]}
      >
        <span>
          There are so many ways to define a color when talking with a computer.
          Let's take a tour and see what's the most appropriate for a dataviz
          point of view.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"Buiding a futuristic viz"}
        timeToRead={3}
        link="viz-from-the-future"
        isAvailable={true}
        categories={["fundamental", "axis"]}
      >
        <span>
          What makes a viz look from the future. And how to implement it with
          d3.js and reac.
        </span>
      </BlogPostItem>

      <hr className="full-bleed border bg-gray-200 mt-10 mb-3" />

      <ChartFamilySection chartFamily="general" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
