import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Header.module.scss';

import { Navigation } from './Navigation/Navigation';

import LogoIcon from '@icons/logo.svg';

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className={cn('container', styles.content)}>
        <Link href={'/'}>
          <LogoIcon className={styles.logo} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
