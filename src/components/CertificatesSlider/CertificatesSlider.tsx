import cn from 'classnames';
import { FC } from 'react';

import { CertificatesSlide } from './CertificatesSlide/CertificatesSlide';
import styles from './CertificatesSlider.module.scss';

import { DoubleTitle } from 'components/DoubleTitle/DoubleTitle';
import { Slider } from 'components/Slider/Slider';
import { certificates, ICertificate } from 'constants/certificates';
import { splitChunks } from 'utils/splitChunks';

export const CertificatesSlider: FC = () => {
  const slides: Array<Array<ICertificate>> = splitChunks(certificates, 3);

  return (
    <section className={cn('container', styles.wrapper)}>
      <DoubleTitle first={'сертификаты'} second={'КОМПАНИИ'} />
      <Slider autoplay={10000}>
        {slides.map((slide, index) => (
          <CertificatesSlide key={index} certificates={slide} />
        ))}
      </Slider>
    </section>
  );
};
