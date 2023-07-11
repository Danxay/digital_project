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
              <Link href={'#'} className={styles.link}>
                Главная
              </Link>
            </li>
            <li>
              <Link href={'#'} className={styles.link}>
                Галерея
              </Link>
            </li>
            <li>
              <Link href={'#'} className={styles.link}>
                Проекты
              </Link>
            </li>
            <li>
              <Link href={'#'} className={styles.link}>
                Сертификаты
              </Link>
            </li>
            <li>
              <Link href={'#'} className={styles.link}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <address className={styles.address}>
          <h2 className={styles.subtitle}>Контакты</h2>
          <div className={styles.contacts}>
            <Link href={'#'} className={cn(styles.link, styles.contact)}>
              <TargetIcon />
              100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
            </Link>
            <Link href={'#'} className={cn(styles.link, styles.contact)}>
              <PhoneIcon />
              +7 (701) 77 76 811
            </Link>
            <Link href={'#'} className={cn(styles.link, styles.contact)}>
              <MailIcon />
              Galym.sultanov@mail.ru
            </Link>
          </div>
        </address>
        <div className={styles.socials}>
          <h2 className={styles.subtitle}>Социальные сети</h2>
          <div className={styles.links}>
            <Link href={'#'} className={styles.icon}>
              <FacebookIcon />
            </Link>
            <Link href={'#'} className={styles.icon}>
              <TwitterIcon />
            </Link>
            <Link href={'#'} className={styles.icon}>
              <LinkedInIcon />
            </Link>
            <Link href={'#'} className={styles.icon}>
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
