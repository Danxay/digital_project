import cn from 'classnames';
import Link from 'next/link';
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
          <span>г. Караганда, ул. Телевизионная 10</span>
        </p>
        <Link href={'#'} className={styles.phone}>
          +7 (701) 77 76 811
        </Link>
        <Link href={'#'} className={styles.email}>
          Galym.sultanov@mail.ru
        </Link>
        <div>
          <Button text={'Обратная связь'} theme={'dark'} link={'#'} arrow={false} />
        </div>
        <div className={styles.map}>
          <ContactInfoMap />
        </div>
      </address>
    </section>
  );
};
