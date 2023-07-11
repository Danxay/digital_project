import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './ProjectPicture.module.scss';

import ArrowIcon from '@icons/arrow.svg';
import { getImageSizes } from 'utils/getImageSizes';

interface IProjectPictureProps {
  id: number;
  title: string;
  pictureSrc: string;
}

export const ProjectPicture: FC<IProjectPictureProps> = async ({ id, title, pictureSrc }) => {
  const sizes = await getImageSizes(pictureSrc);

  let fontSize = 64;
  if (sizes !== undefined) {
    fontSize = sizes.width / (sizes.height / 255) / (570 / 64);
  }

  return (
    <figure className={styles.wrapper}>
      <Image src={pictureSrc} width={570} height={255} alt={'Project picture'} className={styles.img} />
      <figcaption className={styles.caption}>
        <div className={styles.captionWrapper} style={{ fontSize, lineHeight: `${fontSize}px` }}>
          <h1 className={styles.title}>{title}</h1>
          <Link href={`/projects/${id}`} className={styles.btn}>
            Подробнее <ArrowIcon />
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};
