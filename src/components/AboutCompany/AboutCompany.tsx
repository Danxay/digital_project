import cn from 'classnames';
import * as React from 'react';

import styles from './AboutCompany.module.scss';

import picture_1 from '@images/about_company_picture_1.webp';
import picture_2 from '@images/about_company_picture_2.webp';
import picture_3 from '@images/about_company_picture_3.webp';
import { Button } from 'components/Button/Button';

export const AboutCompany: React.FC = () => {
  return (
    <section className={cn('container', styles.content)}>
      <div className={styles.picture} style={{ backgroundImage: `url(${picture_1.src})` }} />
      <div className={styles.picture} style={{ backgroundImage: `url(${picture_2.src})` }} />
      <div className={styles.picture} style={{ backgroundImage: `url(${picture_3.src})` }} />
      <div className={styles.info}>
        <h1 className={cn(styles.title, 'titleAdaptive')}>О компании</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <Button text={'ЧИТАТЬ'} link={'/'} theme={'light'} />
      </div>
    </section>
  );
};
