import Navbar from "./Navbar";
import Footer from "./Footer";
import TableOfContent from "./TableOfContent";
import { HeadSeo } from "./HeadSeo";
import Contact from "./Contact";

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
      <HeadSeo title={title} seoDescription={seoDescription} />
      <div className="wrapper">
        <Navbar />
        {children}
      </div>

      <Contact />

      <div className="wrapper">
        <Footer />
      </div>

      <TableOfContent />
    </>
  );
};
