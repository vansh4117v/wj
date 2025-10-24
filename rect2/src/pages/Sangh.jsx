import React, { useEffect } from "react";
import Header from "../components/Header";
import "../css/sangh.css";

const sanghMembers = [
  {
    title: "संघस्थ मुनि",
    img: "./Images/b1.jpg",
    alt: "Vishudhratn Muni Shri Samatva Sagar Ji",
    info: [
      { label: "नाम:", value: "ब्र० निहालचंद जी जैन" },
      { label: "पिता श्री:", value: "स्व० सिंघई कुंदनलाल जी जैन" },
      { label: "माता श्री:", value: "स्व० श्रीमती शांतिदेवी जी जैन" },
      { label: "परिवार:", value: "2-भाई, 5-बहन, 3-पुत्र" },
      { label: "जन्म स्थान:", value: "चढ़रऊ , ललितपुर, उत्तर प्रदेश" },
      { label: "जन्म दिनांक:", value: "15 जून 1952" },
      { label: "लौकिक शिक्षा:", value: "सिविल इंजीनियर (पॉलीटेक्निक)" },
      { label: "मुनि दीक्षा:", value: "22 फरवरी 2024" },
      { label: "दीक्षा स्थल:", value: "शीतल तीर्थ, रतलाम (म. प्र.)" },
      {
        label: "गुरु:",
        value:
          "अध्यात्म सरोवर के राजहंस प्रथम पट्टाचार्य अध्यात्मचक्रवर्ती चर्याशिरोमणि गणाचार्य श्री 108 विशुद्ध सागर जी महाराज",
      },
      { label: "मातृभाषा:", value: "हिंदी" },
      { label: "अन्य भाषा:", value: "संस्कृत, प्राकृत" },
      { label: "उपाधि:", value: "चंद्रेश, मंगलाचरण सम्राट" },
      { label: "कृतित्व:", value: "25 कृतियों का पद्यानुवाद" },
    ],
  },
  {
    title: "संघस्थ ब्रह्मचारी",
    img: "./Images/b2.jpg",
    alt: "Vishudhratn Muni Shri Samatva Sagar Ji",
    info: [
      { label: "नाम:", value: "बा. ब्र. आधीश भैया जी" },
      { label: "पिता श्री:", value: "श्री अरविंद जी जैन" },
      { label: "माता श्री:", value: "श्रीमती मनीषा जी जैन" },
      { label: "भाई:", value: "आदित्य जैन शास्त्री" },
      { label: "जन्म स्थान:", value: "टेहरका, निवाड़ी (म. प्र.)" },
      { label: "जन्म दिनांक:", value: "17 जून 2002" },
      { label: "लौकिक शिक्षा:", value: "शास्त्री (BA), श्रमण संस्कृति संस्थान सांगानेर" },
      { label: "ब्रह्मचर्य व्रत:", value: "28 अप्रैल 2025, इंदौर (म. प्र.)" },
      {
        label: "गुरु:",
        value:
          "अध्यात्म सरोवर के राजहंस प्रथम पट्टाचार्य अध्यात्मचक्रवर्ती चर्याशिरोमणि गणाचार्य श्री 108 विशुद्ध सागर जी महाराज",
      },
      { label: "मातृभाषा:", value: "हिंदी" },
      { label: "अन्य भाषा:", value: "संस्कृत, प्राकृत" },
    ],
  },
];

export default function Sangh() {
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

      <section id="parichay">
        <div className="parichay">
          <div className="information">
            <div className="head">
              <div className="heading">
                <h2>संघ परिचय</h2>
              </div>
            </div>

            {sanghMembers.map((member, idx) => (
              <React.Fragment key={idx}>
                <div className="head">
                  <div className="img">
                    <img src={member.img} alt={member.alt} />
                  </div>
                  <div className="heading">
                    <h3>{member.title}</h3>
                  </div>
                </div>

                <div className="info">
                  <div className="infoq">
                    <table>
                      <tbody>
                        {member.info.map((row, i) => (
                          <tr key={i}>
                            <th>{row.label}</th>
                            <td>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}