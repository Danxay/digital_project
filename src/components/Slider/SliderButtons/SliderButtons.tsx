import { FC } from 'react';

import styles from './SliderButtons.module.scss';

import ArrowIcon from 'assets/icons/arrow.svg';

interface ISliderButtonsProps {
  changeSlide: (direction: -1 | 1) => void;
}

export const SliderButtons: FC<ISliderButtonsProps> = ({ changeSlide }) => {
  const prevSlideClick = (): void => {
    changeSlide(-1);
  };
  const nextSlideClick = (): void => {
    changeSlide(1);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.prevBtn} onClick={prevSlideClick}>
        <ArrowIcon />
      </button>
      <button className={styles.nextBtn} onClick={nextSlideClick}>
        <ArrowIcon />
      </button>
    </div>
  );
};
