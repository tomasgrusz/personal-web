import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

export type ButtonProps = {
  icon?: ReactNode;
  link?: string;
  text: string;
  external?: boolean;
  style?: 1 | 2 | 3;
  onClick?: (e: any) => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ icon, link, text, external, style = 1, onClick, className }) => {
  const Button = () => {
    return (
      <button className={`${styles.Button} ${styles[`style-${style}`]} ${className}`} onClick={onClick}>
        <div className={styles.icon}>{icon}</div>
        <label className={styles.label}>{text}</label>
      </button>
    );
  };
  if (link) {
    return (
      <Link
        href={link}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        aria-label={text}
        className={`${styles.Button} ${styles[`style-${style}`]} ${className}`}
      >
        <div className={styles.icon}>{icon}</div>
        <label className={styles.label}>{text}</label>
      </Link>
    );
  }

  return <Button />;
};

export default Button;
