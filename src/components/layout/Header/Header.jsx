import Content from "../Content/Content";
import "./index.css";
import ConDev from "../../../assets/img/logo-condev.svg";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Content>
      <header
        className={`m-header mt-4 d-flex flex-column justify-content-between align-items-center flex-lg-row-reverse  ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="d-flex flex-row-reverse justify-content-between w-100 align-items-center">
          <Link to="/home">
            <img src={ConDev} alt="Con Dev" className="logo-header" />
          </Link>

          <button
            onClick={toggleMenu}
            className={`d-flex justify-content-center align-items-center btn-openNav ${
              isOpen ? "open" : ""
            }`}
          >
            {isOpen ? <IoClose size={30} /> : <FaBars size={24} />}
          </button>
        </div>

        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </Content>
  );
};

export default Header;
