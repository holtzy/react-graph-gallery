import styles from "./tooltip.module.css";

type TooltipProps = {
  direction: "right" | "left" | "bottom" | "top";
  text: React.ReactNode | string;
  children: React.ReactNode;
};

export const Tooltip = ({ direction, text, children }: TooltipProps) => {
  return (
    <span className={styles.tooltip + " " + styles[direction]} id={text}>
      {children}
    </span>
  );
};
