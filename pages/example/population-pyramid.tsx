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
import { PopulationPyramidArtDemo } from 'viz/PopulationPyramidArt/PopulationPyramidArtDemo';

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
  return (
    <>
      <div className="bg-black">
        <PopulationPyramidArtDemo />
      </div>
    </>
  );
}
