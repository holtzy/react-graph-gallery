import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";

const graphDescription = <p>Why did I build this?</p>;

export default function Home() {
  return (
    <Layout
      title="About the gallery"
      seoDescription="How to build an area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="About the gallery"
        description={graphDescription}
      />

      <h2>WHy</h2>
      <p>This is why</p>

      <Contact />
    </Layout>
  );
}
