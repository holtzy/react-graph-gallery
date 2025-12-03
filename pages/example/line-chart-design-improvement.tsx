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
      impact of each fix. Let us dive in!
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

    await wait(1000);
    setHasSpine(false);

    await wait(1000);
    setHasLegend(false);

    await wait(1000);
    setHasHighlight(true);

    await wait(1000);
    setHasGrid(false);

    await wait(1000);
    setHasGoodYAxis(true);

    await wait(1000);
    setHasGoodXAxis(true);
  };

  const handleReset = async () => {
    setHasSpine(true);
    setHasLegend(true);
    setHasHighlight(false);
    setHasGrid(true);
    setHasGoodYAxis(false);
    setHasGoodXAxis(false);
  };

  return (
    <Layout title="Line chart revamp." seoDescription="TODO">
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
        <div className="grid grid-cols-12 gap-8" style={{ maxWidth: 1100 }}>
          <div className="col-span-6 inline-block">
            <div className="h-20" />

            <Step
              index={0}
              active={activeSection === 0}
              sectionRefs={sectionRefs}
            >
              <p>
                Everything starts with a pretty classic line chart. Each line
                shows the proportion of a group of comments. The comments
                advising the break up the relationships are in red, the ones
                advising to communicate better in blue and so on.
              </p>
              <p>
                From the graph style, I'm pretty sure it's been made using
                Python and Matplotlib.
              </p>
            </Step>

            <Step
              index={1}
              active={activeSection === 1}
              sectionRefs={sectionRefs}
            >
              <p>
                My first step was to reproduce this graph. Not easy, as the
                underlying data is not available anywhere. In a perfect world
                everything would be hosted on Github together with the code but
                hey 🤷‍♂️
              </p>
              <p>
                I gave the chart to a LLM to extract approximate data and
                rebuilt it using Javascript and D3. The result is quite close
                isn't it? Now the fun starts.
              </p>
            </Step>

            <Step
              index={2}
              active={activeSection === 2}
              sectionRefs={sectionRefs}
            >
              <p>
                The legend forces readers to jump back and forth to understand
                the lines. It creates unnecessary cognitive load.
              </p>
              <p>Direct labeling fixes it.</p>
            </Step>

            <Step
              index={3}
              active={activeSection === 3}
              sectionRefs={sectionRefs}
            >
              <p>
                A simple improvement: remove the spine. It adds clutter without
                conveying any information.
              </p>
            </Step>

            <Step
              index={4}
              active={activeSection === 4}
              sectionRefs={sectionRefs}
            >
              <p>
                I’m not a big fan of dense grid lines. In our decluttering
                mission, removing the horizontal ones is an easy win.
              </p>
            </Step>

            <Step
              index={5}
              active={activeSection === 5}
              sectionRefs={sectionRefs}
            >
              <p>
                Let's improve the Y axis. The axis title is kind of useless, we
                just have to add a % next to the numbers and everything gets
                more obvious, with less clutter!
              </p>
            </Step>

            <Step
              index={6}
              active={activeSection === 6}
              sectionRefs={sectionRefs}
            >
              <p>
                Now it's obvious that the X axis needs an improvement too! The
                nuber <code>20</code> was repeated so many times! Let's show
                only what matters shall we?
              </p>
              <p>
                Also, it's pretty obvious that it's a year, so the Axis title
                isn't really useful was it?
              </p>
            </Step>

            <Step
              index={7}
              active={activeSection === 7}
              sectionRefs={sectionRefs}
            >
              <p>
                The author name label at the top right was annoying. It's
                competing with the most interesting part of the chart: the
                location where the "end relationship" line spikes.
              </p>
              <p>
                Let's show it as a caption instead, with a bit of formatting.
              </p>
            </Step>

            <Step
              index={8}
              active={activeSection === 8}
              sectionRefs={sectionRefs}
            >
              <p>
                The title and subtitle don't work: they are descriptive instead
                of telling a story. You're reader is in a hurry, he wants to
                understand instantly what's going on here. And you want them to
                be hooked.
              </p>
              <p>
                Let's change the wording to something that'll make people stop
                scrolling and still understand what the graph shows.
              </p>
            </Step>

            <Step
              index={9}
              active={activeSection === 9}
              sectionRefs={sectionRefs}
            >
              <p>
                A few design golden rules: everything must be aligned with
                something. Use hierarchy of information. What's important must
                be big and obvious. Alignment matters.
              </p>
              <p>Title looks better now doesn't it?</p>
            </Step>

            <Step
              index={10}
              active={activeSection === 10}
              sectionRefs={sectionRefs}
            >
              <p>
                Hey, let's add a slight background with some good margins
                around!
              </p>
            </Step>
          </div>

          <div className="col-span-6 relative">
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
                  hasSpine={activeSection > 2 ? false : true}
                  hasLegend={activeSection > 1 ? false : true}
                  hasHighlight={hasHighlight}
                  hasGrid={activeSection > 3 ? false : true}
                  hasGoodYAxis={activeSection > 4 ? true : false}
                  hasGoodXAxis={activeSection > 5 ? true : false}
                  hasGoodAuthorLabel={activeSection > 6 ? true : false}
                  hasGoodTitleWording={activeSection > 7 ? true : false}
                  hasGoodTitleAlignment={activeSection > 8 ? true : false}
                  hasBackground={activeSection > 9 ? true : false}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <h2 id="plot">🎮 Your turn</h2>
      <div>
        <div className="flex items-center space-x-2">
          <Switch
            id="spine"
            checked={hasSpine}
            onCheckedChange={(value) => setHasSpine(value)}
          />
          <Label htmlFor="spine" className="font-normal">
            Spine
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="legend"
            checked={hasLegend}
            onCheckedChange={(value) => setHasLegend(value)}
          />
          <Label htmlFor="legend" className="font-normal">
            Legend
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="highlight"
            checked={hasHighlight}
            onCheckedChange={(value) => setHasHighlight(value)}
          />
          <Label htmlFor="legend" className="font-normal">
            highlight
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="grid"
            checked={hasGrid}
            onCheckedChange={(value) => setHasGrid(value)}
          />
          <Label htmlFor="legend" className="font-normal">
            grid
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="betterY"
            checked={hasGoodYAxis}
            onCheckedChange={(value) => setHasGoodYAxis(value)}
          />
          <Label htmlFor="betterY" className="font-normal">
            Better Y axis
          </Label>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="betterX"
            checked={hasGoodXAxis}
            onCheckedChange={(value) => setHasGoodXAxis(value)}
          />
          <Label htmlFor="betterX" className="font-normal">
            Better X axis
          </Label>
        </div>
      </div>

      <div className="flex gap-2 my-4">
        <Button onClick={handleReset} variant={'outline'}>
          Reset
        </Button>
        <Button onClick={handleImprove}>Improve step by step</Button>
      </div>

      <LineChart
        data={addQuarterlyNoise(data, 1)}
        width={600}
        height={400}
        hasSpine={hasSpine}
        hasLegend={hasLegend}
        hasHighlight={hasHighlight}
        hasGrid={hasGrid}
        hasGoodYAxis={hasGoodYAxis}
        hasGoodXAxis={hasGoodXAxis}
      />

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
