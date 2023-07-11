import Image from 'next/image';
import { FC } from 'react';

import styles from './CaptionedImage.module.scss';

interface ICaptionedImageProps {
  imageSrc: string;
  caption: string;
}

export const CaptionedImage: FC<ICaptionedImageProps> = ({ imageSrc, caption }) => {
  return (
    <figure className={styles.wrapper}>
      <Image className={styles.img} priority src={imageSrc} width={210} height={260} alt={'Photo'} />
      <figcaption className={styles.caption}>
        <span className={styles.text}>{caption}</span>
      </figcaption>
    </figure>
  );
};
