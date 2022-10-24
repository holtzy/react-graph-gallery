import React from "react";
import { LinkAsButton } from "./LinkAsButton";
import { SubscribeForm } from "./SubscribeForm";

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
        👋 Hey I'm <a href="https://www.yan-holtz.com">Yan</a> and I'm currently
        working on this project!
        <br />
        <br />
        Feedback is welcome ❤️. You can{" "}
        <a href="https://github.com/holtzy/react-graph-gallery/issues">
          fill an issue
        </a>{" "}
        on Github, drop me a message on{" "}
        <a href="https://twitter.com/r_graph_gallery?lang=en">Twitter</a>, or
        even send me an email pasting <code>yan.holtz.data</code> with{" "}
        <code>gmail.com</code>. Last but not least, <b>subscribe below</b> to
        know when I publish more content!
      </p>

      <div className={"py-7"}>
        <SubscribeForm />
      </div>
    </div>
  );
}
