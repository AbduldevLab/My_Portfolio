import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home",       label: "Home" },
    { id: 2, link: "about",      label: "About" },
    { id: 3, link: "portfolio",  label: "Portfolio" },
    { id: 4, link: "experience", label: "Experience" },
    { id: 5, link: "education",  label: "Education" },
    { id: 6, link: "contact",    label: "Contact" },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-6 text-white fixed z-50 nav"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "#0a0a0f",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s, backdrop-filter 0.3s",
      }}
    >
      {/* Logo — scrolls to top and updates URL */}
      <Link
        to="home"
        smooth
        duration={500}
        onClick={() => setNav(false)}
        className="cursor-pointer select-none"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.02em" }}
      >
        Abder<span style={{ color: "#6c63ff" }}>.</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              spy={true}
              activeClass="active-nav-link"
              className="cursor-pointer select-none px-4 py-2 rounded-lg text-sm font-medium capitalize"
              style={{ color: "#7a7a90", transition: "color 0.2s, background 0.2s" }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                (e.currentTarget as HTMLElement).style.color = "#f0f0f5";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                (e.currentTarget as HTMLElement).style.color = "#7a7a90";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li className="ml-2">
          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer select-none px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ background: "#6c63ff", transition: "opacity 0.2s" }}
            onMouseEnter={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Coffee Chat
          </Link>
        </li>
      </ul>

      {/* Mobile toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 z-10 md:hidden select-none"
        style={{ color: "#7a7a90" }}
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* Mobile menu */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen"
          style={{ background: "#0a0a0f", zIndex: 49 }}
        >
          {links.map(({ id, link, label }) => (
            <li key={id} className="px-4 py-5 text-3xl font-semibold">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                className="cursor-pointer capitalize select-none"
                style={{ color: "#7a7a90", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
