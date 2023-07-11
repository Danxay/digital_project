import cn from 'classnames';
import { FC } from 'react';

import { OurProjectsSlide } from './OurProjectsSlide/OurProjectsSlide';
import styles from './OurProjectsSlider.module.scss';

import { DoubleTitle } from 'components/DoubleTitle/DoubleTitle';
import { Slider } from 'components/Slider/Slider';
import { IProject, projects } from 'constants/projects';
import { splitChunks } from 'utils/splitChunks';

export const OurProjectsSlider: FC = () => {
  const slides: Array<Array<IProject>> = splitChunks(projects, 3);

  return (
    <section className={cn('container', styles.wrapper)}>
      <DoubleTitle first={'НАШИ'} second={'ПРОЕКТЫ'} />
      <hr className={styles.line} />
      <Slider autoplay={10000}>
        {slides.map((slide, index) => (
          <OurProjectsSlide key={index} projects={slide} />
        ))}
      </Slider>
    </section>
  );
};
