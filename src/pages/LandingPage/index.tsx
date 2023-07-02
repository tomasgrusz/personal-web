import "./index.scss";

import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import Portal from "components/three/Portal";
import Navbar from "./";
import MagicSwitch from "./MagicSwitch/MagicSwitch";
import { useState } from "react";
import WIPModal from "components/WIPModal/WIPModal";

const LandingPage = () => {
  const [magical, setMagical] = useState(false);

  return (
    <div className="LandingPage">
      <Navbar />
      <div className="top-content">
        <h1 className="welcome-heading">
          Choose your <span> Experience</span>
        </h1>
      </div>
      <div className="model-wrapper">
        <Portal enabled={magical} />
      </div>
      <div className="bottom-content">
        <MagicSwitch setToggle={setMagical} />
      </div>
      <label className="copyright">©2023 Tomas Grusz</label>
      {/* WIP Modal */}
      <WIPModal />
    </div>
  );
};

export default LandingPage;
