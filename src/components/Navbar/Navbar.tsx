import "./Navbar.scss";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo from "assets/logoNew.png";
import LogoSVG from "components/common/LogoSVG/LogoSVG";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <LogoSVG size={64} mainColor="#77d" sideColor="white" />
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
