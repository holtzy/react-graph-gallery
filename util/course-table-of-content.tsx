import Link from "next/link";
import { ReactNode } from "react";

export type TocItem = {
  name: string;
  title: string;
  description: ReactNode;
  url: string;
  isFree?: boolean;
  isNew?: boolean;
  isAvailable?: boolean;
  isEndOfModule?: boolean; // if last lesson of module, triggers a modal when user clicks next.
  time?: number;
  exoNumber?: number;
};

export type ModuleDescription = {
  name: string;
  description: ReactNode;
  toc: TocItem[];
  moduleNumber: number;
  color: string;
};

export type CourseTableOfContent = ModuleDescription[];

export const courseTableOfContent: CourseTableOfContent = [
  {
    name: "Foundations of ggplot2",
    color: "var(--set1-red)",
    description: (
      <>
        <p>
          A structured introduction to the <b>Grammar of Graphics</b>, the core
          philosophy behind <code>ggplot2</code>. You'll gain a deep
          understanding of how aesthetics, geometric and statistical layers, and
          scales interact to build visualizations with <code>ggplot2</code>.
        </p>
        <p>
          <b>
            Mastering the foundations will elevate your entire visualization
            workflow 🏗️
          </b>
          <br></br>A solid grasp of the conceptual principles saves time,
          reduces frustration, and provides the flexibility to tackle any
          visualization challenge with confidence!
        </p>
      </>
    ),
    moduleNumber: 1,
    toc: [
      {
        name: "Why R and ggplot2?",
        title: "Crafting Data Visualizations: Why R and ggplot2?",
        description: (
          <>
            <p>
              What makes <code>ggplot2</code> different — and why should you
              choose it over tools like Excel or Tableau? This lesson dives into
              what sets <code>R</code> and <code>ggplot2</code> apart when it
              comes to{" "}
              <b>customization, reproducibility, and the power of code</b>.
            </p>
            <p>
              Let's get a clear sense of when and why to reach for{" "}
              <code>ggplot2</code> — and how it fits into the broader data
              visualization landscape.
            </p>
          </>
        ),
        url: "/module1/why-ggplot", // Link is folder name in /app/module1/
        isFree: true,
        isAvailable: true,
        time: 5,
        exoNumber: 0,
      },
      {
        name: "Principles of ggplot2",
        title: "Principles of ggplot2: Understanding Components",
        description: (
          <>
            <p>
              Unlike many other charting libraries, <code>ggplot2</code> doesn’t
              provide functions for specific chart types like{" "}
              <code>scatterplot()</code> or
              <code>boxplot()</code>. Instead, it follows the grammar of
              graphics: a structured yet flexible approach where{" "}
              <b>plots are built from components</b> like sentences from words.
            </p>
            <p>
              Let’s look at how this “sentence-building” approach works — and
              why it’s such a powerful way to visualize data!
            </p>
          </>
        ),
        url: "/module1/principles",
        isFree: true,
        isAvailable: true,
        time: 6,
        exoNumber: 6,
      },
      {
        name: "Aesthetics: Fundamentals",
        title: "Aesthetics: Mapping Data to Visual Properties",
        description: (
          <>
            <p>
              Every plot in <code>ggplot2</code> begins with aesthetic mappings:{" "}
              <b>which variables you want to show, and how</b> you want to
              represent them visually.
            </p>
            <p>
              In this lesson, you’ll learn how to map data to position, color,
              size, shape, and more — and how these choices influence how your
              audience reads and interprets your plot.
            </p>
            <p>
              For a quick overview of available aesthetics and usage examples,
              check out the <Link href="#explorer">aesthetics explorer</Link>{" "}
              widget at the end of the lesson!
            </p>
          </>
        ),
        url: "/module1/aesthetics",
        isFree: false,
        isAvailable: true,
        time: 10,
        exoNumber: 6,
      },
      {
        name: "Aesthetics: Caveats",
        title: "Aesthetics: Handling Caveats When Mapping Variables",
        description: (
          <>
            <p>
              Aesthetic mappings are powerful — but they can sometimes produce{" "}
              <b>unexpected results</b>. In this session, we’ll explore{" "}
              <b>common pitfalls</b> that trip up even experienced users — from
              missing legends to confusing lines or plots that just don’t “look
              right.”
            </p>
            <p>
              You’ll learn to spot, understand, and fix these issues — so you
              can <b>debug your plots with confidence</b> and avoid frustration
              down the line.
            </p>
          </>
        ),
        url: "/module1/aesthetics-caveats",
        isFree: false,
        isAvailable: true,
        time: 8,
        exoNumber: 5,
      },
      {
        name: "Geometric Layers",
        title: "Geometric Layers: Choosing the Visual Representation",
        description: (
          <>
            <p>
              Bars, lines, points, and beyond — geometric layers define how your
              data appears on your panel. Think of them as the “verbs” in your
              visualization sentence.
            </p>
            <p>
              This lesson explores how to pick the right geom for the job and
              how different layers can be combined to tell richer, more nuanced
              stories.
            </p>
          </>
        ),
        url: "/module1/geoms",
        isFree: false,
        isAvailable: true,
        time: 11,
        exoNumber: 5,
      },
      {
        name: "Statistical Layers",
        title: "Statistical Layers: Transforming Data Before Plotting",
        description: (
          <>
            <p>
              Every geom in <code>ggplot2</code> applies a statistical
              transformation to processes your raw data before plotting. So far,
              you’ve mostly used geoms and let their default stats do the work
              behind the scenes. But sometimes, the defaults are not what you
              need.
            </p>
            <p>
              In this lesson, we’ll explore how to{" "}
              <b>explicitly control statistical transformations</b> in layers.
              Understanding the link between geoms and stats — and when to
              switch or customize them — helps you create clearer, more advanced
              visualizations.
            </p>
          </>
        ),
        url: "/module1/stats",
        isFree: false,
        isAvailable: true,
        time: 6,
        exoNumber: 5,
      },
      {
        name: "Coordinate Systems",
        title: "Coordinate Systems: Setting the Stage for Your Plot",
        description: (
          <>
            <p>
              Coordinate systems determine how data is projected onto the
              plotting canvas. They influence the layout, orientation, and even
              the perceived shape of your geometries.
            </p>
            <p>
              From the brand-new <code>coord_radial()</code> to flexible options
              like <code>coord_trans()</code>, you'll learn how different
              coordinate systems can reshape your plot — and your perspective on
              your data.
            </p>
          </>
        ),
        url: "/module1/coordinates",
        isFree: false,
        isAvailable: true,
        time: 5,
        exoNumber: 5,
      },
      {
        name: "Scales",
        title: "Scales: Defining How Data is Mapped to Aesthetics",
        description: (
          <>
            <p>
              Scales determine how raw data gets converted into colors, sizes,
              axes, and more. They’re the link between data values and their
              visual representation.
            </p>
            <p>
              From color palettes to log transforms, you’ll learn how to take
              full control over the look and feel of your plots — without
              changing the data itself.
            </p>
          </>
        ),
        url: "/module1/scales",
        isFree: false,
        isAvailable: true,
        time: 9,
        exoNumber: 6,
      },
      {
        name: "Exporting Plots",
        title: "Exporting Plots: Saving High-Quality Graphics",
        description: (
          <>
            <p>
              You've crafted your viusalization — now what? Time to share it!
              This lesson covers how to export high-quality graphics from R for
              papers, slides, or social media.
            </p>
            <p>
              Learn which formats to choose, how to control resolution, and what
              to watch out for when saving plots across platforms.
            </p>
          </>
        ),
        url: "/module1/export",
        isFree: true,
        isAvailable: true,
        time: 6,
        exoNumber: 0,
      },
      {
        name: "Project",
        title: "Your Turn: Real-World Project",
        description: (
          <>
            <p>
              <span className="simple-highlight-teal">
                &nbsp;Congrats!&nbsp;
              </span>{" "}
              🥳 You’ve completed the first module! You now have a clear
              understanding of what ggplot2 is and how to create and save your
              own charts.
            </p>
            <p>
              Now, let's put this knowledge into practice with real-world
              datasets, before we take your skills to the next level! 🚀
            </p>
          </>
        ),
        url: "/module1/project",
        isFree: false,
        isAvailable: true,
        time: 20,
        exoNumber: 0,
      },
    ],
  },
  //
  //
  // MODULE 2
  //
  //
  //
  {
    name: "Customization & Styling",
    color: "var(--set1-orange)",
    description: (
      <>
        <p>
          How to customize and style visualizations to make them clear,
          accessible, and publication-ready. You'll explore themes for
          consistent design, fine-tune <code>scale_*()</code> functions,
          customize color palettes, and enhance legends to ensure your plots
          align with your specific needs and branding.
        </p>
        <p>
          <b>
            Creating polished visualizations will allow you to leave a lasting
            impression 🎨
          </b>
          <br></br>
          Moving beyond default settings will help you craft charts that are not
          only informative but also visually compelling, consistent, and
          professionally designed!
        </p>
      </>
    ),
    moduleNumber: 2,
    toc: [
      {
        name: "Complete Themes",
        title: "Complete Themes: Quickly Change the Style of Your Plots",
        description: (
          <>
            <p>
              Themes control the <b>overall style</b> of your plots — from
              typefaces and font settings to grid lines, backgrounds, and
              margins. They’re what make a chart feel clean, polished, and
              consistent.
            </p>

            <p>
              In this lesson, you’ll learn how to apply and adjust complete
              themes to give your plots a <b>cohesive look</b> without touching
              the underlying data or mappings. By the end, you’ll know how to
              switch between built-in themes, customize them, and make your
              charts presentation-ready with just a few lines of code.
            </p>
          </>
        ),
        url: "/module2/complete-themes",
        isFree: true,
        isAvailable: true,
        time: 4,
        exoNumber: 2,
      },
      {
        name: "Custom Themes",
        title: "Custom Themes: Fine-Tune Your Plot's Appearance",
        description: (
          <>
            <p>
              In the{" "}
              <Link href="/module2/complete-themes">previous lesson</Link>, we
              explored how to use complete themes. But to create a true visual
              identity, you need to know how to <b>customize themes</b>.
            </p>

            <p>
              It's time to dive deep into the{" "}
              <b>
                <code>theme()</code>
              </b>{" "}
              function and learn how to modify every aspect of your charts.
              Let's forget the defaults and make your visuals match your brand
              and publication style!
            </p>
          </>
        ),
        url: "/module2/custom-themes",
        isFree: false,
        isAvailable: true,
        time: 7,
        exoNumber: 4,
      },
      {
        name: "Color Choice",
        title: "Color Choice: Picking Palettes with Purpose",
        description: (
          <>
            <p>
              Great visualizations don’t use color just for decoration — they
              use it to <b>clarify, emphasize, and guide</b>. Effective color
              choices make your plots readable, accurate, and inclusive.
              Choosing colors thoughtfully helps avoid misleading impressions
              and highlights the patterns that matter most.
            </p>

            <p>
              This <b>no-code lesson focusses on how to choose colors</b> with
              both purpose and accessibility in mind: selecting well-designed
              palettes, ensuring color-blind safety and sufficient contrast, and
              applying principles that make visualizations clearer and more
              reliable for everyone.
            </p>
          </>
        ),
        url: "/module2/color-choice",
        isFree: false,
        isAvailable: true,
        time: 9,
        exoNumber: 0,
      },
      {
        name: "Color Palettes",
        title: "Color Palettes: Moving Beyond ggplot2 Defaults",
        description: (
          <>
            <p>
              Colors are one of the most powerful tools to tell a story with
              your data. In this lesson, you’ll use color to highlight patterns,
              reinforce categories, and make your plots more readable — all
              while moving beyond
              <code>ggplot2</code>’s default palettes.
            </p>

            <p>
              You’ll explore built-in palettes, learn to tweak scales for
              impact, and discover popular community palettes like
              <code>viridis</code> and <code>RColorBrewer</code>. Along the way,
              you’ll also see how to craft custom palettes, giving you full
              flexibility without getting lost in options.
            </p>
          </>
        ),
        url: "/module2/palettes",
        isFree: false,
        isAvailable: true,
        time: 13,
        exoNumber: 7,
      },
      {
        name: "Legend Styling",
        title: "Legend Styling: Highlight What Matters",
        description: (
          <>
            <p>
              Legends bridge the gap between <b>data</b> and <b>perception</b> —
              they help viewers decode colors, shapes, and lines at a glance.
              But a cluttered or confusing legend can break that connection
              fast.
            </p>
            <p>
              You’ll learn how to customize legend placement, direction, titles,
              spacing, and keys with <code>guides()</code> and{" "}
              <code>theme()</code>. By the end, your legends will complement
              your story instead of competing with it.
            </p>
          </>
        ),
        url: "/module2/legend-styling",
        isFree: false,
        isAvailable: true,
        time: 12,
        exoNumber: 8,
      },
      {
        name: "Project",
        title: "Your Turn: Real-World Project",
        description: (
          <>
            <p>
              <span className="simple-highlight-teal">
                &nbsp;Congrats!&nbsp;
              </span>{" "}
              🥳 You’ve completed the second module! You now know how to
              customize a chart to make it pretty and aligned with your brand.
            </p>
            <p>
              Now, let's put this knowledge into practice with real-world
              datasets, before we take your skills to the next level! 🚀
            </p>
          </>
        ),
        url: "/module2/project",
        isFree: false,
        isAvailable: true,
        time: 20,
        exoNumber: 0,
      },
    ],
  },

  //
  //
  //
  // MODULE 3
  //
  {
    name: "Labels, Titles & Annotations",
    color: "var(--set1-gold)",
    description: (
      <>
        <p>
          This module covers techniques to enhance readability and communication
          in your plots. You’ll learn to add informative titles, captions, and
          annotations, use smart text placement with <code>ggrepel</code> and{" "}
          <code>geomtextpath</code>, and explore advanced text rendering options
          for better storytelling.
        </p>
        <p>
          <b>
            Elevate your storytelling techniques by crafting charts that not
            just show data—but guide your audience with clarity 🎯
          </b>
          <br></br>
          Clear and well-placed text elements make your visualizations more
          engaging, helping viewers understand key insights at a glance.
        </p>
      </>
    ),
    moduleNumber: 3,
    toc: [
      {
        name: "Titles & Captions",
        title: "Titles & Captions: Adding Context to Your Plots",
        description: (
          <>
            <p>
              A strong title can turn a good chart into a clear message.
              Subtitles, captions, and tags provide context, guide
              interpretation, and make your visual narrative easier to follow.
            </p>

            <p>
              In this lesson, you’ll learn how to craft effective titles and
              apply best-practice principles for hierarchy and clarity. We’ll
              cover all label options that are available and demonstrate
              practical styling techniques to make titles, subtitles, and
              captions feel intentional and well-balanced.
            </p>
          </>
        ),
        url: "/module3/titles-captions",
        isFree: true,
        isAvailable: true,
        time: 9,
        exoNumber: 0,
      },
      {
        name: "Annotations & Callouts",
        title:
          "Annotations & Callouts: Guiding the Viewer with Additional Insights",
        description: (
          <>
            <p>
              Sometimes the story lives in a single point, line, or trend — and
              annotations help you draw attention to it. They turn raw data into
              clear communication.
            </p>
            <p>
              You’ll explore <code>annotate()</code>, <code>geom_text()</code>,
              and <code>geom_label()</code> for direct text notes, along with
              arrows, boxes, and shapes to call out important findings. Learn to
              emphasize without overwhelming.
            </p>
          </>
        ),
        url: "/module3/annotations",
        isFree: false,
        isAvailable: true,
        time: 9,
        exoNumber: 7,
      },
      {
        name: "Smart Label Placement",
        title: "Smart Label Placement: Minimizing Effort for Clear Annotations",
        description: (
          <>
            <p>
              Labels can make or break a plot — too many and it’s cluttered, too
              few and it’s cryptic. The trick is to let text breathe while
              keeping it close to its data points.
            </p>
            <p>
              This lesson introduces strategies and packages like{" "}
              <code>ggrepel</code> to automatically avoid overlaps and
              collisions. You’ll learn to position text dynamically so every
              label stays readable and elegant.
            </p>
          </>
        ),
        url: "/module3/smart-labels",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 8,
      },
      {
        name: "Text Styling",
        title: "Text Styling: Advanced Formatting and Rendering Techniques",
        description: (
          <>
            <p>
              Typography gives your visualization personality and polish. Beyond
              size and font family, text styling can highlight structure,
              hierarchy, and emotion.
            </p>
            <p>
              Here, you’ll explore advanced formatting with{" "}
              <code>element_text()</code>, inline markdown, and rich-text
              rendering. From bold emphasis to multi-color annotations, learn
              how to make your textual elements both expressive and consistent.
            </p>
          </>
        ),
        url: "/module3/styling-text",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Project",
        title: "Your Turn: Real-World Project",
        description: (
          <>
            <p>
              <span className="simple-highlight-teal">
                &nbsp;Congrats!&nbsp;
              </span>{" "}
              🥳 You’ve completed the third module! Labels, annotation and text
              is a core part of a great chart and you now master them with R and
              ggplot2.
            </p>
            <p>
              Now, let's put this knowledge into practice with real-world
              datasets, before we take your skills to the next level! 🚀
            </p>
          </>
        ),
        url: "/module3/project",
        isFree: false,
        isAvailable: false,
        time: 20,
        exoNumber: 0,
      },
    ],
  },

  //
  //
  //
  //
  //
  {
    name: "Plot Composition",
    color: "var(--set1-teal)",
    description: (
      <>
        <p>
          This module teaches you how to arrange multiple plots into a coherent
          narrative. You'll learn about small multiples, advanced faceting
          techniques, and multi-plot layouts to structure visualizations
          effectively.
        </p>
        <p>
          <b>
            Learning to structure multiple plots effectively will transform your
            visualizations into a compelling narrative 📚
          </b>
          <br></br>
          Mastering plot composition allows you to showcase trends, compare
          categories, and communicate complex insights with clarity.
        </p>
      </>
    ),
    moduleNumber: 4,
    toc: [
      {
        name: "Small Multiples",
        title: "Small Multiples: Comparing Subsets with Facets",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module4/small-multiple",
        isFree: true,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Hierarchical Facets",
        title: "Hierarchical Facets: Advanced Layouts for Small Multiples",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module4/facets-advanced",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Multi-Plot Layouts",
        title: "Multi-Plot Layouts: The Composition of Charts",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module4/plot-layouts",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
    ],
  },

  //
  //
  //
  //
  //
  {
    name: "Visualizing Spatial Data",
    color: "var(--set1-purple)",
    description: (
      <>
        <p>
          This module covers the essentials of working with spatial data in{" "}
          <code>ggplot2</code>
          and <code>sf</code>. You’ll learn how to create maps, customize
          spatial layers, and fine-tune geographic visualizations for effective
          storytelling.
        </p>
        <p>
          <b>
            Building spatial visualizations helps you explore geographic
            insights and reveal meaningful patterns 🗺️
          </b>
          <br></br>
          Whether you’re analyzing geographic trends or presenting
          location-based insights, learning how to create well-designed spatial
          visualizations allows you to add depth and clarity to your data.
        </p>
      </>
    ),
    moduleNumber: 5,
    toc: [
      {
        name: "Spatial Data",
        title: "Spatial Data: The Basics of Geospatial Information",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module6/spatial-data",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Maps with ggplot2",
        title: "Maps with ggplot2: Plotting Geospatial Data",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module6/maps-basics",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Customizing Maps",
        title: "Customizing Maps: Enhancing Spatial Visualization",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module6/maps-custom",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Tile Grid Maps",
        title: "Tile Grid Maps: Creating Spatial Small Multiples",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module6/spatial-data",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
    ],
  },

  //
  //
  //
  //
  //
  {
    name: "Interactivity & Animation",
    color: "var(--set1-blue)",
    description: (
      <>
        <p>
          This module introduces interactive and animated visualizations to make
          your data more engaging. You’ll explore quick interactive plots with{" "}
          <code>plotly</code>, more refined interactive charts with{" "}
          <code>ggiraph</code>, and dynamic animations using{" "}
          <code>gganimate</code>.
        </p>
        <p>
          <b>
            Crafting interactive and animated visualizations empowers your
            audience to explore details and engage with your findings 🕹️
          </b>
          <br></br>
          Interactive and animated charts make your insights more intuitive,
          helping users explore data in a way that static plots simply can’t.
        </p>
      </>
    ),
    moduleNumber: 6,
    toc: [
      {
        name: "Instant Interactivity with plotly",
        title: "Instant Interactivity with plotly: A Quick Wrapper for ggplot2",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module5/interactivity-plots",
        isFree: true,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Custom Interactivity with ggiraph",
        title:
          "Custom Interactivity with ggiraph: Interactive Charts without Losing Elegance",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module5/interactivity-ggiraph",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Styling Tooltips & Effects",
        title:
          "Styling Tooltips & Effects: Making Interactive Charts More Engaging",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module5/tooltips-hover-effects",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
      {
        name: "Animated Charts",
        title: "Animated Charts: Unveiling Insights Step-by-Step",
        description: (
          <>
            <p>Work in progress</p>
          </>
        ),
        url: "/module5/animations",
        isFree: false,
        isAvailable: false,
        time: 9,
        exoNumber: 4,
      },
    ],
  },
];

//
//
//
//
//
//
//
//
//
//
//
export const bonusBasicRTableOfContent: TocItem[] = [
  {
    name: "Quick Intro to R",
    title: "Getting Started: A Quick Introduction to R",
    description: (
      <>
        <p>
          Welcome to the world of R! If you’re new here, don’t worry — you don’t
          need to be a coding wizard to get things done. R is a programming
          language designed with data in mind, and with the right tools, it
          becomes surprisingly intuitive.
        </p>
        <p>
          In this short bonus lesson, we’ll walk you through the essential
          building blocks of R: how to store values in objects, use functions,
          and load packages. Just enough to help you feel at home before jumping
          into our data visualization course!
        </p>
      </>
    ),
    url: "/bonus/intro-to-r",
    isAvailable: true,
    time: 7,
    exoNumber: 7,
  },
  {
    name: "Your Own Project",
    title: "Working on Your Own R Project",
    description: (
      <>
        <p>
          This course lets you run R code directly in our sandboxes. But in real
          life, you’ll need to <b>work with R in your own setup</b> to analyze
          data and create your own graphs.
        </p>
        <p>
          This bonus lesson shows how to work efficiently with R: using an{" "}
          <b>IDE</b>, writing <b>scripts</b>, loading <b>data</b>, and{" "}
          <b>visualizing</b> results without drowning in a messy workspace. By
          the end, you’ll have the skills to start your own projects with
          confidence and reproducibility.
        </p>
      </>
    ),
    url: "/bonus/own-r-project",
    isAvailable: true,
    time: 8,
    exoNumber: 4,
  },
  {
    name: "Data Wrangling Basics",
    title: "Data Wrangling Basics: Transform Your Data Sets for ggplot2",
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: "/bonus/data-wrangling",
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: "Publish Your Work",
    title: "Publish Your Work: How to Share Your ggplot2 Graphic",
    description: (
      <>
        <p>
          At the end of this course you'll build great charts with ggplot2. But
          their impact stays <b>limited</b> if they never leave your local
          machine.
        </p>
        <p>
          This lesson shows how to <b>package</b>, <b>store</b>, and{" "}
          <b>share</b> your work in a way that is safe, reproducible, and easy
          for others to read and reuse.
        </p>
      </>
    ),
    url: "/bonus/publish",
    isAvailable: true,
    time: 8,
    exoNumber: 0,
  },
];

export const bonusTipsAndTricksTableOfContent: TocItem[] = [
  {
    name: "Common Pitfalls",
    title: "Common Pitfalls: Debugging Dilemmas & Troubleshooting Tips",
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: "/bonus/pitfalls",
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: "Beyond Basic Geoms",
    title: "Beyond Basic Geoms: Exploring Specialized Chart Types",
    description: (
      <>
        <p>here</p>
        <p>here</p>
      </>
    ),
    url: "/bonus/beyond-basic-geoms",
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: "Exciting Ectensions",
    title: "Exciting Extensions: Overview of Powerful Packages for ggplot2",
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: "/bonus/exciting-extensions",
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: "Record Your Process",
    title: "Record Your Process: Creating Step-by-Step Videos with camcorder",
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: "/bonus/camcorder",
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
  {
    name: "Further Learning",
    title: "Further Learning: Books, Courses & Additional Resources",
    description: (
      <>
        <p>Work in progress</p>
      </>
    ),
    url: "/bonus/resources",
    isAvailable: false,
    time: 8,
    exoNumber: 4,
  },
];
