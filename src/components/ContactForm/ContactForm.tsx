'use client';
import styles from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@utils/sendEmail';
import { ContactFormData } from './types';
import Button from '@components/common/Button';

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    sendEmail(data);
  }
  return (
    <form className={styles.ContactForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Your Name" {...register('name', { required: true })} />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="example@domain.com"
          {...register('email', { required: true })}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          rows={4}
          placeholder="Type your message"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <Button text="Submit" />
    </form>
  );
};

export default ContactForm;
