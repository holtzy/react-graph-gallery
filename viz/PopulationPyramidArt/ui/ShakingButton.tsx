import { ReactNode } from 'react';
import styles from './shaking-button.module.css';

type ShakingButtonProps = {
  children: ReactNode;
};

export const ShakingButton = ({ children }: ShakingButtonProps) => {
  return (
    <div id="toto" className={styles.shakeButtonContainer}>
      {children}
    </div>
  );
};
