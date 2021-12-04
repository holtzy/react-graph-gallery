import React, { Children } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import Link from "next/link";

const graphDescription = (
  <p>
    On top of set of chart examples, the react graph gallery provides some more
    generic blog posts desribing how to make <code>react</code> and{" "}
    <code>d3.js</code> work together. Here is a list of the main concepts you
    need to know to build your own viz.
  </p>
);

type BlogPostItemProps = {
  title: string;
  children: React.ReactNode;
  link: string;
  isAvailable: boolean;
  timeToRead: number;
};

const BlogPostItem = ({
  title,
  children,
  link,
  isAvailable,
  timeToRead,
}: BlogPostItemProps) => {
  const opacity = isAvailable ? "opacity-100" : "opacity-25";

  return (
    <div className={opacity}>
      <h2>{title}</h2>
      {children}
      {isAvailable && <Link href={link}> Read more...</Link>}
      <p className="text-gray-400 font-light">{timeToRead + " minutes read"}</p>
    </div>
  );
};

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
        isAvailable
      >
        <span>
          React modifies the DOM. So does d3.js. It makes it hard to make them
          work together. This blog post describes the 2 main strategies to do
          so.
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={
          "Responsiveness: a wrapper that makes your viz fits its container"
        }
        timeToRead={5}
        link="react-wrapper-for-responsive-d3-graph"
        isAvailable={false}
      >
        <span>
          Viz components often take a <code>width</code> and a{" "}
          <code>height</code> properties as input. This blogposts explains how
          to build a wrapper around it that computes the parent's div dimension
          and pass it as props
        </span>
      </BlogPostItem>

      <BlogPostItem
        title={"spring animations with react spring"}
        timeToRead={5}
        link="react-dataviz-animation-react-spring"
        isAvailable={false}
      >
        <span>
          It's often necessary to transition between 2 states of a graph.
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
      >
        <span>
          How can we build a smooth transition between a{" "}
          <Link href="/pie-plot">pie chart</Link> and a barplot? The{" "}
          <code>flubber</code> js library allows to interpolate shapes and{" "}
          <code>react-spring</code> can animate this interpolation.
        </span>
      </BlogPostItem>

      <hr className="full-bleed  border bg-gray-200 mt-10 mb-3" />

      <ChartFamilySection chartFamily="general" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
