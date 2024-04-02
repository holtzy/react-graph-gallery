import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';
import Link from 'next/link';
import { RadarDatasetAnimationDemo } from 'viz/RadarDatasetAnimation/RadarDatasetAnimationDemo';
import { chartTypesInfo } from 'util/sectionDescriptions';
import { fullUrlToInternalLink } from 'util/utils';
import SectionLogoWithOverlay from 'component/SectionLogoWithOverlay';
import { LinkAsButton } from 'component/LinkAsButton';

const graphDescription = (
  <>
    <p>
      The field of data offers a diverse array of <b>job titles</b>, making it
      challenging to navigate without getting lost in the jargon and uncertainty
      about <b>which roles to pursue</b>.
    </p>
    <p>
      The charts below offer deeper insights into the <b>competencies</b>{' '}
      needed, <b>salary</b> ranges, and <b>popularity</b> trends for the four
      primary job titles.
    </p>
    <p>
      It's a good opportunity to learn how to make a little application with
      React and <a href="https://www.d3-graph-gallery.com">D3.js</a>, featuring
      3 inter-connected chart types with <b>smooth animated transition</b>:{' '}
      <Link href="/radar-chart">radar</Link> chart,{' '}
      <Link href="/line-chart">line</Link> chart and{' '}
      <Link href="/lollipop-plot">lollipop</Link>.
    </p>
  </>
);

export default function Home() {
  const allLogos = chartTypesInfo
    .filter((chart) => ['radar', 'lollipop', 'line'].includes(chart.id))
    .map((chart, id) => {
      const link = fullUrlToInternalLink(chart.reactURL);
      return (
        <div key={id} className="flex flex-col items-center justify-center">
          <SectionLogoWithOverlay
            link={link}
            chartLogo={chart.logo}
            caption={chart.label}
            isAvailable={chart.isAvailable}
            size={129}
          />
        </div>
      );
    });

  return (
    <Layout
      title="Types of Data Professionals"
      seoDescription="An animated radar chart showing the skills required to belong to any specific type of data professional."
    >
      <TitleAndDescription
        title="Types of Data Professionals"
        description={graphDescription}
        chartType="radar"
      />
      {/*
      //
      // The plot
      //
      */}
      <h2 id="the-plot">The plot</h2>
      <p>
        Here is what we want to build. It is highly inspired by a work from{' '}
        <a href="https://www.linkedin.com/in/krosamont/en?originalSubdomain=fr">
          Kevin Rosamont Prombo
        </a>
        .
      </p>
      <p>
        Four buttons are provided, <b>one for each type</b> of data
        professional. Clicking on it will update the 3 following charts.
      </p>
      <p>
        <br />
      </p>
      <ChartOrSandbox
        vizName={'RadarDatasetAnimation'}
        VizComponent={RadarDatasetAnimationDemo}
        maxWidth={900}
        height={1000}
        caption="Dive deep into the 4 main types of Data Professionals. Understand their main required competencies, their salary ranges and their popularity."
      />
      {/*
      //
      // Data
      //
      */}
      <h2 id="data">Data</h2>
      <p>
        The <Link href="/radar-chart">radar</Link> chart explains what
        competencies are required to be a Data Engineer, a Machine Learning
        Engineer, a Data Scientist or a Data Analyst. The data and the
        representation have been first suggested by{' '}
        <a href="https://www.linkedin.com/in/krosamont/en?originalSubdomain=fr">
          Kevin Rosamont Prombo
        </a>
        .
      </p>
      <p>
        The little <Link href="/lollipop-plot">lollipop</Link> plot provides the
        estimated salary range for the job. Data from{' '}
        <a
          href="https://reviewnprep.com/blog/data-engineer-vs-data-analyst-vs-data-scientist-salary-skills-background/"
          target="_blank"
        >
          review n prep
        </a>{' '}
        and glassdoor.
      </p>
      <p>
        The <Link href="/line-chart">line</Link> chart gives an estimate of the
        job popularity based on its{' '}
        <a href="https://trends.google.com/trends/">google trend</a> score in
        the last ~10 years.
      </p>
      <p>
        Click the <code>Show code</code> button above to get a sandbox with the
        3 datasets at <code>json</code> format.
      </p>
      {/*
      //
      // Global state
      //
      */}
      <h2 id="state">Global state</h2>
      <p>
        The first thing that is required here is a <b>global state</b>.
      </p>
      <p>
        The root file of the application computes all the available groups in
        the dataset (<code>allGroups</code>) and use the first group to state
        the initial state of the application.
      </p>
      <CodeBlock code={snippetstate} />
      <p>
        When the user clicks a button, the state is updated thanks to the{' '}
        <code>setSelectedGroup()</code> function. The newly selected group (
        <code>selectedGroup</code>) is then passed to the graphing component as
        a prop.
      </p>
      {/*
      //
      // Charts
      //
      */}
      <h2 id="charts">Charts</h2>
      <p>Then we need to build 3 charts based on the 3 filtered dataset.</p>
      <p>
        The <Link href="/">React graph gallery</Link> already provides in-depth
        tutorials for those 3 chart types. So please refer to the{' '}
        <Link href="/radar-chart">radar</Link> chart,{' '}
        <Link href="/line-chart">line</Link> chart and{' '}
        <Link href="/lollipop-plot">lollipop</Link> sections to learn how to
        build them.
      </p>
      <p>
        <br />
      </p>
      <div className="flex flex-row justify-start flex-wrap">{allLogos}</div>
      {/*
      //
      // Animation
      //
      */}
      <h2 id="animation">Animation</h2>
      <p>
        Most of the fun here comes from the <b>smooth, animated transition</b>{' '}
        between groups. It is also the trickiest part to implement.
      </p>
      <p>
        As always in this gallery, the animation is computed thanks to{' '}
        <code>react-spring</code>, a javascript library for{' '}
        <a href="https://www.react-spring.dev">spring animation</a> in React.
      </p>
      <p>
        It would be way too long to explain how to implement it properly in this
        page. But to put it in a nutshell, you need to render{' '}
        <code>animated</code> elements instead of usual SVG elements. Here is
        how the <code>line</code> is rendered for instance:
      </p>
      <CodeBlock code={snippetAnim} />
      <p>
        I plan to write some <b>complete tutorials</b> on this passionating and
        complicated topic. You can <Link href="/Subscribe">subscribe</Link> to
        the project to know when it's ready!
      </p>

      <LinkAsButton isFilled size="sm" href="/subscribe">
        Subscribe
      </LinkAsButton>
      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="ranking" />
      <div className="mt-20" />
    </Layout>
  );
}

const snippetstate = `
const allGroups = data.map((d) => d.name);
const [selectedGroup, setSelectedGroup] = useState(allGroups[0]);
`.trim();

const snippetAnim = `
const LineItem = ({ path, color }: LineItemProps) => {
  const springProps = useSpring({
    to: {
      path,
      color,
    },
    config: {
      friction: 100,
    },
  });

  return (
    <animated.path
      d={springProps.path}
      fill={'none'}
      stroke={color}
      strokeWidth={2}
    />
  );
};
`.trim();
