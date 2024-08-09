import Navbar from './Navbar';
import Footer from './Footer';
import { HeadSeo } from './HeadSeo';
import Link from 'next/link';
import { Lesson } from '@/util/lessonList';

type LayoutCourseProps = {
  children: React.ReactNode;
  title: string;
  seoDescription: string;
  nextTocItem?: Lesson;
  previousTocItem?: Lesson;
};

export const LayoutCourse = ({
  children,
  title,
  seoDescription,
  previousTocItem,
  nextTocItem,
}: LayoutCourseProps) => {
  return (
    <>
      <HeadSeo title={title} seoDescription={seoDescription} />

      <Navbar />

      <div className="wrapper">{children}</div>

      <div className="flex justify-center items-center space-x-6 my-24 py-12  bg-muted/50">
        {previousTocItem ? (
          <Link
            href={previousTocItem.link}
            className="text-gray-500 no-underline flex flex-col justify-start items-end w-96 h-32 border-r border-black  p-8 hover:bg-muted "
          >
            <span className="uppercase font-light text-transparent bg-gradient-to-l to-fuchsia-300 from-blue-400 bg-clip-text">
              &larr; Previous
            </span>
            <p>{previousTocItem.name}</p>
          </Link>
        ) : (
          <div className="w-96" />
        )}

        {nextTocItem && (
          <Link
            href={nextTocItem.link}
            className="text-gray-500 no-underline flex flex-col justify-start w-96 h-32 border-l border-black  p-8 hover:bg-muted "
          >
            <span className="uppercase font-light text-transparent bg-gradient-to-l from-fuchsia-300 to-blue-400 bg-clip-text">
              Next &rarr;
            </span>
            <p>{nextTocItem.name}</p>
          </Link>
        )}
      </div>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
};
