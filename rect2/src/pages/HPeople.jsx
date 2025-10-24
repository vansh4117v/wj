import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/hpeople.css";

const sections = [
  {
    title: "Jain Empires",
    img: "./Images/glory/h1.png",
    hindi:
      "जैन धर्म भारत के सबसे पुराने और सबसे शांतिपूर्ण धर्मों में से एक है, जो दया, सत्य और अहिंसा की शिक्षा देता है। हालाँकि इसका अपना कोई साम्राज्य नहीं था, फिर भी कई महान राजाओं और राजवंशों ने जैन धर्म का अनुसरण किया और इसका समर्थन किया। सम्राट चंद्रगुप्त मौर्य ने जैन भिक्षु बनने के लिए अपना ताज त्याग दिया, जिससे इसकी शिक्षाओं की गहरी शक्ति का पता चलता है। दक्षिण में, पश्चिमी गंग और होयसल जैसे राजाओं ने सुंदर मंदिर और श्रवणबेलगोला में बाहुबली की विशाल प्रतिमा बनवाई, जो आज भी लोगों को चकित करती है। शांति, शिक्षा और सभी जीवन के प्रति सम्मान का जैन धर्म का संदेश इन महान साम्राज्यों के समर्थन के माध्यम से चमकता रहा, जिसने दुनिया के लिए एक समृद्ध और गौरवपूर्ण विरासत छोड़ी।",
    english:
      "Jainism is one of India’s oldest and most peaceful religions, teaching kindness, truth, and non-violence. Though it never had its own empire, many great kings and dynasties followed and supported Jainism. Emperor Chandragupta Maurya gave up his crown to become a Jain monk, showing the deep power of its teachings. In the south, kings like the Western Gangas and Hoysalas built beautiful temples and the giant statue of Bahubali at Shravanabelagola, which still amazes people today. Jainism’s message of peace, learning, and respect for all life shone brightly through the support of these great empires, leaving a rich and proud heritage for the world.",
    explore: "/empire.html",
  },
  {
    title: "Jain Philosophers",
    img: "./Images/glory/h1.png",
    hindi:
      "जैन दार्शनिकों ने भारतीय चिंतन में महत्वपूर्ण योगदान दिया है, खास तौर पर तत्वमीमांसा, नैतिकता और तर्क के क्षेत्रों में। भगवान महावीर की शिक्षाओं में निहित, जैन दर्शन अहिंसा, सत्य और तप पर जोर देता है। कुंदकुंडा, उमास्वाति और हरिभद्र जैसे जैन विचारकों ने विचार की जटिल प्रणालियाँ विकसित की हैं जो वास्तविकता, आत्मा (जीव) और ब्रह्मांड की प्रकृति का पता लगाती हैं। उनका दार्शनिक दृष्टिकोण आत्म-अनुशासन, ध्यान और अनासक्ति के माध्यम से आत्मा की मुक्ति पर जोर देने के लिए विशिष्ट है, जो सांसारिक इच्छाओं से मुक्त आध्यात्मिक ज्ञान का मार्ग प्रदान करता है।",
    english:
      "Jain philosophers have made significant contributions to Indian thought, particularly in the areas of metaphysics, ethics, and logic. Rooted in the teachings of Lord Mahavira, Jain philosophy emphasizes non-violence (ahimsa), truth (satya), and asceticism. Jain thinkers, like Kundakunda, Umaswati, and Haribhadra, have developed intricate systems of thought that explore the nature of reality, the soul (jiva), and the universe. Their philosophical approach is distinct for its emphasis on the liberation of the soul through self-discipline, meditation, and non-attachment, offering a path to spiritual enlightenment free from worldly desires.",
    explore: "/monarch.html",
  },
  {
    title: "Jain Monarchs and Kings",
    img: "./Images/glory/h1.png",
    hindi:
      "कई भारतीय राजा और सम्राट जैन धर्म से बहुत प्रभावित थे और उन्होंने अहिंसा, सत्य और आध्यात्मिक अनुशासन के अपने मूल्यों को फैलाने में महत्वपूर्ण भूमिका निभाई। सबसे प्रसिद्ध में से एक चंद्रगुप्त मौर्य थे, जिन्होंने अपने बाद के वर्षों में जैन धर्म को अपनाया और एक भिक्षु बन गए। पश्चिमी गंगा, राष्ट्रकूट और होयसल राजवंशों के राजा भी जैन भिक्षुओं का समर्थन करने वाले भक्त अनुयायी थे, जिन्होंने शानदार मंदिर बनवाए और जैन साहित्य को बढ़ावा दिया। इन शासकों ने न केवल शासन में जैन सिद्धांतों को कायम रखा, बल्कि पूरे भारत में सांस्कृतिक और आध्यात्मिक रूप से जैन धर्म को पनपने में भी मदद की।",
    english:
      "Several Indian kings and monarchs were deeply influenced by Jainism and played a vital role in spreading its values of non-violence, truth, and spiritual discipline. One of the most famous was Chandragupta Maurya, who embraced Jainism in his later years and became a monk. Kings from the Western Ganga, Rashtrakuta, and Hoysala dynasties were also devout followers who supported Jain monks, built magnificent temples, and promoted Jain literature. These rulers not only upheld Jain principles in governance but also helped Jainism thrive culturally and spiritually across India.",
    explore: "/monarch.html",
  },
  {
    title: "Jain Freedom Fighters",
    img: "./Images/glory/h1.png",
    hindi:
      "जैन स्वतंत्रता सेनानियों ने अहिंसा, सत्य और सामाजिक न्याय के सिद्धांतों द्वारा निर्देशित भारत के स्वतंत्रता आंदोलन में महत्वपूर्ण योगदान दिया। इनमें सबसे प्रमुख थे लाला लाजपत राय, जो एक समर्पित जैन और राष्ट्रवादी संघर्ष के प्रमुख नेता थे, जिन्हें ब्रिटिश शासन के खिलाफ अपने निडर प्रतिरोध के लिए जाना जाता था। आचार्य विजयानंदसूरी जैसे जैन भिक्षुओं ने भी आध्यात्मिक और शैक्षिक सुधार के माध्यम से राष्ट्रीय चेतना जागृत करके महत्वपूर्ण भूमिका निभाई। कई जैन समुदायों ने वकालत, वित्त पोषण और जमीनी स्तर के प्रयासों के माध्यम से इस कारण का समर्थन किया। उनकी विरासत आस्था और स्वतंत्रता दोनों के प्रति गहरी प्रतिबद्धता को दर्शाती है।",
    english:
      "Jain freedom fighters made important contributions to India’s independence movement, guided by the principles of non-violence, truth, and social justice. Among the most prominent was Lala Lajpat Rai, a devout Jain and a key leader in the nationalist struggle, known for his fearless resistance against British rule. Jain monks like Acharya Vijayanandsuri also played a vital role by awakening national consciousness through spiritual and educational reform. Many Jain communities supported the cause through advocacy, funding, and organizing grassroots efforts. Their legacy reflects a deep commitment to both faith and freedom.",
    explore: "/empire.html",
  },
  {
    title:
      "Jain Ministers, Merchants and Accountants of Indian Monarchs and Kings",
    img: "./Images/glory/h1.png",
    hindi:
      "जैन व्यापारियों और मंत्रियों ने विभिन्न भारतीय राजाओं के दरबारों में प्रभावशाली पदों पर कार्य किया, खासकर मध्यकाल के दौरान। अपनी ईमानदारी, बुद्धि और प्रशासनिक कौशल के लिए जाने जाने वाले, वे अक्सर विश्वसनीय सलाहकार, राजनयिक और वित्तपोषक के रूप में कार्य करते थे। चालुक्य, राष्ट्रकूट और बाद में मुगल और राजपूत दरबारों जैसे राज्यों में, जैन मंत्रियों ने नीति-निर्माण और आर्थिक प्रबंधन में महत्वपूर्ण भूमिका निभाई। उनके धन और संरक्षण ने कला, वास्तुकला और जैन धर्म के प्रसार का भी समर्थन किया, जिससे पूरे भारत में भव्य मंदिरों और सांस्कृतिक केंद्रों का निर्माण हुआ।",
    english:
      "Jain merchants and ministers held influential positions in the courts of various Indian monarchs, especially during medieval times. Known for their integrity, intellect, and administrative skills, they often served as trusted advisors, diplomats, and financiers. In kingdoms like those of the Chalukyas, Rashtrakutas, and later the Mughal and Rajput courts, Jain ministers played key roles in policy-making and economic management. Their wealth and patronage also supported art, architecture, and the spread of Jainism, leading to the construction of magnificent temples and cultural centers across India.",
    explore: "/empire.html",
  },
];

