import { FC } from 'react';

import { CaptionedImage } from './CaptionedImage/CaptionedImage';
import styles from './GallerySlide.module.scss';

import { SliderControls } from 'components/Slider/SliderControls/SliderControls';

import { IPhoto } from 'constants/photos';

interface IGallerySlideProps {
  photos: Array<IPhoto>;
}

export const GallerySlide: FC<IGallerySlideProps> = ({ photos }) => {
  return (
    <div>
      <div className={styles.images}>
        {photos.map((photo) => (
          <CaptionedImage key={photo.id} imageSrc={photo.url} caption={photo.caption} />
        ))}
      </div>
      <SliderControls />
    </div>
  );
};
