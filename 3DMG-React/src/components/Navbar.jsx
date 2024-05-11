import { NavLink } from "react-router-dom";
import "./Navbar.css";
import OrangeButton from "./OrangeButton";
import WhiteButton from "./WhiteButton";
import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <nav>
          <NavLink className="navLogo" to={`/`}>
            <h1>3DIFY</h1>
          </NavLink>

          <div className="navCenter">
            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/"
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/3-D Model Generation"
            >
              <li>3-D Model Generation</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/Multi-View Image Generation"
            >
              <li>Multi-View Image Generation</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/Gallery"
            >
              <li>Gallery</li>
            </NavLink>

            <NavLink
              className={(e) => {
                return e.isActive ? "NavPageActive" : "";
              }}
              to="/about"
            >
              <li>AboutUs</li>
            </NavLink>
          </div>

          <div className="navRight">
            <WhiteButton onClick={toggleLoginForm} />
            <OrangeButton />
          </div>
        </nav>
      </header>
      {showLoginForm && (
        <LoginForm onSubmit={closeLoginForm} onClose={closeLoginForm} />
      )}
    </>
  );
};

export default Navbar;
