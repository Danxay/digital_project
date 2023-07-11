'use client';

import { FC, useContext } from 'react';

import styles from './ProjectSlideControls.module.scss';

import { SliderButtons } from 'components/Slider/SliderButtons/SliderButtons';
import { SliderNumbers } from 'components/Slider/SliderNumbers/SliderNumbers';
import { SliderContext } from 'contexts/SliderContext';

export const ProjectSlideControls: FC = () => {
  const { changeSlide, currentSlide, slidesCount } = useContext(SliderContext);

  return (
    <>
      <div className={styles.buttons}>
        <SliderButtons changeSlide={changeSlide} />
      </div>
      <SliderNumbers currentSlide={currentSlide} slidesCount={slidesCount} />
    </>
  );
};
