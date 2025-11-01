import { Link } from "react-router-dom";
import { useHeaderFooter } from "../dataContext/headerFooter";
import { useEffect, useState } from "react";
import "../components/components.css";

function Header() {
  const { navLinks } = useHeaderFooter();
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll to activate sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg shadow-sm ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link, index) => (
              <li
                className={`nav-item dropdown ${link.subLinks ? "has-submenu" : ""}`}
                key={index}
              >
                <Link className="nav-link d-flex align-items-center" to={link.path}>
                  {link.name}
                  {link.subLinks && <i className="bi bi-chevron-down ms-1 small"></i>}
                </Link>

                {link.subLinks && (
                  <ul className="dropdown-menu custom-dropdown">
                    {link.subLinks.map((sub, i) => (
                      <li key={i}>
                        <Link className="dropdown-item" to={link.path}>
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
