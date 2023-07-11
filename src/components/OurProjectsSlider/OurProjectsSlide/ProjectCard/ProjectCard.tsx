import Image from 'next/image';
import { FC } from 'react';

import styles from './ProjectCard.module.scss';

import { Button } from 'components/Button/Button';

interface IProjectCardProps {
  id: number;
  previewUrl: string;
  title: string;
  description: string;
}

export const ProjectCard: FC<IProjectCardProps> = ({ id, previewUrl, title, description }) => {
  return (
    <article className={styles.wrapper}>
      <Image className={styles.preview} src={previewUrl} width={670} height={435} alt={'Project Preview'} />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Button text={'СМОТРЕТЬ'} theme={'light'} link={`/projects/${id}`} />
      </div>
    </article>
  );
};
