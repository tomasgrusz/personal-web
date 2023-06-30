import "./index.scss";

import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import Portal from "components/three/Portal";
import Navbar from "components/Navbar";
import MagicSwitch from "./MagicSwitch/MagicSwitch";
import { useState } from "react";

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
        <h2>The website is currently in development, stay tuned!</h2>
        <Link
          to={"https://github.com/tomasgrusz/personal-web"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            Check out the progress on my GitHub <BiLinkExternal />
          </h3>
        </Link>
      </div>
      <label className="copyright">©2023 Tomas Grusz</label>
    </div>
  );
};

export default LandingPage;
