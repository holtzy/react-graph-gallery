import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { LineChart } from '@/viz/LineChartDesignImprovement/LineChart';
import { addQuarterlyNoise, data } from '@/viz/LineChartDesignImprovement/data';
import { Switch } from '@/component/UI/switch';
import { Label } from '@/component/UI/label';
import { Button } from '@/component/UI/button';
import { cn } from '@/util/utils';
import Link from 'next/link';

const graphDescription = (
  <>
    <p>
      I teach data visualization with{' '}
      <a href="https://www.ggplot2-uncharted.com">R</a> and{' '}
      <a href="https://www.matplotlib-journey.com">Python</a>, which means I
      review hundreds of charts from talented students. The same issues come up{' '}
      <b>again and again</b>.
    </p>
    <p>
      This page takes a chart with a solid message and improves it step by step.
      It is a practical way to revisit the most common pitfalls and see the
      impact of each fix.
    </p>
  </>
);

export default function Home() {
  const [hasSpine, setHasSpine] = useState(true);
  const [hasLegend, setHasLegend] = useState(true);
  const [hasHighlight, setHasHighlight] = useState(false);
  const [hasGrid, setHasGrid] = useState(true);
  const [hasGoodYAxis, setHasGoodYAxis] = useState(false);
  const [hasGoodXAxis, setHasGoodXAxis] = useState(false);
  const [isLabelOverlapFixed, setIsLabelOverlapFixed] = useState(false);
  const [hasGoodAuthorLabel, setHasGoodAuthorLabel] = useState(false);
  const [hasGoodTitleWording, setHasGoodTitleWording] = useState(false);
  const [hasGoodTitleAlignment, setHasGoodTitleAlignment] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);

  const [activeSection, setActiveSection] = useState<number>(1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(Number(entry.target.id));
          }
        });
      },
      { root: null, threshold: 0.1, rootMargin: '-40% 0px -40% 0px' }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleImprove = async () => {
    setHasSpine(true);
    setHasLegend(true);
    setHasHighlight(false);
    setHasGrid(true);
    setHasGoodYAxis(false);
    setHasGoodXAxis(false);

    await wait(1500);
    setHasSpine(false);

    await wait(1500);
    setHasLegend(false);

    await wait(1500);
    setHasHighlight(true);

    await wait(1500);
    setHasGrid(false);

    await wait(1500);
    setHasGoodYAxis(true);

    await wait(1500);
    setHasGoodXAxis(true);

    await wait(1500);
    setHasGoodAuthorLabel(true);

    await wait(1500);
    setHasGoodTitleWording(true);

    await wait(1500);
    setHasGoodTitleAlignment(true);

    await wait(1500);
    setHasBackground(true);

    await wait(1500);
    setIsLabelOverlapFixed(true);

    await wait(1500);
    setHasHighlight(true);
  };

  const handleReset = async () => {
    setHasSpine(true);
    setHasLegend(true);
    setHasHighlight(false);
    setHasGrid(true);
    setHasGoodYAxis(false);
    setHasGoodXAxis(false);
    setIsLabelOverlapFixed(false);
    setHasGoodAuthorLabel(false);
    setHasGoodTitleWording(false);
    setHasGoodTitleAlignment(false);
    setHasBackground(false);
  };

  const handleGoToEnd = async () => {
    setHasSpine(!true);
    setHasLegend(!true);
    setHasHighlight(!false);
    setHasGrid(!true);
    setHasGoodYAxis(!false);
    setHasGoodXAxis(!false);
    setIsLabelOverlapFixed(!false);
    setHasGoodAuthorLabel(!false);
    setHasGoodTitleWording(!false);
    setHasGoodTitleAlignment(!false);
    setHasBackground(!false);
  };

  return (
    <Layout
      title="Line chart revamp."
      seoDescription="Learn how to make charts look professional with simple design improvements. Toggle common visualization mistakes, see their impact instantly, and master clearer, more effective data storytelling."
    >
      <TitleAndDescription
        title="Line Chart Remake"
        description={graphDescription}
        chartType="line"
      />

      <h2 id="intro">📍 Original Chart and Code</h2>
      <p>
        Reddit hosts an active channel called <code>relationship_advice</code>{' '}
        where people share their relationship struggles to get guidance.
        Recently, <code>@GeorgeDaGreat123</code> used AI to analyze fifteen
        years of comments from this wild corner of the platform.
      </p>
      <p>
        It sparked plenty of{' '}
        <a
          href="https://www.reddit.com/r/dataisbeautiful/comments/1o87cy4/oc_i_analyzed_15_years_of_comments_on/"
          target="_blank"
        >
          debate
        </a>
        , but that is not the focus here. Instead, let's take a look at the
        original chart that's been published:
      </p>

      <div className="full-bleed flex justify-center mx-2">
        <div className="grid grid-cols-12 gap-14" style={{ maxWidth: 1100 }}>
          <div className="col-span-5 inline-block px-8">
            <div className="h-20" />

            <Step
              index={0}
              active={activeSection === 0}
              sectionRefs={sectionRefs}
            >
              <p>
                Everything starts with a pretty classic{' '}
                <Link href="/line-chart">line chart</Link>. Each line shows the
                proportion of a group of comments.
              </p>
              <p>
                The comments advising the break up the relationships are in red,
                the ones advising to communicate better in blue and so on.
              </p>
              <p>
                From the graph style, I'm pretty sure it's been made using
                Python and{' '}
                <a href="https://www.matplotlib-journey.com">Matplotlib</a>.
              </p>
            </Step>

            <Step
              index={1}
              active={activeSection === 1}
              sectionRefs={sectionRefs}
            >
              <p>
                My first step was to reproduce this graph using React and{' '}
                <Link href="/">D3.js</Link>.
              </p>
              <p>
                Not easy, as the underlying data is not available anywhere. In a
                perfect world everything would be hosted on Github together with
                the code but hey 🤷‍♂️
              </p>
              <p>
                So I gave the chart to a LLM to extract approximate data. The
                result is quite close isn't it?
              </p>
              <p>Now the fun starts.</p>
            </Step>

            <Step
              index={2}
              active={activeSection === 2}
              sectionRefs={sectionRefs}
            >
              <p>
                The legend made readers constantly jump back and forth to
                interpret the lines.
              </p>
              <p>
                This adds unnecessary <b>cognitive load</b>. If the story isn’t
                immediately clear, people will give up.
              </p>
              <p>Direct labeling solves this!</p>
            </Step>

            <Step
              index={3}
              active={activeSection === 3}
              sectionRefs={sectionRefs}
            >
              <p>A simple yet powerful improvement: removing the spine.</p>
              <p>
                The spine—the surrounding box—adds clutter without conveying any
                information.
              </p>
              <p>
                Surprisingly, many viz libraries add it by default. Now our
                chart has some breathing room, doesn’t it?
              </p>
            </Step>

            <Step
              index={4}
              active={activeSection === 4}
              sectionRefs={sectionRefs}
            >
              <p>I’m not a big fan of dense grid lines.</p>
              <p>
                In our decluttering mission, removing the horizontal ones is an
                easy win.
              </p>
            </Step>

            <Step
              index={5}
              active={activeSection === 5}
              sectionRefs={sectionRefs}
            >
              <p>Time to improve the Y axis!</p>
              <p>
                The axis title isn’t really needed. By simply adding a % next to
                the numbers, the chart becomes clearer and less cluttered.
              </p>
              <p>
                Same principle applies: use less ink to convey the same
                information.
              </p>
            </Step>

            <Step
              index={6}
              active={activeSection === 6}
              sectionRefs={sectionRefs}
            >
              <p>
                Now it’s clear the X axis could use some improvement. The number{' '}
                <code>20</code> appeared repeatedly: let’s show only what
                matters instead.
              </p>
              <p>
                It’s also obvious that these are years, so the axis title isn’t
                really necessary.
              </p>
            </Step>

            <Step
              index={7}
              active={activeSection === 7}
              sectionRefs={sectionRefs}
            >
              <p>
                The author label in the top right was distracting, competing
                with the most interesting part of the chart: the spike in the
                "end relationship" line.
              </p>
              <p>
                Let’s move it to a <b>caption</b> instead and give it some
                subtle formatting.
              </p>
            </Step>

            <Step
              index={8}
              active={activeSection === 8}
              sectionRefs={sectionRefs}
            >
              <p>The title and subtitle aren’t doing their job.</p>
              <p>
                They describe instead of <b>telling a story</b>. Your reader is
                in a hurry and wants to grasp the point instantly. You want them
                hooked.
              </p>
              <p>
                Let’s reword them to make people stop scrolling while still
                clearly showing what the graph reveals.
              </p>
            </Step>

            <Step
              index={9}
              active={activeSection === 9}
              sectionRefs={sectionRefs}
            >
              <p>Some design golden rules:</p>
              <ul>
                <li>everything should be aligned with something</li>
                <li>Use a clear hierarchy of information</li>
              </ul>
              <p>
                That's an easy fix but that makes the chart look more
                professional.
              </p>
            </Step>

            <Step
              index={10}
              active={activeSection === 10}
              sectionRefs={sectionRefs}
            >
              <p>
                Let’s give the chart some breathing room, along with a subtle
                background to make it stand out a bit more.
              </p>
            </Step>

            <Step
              index={11}
              active={activeSection === 11}
              sectionRefs={sectionRefs}
            >
              <p>
                Let’s slightly nudge the line labels—they’re currently
                overlapping.
              </p>
              <p>
                This is a very common struggle and can be surprisingly
                time-consuming. Clever helper libraries can solve it, but that’s
                not today’s topic 🙂
              </p>
            </Step>

            <Step
              index={12}
              active={activeSection === 12}
              sectionRefs={sectionRefs}
            >
              <p>
                There are quite a few lines on this chart, but not all of them
                matter equally for the story.
              </p>
              <p>
                Once again, let’s guide the time-pressed reader toward what
                matters most.
              </p>
              <p>
                By slightly reducing the opacity of all but two lines, the main
                message becomes clear: people increasingly advise breakups,
                while communication is suggested less often.
              </p>
            </Step>
          </div>

          <div className="col-span-7 relative">
            <div className="sticky top-40 flex justify-center mt-40">
              {activeSection === 0 ? (
                <img
                  src={`/img/reddit-comments-line-chart.webp`}
                  className="w-full h-auto object-contain"
                  alt=""
                />
              ) : (
                <LineChart
                  data={addQuarterlyNoise(data, 1)}
                  width={640}
                  height={600}
                  hasLegend={activeSection > 1 ? false : true}
                  hasSpine={activeSection > 2 ? false : true}
                  hasGrid={activeSection > 3 ? false : true}
                  hasGoodYAxis={activeSection > 4 ? true : false}
                  hasGoodXAxis={activeSection > 5 ? true : false}
                  hasGoodAuthorLabel={activeSection > 6 ? true : false}
                  hasGoodTitleWording={activeSection > 7 ? true : false}
                  hasGoodTitleAlignment={activeSection > 8 ? true : false}
                  hasBackground={activeSection > 9 ? true : false}
                  isLabelOverlapFixed={activeSection > 10 ? true : false}
                  hasHighlight={activeSection > 11 ? true : false}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <h2 id="plot">🎮 Your turn</h2>
      <p>
        Do you ever make a chart that doesn’t feel professional, but you can’t
        quite say why?
      </p>
      <p>That’s a very common feeling.</p>
      <p>
        Try playing with the options below to see their effect one by one.
        Hopefully, you’ll keep them in mind the next time you run into design
        issues.
      </p>

      <div className="grid grid-cols-3 gap-x-6 gap-y-2 mt-12">
        <div className="flex items-center space-x-2">
          <Switch
            id="spine"
            checked={!hasSpine}
            onCheckedChange={(value) => setHasSpine(!value)}
          />
          <Label htmlFor="spine" className="font-normal">
            Remove spine
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="legend"
            checked={!hasLegend}
            onCheckedChange={(value) => setHasLegend(!value)}
          />
          <Label htmlFor="legend" className="font-normal">
            Direct labeling
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="highlight"
            checked={hasHighlight}
            onCheckedChange={(value) => setHasHighlight(value)}
          />
          <Label htmlFor="highlight" className="font-normal">
            Highlight
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="caption"
            checked={hasGoodAuthorLabel}
            onCheckedChange={(value) => setHasGoodAuthorLabel(value)}
          />
          <Label htmlFor="spine" className="font-normal">
            Author in caption
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="grid"
            checked={!hasGrid}
            onCheckedChange={(value) => setHasGrid(!value)}
          />
          <Label htmlFor="grid" className="font-normal">
            Remove X Grid
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="betterY"
            checked={hasGoodYAxis}
            onCheckedChange={(value) => setHasGoodYAxis(value)}
          />
          <Label htmlFor="betterY" className="font-normal">
            Better Y axis
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="betterX"
            checked={hasGoodXAxis}
            onCheckedChange={(value) => setHasGoodXAxis(value)}
          />
          <Label htmlFor="betterX" className="font-normal">
            Better X axis
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="titleWording"
            checked={hasGoodTitleWording}
            onCheckedChange={(value) => setHasGoodTitleWording(value)}
          />
          <Label htmlFor="betterX" className="font-normal">
            Better title wording
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="titlealign"
            checked={hasGoodTitleAlignment}
            onCheckedChange={(value) => setHasGoodTitleAlignment(value)}
          />
          <Label htmlFor="betterX" className="font-normal">
            Align and format title
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="labelOverlap"
            checked={isLabelOverlapFixed}
            onCheckedChange={(value) => setIsLabelOverlapFixed(value)}
          />
          <Label htmlFor="betterX" className="font-normal">
            Fix label overlap
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="background"
            checked={hasBackground}
            onCheckedChange={(value) => setHasBackground(value)}
          />
          <Label htmlFor="background" className="font-normal">
            Show Background
          </Label>
        </div>
      </div>

      <div className="flex gap-2 my-4">
        <Button onClick={handleReset} variant={'outline'} size={'sm'}>
          Start
        </Button>
        <Button onClick={handleGoToEnd} variant={'outline'} size={'sm'}>
          End
        </Button>
        <Button onClick={handleImprove} size={'sm'}>
          Improve step by step
        </Button>
      </div>

      <LineChart
        data={addQuarterlyNoise(data, 1)}
        width={700}
        height={600}
        hasSpine={hasSpine}
        hasLegend={hasLegend}
        hasHighlight={hasHighlight}
        hasGrid={hasGrid}
        hasGoodYAxis={hasGoodYAxis}
        hasGoodXAxis={hasGoodXAxis}
        hasGoodAuthorLabel={hasGoodAuthorLabel}
        hasGoodTitleWording={hasGoodTitleWording}
        hasGoodTitleAlignment={hasGoodTitleAlignment}
        hasBackground={hasBackground}
        isLabelOverlapFixed={isLabelOverlapFixed}
      />

      <h2 id="plot">📍 Useful links</h2>
      <ul>
        <li>
          Dataviz{' '}
          <a
            href="https://www.matplotlib-journey.com/bonus/design-principles"
            target="_blank"
          >
            design game
          </a>
        </li>
        <li>
          Learn how to make great charts with{' '}
          <a href="www.ggplot2-uncharted.com" target="_blank">
            R
          </a>{' '}
          and{' '}
          <a href="https://www.matplotlib-journey.com" target="_blank">
            Python
          </a>
        </li>
        <li>
          List of{' '}
          <a href="https://www.data-to-viz.com/caveats.html" target="_blank">
            dataviz caveats
          </a>
        </li>
        <li>
          <a
            href="https://github.com/holtzy/react-graph-gallery/tree/main/viz/LineChartDesignImprovement"
            target="_blank"
          >
            Code
          </a>{' '}
          for this chart
        </li>
      </ul>

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="evolution" />
      <div className="mt-20" />
    </Layout>
  );
}

const PillNumber = ({ number }: { number: number }) => {
  return (
    <div className="border flex justify-center items-center p-1 border-black rounded-full h-8 w-8 text-md font-bold mb-4">
      {number}
    </div>
  );
};

type StepProps = {
  index: number;
  active: boolean;
  children: React.ReactNode;
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

function Step({ index, active, children, sectionRefs }: StepProps) {
  return (
    <>
      <div
        id={String(index)}
        ref={(el) => (sectionRefs.current[index] = el)}
        className={cn(
          active ? 'opacity-100' : 'opacity-20',
          'transition-opacity duration-500'
        )}
      >
        <PillNumber number={index} />
        {children}
      </div>

      <div className="h-80" />
    </>
  );
}
