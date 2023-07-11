import { FC } from 'react';

import styles from './DoubleTitle.module.scss';

interface IDoubleTitleProps {
  first: string;
  second: string | null;
}

export const DoubleTitle: FC<IDoubleTitleProps> = ({ first, second }) => {
  return (
    <h1 className={styles.title}>
      <span className={'titleAdaptive'}>{first}</span>
      {second && <span className={'titleAdaptive'}>{second}</span>}
    </h1>
  );
};
