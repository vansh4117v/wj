import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const navItems = [
  { label: "HOME", to: "/index.html" },
  {
    label: "MUNI SHRI",
    to: "#",
    sub: [
      { label: "Biography", to: "/biography.html" },
      { label: "Sangh Information", to: "/sangh.html" },
      { label: "Photos", to: "#" },
      { label: "Poojan", to: "/pooja.html" },
      { label: "Aarti", to: "/aarti.html" },
      { label: "Documentary", to: "/documentary.html" },
    ],
  },
  { label: "SESSIONS", to: "/sessions.html" },
  { label: "BHAJAN", to: "/bhajan.html" },
  {
    label: "OTHERS",
    to: "#",
    sub: [
      { label: "Sahitya", to: "/literature.html" },
      { label: "Shop", to: "/shop.html" },
      { label: "Quotes", to: "#" },
      { label: "Symposiums", to: "/symposium.html" },
      { label: "Podcasts", to: "#" },
      { label: "Glorious History of Wonderful Jainism", to: "/WJglory.html" },
    ],
  },
  { label: "ABOUT", to: "/about.html" },
  { label: "CONTACT", to: "/contact.html" },
];

export default function Header({ title, backgroundImage, minHeight = "50vh", children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setShowTopBtn(scrolled > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const headerStyle = {
    minHeight: minHeight,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  };

  return (
    <section className="header" style={headerStyle}>
      <button
        onClick={topFunction}
        id="bttbtn"
        title="Go to top"
        style={{ display: showTopBtn ? "block" : "none" }}
      >
        <i className="fa-regular fa-arrow-up" />
      </button>

      <nav>
        <Link to="/index.html">
          <img src="#" alt="" />
        </Link>

        <div className="nav-links" id="navlinks" style={{ right: navOpen ? "0" : "-200px" }}>
          <i className="fa fa-xmark" onClick={() => setNavOpen(false)} />
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
                {item.sub && (
                  <div className="more">
                    <ul>
                      {item.sub.map((s, sidx) => (
                        <li key={sidx}>
                          <Link to={s.to}>{s.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <i className="fa fa-bars" onClick={() => setNavOpen(true)} />
      </nav>

      {title && (
        <div className="text-box">
          <h1>{title}</h1>
          {children}
        </div>
      )}
    </section>
  );
}
