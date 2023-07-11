import cn from 'classnames';

import { FC } from 'react';

import styles from './Contacts.module.scss';

import { ContactsForm } from './ContactsForm/ContactsForm';

import picture from '@images/contacts_picture.webp';

export const Contacts: FC = () => {
  return (
    <section className={cn('container', styles.content)}>
      <h1 className={cn(styles.title, 'titleAdaptive')}>Связаться с нами</h1>
      <div className={styles.formWrapper}>
        <ContactsForm />
        <div className={styles.img} style={{ backgroundImage: `url(${picture.src})` }} />
      </div>
    </section>
  );
};
