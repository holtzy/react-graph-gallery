import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";

const graphDescription = <p>Why did I build this?</p>;

export default function Home() {
  return (
    <Layout
      title="Subscribe"
      seoDescription="How to build an area chart with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription title="Subscribe" description={graphDescription} />

      <h2>WHy</h2>
      <p>This is why</p>

      <div id={"formID"} className=" inline-block" />
      <div id="revue-embed">
        <form
          action="http://newsletter.victordibia.com/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="revue-form-group">
            <input
              placeholder="email@example.com"
              type="email"
              name="member[email]"
              id="member_email"
            ></input>
          </div>

          <div className="revue-form-actions">
            <button
              type="submit"
              onClick={"subscribeClick"}
              name="member[subscribe]"
              id="member_submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <Contact />
    </Layout>
  );
}
