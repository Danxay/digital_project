'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, MouseEventHandler, useRef, useState } from 'react';

import { Hamburger } from './Hamburger/Hamburger';
import styles from './Navigation.module.scss';

export const Navigation: FC = () => {
  const [isClosed, setClosed] = useState<true | null>(null);
  const menu = useRef<HTMLElement | null>(null);

  const toggleMenu = (): void => {
    menu.current?.classList.toggle(styles.active);
    document.body.classList.toggle('noScroll');
  };

  const onClickNavigation: MouseEventHandler<HTMLElement> = (e): void => {
    if ((e.target as HTMLElement).classList.contains(styles.navItem)) {
      menu.current?.classList.remove(styles.active);
      document.body.classList.remove('noScroll');
      setClosed(true);
    }
  };

  const pathname = usePathname();
  const navItemClassName = (href: string): string => cn(styles.navItem, { [styles.active]: href === pathname });

  return (
    <>
      <nav className={styles.hamburger}>
        <Hamburger onToggle={toggleMenu} closed={isClosed} setClosed={setClosed} />
      </nav>
      <nav className={styles.navigation} ref={menu} onClick={onClickNavigation}>
        <Link href={'/'} className={navItemClassName('/')}>
          Главная
        </Link>
        <Link href={'/gallery'} className={navItemClassName('/gallery')}>
          Галерея
        </Link>
        <Link href={'/projects'} className={navItemClassName('/projects')}>
          Проекты
        </Link>
        <Link href={'/certificates'} className={navItemClassName('/certificates')}>
          Сертификаты
        </Link>
        <Link href={'/contacts'} className={navItemClassName('/contacts')}>
          Контакты
        </Link>
      </nav>
    </>
  );
};
