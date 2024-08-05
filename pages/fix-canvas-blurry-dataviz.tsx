import React, { useEffect, useRef } from 'react';
import { Layout } from '../component/Layout';
import TitleAndDescription from '../component/TitleAndDescription';
import Contact from '../component/Contact';
import ChartFamilySection from '../component/ChartFamilySection';
import { CodeBlock } from '../component/UI/CodeBlock';
import { Caption } from '../component/UI/Caption';
import { CanvasShape } from '../viz/CanvasBasicFix/CanvasShape';
import { CanvasShape as CanvasShapeBug } from '../viz/CanvasBasicBug/CanvasShape';
import CodeSandboxButton from '../component/CodeSandboxButton';

const graphDescription = (
  <p>
    Drawing a chart on a <code>canvas</code> element instead of using{' '}
    <code>svg</code> elements can be a huge performance boost. However, it leads
    to a blurry and unreadable viz on retina screens if the resolution is not
    taken into account. <b>Here is how to fix</b>.
  </p>
);

const drawDiagonal = (id: string) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(100, 100);
  context.stroke();
};

const snippet1 = `
<canvas style="width:200px; height:200px;" width="100px" height="100px">
`.trim();

const snippet2 = `
<canvas style="width:300px; height:300px;" width="100px" height="100px">
`.trim();

const snippet3 = `
<canvas style="width:100px; height:100px;" width="200px" height="200px">
`.trim();

const snippet4 = `
return(
  <div ref={chartRef}>
    <MyChartComponent
      height={chartSize.height}
      width={chartSize.width}
  </div>
)
`.trim();

