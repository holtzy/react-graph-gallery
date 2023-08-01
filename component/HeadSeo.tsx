import Head from 'next/head';

type HeadSeoProps = {
  title: string;
  seoDescription: string;
};

export const HeadSeo = ({ title, seoDescription }: HeadSeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={seoDescription} />

      {/* Favicon That I have built thanks to a online service */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <meta
        name="keywords"
        content="React, D3, D3.js, data, dataviz, data visualization, DOM, web, dev, chart, graph"
      />
      <meta name="author" content="Yan Holtz" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/holtzy/react-graph-gallery/main/public/overview-gallery.png"
      />
    </Head>
  );
};
