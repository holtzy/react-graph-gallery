'use client';

import { Clipboard } from 'lucide-react';
import Prism from 'prismjs';
import { useRef, useEffect, useState } from 'react';
import styles from './code-block.module.css';

// Note: using prism in next.js isn't well documented.
// I've npm install prismjs
// And then call somee global css in _app.tsx.
// Babelrc stuff did not work
// see https://frendly.dev/posts/using-prism-js-in-next-js

type CodeBlockProps = {
  code: string;
};

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const codeRef = useRef(null);

  useEffect(() => {
    if (!codeRef.current) {
      return;
    }
    Prism.highlightElement(codeRef.current);
  }, [codeRef, code]);

  const copyButton = (
    <div
      onClick={() => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
      }}
      className={styles.codeChunckCopyButton}
    >
      {isCopied ? 'Copied' : <Clipboard size={14} style={{ padding: 0 }} />}
    </div>
  );

  return (
    <div className="mb-6 relative">
      <pre className="rounded-md line-numbers">
        <code ref={codeRef} className="language-javascript">
          {code}
        </code>
      </pre>
      <div className={styles.copyButtonContainer}>{copyButton}</div>
    </div>
  );
};
