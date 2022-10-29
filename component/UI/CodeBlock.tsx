import Prism from "prismjs";
import { useRef, useEffect } from "react";

// Note: using prism in next.js isn't well documented.
// I've npm install prismjs
// And then call somee global css in _app.tsx.
// Babelrc stuff did not work
// see https://frendly.dev/posts/using-prism-js-in-next-js

type CodeBlockProps = {
  code: string;
};
export const CodeBlock = ({ code }: CodeBlockProps) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) {
      return;
    }
    Prism.highlightElement(codeRef.current);
  }, [codeRef, code]);

  return (
    <div className="mb-6">
      <pre className="rounded-md line-numbers">
        <code ref={codeRef} className="p-0 language-js">
          {code}
        </code>
      </pre>
    </div>
  );
};
