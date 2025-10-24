import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/WJglory.css";

const gloryItems = [
  {
    title: "Great Leaders and Peoples of World on Jainism",
    img: "./Images/glory/h1.png",
    hindi: "जैन धर्म ने, अपनी समृद्ध दार्शनिक विरासत के साथ, कई महान लोगों और नेताओं को प्रेरित किया है जिन्होंने इसके अहिंसा, सत्य और आत्म-अनुशासन के सिद्धांतों को अपनाया है। महात्मा गांधी जैसी प्रमुख हस्तियां, जो जैन शिक्षाओं से गहराई से प्रभावित थीं, ने सामाजिक और राजनीतिक सक्रियता के केंद्रीय सिद्धांत के रूप में अहिंसा की वकालत की। विभिन्न जैन मुनियों और विद्वानों सहित अन्य नेताओं ने विश्व स्तर पर जैन दर्शन के प्रसार में योगदान दिया है, लोगों को नैतिक जीवन जीने और आध्यात्मिक विकास करने के लिए प्रेरित किया है। उनका नेतृत्व आज भी दुनिया में शांति, करुणा और टिकाऊ जीवन पर चर्चा को आकार दे रहा है।",
    english: "Jainism, with its rich philosophical heritage, has inspired numerous great people and leaders who have embraced its principles of non-violence, truth, and self-discipline. Prominent figures such as Mahatma Gandhi, who was deeply influenced by Jain teachings, advocated for ahimsa (non-violence) as a central tenet of social and political activism. Other leaders, including various Jain monks and scholars, have contributed to the spread of Jain philosophy globally, inspiring individuals to live ethical lives and pursue spiritual growth. Their leadership continues to shape discussions on peace, compassion, and sustainable living in the world today.",
    link: "/gpeople.html",
  },
  {
    title: "Facts About Jain Religion",
    img: "./Images/glory/h6.png",
    hindi: "जैन धर्म आकर्षक ऐतिहासिक और सांस्कृतिक तथ्यों से समृद्ध है। जैन धर्म के सबसे प्रतिष्ठित प्रतीकों में से एक भारत के श्रवणबेलगोला में भगवान बाहुबली (गोमतेश्वर) की विशाल प्रतिमा है, जो 58 फीट ऊंची है और परम त्याग और आध्यात्मिक शक्ति का प्रतिनिधित्व करती है। एक अन्य महत्वपूर्ण प्रतिमा भगवान अंतरिक्ष पार्श्वनाथ की है, जो 23वें तीर्थंकर को समर्पित है, जो अहिंसा और ध्यान की शिक्षाओं के लिए जाने जाते हैं। इसके अतिरिक्त, एक लोकप्रिय लेकिन विवादित धारणा है कि चीन की महान दीवार का निर्माण, आंशिक रूप से, आक्रमणों से बचाने के लिए किया गया था, लेकिन यह रणनीतिक और सुरक्षात्मक मूल्यों की याद दिलाने का भी काम करता है जो जीवन और सद्भाव की सुरक्षा के जैन सिद्धांतों के साथ प्रतिध्वनित होते हैं। जैन धर्म वास्तुकला को भी प्रभावित करता है, जैसा कि जटिल मंदिर डिजाइनों में देखा जाता है, और दुनिया भर में नैतिक जीवन और अहिंसा को प्रेरित करता है।",
    english: "Jainism is rich with fascinating historical and cultural facts. One of the most iconic symbols of Jainism is the massive statue of Lord Bahubali (Gomateshwar) in Shravanabelagola, India, which stands at 58 feet and represents the ultimate renunciation and spiritual strength. Another significant statue is of Lord Antriksh Parshvnath, dedicated to the 23rd Tirthankara, known for his teachings on non-violence and meditation. Additionally, there's a popular but debated belief that the Great Wall of China was built, in part, to protect against invasions, but it also serves as a reminder of the strategic and protective values that resonate with Jain principles of safeguarding life and harmony. Jainism also influences architecture, as seen in intricate temple designs, and continues to inspire ethical living and non-violence around the world.",
    link: "/facts.html",
  },
  {
    title: "Famous Jain Bussiness Leaders",
    img: "./Images/glory/h7.png",
    hindi: "जैन कारोबारी नेताओं ने भारत के आर्थिक परिदृश्य को आकार देने में महत्वपूर्ण भूमिका निभाई है, जो अपनी उद्यमशीलता की भावना, नैतिक प्रथाओं और सामुदायिक कल्याण के प्रति प्रतिबद्धता के लिए जाने जाते हैं। वे अक्सर अपने व्यावसायिक उद्यमों में अखंडता, स्थिरता और सामाजिक जिम्मेदारी जैसे मूल्यों पर जोर देते हैं। बिड़ला, शाह और पोद्दार परिवारों जैसी प्रमुख जैन व्यावसायिक हस्तियों ने कपड़ा, सीमेंट और वित्त सहित विभिन्न उद्योगों में महत्वपूर्ण योगदान दिया है, साथ ही शैक्षिक, स्वास्थ्य देखभाल और धर्मार्थ पहलों का भी समर्थन किया है। उनकी सफलता का श्रेय काफी हद तक नवाचार, सुदृढ़ प्रबंधन और पारंपरिक मूल्यों के पालन पर दिए गए मजबूत फोकस को दिया जाता है।",
    english: "Jain business leaders have played a significant role in shaping India's economic landscape, known for their entrepreneurial spirit, ethical practices, and commitment to community welfare. They often emphasize values such as integrity, sustainability, and social responsibility in their business ventures. Prominent Jain business figures, such as the Birla, Shah, and Poddar families, have made substantial contributions to various industries, including textiles, cement, and finance, while also supporting educational, healthcare, and charitable initiatives. Their success is largely attributed to a strong focus on innovation, sound management, and adherence to traditional values.",
    link: "/bussiness.html",
  },
  {
    title: "Famous Jain People in Film Industry",
    img: "./Images/glory/h8.png",
    hindi: "जैन लोगों ने कैमरे के सामने और पीछे दोनों जगह उत्कृष्ट प्रदर्शन करते हुए भारतीय फिल्म उद्योग में उल्लेखनीय योगदान दिया है। कई जैन सफल निर्माता, निर्देशक और अभिनेता हैं, जो अपनी रचनात्मकता और व्यावसायिक कौशल को उद्योग में ला रहे हैं। प्रमुख हस्तियों में प्रसिद्ध निर्माता और व्यवसायी, दिवंगत चंद्र प्रकाश जैन और लोकप्रिय अभिनेता शिल्पा शेट्टी शामिल हैं। जैन व्यक्ति अपने अनुशासन, व्यावसायिकता और नैतिकता की एक मजबूत भावना के लिए जाने जाते हैं, जो अक्सर मनोरंजन जगत में उनके काम में परिलक्षित होता है। उनका प्रभाव सिनेमा के निर्माण से लेकर प्रचार तक विभिन्न पहलुओं पर महसूस किया जा रहा है, जो उद्योग के विकास में महत्वपूर्ण योगदान दे रहा है।",
    english: "Jain people have made notable contributions to the Indian film industry, excelling both in front of and behind the camera. Many Jains are successful producers, directors, and actors, bringing their creativity and business acumen to the industry. Prominent figures include renowned producer and businessman, the late Chandra Prakash Jain, and popular actor Shilpa Shetty. Jain individuals are known for their discipline, professionalism, and a strong sense of ethics, which often translates into their work in the entertainment world. Their influence continues to be felt across various facets of cinema, from production to promotion, contributing significantly to the growth of the industry.",
    link: "/film_industry.html",
  },
];

export default function WJglory() {
  const [navOpen, setNavOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showEnglish, setShowEnglish] = useState({});

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
    const onScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topFunction = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleLanguage = (idx) => {
    setShowEnglish((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/index.html">
            <img src="./Images/logo.png" alt="" />
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

      <section id="glory">
        <h1>Glory of Wonderful Jainism</h1>
        <div className="glory">
          {gloryItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <h2>{item.title}</h2>
              <div className="glory1">
                <img src={item.img} alt="" />
                <p>
                  <span
                    className="hindi"
                    style={{ display: showEnglish[idx] ? "none" : "inline" }}
                  >
                    {item.hindi}
                  </span>
                  <span
                    className="english"
                    style={{ display: showEnglish[idx] ? "inline" : "none" }}
                  >
                    {item.english}
                  </span>
                  <br />
                  <button onClick={() => toggleLanguage(idx)} className="enBtn">
                    {showEnglish[idx] ? "हिंदी में पढ़ें" : "Read in English"}
                  </button>
                </p>
              </div>
              <Link to={item.link}>
                <button className="exBtn">Explore It</button>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}