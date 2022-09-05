import React, { useState, useEffect } from "react";
import styles from "./table-of-content.module.css";

// This component find all the h2 in a document.
// It reads the id of those titles and add a toc listing them

export default function TableOfContent() {
  const [nodes, setNodes] = useState<HTMLElement[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("h2"));
    setNodes(nodes);
  }, []);

  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    const scrollHandler = () => {
      // position of each node
      const offsets = nodes.map(
        (el) => el.offsetTop - el.scrollTop + el.clientTop
      );

      // current position of the user = 150 px below the top of the screen
      const currentVisualizedLocation = window.scrollY + 150;

      // what is the closest node?
      const closest = offsets.reduce((prev, curr) => {
        return Math.abs(curr - currentVisualizedLocation) <
          Math.abs(prev - currentVisualizedLocation)
          ? curr
          : prev;
      }, 0);
      const activeIndex = offsets.findIndex((offset) => offset === closest);

      setActive(activeIndex === -1 ? 0 : activeIndex);
    };
    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [nodes]);

  return (
    <div className={styles.tableOfContent}>
      {nodes.map((node, i) => (
        <p
          key={node.id}
          className={
            active === i
              ? `${styles.tocItem} ${styles.tocItemActive}`
              : styles.tocItem
          }
          onClick={(event) => {
            event.preventDefault();
            nodes[i].scrollIntoView({
              behavior: `smooth`,
              block: `start`,
              alignToTop: true,
            });
          }}
        >
          {node.id.charAt(0).toUpperCase() + node.id.slice(1)}
        </p>
      ))}
    </div>
  );
}
