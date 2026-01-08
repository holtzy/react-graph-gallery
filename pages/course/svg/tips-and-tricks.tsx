import React, { useState } from 'react';
import Link from 'next/link';
import TitleAndDescription from '@/component/TitleAndDescription';
import { LayoutCourse } from '@/component/LayoutCourse';
import { lessonList } from '@/util/course-table-of-content';
import { CodeSandbox } from '@/component/CodeSandbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/UI/select';
import { Sidenote } from '@/component/SideNote';
import { MoveHorizontal, MoveVertical } from 'lucide-react';
import { CodeBlock } from '@/component/UI/CodeBlock';

const previousURL = '/course/svg/path-element';
const currentURL = '/course/svg/tips-and-tricks';
const nextURL = '/course/scales/introduction';
const seoDescription = '';

const alignmentBaselineValues = [
  'auto',
  'baseline',
  'before-edge',
  'text-before-edge',
  'middle',
  'central',
  'after-edge',
  'text-after-edge',
  'ideographic',
  'alphabetic',
  'hanging',
  'mathematical',
  'inherit',
] as const;

type AlignmentBaseline = (typeof alignmentBaselineValues)[number];

const textAnchorValues = ['start', 'middle', 'end', 'inherit'] as const;

type TextAnchor = (typeof textAnchorValues)[number];

