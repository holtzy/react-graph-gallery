import React from "react";
import { SubscribeForm } from "./SubscribeForm";
import Link from "next/link";

// Component for the Contact & Edit section at the bottom of each page.

export default function Contact() {
  return (
    <div className="grey-section full-bleed py-24 flex flex-row justify-center  ">
      <div className="max-w-xl flex flex-col justify-center items-center px-4">
        <h2 className="uppercase text-xl text-center">Contact</h2>

        <p className="text-center">
          👋 Hey, I'm <a href="https://www.yan-holtz.com">Yan</a> and I'm
          currently working on this project!
          <br />
          <br />
          Feedback is welcome ❤️. You can{" "}
          <a href="https://github.com/holtzy/react-graph-gallery/issues">
            fill an issue
          </a>{" "}
          on Github, drop me a message on{" "}
          <a href="https://twitter.com/r_graph_gallery?lang=en">Twitter</a>, or
          even send me an email pasting <code>yan.holtz.data</code> with{" "}
          <code>gmail.com</code>. You can also <Link href='/subscribe'>subscribe</Link> to
          the newsletter to know when I publish more content!
        </p>
      </div>
    </div>
  );
}
