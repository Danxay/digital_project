import { FC, useEffect, useState } from 'react';

import styles from './Hamburger.module.scss';

interface IHamburgerProps {
  onToggle?: () => void;
  closed?: true | null;
  setClosed?: (closed: null) => void;
}

export const Hamburger: FC<IHamburgerProps> = ({ onToggle, closed, setClosed }) => {
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = (): void => {
    setExpanded(!expanded);
    onToggle && onToggle();
  };

  useEffect(() => {
    if (closed !== undefined && closed !== null && setClosed !== undefined) {
      setExpanded(!closed);
      setClosed(null);
    }
  }, [closed]);

  return (
    <button className={styles.wrapper} aria-expanded={expanded} role='button' tabIndex={0} onClick={onClickHandler}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </button>
  );
};
