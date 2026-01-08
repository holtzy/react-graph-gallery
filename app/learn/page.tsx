import { EnrollButton } from '@/component/EnrollButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/component/UI/avatar';
import { Badge } from '@/component/UI/badge';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TODO',
  description: 'TODO',
};

export default function Page() {
  return (
    <section>
      <div className="relative flex justify-center items-center w-full pt-28 pb-12 sm:pt-44 sm:pb-64">
        <div className="z-20 max-w-80 sm:max-w-4xl flex flex-col justify-center items-center pointer-events-none">
          <Badge
            className="font-medium font-bricolage mb-5 pointer-events-auto rounded-none text-sm"
            variant="outline"
          >
            <p>🔥 Already 665 students before the full launch! 🔥</p>
          </Badge>
          <h1 className="leading-tight text-center pointer-events-auto text-5xl! sm:text-6xl!">
            Master Data Visualization
            <br />
            with d3.js & React
          </h1>

          <p className="mt-16 text-xl text-primary opacity-80 max-w-xl text-center pointer-events-auto">
            An all-in-one, <b>interactive online course</b> designed to make you
            a ggplot2 dataviz expert.
          </p>

          <div className="flex justify-start items-center my-10">
            <Avatar>
              <AvatarImage
                src="/people/yan-holtz.webp"
                alt="A picture of Yan Holtz"
              />
              <AvatarFallback>YH</AvatarFallback>
            </Avatar>

            <span className="ml-4 mr-3 pointer-events-auto">
              <span className="font-light">Taught by</span> Yan Holtz{' '}
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <EnrollButton text="Enroll Now" />
            {/* <p className="hidden sm:block font-pally text-sm max-w-40 -rotate-6">
                  Half price this week only! 😱
                </p> */}
          </div>
        </div>

        {/* <div className="hidden sm:block">
          <HeaderBackground isInteractive={true} />
        </div> */}
      </div>
    </section>
  );
}
