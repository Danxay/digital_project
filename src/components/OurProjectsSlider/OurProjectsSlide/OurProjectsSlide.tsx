import { FC } from 'react';

import styles from './OurProjectsSlide.module.scss';
import { ProjectCard } from './ProjectCard/ProjectCard';

import { IProject } from '../../../constants/projects';
import { SliderControls } from '../../Slider/SliderControls/SliderControls';

interface IOurProjectsSlideProps {
  projects: Array<IProject>;
}

export const OurProjectsSlide: FC<IOurProjectsSlideProps> = ({ projects }) => {
  return (
    <div>
      <div className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            previewUrl={project.previewUrl}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <SliderControls />
    </div>
  );
};
