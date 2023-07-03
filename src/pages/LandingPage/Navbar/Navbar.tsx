import "./Navbar.scss";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import AnimatedLogoSVG from "components/common/LogoSVG/AnimatedLogoSVG";

const Navbar = () => {
  return (
    <div className="NavbarLanding">
      <div className="logo">
        <AnimatedLogoSVG size={64} />
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
