import cn from 'classnames';
import { FC } from 'react';

import { ProjectSlide } from './ProjectSlide/ProjectSlide';

import styles from './ProjectsSlider.module.scss';

import { Slider } from 'components/Slider/Slider';
import { projects } from 'constants/projects';

export const ProjectsSlider: FC = async () => {
  const items = projects.slice(2, 5);

  return (
    <section className={cn('container', styles.wrapper)}>
      <Slider autoplay={4000}>
        {items.map((project) => (
          <ProjectSlide key={project.id} id={project.id} projectName={project.name} pictureSrc={project.previewUrl} />
        ))}
      </Slider>
    </section>
  );
};
