import React, { useEffect } from "react";
import Header from "../components/Header";
import "../css/shop.css";

const products = [
  {
    img: "./Images/Shop/1.png",
    alt: "Wonderful Jainism T-Shirt",
  },
  {
    img: "./Images/Shop/2.png",
    alt: "Wonderful Jainism Hoodie",
  },
  {
    img: "./Images/Shop/3.png",
    alt: "Wonderful Jainism Car Stickers",
  },
  {
    img: "./Images/Shop/4.png",
    alt: "Wonderful Jainism Bike, Active Stickers",
  },
];

export default function Shop() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
    const onScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topFunction = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

      <section id="shop">
        <div className="shop-head">
          <h2>Wonderful Jainism Merchandise</h2>
          <a href="tel:9828828895">
            <button className="adbtn">
              <i className="fa-solid fa-phone"></i>Call for Order
            </button>
          </a>
        </div>
        <div className="product">
          {products.map((product, idx) => (
            <img key={idx} src={product.img} alt={product.alt} />
          ))}
        </div>
      </section>
    </>
  );
}