import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { WordcloudBasicDemo } from "../viz/WordcloudBasic/WordCloudBasic";
import Link from "next/link";

const graphDescription = (
  <>
    <p>
      This page explains how to build a{" "}
      <a href="https://www.data-to-viz.com/graph/wordcloud.html">wordcloud</a>{" "}
      using <code>react</code> and <code>d3.js</code>. It uses the{" "}
      <a href="https://github.com/jasondavies/d3-cloud">d3-cloud</a> plugin to
      compute the position of each word, and render them with react.
    </p>
    <p>
      This section is rather short as{" "}
      <a href="https://www.data-to-viz.com/graph/wordcloud.html">
        I'm not a big fan
      </a>{" "}
      of wordclouds. They can be quite misleading and you should consider
      building a <Link href="/barplot">barplot</Link> or a{" "}
      <Link href="/lollipop-plot">lollipop plot</Link> instead.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout
      title="Wordcloud with React"
      seoDescription="How to build a wordcloud with React and D3.js. A set of re-usable components"
    >
      <TitleAndDescription
        title="Wordcloud"
        description={graphDescription}
        chartType="wordcloud"
      />
      <blockquote>
        This page uses the{" "}
        <a href="https://github.com/jasondavies/d3-cloud">d3-cloud</a> plugin
        that you can install in your project with{" "}
        <code>npm install d3-cloud</code>
      </blockquote>
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">The Data</h2>
      <p>
        The data is an <b>array</b>. Each item is an object describing a word.
        Its <code>name</code> is provided, together with a related{" "}
        <code>value</code> that will be used to size the word on the final
        figure.
      </p>
      <p>
        Note that you can add <b>any additional property</b> here, like a color,
        a font weight or anything else that you want to use to draw the word
        later on.
      </p>
      <CodeBlock code={snippetData} />
      {/*
      //
      // Basic
      //
      */}
      <h2 id="basic">Most basic wordcloud with React and D3.js</h2>
      <p>
        Everything starts by instantiating a wordcloud layout using the
        <code>d3Cloud()</code> function of the{" "}
        <a href="https://github.com/jasondavies/d3-cloud">d3-cloud</a> library.
      </p>
      <CodeBlock code={snippetLayout} />
      <p>
        This layout can then be called from a useEffect using{" "}
        <code>layout.start()</code>. The layout algorithm will loop through each
        word of the dataset and try to place them on the chart, avoiding
        overlaps with other words.
      </p>
      <p>
        Once the loop is over, the layout algorithm will produce a{" "}
        <code>words</code> object and provide it to the <code>end()</code>{" "}
        function. This function update a state that stores the position and
        feature of each word.
      </p>
      <p>
        It is thus possible to map through those word features and draw them
        using html, svg or canvas. Here is an example using HTML
      </p>
      <br />
      <ChartOrSandbox
        VizComponent={WordcloudBasicDemo}
        vizName={"WordcloudBasic"}
        maxWidth={600}
        height={500}
        caption={"Most basic Wordcloud made with react and d3.js"}
      />
      <blockquote>
        <b>Todo</b>: write better explanation
      </blockquote>
      <div className="mt-4" />
      <blockquote>
        <b>Todo</b>: the layout algorithm currently provides unperfect values,
        resulting in a lot of word overlaps. Please tell me if you find where
        the bug is.
      </blockquote>
      {/*
      //
      // Warning
      //
      */}
      <h2 id="warning">Warning</h2>
      <p>
        Wordclouds are useful for quickly perceiving the most prominent terms.
        They are widely used in media and well understood by the public.
        However, they are criticized for 2 main reasons:
      </p>
      <ul>
        <li>
          Area is a poor metaphor of a numeric value, it is hardly perceive by
          the human eye
        </li>
        <li>Longer words appear bigger by construction</li>
      </ul>
      <p>
        To put it in a nutshell, wordclouds must be avoided. You can read more
        about that in{" "}
        <a href="https://www.data-to-viz.com/graph/wordcloud.html">
          data-to-viz
        </a>
        . Why not consider a <Link href="/lollipop-plot">lollipop plot</Link> or a{" "}
        <Link href="/barplot">barplot</Link> instead?
      </p>
      <div className="full-bleed border-t h-0 bg-gray-100 my-3 mt-28" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetData = `
const data = [
  { text: "hello", value: 12 },
  { text: "world", value: 2 },
];
`.trim();

const snippetLayout = `
const layout = d3Cloud()
  .words(data)
  .size([width, height])
  .fontSize((d) => fontSizeScale(d.value))
  .padding(10)
  .on("end", (words) => {
    setWordsPosition(words);
  });
`.trim();
