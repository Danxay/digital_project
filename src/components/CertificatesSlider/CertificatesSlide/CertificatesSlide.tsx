import Image from 'next/image';
import { FC } from 'react';

import styles from './CertificatesSlide.module.scss';

import { SliderControls } from 'components/Slider/SliderControls/SliderControls';
import { ICertificate } from 'constants/certificates';

interface ICertificatesSlideProps {
  certificates: Array<ICertificate>;
}

export const CertificatesSlide: FC<ICertificatesSlideProps> = ({ certificates }) => {
  return (
    <div>
      <div className={styles.certificates}>
        {certificates.map((certificates) => (
          <Image
            key={certificates.id}
            className={styles.certificateImg}
            src={certificates.url}
            width={337}
            height={450}
            alt={'Certificate'}
          />
        ))}
      </div>
      <div className={styles.controls}>
        <SliderControls />
      </div>
    </div>
  );
};
