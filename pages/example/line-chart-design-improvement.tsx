import React, { useEffect, useRef, useState } from 'react';
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

            <div
              id="0"
              ref={(el) => (sectionRefs.current[0] = el)}
              className={cn(
                activeSection === 0 ? 'opacity-100' : 'opacity-20',
                'transition-opacity duration-500'
              )}
            >
              <PillNumber number={0} />
              <p>
                Everything starts with a pretty classic line chart. Each line
                shows the proportion of a group of comments. The comments
                advising the break up the relationships are in red, the ones
                advising to communicate better in blue and so on.
              </p>
              <p>
                From the graph style, I'm pretty sure it's been made using
                Python and Matplotlib!
              </p>
            </div>

            <div className="h-20" />
            <div className="h-20" />

            <div
              id="1"
              ref={(el) => (sectionRefs.current[1] = el)}
              className={cn(
                activeSection === 1 ? 'opacity-100' : 'opacity-20',
                'transition-opacity duration-500'
              )}
            >
              <PillNumber number={1} />
              <p>
                My first step was to reproduce this graph. Not easy, as the
                underlying data is not sadly available anywhere.. In a perfect
                world everything would be hosted on Github together with the
                code but hey 🤷‍♂️.
              </p>
              <p>
                Anyway, I gave the chart to a LLM to get some approximate data
                and reproduce the chart using Javascript and D3.js. The result
                is pretty close isnt't it? Now, let's start the fun.
              </p>
            </div>

            <div className="h-20" />
            <div className="h-20" />

            <div
              id="2"
              ref={(el) => (sectionRefs.current[2] = el)}
              className={cn(
                activeSection === 2 ? 'opacity-100' : 'opacity-20',
                'transition-opacity duration-500'
              )}
            >
              <PillNumber number={2} />
              <p>
                Next, let’s polish how the mapped variables appear by adjusting
                their{' '}
                <b className="simple-highlight-teal">&nbsp;scales&nbsp;</b>.
              </p>
              <p>
                For the <code>size</code> aesthetic, we use{' '}
                <code>scale_size_area()</code> to ensure the <b>circle areas</b>{' '}
                reflect population accurately. Inside the <code>scale</code>, we
                define meaningful breaks and replace large numbers with clear
                labels like “10 Million” or “1 Billion.”
              </p>
            </div>

            <div className="h-20" />
            <div className="h-20" />

            <div
              id="3"
              ref={(el) => (sectionRefs.current[3] = el)}
              className={cn(
                activeSection === 3 ? 'opacity-100' : 'opacity-20',
                'transition-opacity duration-500'
              )}
            >
              <PillNumber number={3} />
              <p>
                Then, we use{' '}
                <b>
                  <b>
                    <code>theme()</code>
                  </b>
                </b>{' '}
                to fine-tune the{' '}
                <b className="simple-highlight-teal">
                  &nbsp;overall legend layout&nbsp;
                </b>
                .
              </p>
              <p>
                We move the legends to the top, align them to the left, and
                stack them vertically. Titles appear above the keys, labels
                below, and text styling uses bold typography for clarity.
              </p>
              <p>
                Tweaking spacing and key dimensions enhances readability and
                gives the chart a clean, professional balance.
              </p>
            </div>

            <div className="h-20" />
            <div className="h-20" />

            <div
              id="4"
              ref={(el) => (sectionRefs.current[4] = el)}
              className={cn(
                activeSection === 4 ? 'opacity-100' : 'opacity-20',
                'transition-opacity duration-500'
              )}
            >
              <PillNumber number={4} />
              <p>
                Finally,{' '}
                <b>
                  <code>guide_*()</code>
                </b>{' '}
                functions control the{' '}
                <b className="simple-highlight-teal">
                  &nbsp;legend-specific details&nbsp;
                </b>
                , allowing you to fine-tune each legend independently.
              </p>
              <p>
                You can include a <code>guide_*()</code> call inside{' '}
                <code>guides()</code> — as we do here — or pass it directly
                through the <code>guide</code> argument of the corresponding
                <code>scale_*()</code>.
              </p>
            </div>

            <div className="h-20" />
            <div className="h-20" />
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
                  width={600}
                  height={520}
                  hasSpine={hasSpine}
                  hasLegend={hasLegend}
                  hasHighlight={hasHighlight}
                  hasGrid={hasGrid}
                  hasGoodYAxis={hasGoodYAxis}
                  hasGoodXAxis={hasGoodXAxis}
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
    <div className="border flex justify-center items-center p-1 border-black rounded-full h-8 w-8 text-md font-bold">
      {number}
    </div>
  );
};
