import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Button.module.scss';

import ArrowIcon from '@icons/arrow.svg';

interface IButtonProps {
  text: string;
  theme: 'light' | 'dark';
  link?: string;
  arrow?: boolean;
  disabled?: boolean;
}

export const Button: FC<IButtonProps> = ({ text, link, theme, disabled = false, arrow = true }) => {
  return (
    <>
      {link !== undefined ? (
        <Link href={link} className={cn(styles.btn, styles[theme])}>
          {text} {Boolean(arrow) && <ArrowIcon />}
        </Link>
      ) : (
        <button disabled={disabled} type={'submit'} className={cn(styles.btn, styles[theme])}>
          {text} {Boolean(arrow) && <ArrowIcon />}
        </button>
      )}
    </>
  );
};
