import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/monarch.css";

const businessLeaders = [
  {
    name: "Jagat Seth",
    img: "./Images/glory/bussiness/jagat seth.jpg",
    position: "Wealthy Merchant, Banker and Money Lender Family",
    netWorth: "$1 Trillion(In Today's context)",
  },
];

export default function Monarch() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
    const onScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topFunction = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filtered = businessLeaders.filter((b) =>
    b.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/index.html">
            <img src="./Images/logo.png" alt="logo" />
          </Link>

          <div
            className="nav-links"
            id="navlinks"
            style={{ right: navOpen ? "0" : "-200px" }}
          >
            <i className="fa fa-xmark" onClick={() => setNavOpen(false)} />
            <ul>
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link to={item.to}>{item.label}</Link>
                  {item.sub && (
                    <div className="more">
                      <ul>
                        {item.sub.map((s, si) => (
                          <li key={si}>
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

        <button
          onClick={topFunction}
          id="bttbtn"
          title="Go to top"
          style={{ display: showTopBtn ? "block" : "none" }}
        >
          <i className="fa-regular fa-arrow-up" />
        </button>
      </div>

      <section id="business">
        <h2>Jain Business Leaders In Indian & International Market</h2>
        
        <div className="search-container" style={{ textAlign: "center", margin: "20px" }}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search by name..."
            className="custom-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ padding: "10px", fontSize: "16px" }}
          />
        </div>

        <div className="business">
          {filtered.map((leader, idx) => (
            <div className="business1" key={idx}>
              <img src={leader.img} alt={leader.name} />
              <h4>{leader.name}</h4>
              <table border="3">
                <tbody>
                  <tr>
                    <th>Position</th>
                    <td>{leader.position}</td>
                  </tr>
                  <tr>
                    <th>Net Worth :</th>
                    <td>{leader.netWorth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h3>No business leader found.</h3>
            <p>Try searching with a different name.</p>
          </div>
        )}
      </section>
    </>
  );
}