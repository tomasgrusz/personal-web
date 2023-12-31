import Background from '@components/Background';
import styles from './not-found.module.scss';
import Button from '@components/common/Button';
import { IoIosArrowRoundBack } from 'react-icons/io';

const Error = () => {
  return (
    <>
      <div className={styles.Error}>
        <h1 className="MAGIC">404: Galactic Anomaly</h1>
        <h2>You&apos;ve drifted into uncharted space. This page is lost in the cosmos.</h2>
        <label>Navigate to Safety?</label>
        <Button icon={<IoIosArrowRoundBack />} link={'/'} text="Back to Home" style={1} />
      </div>
      <Background />
    </>
  );
};

export default Error;
