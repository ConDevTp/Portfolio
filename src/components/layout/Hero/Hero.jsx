import Content from "../Content/Content";
import "./index.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

import Box1 from "../../../assets/img/box-hero-1.svg";
import Box2 from "../../../assets/img/box-hero-2.svg";
import Box3 from "../../../assets/img/box-hero-3.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Content>
      <section
        className="hero w-100 d-flex justify-content-center align-items-center flex-column"
        id="home"
      >
        <h1>
          Arash Ch{" "}
          <h1 className="d-none d-md-inline" style={{ color: "#ffc700" }}>
            /
          </h1>{" "}
          <br className="d-md-none" />
          ConDev
        </h1>
        <div className="mt-4 pt-2">
          {" "}
          <TypeAnimation
            sequence={[
              "Front-end Developer",
              2000,
              "React & TypeScript",
              2000,
              "Problem Solver",
              2000,
              "UI/UX Lover",
              2000,
            ]}
            wrapper="h2"
            speed={200}
            style={{ direction: "ltr" }}
            repeat={Infinity}
          />
        </div>
        <Link to="/about">
          <button className="mt-5">بزن بریم !</button>
        </Link>

        <div className="social-icons d-flex justify-content-center align-items-center mt-5">
          <a
            className="mx-1 mx-md-2 social-item"
            href="https://www.instagram.com/yourprofile"
          >
            {" "}
            <FaInstagram />{" "}
          </a>
          <a
            className="mx-1 mx-md-2 social-item"
            href="https://github.com/yourprofile"
          >
            {" "}
            <FaGithub />{" "}
          </a>
          <a
            className="mx-1 mx-md-2 social-item"
            href="https://www.linkedin.com/in/yourprofile"
          >
            {" "}
            <FaLinkedinIn />{" "}
          </a>
          <a
            className="mx-1 mx-md-2 social-item"
            href="https://www.youtube.com/yourprofile"
          >
            {" "}
            <FaYoutube />{" "}
          </a>
          <a
            className="mx-1 mx-md-2 social-item"
            href="https://www.pinterest.com/yourprofile"
          >
            {" "}
            <FaPinterestP />{" "}
          </a>
        </div>

        <div className="mt-5 pt-md-4  w-100 box-hero ">
          <img src={Box1} alt="+6 Years Experience" />
          <img src={Box2} alt="Best Programmer" />
          <img src={Box3} alt="Meta Certificate" />
        </div>
      </section>
    </Content>
  );
};

export default Hero;
