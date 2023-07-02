import Modal from "components/common/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const WIPModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  useEffect(() => {
    setModalOpen(true);
  }, []);

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {modalOpen && (
        <Modal onClose={close} buttonLabel="I understand">
          <h2>🚧 Work in progress! 🚧</h2>
          <p>
            You have reached a website that is currently in development.
            <br></br>
            Some features can throw errors or may not be function correctly.
          </p>
          <Link
            to={"https://github.com/tomasgrusz/personal-web"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <label style={{ cursor: "pointer" }}>
              Check out the progress on GitHub <BiLinkExternal />
            </label>
          </Link>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default WIPModal;
