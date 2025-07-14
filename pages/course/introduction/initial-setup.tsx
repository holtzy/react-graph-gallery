import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { Caption } from '@/component/UI/Caption';
import { CodeBlock } from '@/component/UI/CodeBlock';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { BarplotBasicDemo } from '@/viz/BarplotBasic/BarplotBasicDemo';

const previousURL = '/course/introduction/introduction-to-d3';
const currentURL = '/course/introduction/initial-setup';
const nextURL = '/course/svg/introduction';
const seoDescription = '';

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  if (!currentLesson) {
    return null;
  }

  return (
    <LayoutCourse
      title={currentLesson.name}
      seoDescription={seoDescription}
      nextTocItem={lessonList.find((l) => l.link === nextURL)}
      previousTocItem={lessonList.find((l) => l.link === previousURL)}
    >
      <TitleAndDescription
        title={currentLesson.name}
        lessonStatus={currentLesson.status}
        readTime={currentLesson.readTime}
        selectedLesson={currentLesson}
        description={
          <>
            <p>
              Creating graphs in a React environment using D3.js{' '}
              <b>can be quite complex</b>.
            </p>
            <p>
              Here’s a list of tools I highly recommend to simplify your journey
              in building a dataviz web application. 🔧
            </p>
          </>
        }
      />
      {/* -
      --
      -
      -
      -
      -
      -
      -
      - */}
      <h2>1️⃣ React: Use a Framework</h2>
      <p>
        React is a JavaScript <b>library</b>, not a framework.
      </p>
      <p>
        Several frameworks are built on top of it to manage common requirements
        such as routing, static page generation, server-side rendering, and
        more.
      </p>
      <p>
        Personally, I'm a huge fan of <a href="https://nextjs.org">Next.js</a>,
        but other options like Gatsby, Remix, or even sticking with Create React
        App are excellent choices as well!
      </p>
      <p>
        <br />
      </p>
      <center>
        <img src="/img/nextJs-features.png" width={400} />
        <Caption>
          List of next.js features that will make your life easier.{' '}
          <a href="https://www.swhabitation.com/blogs/reactjs-vs-nextjs-a-step-by-step-comparison">
            Source
          </a>
          .
        </Caption>
      </center>
      {/* -
      --
      -
      -
      -
      -
      -
      -
      - */}
      <h2>2️⃣ D3.js: Load What You Need</h2>
      <p>
        D3.js is <b>not</b> a monolithic library but a collection of around 30
        discrete{' '}
        <a href="https://d3js.org/what-is-d3" target="_blank">
          modules
        </a>
        .
      </p>
      <p>
        You don’t need to install and load the <b>entire</b> D3.js library for
        your work; it's likely that you'll only use a fraction of its
        capabilities.
      </p>
      <p>
        For example, if you need to work with scales, you can simply install the{' '}
        <a href="https://github.com/d3/d3-scale?tab=readme-ov-file">d3-scale</a>{' '}
        module using <code>npm install d3-scale</code> and utilize only the
        functions you require from it!
      </p>
      <CodeBlock
        code={`
// import the scaleLinear function from the d3-scale module
import { scaleLinear } from "d3";

// Use it in your code
const xScale = scaleLinear()
        `}
      />
      {/* -
      --
      -
      -
      -
      -
      -
      -
      - */}
      <h2>3️⃣ Typescript: your best friend</h2>
      <p>
        <a href="https://www.typescriptlang.org" target="_blank">
          TypeScript
        </a>{' '}
        is like a special version of JavaScript that helps you write better code
        by letting you add labels to your variables. These labels, or "types,"
        tell you what kind of data you're working with, like <code>number</code>{' '}
        or <code>string</code>.
      </p>
      <p>
        This way, if you make a mistake, TypeScript can help you catch it{' '}
        <b>before</b> you run your program, making it easier to fix problems and
        build bigger projects!
      </p>
      <p>
        I <b>strongly advise</b> to learn and use typescript. I'll use it in
        this course, but you do not have to if you do not want to.
      </p>
      <h3>D3.js & Typescript</h3>
      <p>
        Fortunately,{' '}
        <a href="https://github.com/DefinitelyTyped/DefinitelyTyped">
          DefinitelyTyped
        </a>{' '}
        provides the types of all d3.js functions and objects! So you can
        install all the types we'll need with:
      </p>
      <CodeBlock code={`npm install --save @types/d3`} />
      {/* -
      --
      -
      -
      -
      -
      -
      -
      - */}
      <h2>4️⃣ Save Time with a Boilerplate</h2>
      <p>
        I'm a big fan of <a href="https://tailwindcss.com">Tailwind CSS</a> for
        styling and <a href="https://ui.shadcn.com">ShadCn/UI</a> as a UI
        component library.
      </p>
      <p>
        If you like those tools too, check out my{' '}
        <a href="https://github.com/holtzy/dataviz-project-boilerplate">
          boilerplate
        </a>
        ! This repository is a minimal project with all the tools mentioned in
        this lesson already installed. Just clone it, run{' '}
        <code>npm run dev</code>, and you’ll have a working environment that
        looks like this right away:
      </p>

      <p>
        <br />
      </p>
      <center>
        <img
          src="/img/boilerplate.png"
          width={700}
          className="p-2 border border-black/30 rounded-md shadow-md"
        />
        <Caption>
          Overview of my dataviz project boilerplate. Use next.js + d3 +
          tailwind + typescript + shadcn/UI in 2 minutes. .
        </Caption>
      </center>
      {/* -
      --
      -
      -
      -
      -
      -
      -
      - */}
      <h2>✌️ No Worries!</h2>
      <p>Don’t want to install any of those tools? No worries!</p>
      <p>
        All the lessons in this course feature <b>interactive sandboxes</b>,
        allowing you to learn and experiment without ever leaving this website!
      </p>
      <p>
        Here is an example with a basic barplot you can edit by clicking on the
        "see code" button:
      </p>
      <ChartOrSandbox
        vizName={'BarplotBasic'}
        VizComponent={BarplotBasicDemo}
        height={500}
        maxWidth={500}
        caption="Most basic barplot built with d3.js for scales, and react for rendering"
      />
      <p>
        Now, let’s start creating some dataviz magic on that screen, shall we?
      </p>
    </LayoutCourse>
  );
}
