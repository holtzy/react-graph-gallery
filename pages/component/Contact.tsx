import React from "react";
import Link from "next/link";
import { Button, LinkAsButton } from "./LinkAsButton";

// Component for the Contact & Edit section at the bottom of each page.
// If a pageSlug prop is provided, a link to the according github page will be provided.

type ContactProps = {
  pageSlug?: string;
};

export default function Contact({ pageSlug }: ContactProps) {
  const editPageUrl =
    "https://github.com/holtzy/react-graph-gallery/blob/master/src/notebooks/" +
    pageSlug +
    ".ipynb";

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 full-bleed py-24">
      <h2 className="uppercase text-xl text-center max-w-md">Contact</h2>

      <p className="max-w-xl text-center">
        👋 This document is a work by{" "}
        <a href="https://www.yan-holtz.com">Yan Holtz</a>. Any feedback is
        highly encouraged. You can{" "}
        <a href="https://github.com/holtzy/The-React-Graph-Gallery/issues">
          fill an issue
        </a>{" "}
        on Github, drop me a message on
        <a href="https://twitter.com/r_graph_gallery?lang=en">Twitter</a>, or
        send an email pasting <code>yan.holtz.data</code> with{" "}
        <code>gmail.com</code>.
      </p>

      <div className={"py-7"}>
        <LinkAsButton href={"/graph/violin-plot"}>Violin</LinkAsButton>
        <LinkAsButton href="https://github.com/holtzy/react-graph-gallery">
          Github
        </LinkAsButton>
        <LinkAsButton href="https://twitter.com/R_Graph_Gallery" isFilled>
          Twitter
        </LinkAsButton>
        {pageSlug && <LinkAsButton href={editPageUrl}>EDIT</LinkAsButton>}
      </div>
    </div>
  );
}
