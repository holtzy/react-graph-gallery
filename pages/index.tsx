import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import ChartFamilySection from "../component/ChartFamilySection";
import Contact from "../component/Contact";
import SectionLogo from "../component/SectionLogo";
import Link from "next/link";
import { TypingAnimation } from "../component/TypingAnimation";
import { ParticlesBg } from "../component/Particles";
import { HeadSeo } from "../component/HeadSeo";
import { HorizontalSeparator } from "../component/UI/HorizontalSeparator";
import Navbar from "../component/Navbar";

export default function Home() {
  return (
    <div>
      <HeadSeo
        title={"The React Graph Gallery"}
        seoDescription={
          "The React Graph Gallery displays hundreds of charts made with React, always with explanation and reproduciible code"
        }
      />

      <div className="relative " style={{ height: 720 }}>
        <div className="absolute top-0 bottom-0 left-0 right-0 ">
          <ParticlesBg />
        </div>

        <div className="wrapper absolute top-0 left-0">
          <Navbar />

          {/* Title */}
          <h1 className="mt-14">
            Build <TypingAnimation /> charts for the web
          </h1>

          {/* Horizontal Separator */}
          <HorizontalSeparator />

          {/* Description */}
          <div className="max-w-xxl  py-2">
            <>
              <p>
                Have you ever wanted to create your <b>own chart</b>?
              </p>
              <p>
                Based on <del>hundreds</del> (not yet) of graph examples, this
                gallery guides you through the basic concepts of{" "}
                <b>data visualization</b> with{" "}
                <a href="https://reactjs.org">React</a> and{" "}
                <a href="https://www.d3-graph-gallery.com">D3.js</a>. It also
                provides ready-to-use <b>templates</b> to get started quicker.
              </p>
              <p>
                Stop using pre-made dataviz components &rarr; <b>imagination</b>{" "}
                will become the only boundary to your <b>creativity</b>.
              </p>
              <p className="mt-8">
                The gallery is organized by chart types following the{" "}
                <a href="https://www.data-to-viz.com">data-to-viz</a>{" "}
                classification. &darr;
              </p>
            </>
          </div>
        </div>
      </div>

      <div className="wrapper">
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
      </div>
      <Contact />
    </div>
  );
}
