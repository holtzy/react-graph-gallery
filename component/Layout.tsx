import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

// The Layout component
// - adds the top navBar
// - adds the footer
// - adds the head: everything needed for SEO and social media sharing

export const Layout = (props: {
  children: React.ReactNode;
  title: string;
  seoDescription: string;
}) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto+Mono:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="wrapper">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </>
  );
};
