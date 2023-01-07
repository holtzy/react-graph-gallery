import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { ImageGrid } from "component/UI/ImageGrid";
import { GraphLinkImage } from "component/UI/GraphLinkImage";
import { graphExampleList } from "util/graphExampleList";
import Link from "next/link";

const graphDescription = (
  <>
    <p>
      The <Link href="/">react graph gallery</Link> displays hundreds of graphs
      made with React, often with the help of{" "}
      <a href="https://www.d3-grapg-gallery.com">d3.js</a>. This page provides
      an overview of all charts showcased in this gallery.
    </p>
    <p>
      Note that all chart types are presented on the{" "}
      <Link href="/">welcome page</Link> of the gallery. It is probably a more
      convenient way to browse this website if you know what you are looking
      for!
    </p>
  </>
);

export default function Home() {
  const allImages = graphExampleList.map((example, i) => (
    <GraphLinkImage
      key={i}
      link={example.link}
      title={example.title}
      description={<p>{example.description}</p>}
      img={example.img}
      alt={example.alt}
    />
  ));

  return (
    <Layout
      title="All graphs"
      seoDescription="An overview of all the charts displayed in the react graph gallery, ready to be added in your web application."
    >
      <TitleAndDescription
        title="All graphs"
        description={graphDescription}
        chartType="all"
      />

      <ImageGrid>{allImages}</ImageGrid>

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="correlation" />
      <div className="mt-20" />
    </Layout>
  );
}