export default function Home() {
  useEffect(() => {
    drawDiagonal('canvas1');
    drawDiagonal('canvas2');
  }, []);

  return (
    <Layout
      title="Fixing the blurry canvas on retina screens"
      seoDescription="Building a viz with canvas results in a blurry chart on retina screens. Here is why and how to fix it."
    >
      <TitleAndDescription
        title="Fixing the blurry canvas on retina screens"
        description={graphDescription}
      />

      {/*
      *
      Part 1: basics about a screen
      *
      */}
      {/*
      //
      //
      //
      */}
      <h2 id="pixel">⬜ Pixel, Resolution and DPI</h2>

      <p>
        To understand why a <code>canvas</code> can get blurry on a retina
        screen, you first need to have some basic knowledge about how an image
        is displayed on a screen.
      </p>
      <p>
        Screens are made up of thousands of tiny dots all bunched together
        called <b>pixels</b>. Each pixel has the ability to{' '}
        <a href="https://www.youtube.com/watch?v=3BJU2drrtCM&t=450s">
          change its color
        </a>
        . The total number of pixels on a screen differs from one monitor to
        another, we call it the screen <b>resolution</b>. If the screen has
        1,024 pixels horizontally, and 768 vertically it has a 'resolution' of
        1,024 x 768.
      </p>
      <div className="flex flex-col items-center">
        <img
          src="./img/screen_mockup.png"
          style={{ maxWidth: 600 }}
          alt="A screen is a set of pixels"
        />
        <Caption>
          When you watch{' '}
          <a href="https://www.dataviz-inspiration.com">
            dataviz-inspiration.com
          </a>{' '}
          on your screen, you actually watch thousands of pixels.
        </Caption>
      </div>
      <p>
        It's important to understand that 2 screens with the same{' '}
        <b>physical size</b> (let's say 30 inches) can have very different
        amount of pixels. The density of pixels on a screen is called <b>DPI</b>{' '}
        for <b>dots per inch</b> or ppi for pixels per inch.
      </p>
      <p>
        <b>Retina</b> screens have a very high DPI, and it is where our
        troubbles begin
      </p>

      {/*
      *
      Part 2: Physical vs CSS resolution
      *
      */}
      {/*
      //
      //
      //
      */}
      <h2 id="css resolution">Physical vs CSS resolution</h2>

      <p>
        Let's say that you create a html element and give it a{' '}
        <code>width</code> of 100px using css. This is the <b>css width</b>. If
        you use a screen that has a very high resolution, pixels are very very
        small. As a result, your element of 100px would appear very small too on
        the screen.
      </p>
      <p>
        To avoid this, each monitor applies a <b>pixel ratio</b>. On a retina
        screen this ratio equals 2. When you ask the monitor to draw an element
        of 100px, it will actually draw it with a length of 200px. This is the{' '}
        <b>physical width</b>.
      </p>
      <p>
        In javascript, you can access this ratio with{' '}
        <code>window.devicePixelRatio</code> and here is the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio">
          complete doc
        </a>{' '}
        about it.
      </p>

      {/*
      *
      Part 3: The issue
      *
      */}
      {/*
      //
      //
      //
      */}
      <h2 id="css resolution">🐛 Canvas, High-DPI and the bug</h2>

      <p>
        Let's add a <code>canvas</code> element in our DOM, with a width of
        100px. It is the equivalent of building an image, 100px wide, that we
        insert in the DOM.
      </p>
      <p>
        If we display the result on a retina screen with a{' '}
        <code>devicePixelRatio</code> of 2, the image will be scaled up to 200px
        wide. The browser will interpolate pixels to make the image bigger, and
        it <b>results in a blurry output</b>.
      </p>
      <p>
        To avoid this issue, we the canvas we're creating must be twice bigger
        on retina screen
      </p>
      <div className="flex flex-col items-center">
        <img
          src="/img/pixel-tiger.png"
          style={{ maxWidth: 500 }}
          alt="A pixelated output when an image is scaled up"
        />
        <Caption>
          A small img or canvas on a retina screen will be scaled up, resulting
          in a pixelated / blurry output.
        </Caption>
      </div>

      {/*
      *
      Part 4: 2 dimensions for the canvas
      *
      */}
      {/*
      //
      //
      //
      */}
      <h2 id="todo">🤦‍♂️ The 2 dimensions of the canvas element</h2>

      <p>
        There are 2 different ways to control the dimension of a{' '}
        <code>canvas</code> element.
      </p>
      <ul>
        <li>
          <b>width and height attributes</b>: They control the size of the image
          that is created and inserted in the DOM.
          <br />
          Default to 300px and 150px so always specify them.
        </li>
        <li>
          <b>css style</b>: the canvas element can be styled using CSS. As a
          result we can also pass a <code>width</code> and a <code>height</code>{' '}
          here. It controls the size of the element on the screen.
        </li>
      </ul>
      <br />
      <p>Here is a html code snippet illustrating this concept:</p>
      <CodeBlock code={snippet1} />
      <p>
        Now, let's play with those 2 values to see what happens. In the examples
        below, a segment going from 0,0 (top left) to 100,100 is drawn.
      </p>

      <h3>&rarr; Small image, big output</h3>
      <p>
        If I create a small image with my canvas (100x100) and output it in big
        (300x300), the browser has to scale it up to display it, resulting in a
        blurry output
      </p>
      <CodeBlock code={snippet2} />
      <p>
        This is exactly what happens when you display a canvas on a retina
        screen 🙀.
      </p>
      <canvas
        style={{ border: '1px solid', width: 300, height: 300 }}
        id="canvas1"
        width="100px"
        height="100px"
      ></canvas>

      <h3>&rarr; Big image, small output</h3>
      <p>
        Now I create a big image with my canvas (200x200) and output it in small
        (100x100), the browser has to scale it down to display it, &rarr; crispy
        output!
      </p>
      <CodeBlock code={snippet3} />
      <p>
        Much better. But my diagonal is now wrong since it goes to 100,100,
        which is half way to 200,200. Fortunately javascript is here to the
        rescue. I will just have to use the{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scales">
          scale function
        </a>{' '}
        to automatically correct those coordinates.
      </p>
      <canvas
        style={{ border: '1px solid', width: 100, height: 100 }}
        id="canvas2"
        width="200px"
        height="200px"
      ></canvas>

      {/* Do I want to allow user to try different values here? */}
      {/* <CanvasDimensionDemo /> */}

      {/*
      //
      //
      //
      */}
      <h2 id="todo">🔨 Fixing the Canvas and Retina screens issue</h2>
      <p>To finally fix the retina bug, we need to:</p>
      <ul>
        <li>
          Control the size of the canvas output using the <b>css dimension</b>
        </li>
        <li>
          Find the device pixel ratio using <code>window.devicePixelRatio</code>
        </li>
        <li>
          Create a bigger canvas image if the pixel ratio is over 1. This is
          done thanks to the <code>width</code> and <code>height</code>{' '}
          attributes.
        </li>
        <li>
          Use the <code>scale()</code> function in our canvas context to correct
          our coordinates
        </li>
      </ul>
      <br />
      <p>
        Here are 2 examples. The first one does not apply the correction (left).
        The second does the correction (right)
      </p>
      <div className="flex flex-col items-center">
        <div className="flex justify-center gap-x-4">
          <CanvasShapeBug width={300} height={300} />
          <CanvasShape width={300} height={300} />
        </div>
        <Caption>
          On retina screens, the left shape is blurry when the right one is not.
        </Caption>
      </div>
      <p>To see the full code of those 2 examples, click the buttons below.</p>
      <CodeSandboxButton label="code with bug" vizName="CanvasShapeBug" />
      <CodeSandboxButton label="code with fix" vizName="CanvasShapeFix" />

      <br />
      <br />
      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />
      <ChartFamilySection chartFamily="general" />
      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
