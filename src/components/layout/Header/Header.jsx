import Content from "../Content/Content";
import "./index.css";
import ConDev from "../../../assets/img/logo-condev.webp";
import Nav from "./Nav";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState, useEffect, useCallback } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeInitial, setHomeInitial] = useState(true);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lng;
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts[0] === "fa" || parts[0] === "en") parts[0] = lng;
    else parts.unshift(lng);
    navigate("/" + parts.join("/"));
  };

  const isFa = i18n.language === "fa";
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    const element = document.querySelector("#home");
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setHomeInitial(window.scrollY <= 0);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Content>
      <header
        className={`m-header mt-4 d-flex flex-column justify-content-between align-items-center  ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="d-flex flex-row-reverse justify-content-between w-100 align-items-center">
          <a
            href="#home"
            onClick={handleLogoClick}
            aria-label={t("header.home")}
          >
            <img
              src={ConDev}
              alt="Con Dev Logo"
              className="logo-header"
              loading="lazy"
            />
          </a>

          <div className="language-switcher d-flex align-items-center mx-1 mx-md-5 ">
            <button
              onClick={() => changeLanguage("fa")}
              className={`lang-btn ${isFa ? "active" : ""}`}
              aria-label="FA"
            >
              FA
            </button>
            <span className="mx-1  ">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`lang-btn ${!isFa ? "active" : ""}`}
              aria-label="EN"
            >
              EN
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className={`d-flex justify-content-center align-items-center btn-openNav ${
              isOpen ? "open" : ""
            }`}
            aria-label={isOpen ? t("common.close") : t("common.open")}
            type="button"
          >
            {isOpen ? <IoClose size={30} /> : <FaBars size={24} />}
          </button>
        </div>

        <Nav isOpen={isOpen} setIsOpen={setIsOpen} homeInitial={homeInitial} />
      </header>
    </Content>
  );
};

export default React.memo(Header);
