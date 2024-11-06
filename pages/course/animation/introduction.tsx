import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { TakeHome } from '@/component/TakeHome';
import { Caption } from '@/component/UI/Caption';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { RadarDatasetAnimationDemo } from '@/viz/RadarDatasetAnimation/RadarDatasetAnimationDemo';
import Link from 'next/link';
import { cn } from '@/util/utils';
import { buttonVariants } from '@/component/UI/button';

const previousURL = '/course/data-fetching/spinner';
const currentURL = '/course/animation/introduction';
const nextURL = '/course/animation/animate-a-circle';
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
              Welcome to the world of animation! It’s exciting, but it can also
              get <b>complex</b> 😱.
            </p>
            <p>
              In this first lesson, we’ll explore why animations can{' '}
              <b>enhance</b> data visualizations, when to use them (and when not
              to), and introduce the concept of <b>spring animations</b>.
            </p>
            <p>
              Ready to get hands-on? We’ll dive into the code in the next
              lesson!
            </p>
          </>
        }
      />

      {/* -
-
-
-
-
-
- */}
      <h2>Why Use Animation?</h2>
      <p>
        Imagine you have a web app with a few charts to explore a dataset. Each
        chart can represent different groups within the data.
      </p>
      <p>
        You could switch <b>instantly</b> between groups, but adding{' '}
        <b>smooth, animated transitions</b> gives the experience a polished,
        engaging feel.
      </p>
      <p>
        <br />
      </p>
      <p>Here’s an example, try clicking the buttons above the charts!</p>
      <ChartOrSandbox
        vizName={'RadarDatasetAnimation'}
        VizComponent={RadarDatasetAnimationDemo}
        maxWidth={900}
        height={1000}
        caption="Three charts with smooth dataset transition."
      />
      <p>There are many advantages coming with those smooth animations!</p>
      <div>
        <p className="px-2 bg-green-400 rounded-md text-white w-14 text-md">
          Pros
        </p>
        <ul>
          <li>
            <b>Enhances Understanding</b>: help viewers grasp changes over time
            or shifts in data by gradually showing differences, reducing
            cognitive load compared to abrupt changes.
          </li>
          <li>
            <b>Directs Attention</b>: Animation naturally attracts attention,
            guiding users to focus on specific data points or trends, which can
            be especially useful in dashboards or interactive reports.
          </li>
        </ul>
      </div>
      <p>
        When used effectively, animations make applications more visually
        appealing, enhancing overall engagement.
      </p>

      {/* -
-
-
-
-
-
- */}
      <h2>❌ Yes, but</h2>
      <p>
        Animated transitions must be <b>used carefully</b> to avoid overwhelming
        or distracting users.
      </p>
      <p>
        When overused or too complex, animations can create{' '}
        <b>visual clutter</b>, drawing attention away from important data or
        insights.
      </p>
      <p>
        Long or intricate animations can also <b>slow down</b> user
        interactions, which can frustrate users and reduce usability.
      </p>
      <p>
        If you're hesitant to add an animation in your app, keep this citation
        by Josh Comeau in mind:
      </p>
      <p>
        <br />
      </p>
      <blockquote className="bg-fuchsia-50 py-8">
        <p>Animation is like salt: too much of it spoils the dish</p>
      </blockquote>

      {/* -
-
-
-
-
-
- */}
      <h2>☯️ 2 types if animation</h2>
      <p>
        There are two main types of animations: <b>CSS</b> and <b>spring</b>.
      </p>
      <p>
        &rarr; CSS animations are simple, using keyframes to create smooth
        transitions for things like fades, spins, and hover effects. They’re
        efficient but lack flexibility for interactive or dynamic animations.
      </p>
      <p>
        &rarr; Spring animations, on the other hand, mimic{' '}
        <b>real-world physics</b> by adding effects like bounce and decay,
        making them ideal for interactive elements that respond naturally to
        user input.
      </p>
      <p>
        <br />
      </p>
      <center>
        <img src="/excalidraw/animation-2-types.png" width={600} />
        <Caption>
          There are 2 main ways to animate stuff on the web: CSS and
          spring-based animations.
        </Caption>
      </center>
      <p>
        <br />
      </p>
      <p>
        Each type serves different purposes: CSS is great for simple, efficient
        transitions, while spring animations create dynamic, realistic movement.
        Think of spring physics as a secret ingredient that makes animations
        feel more alive.
      </p>

      <p>
        I’d love to dive deeper into spring animations, but Josh Comeau has
        introduced the concept so brilliantly that it’s worth reading his
        explanation. If you want a better understanding of the <i>why</i> before
        tackling the <i>how</i>, check out{' '}
        <a href="https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/">
          his work here
        </a>
        .
      </p>

      <p>
        <Link
          className={cn(buttonVariants(), 'no-underline')}
          href={
            'https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/'
          }
        >
          More about spring anim.
        </Link>
      </p>

      <h2>🙇🏽‍♂️ Let's code!</h2>
      <p>
        It's time to create our first spring animation using javascript and a
        library called <code>react-spring</code>!
      </p>
    </LayoutCourse>
  );
}
