'use client';

import cn from 'classnames';
import { FC, ReactNode, useEffect, useState } from 'react';

import styles from './Slider.module.scss';

import { SliderContext } from '../../contexts/SliderContext';

interface ISliderProps {
  autoplay?: number;
  children: ReactNode[];
}

export const Slider: FC<ISliderProps> = ({ autoplay, children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const changeSlide = (direction: -1 | 1): void => {
    if (direction === -1) {
      setCurrentSlideIndex(currentSlideIndex !== 0 ? currentSlideIndex - 1 : children.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex !== children.length - 1 ? currentSlideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    if (autoplay) {
      const timeout = setTimeout(() => {
        changeSlide(1);
      }, autoplay);

      return () => clearTimeout(timeout);
    }
  }, [currentSlideIndex, autoplay, children.length]);

  return (
    <SliderContext.Provider value={{ changeSlide, currentSlide: currentSlideIndex + 1, slidesCount: children.length }}>
      <div className={styles.wrapper}>
        {children.map((slide, index) => (
          <div
            key={index}
            className={cn(styles.item, {
              [styles.active]: index === currentSlideIndex,
            })}
          >
            {slide}
          </div>
        ))}
      </div>
    </SliderContext.Provider>
  );
};
