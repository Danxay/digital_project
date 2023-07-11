import { FC } from 'react';

import styles from './SliderNumbers.module.scss';

interface ISliderNumbersProps {
  currentSlide: number;
  slidesCount: number;
}

export const SliderNumbers: FC<ISliderNumbersProps> = ({ currentSlide, slidesCount }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slideNumber}>{currentSlide < 10 ? `0${String(currentSlide)}` : currentSlide}</div>
      <div className={styles.slideNumber}>{slidesCount < 10 ? `0${String(slidesCount)}` : slidesCount}</div>
    </div>
  );
};