function SectionCard({ s }) {
  const [showEnglish, setShowEnglish] = useState(false);
  return (
    <div className="hpeople">
      <h2>{s.title}</h2>
      <div className="hpeople1">
        <img src={s.img} alt={s.title} />
        <p>
          <span className="hindi" style={{ display: showEnglish ? "none" : "inline" }}>
            {s.hindi}
          </span>
          <span className="english" style={{ display: showEnglish ? "inline" : "none" }}>
            {s.english}
          </span>
          <br />
          <button className="enBtn" onClick={() => setShowEnglish((v) => !v)}>
            {showEnglish ? "हिंदी में पढ़ें" : "Read in English"}
          </button>
        </p>
      </div>
      <a href={s.explore}><button className="exBtn">Explore It</button></a>
    </div>
  );
}

export default function HPeople() {
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
          <Link to="/index.html"><img src="./Images/logo.png" alt="logo" /></Link>

          <div className="nav-links" id="navlinks" style={{ right: navOpen ? "0" : "-200px" }}>
            <i className="fa fa-xmark" onClick={() => setNavOpen(false)} />
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

          <i className="fa fa-bars" onClick={() => setNavOpen(true)} />
        </nav>

        <button onClick={topFunction} id="bttbtn" title="Go to top" style={{ display: showTopBtn ? "block" : "none" }}>
          <i className="fa-regular fa-arrow-up" />
        </button>
      </div>

      <main id="hpeople">
        <h1>Great People in the History of Jainism</h1>
        {sections.map((s, i) => <SectionCard s={s} key={i} />)}
      </main>
    </>
  );
}