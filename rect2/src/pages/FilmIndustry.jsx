import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/film_industry.css";

const people = [
  {
    name: "Sanjay Leela Bhansali",
    img: "./Images/glory/film/sanjay_leela.jpg",
    profession:
      "Indian film director, film producer, screenwriter, editor and music composer",
    awards: "Padma Shri Award; 7 National Film Awards; 12 Filmfare Awards",
    movies: "Hum Dil De Chuke Sanam, Devdas, Guzaarish, Bajirao-Mastani, Padmavat",
  },
  {
    name: "Bhavya Gandhi",
    img: "./Images/glory/film/bhavya_gandhi.jpg",
    profession: "Indian Actor best known for his role as TAPU in TMKOC",
    awards: "1 India Telly Award; 2 Zee Gold Awards; 1 Nickelodeon Kids Choice Award",
    movies:
      "Taarak Mehta Ka Ulta Chashma, Pushpa Impossible, Ajab Raat Ni Gajab Vaat, Baap Dhamal Dikro Kamal",
  },
  {
    name: "KC Bokadia",
    img: "./Images/glory/film/kc_bokadia.jpg",
    profession: "Indian Filmmaker, Director and Producer",
    awards: "1 Dadasaheb Phalke Film Foundation Awards",
    movies: "Phool Bane Angare, Lal Baadshah, Police Aur Mujrim, Maidan-E-Jung",
  },
  {
    name: "Tarachand Barjatya",
    img: "./Images/glory/film/tarachand.jpg",
    profession: "Indian film producer and Founder of Rajshri Productions",
    awards: "2 National Film Awards; 3 Filmfare Awards; 1 Golden Lotus Award",
    movies:
      "Dulhan Wahi Jo Piya Man Bhaye, Ankhiyon Ke Jharokhon Se, Sawan Ko Aane Do, Taraana, Nadiya Ke Paar",
  },
  {
    name: "Sooraj Barjatya",
    img: "./Images/glory/film/Sooraj_Barjatya.jpg",
    profession: "Indian film director/producer, Founder of Rajshri Productions",
    awards: "1 National Film Award; 2 Filmfare Awards",
    movies:
      "Maine Pyaar Kiya, Hum Saath Saath Hain, Vivah, Hum Aapke Hain Koun!, Prem Ratan Dhan Payo, Naam Bada Karenge (Web Series)",
  },
  {
    name: "Darsheel Safari",
    img: "./Images/glory/film/darsheel_safari.jpg",
    profession: "Indian Actor",
    awards: "1 Filmfare Award; 2 Zee Cine Awards; 1 Star Screen Award; 1 V. Shantaram Award",
    movies: "Taare Zameen Par, Bumm Bumm Bole, Kutch Express, Sitare Zamen Par",
  },
  {
    name: "Abhishek Jain",
    img: "./Images/glory/film/Abhishek_Jain.png",
    profession: "Indian Film Director and Producer",
    awards: "1 BIG Gujarati Entertainment Award; 3 Annual Transmedia Gujarati Screen & Stage awards",
    movies: "Wrong Side Raju, Hum Do Humare Do, Kevi Rite Jaish, Bey Yaar",
  },
  {
    name: "Chandulal Jain",
    img: "./Images/glory/film/ChandulalJain.jpg",
    profession: "Popular Kannada Film Director and Producer",
    awards:
      "Kannada Rajyotsava Award; Lifetime Achievement Award; Filmfare; Karnataka State Film Award; National Film Awards",
    movies: "Pyaar Kerke Dekho, Boothayyana Maga Ayyu, Veerappan, Gangavva Gangamaayi, Tabbaliyu Neenade Magane",
  },
  {
    name: "Mohit Daga",
    img: "./Images/glory/film/mohit_daga.jpg",
    profession: "Indian Television Actor",
    movies: "Akbar Birbal Remixed, Maddam Sir, Tera Yaar Hoon Me, Aap Ke Aa Jaane Se",
  },
  {
    name: "Abigail Jain",
    img: "./Images/glory/film/abigail_jain.jpg",
    profession: "Indian Television Actor",
    movies: "Laal Ishq, Shakti, Aapki Nazron Ne Samjha, Silsila Badalte Rishton Ka",
  },
  {
    name: "Champak Jain",
    img: "./Images/glory/film/champak_jain.jpg",
    profession: "Indian Film Producer; Owner of Venus Records & Tapes Pvt Ltd.",
    movies: "Khiladi, Baazigar, Main Khiladi Tu Anari, Josh, Hulchul",
  },
  {
    name: "Ekta Jain",
    img: "./Images/glory/film/Ekta_Jain.jpg",
    profession: "Indian Actor",
    movies: "Taal, Nayak: The Real Hero, Anjaane",
  },
  {
    name: "Ganesh Jain",
    img: "./Images/glory/film/Ganesh jain.jpg",
    profession: "Indian Film Producer; Owner of Venus Records & Tapes Pvt Ltd.",
    movies: "Khiladi, Baazigar, Main Khiladi Tu Anari, Josh, Hulchul, Hungama",
  },
  {
    name: "Garima Jain",
    img: "./Images/glory/film/garima-jain.jpg",
    profession: "Indian Actress, Singer, Kathak Dancer",
    movies:
      "Mardani 2, Aafat-E-Ishq, Mahabharat, Shrimad Ramayan, Shakti, Shiv-Shakti, Vikram Betaal Ki Rahasya Gatha, Na Umra Ki Seema Ho, Yeh Hai Mohabbatein, Balika Vadhu",
  },
  {
    name: "Jainendra Jain",
    img: "./Images/glory/film/jainendra-jain.jpg",
    profession: "Bollywood Film Writer, Director and Film Producer",
    movies: "Bobby, Satyam Shivam Sundaram, Sargam, Prem Rog, Sanjog, Henna, Judaai, Tere Naam",
  },
  {
    name: "Madan Jain",
    img: "./Images/glory/film/madan-jain.jpg",
    profession: "Indian Actor",
    movies:
      "Albert Pinto Ko Gussa Kyon Ata Hai, Gumnaam: The Mystery, Kuch Tum Kaho Kuch Hum Kahein, Zakhm, Inteqam, Vijeta, Khiladi, Kalyug",
  },
  {
    name: "Mrunal Jain",
    img: "./Images/glory/film/mrunal_jain.jpg",
    profession: "Indian Bollywood and Television Actor; Co-Founder of the Tennis Premier League (TPL)",
    movies:
      "Sooryavanshi, Sab Kushal Mangal, Yeh Rishta Kya Kehlata Hai, Dil Hi Toh Hai, Bandini, Kahaani Hamaaray Mahaabhaarat Ki, Uttaran, Jhalak Dikhhla Jaa",
  },
  {
    name: "Sourabh Raaj Jain",
    img: "./Images/glory/film/sourabh_jain.jpg",
    profession: "Indian Actor",
    awards: "1 India Telly Award",
    movies:
      "Mahabharat, Chandragupta Maurya, Radha Krishna, Porus, Devon Ke Dev...Mahadev, Patiala Babes, Mahakali, Uttaran",
  },
];

