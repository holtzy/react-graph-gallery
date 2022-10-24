import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";

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

      <div id="revue-embed">
        <form
          action="https://www.getrevue.co/profile/r_graph_gallery/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
          className="flex"
        >
          <div className="relative w-60">
            <input
              className="border-b-4 mr-8 py-2 px-4 w-full m-1"
              placeholder="email"
              type="email"
              name="member[email]"
              id="member_email"
            ></input>
          </div>

          <div>
            <input
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
              className="text-md ml-6 py-2 px-4 bg-reactGallery hover:bg-reactGallery text-white rounded m-1 cursor-pointer border-reactGallery border"
            ></input>
          </div>
        </form>
      </div>

      <p className="mb-8 mt-24">
        You will receive my <b>dataviz related content only</b> and can
        unsubscribe at any time.
      </p>
      <Contact />
    </Layout>
  );
}
