import cn from 'classnames';
import { FC } from 'react';

import styles from './PrimaryGoals.module.scss';

import OneIcon from '@icons/one.svg';
import TwoIcon from '@icons/two.svg';

export const PrimaryGoals: FC = () => {
  return (
    <section className={cn('container', styles.content)}>
      <h1 className={cn(styles.title, 'titleAdaptive')}>Основные задачи</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <OneIcon />
          Создание комфортных условий и повышение качества обслуживания клиентов
        </div>
        <div className={styles.item}>
          <TwoIcon />
          Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового
          оборудования и усиленной рекламы на рынке
        </div>
      </div>
    </section>
  );
};
