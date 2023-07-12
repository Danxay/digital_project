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
      {second && <b className={'titleAdaptive'}>{second}</b>}
    </h1>
  );
};
