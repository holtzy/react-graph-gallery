import styles from './tooltip.module.css';

export type InteractionData = {
  xPos: number;
  yPos: number;
  name: string;
  xValue: number;
  yValue: number;
  color: string;
};

type TooltipProps = {
  interactionData: InteractionData | null;
};

export const Tooltip = ({ interactionData }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  const { xPos, yPos, name, xValue, yValue, color } = interactionData;

  return (
    <div
      className={styles.tooltip}
      style={{
        left: xPos,
        top: yPos,
        borderColor: color,
      }}
    >
      <b className={styles.title}>{name}</b>
      <p>{'x: ' + xValue}</p>
      <p>{'y: ' + yValue}</p>
    </div>
  );
};
