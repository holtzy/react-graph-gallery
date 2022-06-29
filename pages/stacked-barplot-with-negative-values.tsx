import React, { useEffect, useRef } from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { Caption } from "../component/Caption";
import CodeSandboxButton from "../component/CodeSandboxButton";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import Link from "next/link";

import { StackedBarplot } from "../viz/BarplotStackedBasic/StackedBarplot";
import { data } from "../viz/BarplotStackedBasic/data";

import { StackedBarplot as StackedBarplotDiverging } from "../viz/BarplotStackedNegativeDiverging/StackedBarplot";
import { data as dataDiverging } from "../viz/BarplotStackedNegativeDiverging/data";

import { StackedBarplot as StackedBarplotOverlapping } from "../viz/BarplotStackedNegativeOverlapping/StackedBarplot";
import { data as dataOverlapping } from "../viz/BarplotStackedNegativeOverlapping/data";

const graphDescription = (
  <p>
    Drawing a{" "}
    <a href="https://www.data-to-viz.com/graph/barplot.html">stacked barplot</a>{" "}
    sounds like pretty basic task for somebody into dataviz. But it gets
    surprisingly tricky once the dataset includes <b>negative values</b>. This
    post explains how to deal with it, suggesting several options coming
    together with some reproducible code examples.
  </p>
);

const snippet1 = `
<canvas style="width:200px; height:200px;" width="100px" height="100px">
`.trim();

const snippet2 = `
<canvas style="width:300px; height:300px;" width="100px" height="100px">
`.trim();

const snippet3 = `
<canvas style="width:100px; height:100px;" width="200px" height="200px">
`.trim();

