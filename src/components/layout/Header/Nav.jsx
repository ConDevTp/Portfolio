import Scrollspy from "react-scrollspy";
import React from "react";
import { useTranslation } from "react-i18next";

const Nav = ({ isOpen, setIsOpen, homeInitial }) => {
  const { t } = useTranslation();

  const sections = [
    "home",
    "about",
    "skills",
    "certs",
    "portfolio",
    "articles",
    "services",
    "contact",
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <Scrollspy
      items={sections}
      currentClassName="active"
      offset={-140}
      componentTag="nav"
      className={`nav-list ${isOpen ? "open" : ""}`}
    >
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`nav-item ${
            id === "home" && homeInitial ? "home-initial" : ""
          }`}
          aria-current={id === "home" && homeInitial ? "page" : undefined}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleClick(e, id);
            }
          }}
        >
          {t(`header.${id === "portfolio" ? "portfolio" : id}`)}
        </a>
      ))}
    </Scrollspy>
  );
};

export default React.memo(Nav);
