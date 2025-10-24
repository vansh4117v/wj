import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/gpeople.css";

const people = [
  {
    name: "Albert Einstein",
    img: "./Images/glory/leaders/albert.jpg",
    hindi:
      "संसार का शाश्वत रहस्य इसकी बोधगम्यता है। सच्चा धर्म समझदारी के इस तत्व को गति देता है और विचारों और कार्यों की एक प्रणाली बनाता है जो सच्चे सद्भाव और आनंद की ओर ले जाती है और वास्तव में जैन धर्म के साथ भी ऐसा ही है।",
    english:
      "The Eternal mystry of the world is its intelligibility. True religion fasterns to this element of intelligibility and creates a system of thoughts and action which leads to true harmony and bliss and it is indeed so with Jainism.",
  },
  {
    name: "Rabindranath Tagore",
    img: "./Images/glory/leaders/tagore.jpg",
    hindi:
      "महावीर ने भारत में यह उद्घोषणा की कि धर्म एक वास्तविकता है, मात्र सामाजिक रूढ़ि नहीं। यह वास्तव में सच है कि केवल बाहरी अनुष्ठानों का पालन करने से मुक्ति नहीं मिल सकती, धर्म मनुष्य-मनुष्य के बीच कोई अंतर नहीं कर सकता।",
    english:
      "Mahaveer proclaimed in India that religion is a reality and not a mere social convention. It is really true that salvation cannot be had by merely observing external ceremonies, religion cannot make any difference between man and man.",
  },
  {
    name: "George Bernard",
    img: "./Images/glory/leaders/george.jpg",
    hindi:
      "मैं जैन धर्म के सिद्धांतों को इतना मानता हूं कि मैं जैन समुदाय में पुनर्जन्म लेना चाहूंगा।",
    english:
      "I adore so greatly the priciples of the jain religion, that I would like to be reborn in a Jain Community.",
  },
  {
    name: "Mahatma Gandhi",
    img: "./Images/glory/leaders/gandhi.jpg",
    hindi:
      "मैं विश्वास के साथ कहता हूं कि जिस सिद्धांत के लिए आजकल भगवान महावीर के नाम की महिमा की जाती है, वह अहिंसा का सिद्धांत सबसे अधिक प्रचारित है, वह भगवान महावीर ही थे।",
    english:
      "I say with conviction that the doctrine for which the name of the Lord Mahaveer is glorified nowdays is the fullest extent and has propagated most the doctrine of ahimsa it was Lord Mahaveer.",
  },
  {
    name: "Dr. Harmann Jacobi",
    img: "./Images/glory/leaders/jacobi.jpg",
    hindi:
      "अंत में मैं अपने दृढ़ विश्वास पर जोर देना चाहता हूं कि जैन धर्म एक मूल प्रणाली है, जो अन्य सभी से काफी अलग और स्वतंत्र है और इसलिए प्राचीन भारत में दार्शनिक विचारों और धार्मिक जीवन के अध्ययन के लिए इसका बहुत महत्व है।",
    english:
      "In conclusion let me assert my conviction that jainism is an original system, quite distinct and independent from all other and that therefore it is of great importance for the study of philosophical thoughts and religious life in ancient India.",
  },
  {
    name: "L.P. Tessetori",
    img: "./Images/glory/leaders/tessitori.jpg",
    hindi:
      "जैन धर्म बहुत उच्च कोटि का धर्म है। यह महत्वपूर्ण है कि शिक्षण विज्ञान पर आधारित हो। जितना अधिक वैज्ञानिक ज्ञान आगे बढ़ेगा उतना ही अधिक वह जैन शिक्षण सिद्ध होगा।",
    english:
      "Jainism is a very high order. It's important teaching are based upon science. The more the scientific knowledge advances the more that jain teaching will be proven.",
  },
  {
    name: "S. Radhakrishna",
    img: "./Images/glory/leaders/rkrishna.png",
    hindi:
      "मेरे यह कहने में कोई आश्चर्य की बात नहीं है कि जैन धर्म वेदों की रचना से बहुत पहले अस्तित्व में था।",
    english:
      "There is nothing Wonderful in my saying that Jainism was in Existance long before the vedas were composed.",
  },
];

function Person({ p }) {
  const [showEnglish, setShowEnglish] = useState(false);
  return (
    <div className="gpeople">
      <h2>{p.name}</h2>
      <div className="gpeople1">
        <img src={p.img} alt={p.name} />
        <p>
          <span
            className="shindi"
            style={{ display: showEnglish ? "none" : "inline" }}
          >
            {p.hindi}
          </span>
          <span
            className="senglish"
            style={{ display: showEnglish ? "inline" : "none" }}
          >
            {p.english}
          </span>
          <br />
          <button
            className="enBtn"
            onClick={() => setShowEnglish((s) => !s)}
          >
            {showEnglish ? "हिंदी में पढ़ें" : "Read in English"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default function GPeople() {
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

      <main id="gpeople">
        <h1>Great Leaders and Peoples on Jainism</h1>

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

        <div className="gpeople-list">
          {filtered.length > 0 ? (
            filtered.map((p, i) => <Person p={p} key={i} />)
          ) : (
            <div id="noResult">
              <h2>
                <i className="fa-solid fa-circle-exclamation" /> No person found.
              </h2>
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
          )}
        </div>
      </main>
    </>
  );
}