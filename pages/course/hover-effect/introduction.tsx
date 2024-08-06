import React from 'react';
import { Layout } from '@/component/Layout';
import TitleAndDescription from '@/component/TitleAndDescription';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import ChartFamilySection from '@/component/ChartFamilySection';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ScatterplotHoverHighlightTwoLayersDemo } from '@/viz/ScatterplotHoverHighlightTwoLayers/ScatterplotHoverHighlightTwoLayersDemo';
import { DonutChartHoverDemo } from '@/viz/DonutChartHover/DonutChartHoverDemo';
import { TreemapHoverEffectDemo } from '@/viz/TreemapHoverEffect/TreemapHoverEffectDemo';
import Link from 'next/link';
import { Badge } from '@/component/UI/badge';
import { ScatterplotHoverHighlightPseudoClassDemo } from '@/viz/ScatterplotHoverHighlightPseudoClass/ScatterplotHoverHighlightPseudoClassDemo';
import { ScatterplotHoverHighlightDimDemo } from '@/viz/ScatterplotHoverHighlightDim/ScatterplotHoverHighlightDimDemo';
import GraphGallery from '@/component/GraphGallery';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';

const graphDescription = (
  <>
    <p>
      <b>Interactivity</b> is crucial in data visualization, especially for web
      applications. Adding <b>hover effects</b> enhances user experience by
      highlighting specific series on the chart.
    </p>
    <p>
      This post suggests a few strategies to implement hover effects using css
      and react.
    </p>
  </>
);

export default function Home() {
  return (
    <LayoutCourse
      title="Hover interaction on a chart with React"
      seoDescription="How to add a hover effect on a chart built with d3.js and React"
      nextTocItem={lessonList.find(
        (l) => l.link === 'course/hover-effect/css-pseudo-class'
      )}
    >
      <TitleAndDescription
        title="Hover interaction on a chart with React"
        description={graphDescription}
      />

      <p>Let's describe what we are going to learn.</p>

      <p>What you should consider when building hover interaction? </p>
      <p>
        Are you modifying just the element you are hovering, or other elements
        too?
      </p>
      <p>
        Are you modifying just graph elements (like all the circles, all the
        rectangles), or are you modifying other UI elements too (like tooltip,
        buttons, legends other graph...)
      </p>
      <p>
        Do you need to be carefull about performances? Nit: you probably should.
      </p>
      <blockquote>
        {' '}
        Note: this article does not talk about tooltips that has its{' '}
        <Link href="/articles">dedicated section</Link>.
      </blockquote>
    </LayoutCourse>
  );
}
