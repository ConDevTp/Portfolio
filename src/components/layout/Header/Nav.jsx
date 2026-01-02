import { NavLink } from "react-router-dom";

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <nav className={`nav-list ${isOpen ? "open" : ""}`}>
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "active nav-item" : "nav-item"
        }
        onClick={() => setIsOpen(false)}
      >
        خانه
      </NavLink>{" "}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "active nav-item" : "nav-item"
        }
        onClick={() => setIsOpen(false)}
      >
        درباره من
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          isActive ? "active nav-item" : "nav-item"
        }
        onClick={() => setIsOpen(false)}
      >
        تخصص‌ها
      </NavLink>
      <NavLink
        to="/certs"
        className={({ isActive }) =>
          isActive ? "active nav-item" : "nav-item"
        }
        onClick={() => setIsOpen(false)}
      >
        مدارک من
      </NavLink>
      <NavLink
        to="/experience"
        className={({ isActive }) =>
          isActive ? "active nav-item" : "nav-item"
        }
        onClick={() => setIsOpen(false)}
      >
        تجربه‌ها
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "active nav-item" : "nav-item"
        }
        onClick={() => setIsOpen(false)}
      >
        ارتباط با من
      </NavLink>
    </nav>
  );
};

export default Nav;
