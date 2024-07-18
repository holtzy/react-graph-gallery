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
      title="Population Pyramid"
      seoDescription="An animated radar chart showing the skills required to belong to any specific type of data professional."
    >
      <TitleAndDescription
        title="Population Pyramid"
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
