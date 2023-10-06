import ToggleSwitch from '@components/common/ToggleSwitch/ToggleSwitch';
import { useState } from 'react';

import styles from './MagicSwitch.module.scss';
import { BsFillBadge3DFill } from 'react-icons/bs';
import Modal from '@components/common/Modal';
import { AnimatePresence } from 'framer-motion';

const MagicSwitch = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <aside className={styles.MagicSwitchCTA} onClick={open}>
        <BsFillBadge3DFill className={styles.icon} />
      </aside>
      {modalOpen && (
        <AnimatePresence>
          <Modal onClose={close} buttonLabel="I understand">
            <div className={styles.MagicSwitch}>
              <div className={styles.MagicOption}>
                <label className={styles.MagicDisclaimer}>(mobile-support)</label>
                <label className={styles.MagicLabel}>Minimal</label>
                <label className={styles.MagicDescription}>Accessible experience</label>
              </div>
              <ToggleSwitch toggle={modalOpen} setToggle={setModalOpen} size={96} />
              <div className={styles.MagicOption}>
                <label className={styles.MagicDisclaimer}>(browser-only)</label>
                <label className={styles.MagicLabel}>M a g i c a l</label>
                <label className={styles.MagicDescription}>Interactive experience</label>
              </div>
            </div>
          </Modal>
        </AnimatePresence>
      )}
    </>
  );
};

export default MagicSwitch;
