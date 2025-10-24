import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/empire.css";

const empires = [
  {
    title: "Mauryan Empire",
    hindi: `मौर्य साम्राज्य दक्षिण एशिया में भौगोलिक दृष्टि से विस्तृत लौह युग की ऐतिहासिक
            शक्ति थी जिसका आधार मगध था। <b>चंद्रगुप्त मौर्य</b> द्वारा लगभग 320 ईसा पूर्व में स्थापित, यह 185 ईसा पूर्व तक एक स्वतंत्र रूप में अस्तित्व में रहा। <br> पाटलिपुत्र (आधुनिक पटना) में केन्द्रित मौर्य साम्राज्य में एक विशाल क्षेत्र शामिल था, जिसमें सिंधु-गंगा का मैदान और वे क्षेत्र शामिल थे जो अब अफगानिस्तान, नेपाल, पाकिस्तान, भारत और बांग्लादेश का हिस्सा हैं।`,
    english: `The Maurya Empire was a geographically extensive Iron Age historical power in South Asia with its power base in Magadha. <b>Founded by Chandragupta Maurya</b> around c. 320 BCE, it existed in loose-knit fashion until 185 BCE. <br> The Mauryan Empire, centered in Pataliputra (modern Patna), encompassed a vast territory, including the Indo-Gangetic Plain and regions that are now part of Afghanistan, Nepal, Pakistan, India, and Bangladesh.`,
    img: "./Images/glory/hpeople/mauryan_empire.png",
  },
];

export default function Empire() {
  const [showEnglish, setShowEnglish] = useState(true);

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  const toggleLanguage = () => setShowEnglish((v) => !v);

  return (
    <>
      <Header />

      <section id="hpeople">
        <h1>Great Jain Monarch in Indian History</h1>

        <div className="hpeople">
          {empires.map((e, idx) => (
            <div className="hpeople-block" key={idx}>
              <h2>{e.title}</h2>
              <div className="hpeople1">
                <img src={e.img} alt={e.title} />
                <p>
                  <span
                    className="hindi"
                    style={{ display: showEnglish ? "none" : "inline" }}
                    dangerouslySetInnerHTML={{ __html: e.hindi }}
                  />
                  <span
                    className="english"
                    style={{ display: showEnglish ? "inline" : "none" }}
                    dangerouslySetInnerHTML={{ __html: e.english }}
                  />
                  <br />
                  <button onClick={toggleLanguage} className="enBtn">
                    {showEnglish ? "हिंदी में पढ़ें" : "Read in English"}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