const snippet4 = `
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();

export default function Post() {
  return (
    <Layout
      title="Dealing with negative values on a stacked barplot"
      seoDescription="How to deal with negative values on stacked barplot. A post describing the pros and cons of the 2 main options, together with some examples with d3.js code."
    >
      <TitleAndDescription
        title="Dealing with negative values on a stacked barplot"
        description={graphDescription}
      />

      {/*
      *
      Part 1: basic stacked barplot
      *
      */}
      <AccordionSection
        title={"🍔 Easy life: stacked barplot with positive values"}
        startOpen={true}
      >
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
          <div className="col-span-4">
            <p>
              Let's consider a company that has 3 employees: <code>a</code>,{" "}
              <code>b</code> and <code>c</code>. Each month those employees sell
              umbrellas and make money.
            </p>
            <p>
              In January, they made 1, 1 and 2 dollars respectively. It's pretty
              easy to represent those sales as a stacked barplot!
            </p>
            <p>
              There is even a bonus! The total height of those bars is 4. So is
              the value of the stack on the Y axis. We now know what's the total
              revenue of the company 🎉!
            </p>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center">
            <img src="/img/stacked-barplot-explanation-1.png" />
            <Caption>Stacking positive values is straightforward</Caption>
          </div>
        </div>

        <br />

        <p>
          Now let's follow the same process for the 12 months of the year. That
          makes a stacked area barplot built with <code>react</code> and{" "}
          <code>d3.js</code>. If you need explanations for the code, please
          refer to the{" "}
          <a href="https://d3-graph-gallery.com/graph/barplot_stacked_basicWide.html">
            d3.js gallery
          </a>{" "}
          or to the <Link href="barplot">barplot section</Link> of the react
          gallery.
        </p>

        <br />

        <ChartOrSandbox
          vizName={"StackedAreaChartBasic"}
          height={400}
          render={(dim) => (
            <StackedBarplot data={data} width={dim.width} height={dim.height} />
          )}
        />

        <br />

        <p>
          That's the end of the easy part. Now, let's say that sometimes
          employees spend more money than what they make. We now have some
          negative values in the dataset 😳. How can we deal with it?
        </p>
      </AccordionSection>

      {/*
      *
      Part 2: Negative values, diverging strategy
      *
      */}
      <AccordionSection
        title={
          "1️⃣ Stacked barplot with negative values: the diverging strategy"
        }
        startOpen={true}
      >
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
          <div className="col-span-4">
            <p>
              We are in January but this time, employee <code>A</code> lost 1$!
              😥
            </p>
            <p>
              To represent this on the stack, we can add all the positive values
              on top of the chart, and all the negative ones below the 0 axis.
            </p>
            <p>
              It is still very easy to see how much each employee made in a
              glimpse!
            </p>
            <p>
              However, it is now <b>impossible</b> to know what's the company
              revenue! Indeed, the total height of the bars is <code>4</code>,
              the value on the y axis is <code>3</code>, but the real revenue is
              1 + 2 - 1 = <code>2</code>!
            </p>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center">
            <img src="/img/stacked-barplot-explanation-2.png" />
            <Caption>
              Stacking with negative values with all negative values below the 0
              axis
            </Caption>
          </div>
        </div>

        <br />

        <p>
          Using almost the same code we can build the stacked barplot including
          those negative values. Note that when stacking the data with the{" "}
          <code>stack()</code> function of d3, the specific{" "}
          <code>stackOffsetDiverging</code> offset parameter must be passed,
          handling all the work for us (
          <a href="https://github.com/d3/d3-shape#stack-offsets">doc</a>).
        </p>

        <br />

        <ChartOrSandbox
          vizName={"StackedBarplotOverlapping"}
          height={400}
          render={(dim) => (
            <StackedBarplotDiverging
              data={dataDiverging}
              width={dim.width}
              height={dim.height}
            />
          )}
        />

        <br />

        <p>Let's recap the pros and cons of this diverging option:</p>
        <div className="">
          <div>
            <p className="px-2 bg-green-400 rounded-md text-white w-16 text-md">
              Pros
            </p>
            <ul>
              <li>Easy to read the value of each item</li>
              <li>Obvious what's negative and what's positive</li>
            </ul>
          </div>
          <br />
          <div>
            <p className="px-2 bg-red-400 rounded-md text-white w-16 text-md">
              Cons
            </p>
            <ul>
              <li>Impossible to know the total value of each stack</li>
              <li>
                A series can jump from the bottom to the top of the chart and is
                thus hard to follow
              </li>
            </ul>
          </div>
        </div>
      </AccordionSection>

      {/*
      *
      Part 3: Negative values, overlap strategy
      *
      */}
      <AccordionSection
        title={
          "2️⃣ Stacked barplot with negative values: the overlapping strategy"
        }
        startOpen={true}
      >
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
          <div className="col-span-4">
            <p>d</p>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center">
            <img src="/img/stacked-barplot-explanation-3.png" />
            <Caption>
              Stacking with negative values with all negative values below the 0
              axis
            </Caption>
          </div>
        </div>

        <br />

        <p>
          Using almost the same code we can build the stacked barplot including
          those negative values. Note that when stacking the data with the{" "}
          <code>stack()</code> function of d3, the specific{" "}
          <code>stackOffsetDiverging</code> offset parameter must be passed,
          handling all the work for us (
          <a href="https://github.com/d3/d3-shape#stack-offsets">doc</a>).
        </p>

        <br />

        <ChartOrSandbox
          vizName={"StackedBarplotOverlapping"}
          height={400}
          render={(dim) => (
            <StackedBarplotOverlapping
              data={dataOverlapping}
              width={dim.width}
              height={dim.height}
            />
          )}
        />

        <br />

        <p>Let's recap the pros and cons of this diverging option:</p>
        <div className="">
          <div>
            <p className="px-2 bg-green-400 rounded-md text-white w-16 text-md">
              Pros
            </p>
            <ul>
              <li>Easy to read the value of each item</li>
              <li>Obvious what's negative and what's positive</li>
            </ul>
          </div>
          <br />
          <div>
            <p className="px-2 bg-red-400 rounded-md text-white w-16 text-md">
              Cons
            </p>
            <ul>
              <li>Impossible to know the total value of each stack</li>
              <li>
                A series can jump from the bottom to the top of the chart and is
                thus hard to follow
              </li>
            </ul>
          </div>
        </div>
      </AccordionSection>

      <br />
      <br />
      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
