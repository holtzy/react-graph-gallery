import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import { TypingAnimation } from "../component/TypingAnimation";
import { Test } from "../viz/Test";

export default function Home() {
  return (
    <Layout
      title="The React Graph Gallery | Build unique charts on the web"
      seoDescription="Based on hundreds of graph examples, the react graph gallery guides you through the basic concepts of data visualization with React and D3.js. It also provides ready-to-use templates to get started in minutes."
    >
      <div className="full-bleed  relative">
        <div className="wrapper">
          <div className="h-full">
            <Test />
          </div>
          <div className="absolute wrapper">
            <TitleAndDescription
              title={
                <span>
                  Build <TypingAnimation /> charts for the web
                </span>
              }
              description={
                <>
                  <p>
                    Have you ever wanted to create your <b>own chart</b>?
                  </p>
                  <p style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}>
                    Based on <del>hundreds</del> (not yet) of graph examples,
                    this gallery guides you through the basic concepts of{" "}
                    <b>data visualization</b> with{" "}
                    <a href="https://reactjs.org">React</a> and{" "}
                    <a href="https://www.d3-graph-gallery.com">D3.js</a>. It
                    also provides ready-to-use <b>templates</b> to get started
                    quicker.
                  </p>
                  <p style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}>
                    Stop using pre-made dataviz components and{" "}
                    <b>imagination</b> will become the only boundary to your{" "}
                    <b>creativity</b>.
                  </p>
                  <p style={{ backgroundColor: "rgba(255,255,255, 0.6)" }}>
                    The gallery is organized by chart types following the{" "}
                    <a href="https://www.data-to-viz.com">data-to-viz</a>{" "}
                    classification. What kind of graph are you interested in?
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <ChartFamilySection chartFamily="distribution" />
        <ChartFamilySection chartFamily="correlation" />
        <ChartFamilySection chartFamily="ranking" />
        <ChartFamilySection chartFamily="partOfAWhole" />
        <ChartFamilySection chartFamily="evolution" />
        <ChartFamilySection chartFamily="map" />
        <ChartFamilySection chartFamily="flow" />
        <ChartFamilySection chartFamily="general" />
      </div>

      <Contact />
    </Layout>
  );
}
