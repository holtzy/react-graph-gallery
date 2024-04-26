import React from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import { SubscribeForm } from '../component/SubscribeForm';

const graphDescription = (
  <p>
    The <a href="https://www.react-graph-gallery.com">react graph gallery</a> is
    a project that just started! If you want to know when a new section gets
    released, follow me on{' '}
    <a href="https://twitter.com/R_Graph_Gallery">twitter</a> or subscribe
    below!
  </p>
);

export default function Home() {
  return (
    <Layout
      title="Subscribe"
      seoDescription="Subscribe to the react graph gallery's newsletter to be posted when a new article is posted."
    >
      <TitleAndDescription
        title="Want more graph examples?"
        description={graphDescription}
      />

      <div className="flex justify-center items-center pt-12 pb-32">
        <SubscribeForm />
      </div>
    </Layout>
  );
}
