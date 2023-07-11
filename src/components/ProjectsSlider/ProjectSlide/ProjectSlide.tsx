import { FC } from 'react';

import { ProjectPicture } from './ProjectPicture/ProjectPicture';
import styles from './ProjectSlide.module.scss';

import { ProjectSlideControls } from './ProjectSlideControls/ProjectSlideControls';

import { DoubleTitle } from 'components/DoubleTitle/DoubleTitle';

interface IProjectSlideProps {
  id: number;
  projectName: string;
  pictureSrc: string;
}

export const ProjectSlide: FC<IProjectSlideProps> = ({ id, projectName, pictureSrc }) => {
  return (
    <article className={styles.project}>
      <div className={styles.info}>
        <DoubleTitle first={'PROJECT'} second={projectName} />
        <ProjectSlideControls />
      </div>
      <div className={styles.picture}>
        <ProjectPicture id={id} pictureSrc={pictureSrc} />
      </div>
    </article>
  );
};
