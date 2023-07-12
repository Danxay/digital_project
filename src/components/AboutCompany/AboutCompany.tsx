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
          Наша компания - это команда профессиональных архитекторов и строителей, которые создают качественные и
          современные объекты. Мы работаем с разными типами зданий: жилые, коммерческие, общественные, культурные и
          другие. Мы учитываем все пожелания наших клиентов и предлагаем индивидуальные решения для каждого проекта.
          Наша цель - сделать мир красивее и удобнее с помощью архитектуры.
        </p>
        <Button text={'ЧИТАТЬ'} link={'/'} theme={'light'} />
      </div>
    </section>
  );
};
