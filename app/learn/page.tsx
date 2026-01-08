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
    <>
      {' '}
      <section>
        <div className="relative flex justify-center items-center w-full pt-28 pb-12 sm:pt-44 sm:pb-64">
          <div className="z-20 max-w-80 sm:max-w-4xl flex flex-col justify-center items-center pointer-events-none">
            <Badge
              className="font-medium font-bricolage mb-5 pointer-events-auto rounded-none text-sm"
              variant="outline"
            >
              <p>🔥 Coming soon! 🔥</p>
            </Badge>
            <h1 className="leading-tight text-center pointer-events-auto text-5xl! sm:text-6xl!">
              Master Data Visualization
              <br />
              with d3.js & React
            </h1>

            <p className="mt-16 text-xl text-primary opacity-80 max-w-xl text-center pointer-events-auto">
              An all-in-one, <b>interactive online course</b> designed to make
              you a ggplot2 dataviz expert.
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
      <section>
        <div className="wrapper mt-12 sm:mt-0">
          <h2 className="landingTitle">😱 Stuck on Beginner Mode?</h2>
          <p>
            <code>ggplot2</code> is the ultimate tool for creating graphs with
            code. So powerful that Python made a copy of it!
          </p>
          <p>
            Yet, reaching a professional level is <b>hard</b>. You have to
            understand <b>syntax tweaks</b>, navigate a jungle of{' '}
            <b>extensions</b>, learn about different <b>chart types</b>, and
            master the <b>fundamental principles of dataviz</b>.
          </p>
          <p>
            It takes time and effort, and without proper guidance, your charts
            might never reach that stunning, polished look. 😔
          </p>

          <h2 className="landingTitle">🔥 Let's Make Insightful Charts!</h2>
          <p>
            This online course packs <b>everything you need to know</b> about
            ggplot2 <b>and</b> data visualization.
          </p>
          <p>
            After just a few hours, you’ll know <b>what</b> to draw and{' '}
            <b>how</b> to draw it, creating stunning graphs that people actually
            want to read.
            <br />
            <br />
          </p>
          <p className="font-bricolage text-lg font-extrabold">
            Sure, you could keep copy-pasting code from ChatGPT... 🤖
          </p>
          <p>
            But it won't teach you the secret sauce to design a great chart and
            you will forever struggle with the last bit of polish that makes
            your work stand out!
          </p>
          <p>
            <br />
            Instead,
            <b> you could just learn everything in a few hours here</b> thanks
            to our course!
          </p>
        </div>
      </section>
    </>
  );
}
