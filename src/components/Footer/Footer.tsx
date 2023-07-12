import cn from 'classnames';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Footer.module.scss';

import FacebookIcon from '@icons/facebook.svg';
import LinkedInIcon from '@icons/linkedin.svg';
import logo from '@icons/logo.webp';
import MailIcon from '@icons/mail.svg';
import PhoneIcon from '@icons/phone.svg';
import PinterestIcon from '@icons/pinterest.svg';
import TargetIcon from '@icons/target.svg';
import TwitterIcon from '@icons/twitter.svg';

export const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={cn(`container`, styles.content)}>
        <figure className={styles.logo}>
          <Image src={logo} alt='Logo' />
        </figure>
        <nav className={styles.info}>
          <h2 className={styles.subtitle}>Информация</h2>
          <ul className={styles.navList}>
            <li>
              <Link href={'/'} className={styles.link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href={'/gallery'} className={styles.link}>
                Галерея
              </Link>
            </li>
            <li>
              <Link href={'/projects'} className={styles.link}>
                Проекты
              </Link>
            </li>
            <li>
              <Link href={'/certificates'} className={styles.link}>
                Сертификаты
              </Link>
            </li>
            <li>
              <Link href={'/contacts'} className={styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <address className={styles.address}>
          <h2 className={styles.subtitle}>Контакты</h2>
          <div className={styles.contacts}>
            <Link href={'/contacts'} className={cn(styles.link, styles.contact)}>
              <TargetIcon />
              США, г. Сан-Франциско , ул. Кларендон авеню
            </Link>
            <Link href={'tel:+7-800-555-35-35'} className={cn(styles.link, styles.contact)}>
              <PhoneIcon />
              +7 800 555 35 35
            </Link>
            <Link href={'mailto:dan.dryagin@gmail.com'} className={cn(styles.link, styles.contact)}>
              <MailIcon />
              dan.dryagin@gmail.com
            </Link>
          </div>
        </address>
        <div className={styles.socials}>
          <h2 className={styles.subtitle}>Социальные сети</h2>
          <div className={styles.links}>
            <Link href={'https://www.facebook.com/'} className={styles.icon}>
              <FacebookIcon />
            </Link>
            <Link href={'https://twitter.com/'} className={styles.icon}>
              <TwitterIcon />
            </Link>
            <Link href={'https://www.linkedin.com/'} className={styles.icon}>
              <LinkedInIcon />
            </Link>
            <Link href={'https://www.pinterest.com/'} className={styles.icon}>
              <PinterestIcon />
            </Link>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <p className={styles.copyright}>© 2019 Digital Project. Все права защищены.</p>
    </footer>
  );
};
