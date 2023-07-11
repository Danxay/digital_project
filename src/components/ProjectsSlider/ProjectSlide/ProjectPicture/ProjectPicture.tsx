import Image from 'next/image';
import { FC } from 'react';

import styles from './ProjectPicture.module.scss';

import { Button } from 'components/Button/Button';

interface IProjectPictureProps {
  id: number;
  pictureSrc: string;
}

export const ProjectPicture: FC<IProjectPictureProps> = ({ id, pictureSrc }) => {
  return (
    <div className={styles.wrapper}>
      <Image priority src={pictureSrc} width={770} height={829} alt='Project Picture' className={styles.img} />
      <div className={styles.lookBtn}>
        <Button text={'ВЗГЛЯНУТЬ'} link={`/projects/${id}`} theme={'light'} />
      </div>
    </div>
  );
};