export default function Home() {
  const currentLesson = lessonList.find((l) => l.link === currentURL);

  const [alignmentBaseline, setAlignmentBaseline] =
    useState<AlignmentBaseline>('baseline');
  const [textAnchor, setTextAnchor] = useState<TextAnchor>('start');

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
              By now, SVG might seem straightforward, but trust me,{' '}
              <b>it has its quirks</b> that can make your data visualization
              journey challenging.
            </p>
            <p>
              In this lesson, I'll share some tips and tricks that can{' '}
              <b>save yo hours of frustration</b> — lessons I learned the hard
              way.
            </p>
          </>
        }
      />

      <h2>1️⃣ SVG Elements Don’t Have a Background Color</h2>
      <p>
        Unlike HTML elements, SVG elements do not support background colors
        directly. They also do not support <b>borders</b>.
      </p>
      <p>
        If you want to create a background or add a border to your SVG, you need
        to draw a <b>rectangle that covers the desired area</b>. CSS properties
        like <code>background-color</code> or <code>fill</code> or{' '}
        <code>border</code> on the SVG element itself are not recognized and
        will be ignored.
      </p>
      <p>Example:</p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="exercise/SvgStackingOrderSolution" />
      </div>

      <h2>2️⃣ Text Alignment in SVG</h2>
      <p>
        Text alignment in SVG works differently compared to HTML. You can
        control both horizontal and vertical alignment using the{' '}
        <code>text-anchor</code> and <code>alignment-baseline</code> properties,
        which are unique to SVG.
      </p>

      <div className="relative">
        <Sidenote
          text={
            <p>
              Remember, in JSX, CSS properties should be camelCased (e.g.,{' '}
              <code>textAnchor</code> instead of <code>text-anchor</code>).
            </p>
          }
        />
      </div>

      <p>
        <br />
      </p>
      <p>Here’s a summary of how they work:</p>
      <div className="flex items-center justify-start gap-4">
        <MoveHorizontal />
        <span>
          <code>text-anchor</code> controls the horizontal alignment &rarr;
        </span>
        <Select
          value={textAnchor}
          onValueChange={(value) => setTextAnchor(value as TextAnchor)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue>{textAnchor}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {textAnchorValues.map((val, i) => {
              return (
                <SelectItem key={i} value={val}>
                  {val}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-start gap-4 mt-2 mb-8">
        <MoveVertical />
        <span>
          <code>alignment-baseline</code> controls the vertical alignment &rarr;
        </span>
        <Select
          value={alignmentBaseline}
          onValueChange={(value) =>
            setAlignmentBaseline(value as AlignmentBaseline)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue>{alignmentBaseline}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {alignmentBaselineValues.map((val, i) => {
              return (
                <SelectItem key={i} value={val}>
                  {val}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <svg width="500" height="300">
        <rect width="100%" height={'100%'} stroke="black" fill="none" />
        <circle cx={250} cy={150} r={5} />
        <text
          x={250}
          y={150}
          fontSize={30}
          alignmentBaseline={alignmentBaseline}
          textAnchor={textAnchor}
        >
          This is some text
        </text>
      </svg>

      <h2>
        3️⃣ Grouping Elements with <code>&lt;g&gt;</code>
      </h2>
      <p>
        The <code>&lt;g&gt;</code> element in SVG is used to group multiple
        elements together.
      </p>
      <p>
        This is especially useful for applying transformations, styles, or
        events to a collection of elements as a single unit.
      </p>
      <CodeBlock
        code={`
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="black">
    <circle cx="50" cy="50" r="40" />
    <rect x="100" y="100" width="80" height="80" />
    <line x1="20" y1="20" x2="180" y2="180" />
  </g>
</svg>
`.trim()}
      />
      {/* -
      -
      -
      -
      -
      -
      -
      -
      -
       */}
      <h2>4️⃣ Stroke, Fill, and Color: Different from HTML</h2>
      <p>
        In SVG, the concepts of <code>stroke</code>, <code>fill</code>, and{' '}
        <code>color</code> work differently than in standard HTML.
      </p>
      <p>
        The <code>fill</code> property controls the interior color of shapes,
        while <code>stroke</code> affects the outline. Unlike <code>div</code>{' '}
        elements, SVG shapes don’t have separate properties for borders and
        backgrounds; instead, you use <code>stroke</code> and <code>fill</code>{' '}
        to control these aspects.
      </p>

      <p>
        <br />
      </p>

      <blockquote className="bg-fuchsia-50 py-8">
        For text elements, avoid using <code>stroke</code> to outline text, as
        it can result in poor readability. Instead, focus on using{' '}
        <code>fill</code> for color and <code>text-anchor</code> for alignment.
      </blockquote>

      <h2>5️⃣ Inheritance Rules</h2>
      <p>
        In HTML, styling generally doesn’t inherit by default (e.g., a color
        applied to a <code>div</code> doesn’t affect child elements unless they
        inherit it explicitly). In SVG, many properties do inherit by default,
        especially graphic-specific ones. For example, fill and stroke values
        applied to an SVG container <code>g</code> (group) element will cascade
        down to all children unless overridden. This makes grouping styles
        common in SVG.
      </p>

      <h2>6️⃣ Text Wrapping</h2>
      <p>
        In SVG, there is{' '}
        <b>no built-in functionality for automatic text wrapping</b> like you
        would find in HTML or CSS. 😱
      </p>
      <p>
        You have to manage text wrapping manually or use JavaScript libraries to
        handle it.
      </p>
      <p>
        This is very very annoying. In practice, we'll often use a HTML layer on
        top of the SVG layer to add text (like in tooltips) to make our life
        simpler.
      </p>

      <h2>7️⃣ SVG Dimensions: The Impact of “100%”</h2>
      <p>
        Setting SVG dimensions to "100%" can lead to unexpected results,
        especially in responsive designs. SVGs can scale based on their
        container, but how they scale depends on the <code>viewBox</code> and{' '}
        <code>preserveAspectRatio</code> attributes. Understanding these
        attributes is key to ensuring your SVGs display correctly across
        different screen sizes. For more details, refer to our{' '}
        <Link href="/course/responsiveness/introduction">
          module on responsiveness
        </Link>
        .
      </p>

      <h2>8️⃣ Filters, Blur Effects, and Gradients</h2>
      <p>
        SVG offers powerful capabilities for applying visual effects, such as
        filters and gradients. Filters like <code>blur</code>,{' '}
        <code>drop-shadow-sm</code>, and <code>grayscale</code> can add depth and
        dimension to your graphics. Gradients allow for smooth transitions
        between colors, which can be applied to fills or strokes, adding
        richness to your visualizations.
      </p>

      <h2>9️⃣ Stacking Order Matters</h2>
      <p>
        In SVG, elements are rendered in the order they appear in the markup,
        creating a natural stacking order. This means that the order of elements
        in your SVG code affects their visual layering. Elements later in the
        code will appear on top of earlier ones, so careful planning is needed
        when layering elements to achieve the desired visual effect.
      </p>
      <div className="full-bleed my-4 max-w-7xl mx-auto">
        <CodeSandbox vizName="/exercise/SvgStackingOrderSolution" />
      </div>

      <h2>🔟 Dealing with Blurry SVG Elements</h2>
      <p>
        SVG elements can sometimes appear blurry, especially when scaled. This
        is often due to anti-aliasing, which can smooth edges but also cause
        them to lose sharpness. To fix this, you can use the{' '}
        <code>shape-rendering="crispEdges"</code> property to make edges appear
        sharper, especially for pixel-perfect designs.
      </p>
    </LayoutCourse>
  );
}
