import cn from 'classnames';
import { FC } from 'react';

import styles from './ProjectDetails.module.scss';

import { ProjectDetailsContent } from './ProjectDetailsContent/ProjectDetailsContent';

import { DoubleTitle } from 'components/DoubleTitle/DoubleTitle';
import { IProjectDetails } from 'constants/projects';

interface IProjectDetailsProps {
  project: IProjectDetails;
}

export const ProjectDetails: FC<IProjectDetailsProps> = async ({ project }) => {
  return (
    <article className={cn('container', styles.wrapper)}>
      <DoubleTitle first={project.titleFirst} second={project.titleSecond} />
      <hr className={styles.line} />
      <ProjectDetailsContent contentItems={project.contentItems} />
    </article>
  );
};
