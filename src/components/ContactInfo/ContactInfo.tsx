import cn from 'classnames';
import { FC } from 'react';

import styles from './ContactInfo.module.scss';
import { ContactInfoMap } from './ContactInfoMap/ContactInfoMap';

import { DoubleTitle } from '../DoubleTitle/DoubleTitle';

import { Button } from 'components/Button/Button';

export const ContactInfo: FC = () => {
  return (
    <section className={cn('container', styles.wrapper)}>
      <address className={styles.info}>
        <DoubleTitle first={'КОНТАКТНАЯ'} second={'ИНФОРМАЦИЯ'} />
        <p className={styles.address}>
          <span>«Digital Project»</span>
          <span>г. Сан-Франциско , ул. Кларендон авеню</span>
        </p>
        <a href={'tel:+7-800-555-35-35'} className={styles.phone}>
          +7 800 555 35 35
        </a>
        <a href={'mailto:dan.dryagin@gmail.com'} className={styles.email}>
          dan.dryagin@gmail.com
        </a>
        <div>
          <Button text={'Обратная связь'} theme={'dark'} link={'/#contacts'} arrow={false} />
        </div>
        <div className={styles.map}>
          <ContactInfoMap />
        </div>
      </address>
    </section>
  );
};
