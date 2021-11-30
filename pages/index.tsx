import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import SectionLogo from "../component/SectionLogo";
import Link from "next/link";

const siteDescription = (
  <p>
    <a href="https://reactjs.org">React</a> manipulates the DOM. So does{" "}
    <a href="https://www.d3-graph-gallery.com">D3.js</a>. It's hard to make them
    work together. This website is a set of chart examples where d3 is used to
    compute the viz layout, and React is used for the rendering.
  </p>
);

export default function Home() {
  return (
    <Layout
      title="React Graph Gallery"
      seoDescription="The React Graph Gallery displays hundreds of charts made with React, always with explanation and reproduciible code"
    >
      <TitleAndDescription
        title="The React Graph Gallery"
        description={siteDescription}
      />

      <blockquote>
        The React Graph Gallery project just started. It is massively work in
        progress, following some requests of the{" "}
        <a href="https://www.d3-graph-gallery.com">d3-graph-gallery</a> users.
        Please consider it as my personal notes.
      </blockquote>
      <div className="mb-20">
        <ChartFamilySection chartFamily="distribution" />
        <ChartFamilySection chartFamily="correlation" />
        <ChartFamilySection chartFamily="ranking" />
        <ChartFamilySection chartFamily="partOfAWhole" />
        <ChartFamilySection chartFamily="evolution" />
        <ChartFamilySection chartFamily="map" />
        <ChartFamilySection chartFamily="flow" />
        <ChartFamilySection chartFamily="general" />
      </div>

      <Contact />
    </Layout>
  );
}
