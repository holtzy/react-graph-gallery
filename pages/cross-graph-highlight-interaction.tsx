import React from "react";
import { Layout } from "../component/Layout";
import TitleAndDescription from "../component/TitleAndDescription";
import Contact from "../component/Contact";
import ChartFamilySection from "../component/ChartFamilySection";
import { AccordionSection } from "../component/AccordionSection";
import { CodeBlock } from "../component/UI/CodeBlock";
import { CrossGraphInteractionSharedStateDemo } from "../viz/CrossGraphInteractionSharedState/CrossGraphInteractionSharedStateDemo";
import { ChartOrSandbox } from "../component/ChartOrSandbox";
import { CrossGraphInteractionWithContextDemo } from "../viz/CrossGraphInteractionWithContext/CrossGraphInteractionWithContextDemo";
import { CrossGraphInteractionBetterRenderDemo } from "../viz/CrossGraphInteractionBetterRender/CrossGraphInteractionBetterRenderDemo";

const graphDescription = (
  <p>
    This post explains how to add cross graph interactions in a react app. It
    focus on performance, showing how a naive approach with a shared state leads
    to a disappointing result and how a react context can solve the problem.
  </p>
);

const snippet1 = `
const [group, setGroup] = useState<number | null>(null);
`.trim();

const snippet2 = `
<Barplot
  width={300}
  height={220}
  group={group}
  setGroup={setGroup}
/>
`.trim();

const snippet3 = `
style={{
  opacity: group === i ? 1 : 0.4,
}}
`.trim();

export default function Home() {
  return (
    <Layout
      title="Cross graph highlight interaction"
      seoDescription="This blogpost explains how to add a highlight interaction between different vizs of a website. It relies on react and d3.js for rendering, and uses a context for performance."
    >
      <TitleAndDescription
        title="Cross graph highlight interaction"
        description={graphDescription}
      />

      <blockquote>
        Disclaimer: the concepts explained here where showed to me by my
        colleague <a href="https://github.com/gvergnaud">Gabriel Vergnaud</a>.
      </blockquote>

      <AccordionSection
        title={"What is cross graph interaction"}
        startOpen={true}
      >
        <p>What it is.</p>
        <p>working example</p>
        <p>Why do we care?</p>
        <p>Focus on performance</p>
      </AccordionSection>

      <AccordionSection
        title={"Naive solution: a shared state"}
        startOpen={false}
      >
        <p>
          A first solution: a shared state. You defined a react state at the
          level of the component that wraps all your viz with{" "}
          <code>useState</code>:
        </p>
        <CodeBlock code={snippet1} />
        <p>
          You then pass the state and the setter function to each viz. Something
          like:
        </p>
        <CodeBlock code={snippet2} />
        <p>
          Then, for each shape item of the graph you're building, you check
          wether or not the shape should be highlighted, and changes the way
          it's rendered if so.
        </p>
        <p>
          In the example below I slightly increase the opacity, so the{" "}
          <code>div</code> as this in its style attribute:
        </p>
        <CodeBlock code={snippet3} />
        <p>Here is the result for 4 barplots with 1500 items each:</p>
        <ChartOrSandbox
          vizName={"CrossGraphInteractionSharedState"}
          VizComponent={CrossGraphInteractionSharedStateDemo}
          maxWidth={600}
          height={500}
          caption="Four barplots with 1500 groups each. Hovering a group on a chart highlights it on other charts, with very poor performances."
        />
        <p>As you can see it works, but is very slow.</p>
        <p></p>
      </AccordionSection>

      <AccordionSection title={"Improving rerendering"} startOpen={false}>
        <p>A first solution: a shared state.</p>

        <ChartOrSandbox
          vizName={"CrossGraphInteractionBetterRender"}
          VizComponent={CrossGraphInteractionBetterRenderDemo}
          maxWidth={600}
          height={500}
          caption="Four barplots with 3000 groups each. Hovering a group on a chart highlights it on other charts, with very poor performances."
        />
        <p>Why is it so slow?</p>
        <p></p>
      </AccordionSection>

      <AccordionSection
        title={"React context and event emitter to the rescue"}
        startOpen={true}
      >
        <p>Use a context to improve perf</p>
        <p>
          React documentation about{" "}
          <a href="https://reactjs.org/docs/context.html">context</a>
        </p>
        <p>
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels.
        </p>
        <p>
          Step 1 is to create the context with <code>createContext</code>.
        </p>
        <p>
          Doc about <code>CustomEvent()</code>:{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent">
            link
          </a>
          Basically you do const catFound = new CustomEvent('animalfound').
          catFound is a CustomEvent. You can trigger it with
        </p>
        <ChartOrSandbox
          vizName={"CrossGraphInteractionWithContext"}
          VizComponent={CrossGraphInteractionWithContextDemo}
          maxWidth={600}
          height={500}
          caption="Four barplots with 3000 groups each. Hovering a group on a chart highlights it on other charts, with very poor performances."
        />
      </AccordionSection>

      <AccordionSection title={"Conclusion"} startOpen={true}>
        <p>
          Article explains how to create a performant cross graph interaction
          using a react context and an event emitter.
        </p>
        <p>But there is more even more you should do</p>
        <ul>
          <li>
            use debounce and throttling to avoid too many concurrent re-renders
          </li>
          <li>don't highlight graphs that are outside of the view port</li>
        </ul>
      </AccordionSection>

      <br />
      <br />

      <hr className="full-bleed  bord er bg-gray-200 mb-3 mt-10" />

      <ChartFamilySection chartFamily="general" />

      <div className="mt-20" />
      <Contact />
    </Layout>
  );
}
