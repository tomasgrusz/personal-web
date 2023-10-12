import Image from 'next/image';
import styles from './ContactSection.module.scss';
import ContactForm from '@/components/ContactForm';

const ContactSection = () => {
  return (
    <section className={styles.ContactSection} id="contact">
      <div className={styles.contact}>
        <div className={styles.hero}>
          <h2 className={styles.heading}>Contact Me</h2>
          <p className={styles.paragraph}>
            Whether you have a question, a project in mind, or just want to connect, don&apos;t
            hesitate to reach out. Feel free to drop me a message through the contact form, or
            connect with me through the provided contact information. Let&apos;s start a
            conversation and explore the possibilities together!
          </p>
          <Image
            className={styles.Image}
            src={'/images/undraw/undraw_phone_call_re_hx6a.svg'}
            alt={'Having a phone call'}
            width={912}
            height={469}
            style={{ height: 'auto', width: '100%' }}
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
