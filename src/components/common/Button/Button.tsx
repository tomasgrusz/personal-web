import { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './interfaces';
import { Link } from 'react-router-dom';

const Button: FC<ButtonProps> = ({ icon, link, text, external }) => {
  const Button = () => {
    return (
      <button className={styles.Button}>
        <div className={styles.icon}>{icon}</div>
        <label className={styles.label}>Back to Home</label>
      </button>
    );
  };
  if (link) {
    return (
      <Link
        to={link}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        aria-label={text}
      >
        <Button />
      </Link>
    );
  }

  return <Button />;
};

export default Button;
