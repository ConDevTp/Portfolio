import Scrollspy from "react-scrollspy";

const Nav = ({ isOpen, setIsOpen, homeInitial }) => {
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
      const offset = 140; // فاصله دلخواه از بالا
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <Scrollspy
      items={sections}
      currentClassName="active"
      offset={-50} // Scrollspy خودش active را کنترل می‌کند
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
        >
          {id === "home"
            ? "خانه"
            : id === "about"
            ? "دربـــاره مـن"
            : id === "skills"
            ? "تـخصص‌ها"
            : id === "certs"
            ? "مـــدارک"
            : id === "portfolio"
            ? "نمونه کارها"
            : id === "articles"
            ? "آخرین مقالات"
            : id === "services"
            ? "خـدمات من"
            : "تماس با من"}
        </a>
      ))}
    </Scrollspy>
  );
};

export default Nav;
