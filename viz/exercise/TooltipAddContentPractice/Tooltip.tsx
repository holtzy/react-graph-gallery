import styles from './tooltip.module.css';

type InteractionData = {
  xPos: number;
  yPos: number;
  name: string;
};

type TooltipProps = {
  interactionData: InteractionData | undefined;
};

export const Tooltip = ({ interactionData }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  const { xPos, yPos, name } = interactionData;

  return (
    <div
      className={styles.tooltip}
      style={{
        left: xPos,
        top: yPos,
      }}
    >
      <b className={styles.title}>{name}</b>
    </div>
  );
};
