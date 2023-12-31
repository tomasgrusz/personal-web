'use client';
import styles from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@utils/sendEmail';
import { ContactFormData } from './types';
import Button from '@components/common/Button';
import { useState } from 'react';

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();
  const [submitted, setSubmitted] = useState<boolean>(false);

  async function onSubmit(data: ContactFormData) {
    const response = await sendEmail(data);
    if (response === 'Email sent') {
      setSubmitted(true);
    } else {
      alert('Something went wrong. Please try again later.');
    }
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
      {submitted ? (
        <p>Success! I&apos;ll try to respond as soon as possible.</p>
      ) : (
        <Button text="Submit" />
      )}
    </form>
  );
};

export default ContactForm;
