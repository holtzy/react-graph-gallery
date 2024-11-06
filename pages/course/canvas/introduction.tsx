import React from 'react';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/lessonList';
import { ChartOrSandbox } from '@/component/ChartOrSandbox';
import { RadarDatasetAnimationDemo } from '@/viz/RadarDatasetAnimation/RadarDatasetAnimationDemo';
import { Graph } from '@/viz/exercise/HoverDeathByStateSolution/Graph';
import { CodeSandbox } from '@/component/CodeSandbox';
import { ScatterplotCanvasHoverEffectDemo } from '@/viz/ScatterplotCanvasHoverEffect/ScatterplotCanvasHoverEffectDemo';

const previousURL = '/course/animation/project';
const currentURL = '/course/canvas/introduction';
const nextURL = '/course/canvas/drawing-shapes-with-canvas';
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
              By now, after completing the previous modules, you’re likely able
              to draw almost anything on the screen— including interactive
              elements like tooltips, hover effects, and animations.
            </p>
            <p>
              However, there's a significant bottleneck: performance. Let's
              explore canvas, a rendering engine that can help solve these
              issues.
            </p>
          </>
        }
      />
      <h2>The problem with SVG</h2>
      <p>Explain why SVG is slow</p>
      <h3>Drawing SVG is slow</h3>
      <p>Explain that it uses CPU only, no GPU acceleration</p>
      <h3>SVG is heavy</h3>
      <p>
        Each time you draw something in SVG, it is a new line in your DOM! Add
        some event listener to each element and this becomes so much work for
        your browser! Last but not least, memory quickly adds up.
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName={'exercise/HoverDeathByStateSolution'} />
      </div>
      <blockquote>
        If you have many elements on your graph, and/or require a lot of
        animations, you must leave SVG for something more performant.
      </blockquote>
      <h2>⚡️ What is canvas, and why is it fast</h2>
      <p>
        In web development, rendering complex graphics or animations directly in
        the browser can be challenging. That’s where the{' '}
        <strong>HTML5 canvas</strong> element comes in.
      </p>
      <p>
        The canvas provides a powerful, low-level rendering context for drawing
        2D graphics, animations, and even simple games. It's perfect for
        scenarios where you need high performance and control over drawing
        pixels, shapes, and paths on the screen.
      </p>
      <p>
        Unlike other approaches like SVG or CSS, the canvas gives you direct
        access to the drawing surface, allowing for pixel-level control and
        faster rendering, especially when working with dynamic content or large
        datasets.
      </p>
      <p>
        In this module, we’ll explore how the canvas works, how to leverage it
        effectively, and how it can help you overcome performance bottlenecks in
        your web applications.
      </p>
      <h2>Not convinced?</h2>
      <p>Check the same sandbox, made in Canvas!</p>
      ScatterplotCanvasHoverEffectDemo
      <ChartOrSandbox
        vizName={'ScatterplotCanvasHoverEffect'}
        VizComponent={ScatterplotCanvasHoverEffectDemo}
        height={400}
        maxWidth={600}
        caption="A lollipop chart with smooth transition between dataset."
      />
      <h2>Looks fun, let's code!</h2>
      <p>
        Yep, but we kind of have to learn everything from scratch again, so I
        hope you're ready to sweat!
      </p>
    </LayoutCourse>
  );
}
