import Content from "../Content/Content";
import "./index.css";
import ConDev from "../../../assets/img/logo-condev.svg";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeInitial, setHomeInitial] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#home");
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setHomeInitial(false);
      else setHomeInitial(true);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // sync اول صفحه
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Content>
      <header
        className={`m-header mt-4 d-flex flex-column justify-content-between align-items-center flex-lg-row-reverse ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="d-flex flex-row-reverse justify-content-between w-100 align-items-center">
          <a href="#home" onClick={handleLogoClick}>
            <img src={ConDev} alt="Con Dev" className="logo-header" />
          </a>

          <button
            onClick={toggleMenu}
            className={`d-flex justify-content-center align-items-center btn-openNav ${
              isOpen ? "open" : ""
            }`}
          >
            {isOpen ? <IoClose size={30} /> : <FaBars size={24} />}
          </button>
        </div>

        <Nav isOpen={isOpen} setIsOpen={setIsOpen} homeInitial={homeInitial} />
      </header>
    </Content>
  );
};

export default Header;
