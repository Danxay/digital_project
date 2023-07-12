'use client';

import cn from 'classnames';
import { useFormik } from 'formik';
import { FC } from 'react';

import * as Yup from 'yup';

import styles from './ContactsForm.module.scss';

import { Button } from '../../Button/Button';

import CheckmarkIcon from '@icons/checkmark.svg';

export const ContactsForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      product: '',
      message: '',
      dataTreat: false,
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      phone: Yup.string().required('Это поле обязательное'),
      email: Yup.string().required('Это поле обязательное').email('Неверный формат E-mail'),
      product: Yup.string(),
      message: Yup.string().required('Это поле обязательное'),
      dataTreat: Yup.boolean().oneOf([true], 'Необходимо согласие с политикой конфиденциальности'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('');
        }, 1000);
      });

      setSubmitting(false);
      resetForm();
    },
  });

  const hasError = (fieldName: keyof typeof formik.touched | keyof typeof formik.errors): boolean =>
    Boolean(formik.touched[fieldName]) && formik.errors[fieldName] !== undefined;

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <input
        name='name'
        type='text'
        placeholder={'Имя'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        className={styles.input}
      />
      <input
        name='phone'
        type='tel'
        placeholder={'Номер телефона*'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        className={styles.input}
        required
      />
      {hasError('phone') && <span className={styles.error}>{formik.errors.phone}</span>}
      <input
        name='email'
        type='email'
        placeholder={'E-mail*'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={styles.input}
        required
      />
      {hasError('email') && <span className={styles.error}>{formik.errors.email}</span>}
      <input
        name='product'
        type='text'
        placeholder={'Интересующий товар/услуга'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.product}
        className={styles.input}
      />
      <textarea
        name='message'
        placeholder={'Сообщение*'}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.message}
        className={cn(styles.input, styles.textarea)}
        required
      />
      {hasError('message') && <span className={styles.error}>{formik.errors.message}</span>}
      <label className={styles.checkbox}>
        <input
          name={'dataTreat'}
          type='checkbox'
          onChange={formik.handleChange}
          onClick={formik.handleBlur}
          className={styles.checkboxInput}
        />
        <span className={styles.customCheckbox}>
          <CheckmarkIcon />
        </span>
        <span className={styles.checkboxCaption}>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</span>
      </label>
      {hasError('dataTreat') && <span className={styles.error}>{formik.errors.dataTreat}</span>}
      <Button text={'Отправить'} theme={'dark'} disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting} />
    </form>
  );
};
