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

      <div id="revue-embed">
        <form
          action="https://www.getrevue.co/profile/r_graph_gallery/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="revue-form-group">
            <label for="member_email">Email address</label>
            <input
              className="revue-form-field"
              placeholder="Your email address..."
              type="email"
              name="member[email]"
              id="member_email"
            ></input>
          </div>
          <div className="revue-form-group">
            <label for="member_first_name">
              First name <span className="optional">(Optional)</span>
            </label>
            <input
              className="revue-form-field"
              placeholder="First name... (Optional)"
              type="text"
              name="member[first_name]"
              id="member_first_name"
            ></input>
          </div>
          <div className="revue-form-group">
            <label for="member_last_name">
              Last name <span className="optional">(Optional)</span>
            </label>
            <input
              className="revue-form-field"
              placeholder="Last name... (Optional)"
              type="text"
              name="member[last_name]"
              id="member_last_name"
            ></input>
          </div>
          <div className="revue-form-actions">
            <input
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
            ></input>
          </div>
          <div className="revue-form-footer">
            By subscribing, you agree with Revue’s{" "}
            <a target="_blank" href="https://www.getrevue.co/terms">
              Terms of Service
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://www.getrevue.co/privacy">
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>

      <Contact />
    </Layout>
  );
}
