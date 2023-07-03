import "./Navbar.scss";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import AnimatedLogoSVG from "components/common/LogoSVG/AnimatedLogoSVG";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <AnimatedLogoSVG size={64} />
      </div>
      <div className="routes">
        <div className="route">About</div>
        <div className="route">Portfolio</div>
        <div className="route">Experience</div>
        <div className="route">Contact</div>
      </div>
      <div className="links">
        <div className="linkedin">
          <Link
            to={"https://www.linkedin.com/in/tomasgrusz/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </Link>
        </div>
        <div className="github">
          <Link
            to={"https://github.com/tomasgrusz"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
