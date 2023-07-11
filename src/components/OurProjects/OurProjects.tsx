import cn from 'classnames';
import { FC } from 'react';

import styles from './OurProjects.module.scss';

import { ProjectPicture } from './ProjectPicture/ProjectPicture';

import { Button } from 'components/Button/Button';
import { projects } from 'constants/projects';

export const OurProjects: FC = async () => {
  const items = projects.slice(0, 4);

  return (
    <section className={cn('container', styles.content)}>
      <h1 className={cn(styles.title, 'titleAdaptive')}>Наши проекты</h1>
      <div className={styles.items}>
        {items.map((project) => (
          <div key={project.id} className={styles.item}>
            <ProjectPicture id={project.id} title={project.title} pictureSrc={project.previewUrl} />
          </div>
        ))}
      </div>
      <div className={styles.btn}>
        <Button text={'Все проекты'} link={'/projects'} theme={'dark'} />
      </div>
    </section>
  );
};
