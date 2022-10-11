import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import TableOfContent from "./TableOfContent";

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

        {/* Load fonts. Then used in style.css */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        {/* Bitter AND roboto in 1 shot */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>

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
      <TableOfContent />
    </>
  );
};
