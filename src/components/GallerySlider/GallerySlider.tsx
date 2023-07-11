import cn from 'classnames';
import { FC } from 'react';

import { GallerySlide } from './GallerySlide/GallerySlide';
import styles from './GallerySlider.module.scss';

import { DoubleTitle } from 'components/DoubleTitle/DoubleTitle';
import { Slider } from 'components/Slider/Slider';
import { IPhoto, photos } from 'constants/photos';
import { splitChunks } from 'utils/splitChunks';

export const GallerySlider: FC = () => {
  const slides: Array<Array<IPhoto>> = splitChunks(photos, 10);

  return (
    <section className={cn('container', styles.wrapper)}>
      <DoubleTitle first={'ГАЛЕРЕЯ'} second={'ФОТОГРАФИЙ'} />
      <hr className={styles.line} />
      <Slider autoplay={10000}>
        {slides.map((slide, index) => (
          <GallerySlide key={index} photos={slide} />
        ))}
      </Slider>
    </section>
  );
};
