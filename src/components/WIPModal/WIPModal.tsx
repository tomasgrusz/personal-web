'use client';
import Modal from '@components/common/Modal';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';

const WIPModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  if (process.env.REACT_APP_ENVIRONMENT === 'development') {
    return <></>;
  }

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {modalOpen && (
        <Modal onClose={close} buttonLabel="I understand">
          <h2>🚧 Work in progress! 🚧</h2>
          <p>
            This website is currently in development.
            <br></br>
            Occasionally, you may experience bugs or missing features.
          </p>
          <Link href={'https://github.com/tomasgrusz/personal-web'} target="_blank">
            <label style={{ cursor: 'pointer' }}>
              Check out the progress on GitHub <BiLinkExternal />
            </label>
          </Link>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default WIPModal;
