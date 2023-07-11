'use client';

import { FC, useContext } from 'react';

import styles from './SliderControls.module.scss';

import { SliderButtons } from 'components/Slider/SliderButtons/SliderButtons';
import { SliderNumbers } from 'components/Slider/SliderNumbers/SliderNumbers';
import { SliderContext } from 'contexts/SliderContext';

export const SliderControls: FC = () => {
  const { changeSlide, currentSlide, slidesCount } = useContext(SliderContext);

  return (
    <div className={styles.wrapper}>
      <SliderNumbers currentSlide={currentSlide} slidesCount={slidesCount} />
      <SliderButtons changeSlide={changeSlide} />
    </div>
  );
};