export default function FilmIndustry() {
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

  const filtered = people.filter((p) =>
    p.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/index.html"><img src="./Images/logo.png" alt="logo" /></Link>

          <div className="nav-links" id="navlinks" style={{ right: navOpen ? "0" : "-200px" }}>
            <i className="fa fa-xmark" onClick={() => setNavOpen(false)}></i>
            <ul>
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link to={item.to}>{item.label}</Link>
                  {item.sub && (
                    <div className="more">
                      <ul>
                        {item.sub.map((s, si) => (
                          <li key={si}><Link to={s.to}>{s.label}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <i className="fa fa-bars" onClick={() => setNavOpen(true)}></i>
        </nav>

        <button onClick={topFunction} id="bttbtn" title="Go to top" style={{ display: showTopBtn ? "block" : "none" }}>
          <i className="fa-regular fa-arrow-up" />
        </button>
      </div>

      <section id="film">
        <h2>Jain Artists in Film Industry</h2>

        <div className="search-container" style={{ textAlign: "center", margin: 20 }}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search by name..."
            className="custom-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ padding: 10, fontSize: 16 }}
          />
        </div>

        <div className="film">
          {filtered.map((p, idx) => (
            <div className="fpeople" key={idx}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <table border="3">
                <tbody>
                  {p.profession && (
                    <tr>
                      <th>Profession:</th>
                      <td>{p.profession}</td>
                    </tr>
                  )}
                  {p.awards && (
                    <tr>
                      <th>Awards :</th>
                      <td>{p.awards}</td>
                    </tr>
                  )}
                  {p.movies && (
                    <tr>
                      <th>Movies/Shows:</th>
                      <td>{p.movies}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div id="noResult" style={{ display: filtered.length === 0 ? "block" : "none" }}>
          <h2><i className="fa-solid fa-circle-exclamation" /> No person found.</h2>
          <div className="noResult">
            <p>Try searching with a different name.</p>
            <p>If you want to share some information you can share on the given form.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdiKlgwPnNjE3NyGg0qpAvbBHL_oMNZxkh6-AyYusNbt2_new/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="form">Submit Form</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}