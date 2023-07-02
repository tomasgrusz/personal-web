import { AnimatePresence } from "framer-motion";
import { Navbar } from "components/Navbar/Navbar";
import "./index.scss";
import WIPModal from "components/WIPModal/WIPModal";

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <Navbar />
        {/* WIP Modal */}
        <WIPModal />
      </div>
    </>
  );
};

export default HomePage;
