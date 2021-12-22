import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

// The Layout component
// - adds the top navBar
// - adds the footer
// - adds the head: everything needed for SEO and social media sharing

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  seoDescription: string;
};

export const Layout = ({ children, title, seoDescription }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={seoDescription} />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
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
      <div className="wrapper">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};
