import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import { SubscribeForm } from "../component/SubscribeForm";

const graphDescription = (
  <p>
    The <a href="https://www.react-graph-gallery.com">react graph gallery</a> is
    a project that just started! If you want to know when a new section gets
    released, follow me on{" "}
    <a href="https://twitter.com/R_Graph_Gallery">twitter</a> or subscibe below!
  </p>
);

export default function Home() {
  return (
    <Layout
      title="Subscribe"
      seoDescription="How to build an area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Want more graph examples?"
        description={graphDescription}
      />

      <SubscribeForm />

      <p className="mb-8 mt-24">
        You will receive my <b>dataviz related content only</b> and can
        unsubscribe at any time.
      </p>
      <Contact />
    </Layout>
  );
}
