import React from 'react';
import { Layout } from 'component/Layout';
import TitleAndDescription from 'component/TitleAndDescription';
import ChartFamilySection from 'component/ChartFamilySection';
import { CodeBlock } from 'component/UI/CodeBlock';
import { ChartOrSandbox } from 'component/ChartOrSandbox';

import { TTestPlaygroundDemo } from '@/viz/TTestPlayground/TTestPlayground';
import Link from 'next/link';

const graphDescription = (
  <>
    <p>
      You just spent hours analyzing data and got a <b>p-value of 0.051</b>.
      Does that make your findings meaningless? Would 0.049 really change
      everything?
    </p>
    <p>
      This post explains why <b>chasing statistical significance</b> often
      misses the bigger picture. <b>Practical significance</b> matters more.
    </p>
  </>
);

export default function Home() {
  return (
    <Layout title="Stop chasing the p-value" seoDescription="todo">
      <TitleAndDescription
        title="Stop chasing the p-value"
        description={graphDescription}
        chartType="scatter"
      />

      {/*
      //
      //
      //
      */}
      <h2 id="t-test">🤔 Comparing Two Groups</h2>
      <h3>&rarr; Data and Question</h3>
      <p>
        You have values for <b>two groups</b>. Calculating the <b>mean</b> and{' '}
        <b>variance</b> for each group is straightforward.
      </p>
      <p>
        But are the differences statistically significant? Can we conclude that
        the groups are <b>meaningfully different</b>, or could the observed
        differences be due to random chance?
      </p>

      <h3>&rarr; T-Test, p-Value, and Effect Size</h3>
      <p>
        The{' '}
        <a
          href="https://en.wikipedia.org/wiki/Student%27s_t-test"
          target="_blank"
        >
          t-test
        </a>{' '}
        is a statistical method designed precisely for this purpose. The result
        is a <b>p-value</b>, which indicates the{' '}
        <b>probability of observing the data </b>if the null hypothesis (no
        difference between groups) is true.
      </p>

      {/*
      //
      // Plot and code
      //
      */}
      <h2 id="sandbox">🎮 Visualizing the p-value</h2>
      <p>
        The sliders below let you experiment with <b>sample size</b>,{' '}
        <b>effect size</b>
        (average difference), and <b>standard deviation</b>. The values of both
        groups are displayed on a <Link href="/boxplot">boxplot</Link> using
        jittering to illustrate their distribution.
      </p>
      <p>
        Adjust the sliders to build an intuition about how the p-value changes!
      </p>
      <p>
        For example, consider this scenario. With a standard deviation of{' '}
        <code>4</code> and an effect size of <code>2</code>, the difference
        won't be statistically significant with a sample size of <code>25</code>
        . However, it will become significant if the sample size is increased to{' '}
        <code>50</code>!
      </p>

      <ChartOrSandbox
        vizName={'TTestPlayground'}
        VizComponent={TTestPlaygroundDemo}
        maxWidth={700}
        height={880}
        caption="Explore how the p-value behaves."
      />

      <h2 id="conclusion">Conclusion</h2>
      <p>
        In summary, increasing the sample size will always make a difference
        statistically significant eventually. But{' '}
        <b>does that mean it truly matters</b>? Sometimes yes, sometimes no—it
        depends on the context.
      </p>

      <p>
        Statistical tools like the p-values are valuable for analyzing data, but
        they're just <b>one part of the bigger picture</b>.
      </p>
      <p>
        Focusing solely on whether a result is "statistically significant" can
        lead to <b>misleading interpretations</b> and overlook the practical
        importance of findings.
      </p>
      <p>
        By considering effect sizes, confidence intervals, and the context of
        your data, you can draw conclusions that are not only statistically
        sound but also <b>meaningful and impactful</b>.
      </p>
      <p>
        Stop chasing the p-value. Start seeking the story behind the numbers!
      </p>

      <div className="full-bleed border-t h-0 bg-gray-100 mb-3 mt-24" />
      <ChartFamilySection chartFamily="flow" />
      <div className="mt-20" />
    </Layout>
  );
}
