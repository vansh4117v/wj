import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "../css/biography.css";

const dateBoxes = [
  { cls: "one", img: "./Images/md1.png", text: "Avtaran Diwas (31 MAY 1984)" },
  { cls: "two", img: "./Images/md2.png", text: "SATI Alumni (2006)" },
  { cls: "three", img: "./Images/md3.png", text: "BITS Pilani Alumni (2008)" },
  { cls: "four", img: "./Images/md4.png", text: "Google , Motorola Alumni" },
  { cls: "five", img: "./Images/md5.png", text: "Qualcomm (USA) Alumni" },
  { cls: "six", img: "./Images/md6.png", text: "Brahcharya Vrat (JANUARY 2013)" },
  { cls: "seven", img: "./Images/md7.png", text: "Diksha Diwas (29 AUGUST 2015)" },
];

const galleryImgs = [
  { src: "./Images/i1.png", alt: "Samatva Sagar Ji in Normal Life" },
  { src: "./Images/i2.png", alt: "Ankur aka Muni Shri Samatva Sagar Ji with Camero" },
  { src: "./Images/i3.png", alt: "Before Life of Muni Shri Samatva Sagar Ji" },
  { src: "./Images/i4.png", alt: "Muni Shri Samatva Sagar Ji in Camero" },
  { src: "./Images/i5.png", alt: "Ankur Jain aka Muni Shri Samatva Sagar Ji Lewish Lifestyle" },
  { src: "./Images/i6.png", alt: "Ankur Bhaiya aka Muni Shri Samatva Sagar ji in Mustang" },
  { src: "./Images/i7.png", alt: "Brahmchari Ankur Bhaiya aka Samatva Sagar Ji in home life" },
];

const sahityaList = [
  "जिन अभिषेक पाठ (हिंदी अनुवाद)",
  "जिन शासन के नभ में अद्भुत",
  "सर्व सिद्धि स्तोत्र",
  "निर्ग्रन्थ स्तोत्र",
  "अध्यात्म विंशति",
  "जिनलिंगाष्टक",
  "शुद्धात्म तत्व चिंतन",
  "तीर्थंकर स्तवन",
  "तीर्थेश स्तुति",
  "भरत भगवान भजन",
  "अष्टम तीर्थेश स्तुति",
  "आगम की बात बतई दो",
];

export default function Biography() {
  const textRef = useRef(null);
  const [gallery, setGallery] = useState(galleryImgs);

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";

    const onScroll = () => {
      if (textRef.current) {
        const scrolled = window.scrollY || document.documentElement.scrollTop;
        textRef.current.style.left = scrolled * 2 + "px";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nextGallery = () => setGallery((g) => [...g.slice(1), g[0]]);
  const prevGallery = () => setGallery((g) => [g[g.length - 1], ...g.slice(0, g.length - 1)]);

  return (
    <>
      <Header />

      <section id="biography">
        <img src="./Images/sky.jpg" id="sky" alt="" />
        <img src="./Images/text.png" id="text" ref={textRef} alt="Muni Samatva Sagar Ji" />
        <div id="m1">
          <img src="./Images/m1.png" id="m1-img" alt="Shramanratn Muni Shri 108 Samatva Sagar Ji" />
        </div>
      </section>

      <section id="dates">
        <div className="dates">
          {dateBoxes.map((d, idx) => (
            <div
              key={idx}
              className={`box ${d.cls}`}
              style={{ ["--img"]: `url(${d.img})` }}
              data-text={d.text}
            />
          ))}
        </div>
      </section>

      <section id="parichay">
        <div className="parichay">
          <div className="information">
            <div className="head">
              <div className="img">
                <img src="./Images/mp1.jpg" alt="Vishudhratn Muni Shri Samatva Sagar Ji" />
              </div>
              <div className="heading">
                <h2>जीवन परिचय</h2>
                <p>श्रमण मुनि श्री 108 समत्व सागर जी महाराज</p>
              </div>
            </div>

            <div className="info">
              <div className="infoq">
                <table>
                  <tbody>
                    <tr><th>पूर्व नाम:</th><td>बा. ब्र. अंकुर जी जैन</td></tr>
                    <tr><th>पिता श्री:</th><td>डॉ. श्री अभय कुमार जी जैन, विदिशा</td></tr>
                    <tr><th>माता श्री:</th><td>श्रीमती अनिताजी जैन</td></tr>
                    <tr><th>जन्म स्थान:</th><td>जबलपुर(म. प्र.)</td></tr>
                    <tr><th>जन्म दिनांक:</th><td>31 मई 1984</td></tr>
                    <tr><th>लौकिक शिक्षा:</th><td>बी. ई. , एम. ई.(BITS-Pilani)</td></tr>
                    <tr><th>ब्रह्मचर्य व्रत:</th><td>जनवरी, 2013, विदिशा (म. प्र.)</td></tr>
                    <tr><th>मुनि दीक्षा:</th><td>29 अगस्त 2015</td></tr>
                    <tr><th>दीक्षा स्थल:</th><td>भीलवाड़ा (राज.)</td></tr>
                    <tr><th>दीक्षा गुरु:</th><td>अध्यात्म सरोवर के राजहंस प्रथम पट्टाचार्य अध्यात्मचक्रवर्ती चर्याशिरोमणि गणाचार्य श्री 108 विशुद्ध सागर जी महाराज</td></tr>
                    <tr><th>मातृभाषा:</th><td>हिंदी</td></tr>
                    <tr><th>अन्य भाषा:</th><td>अंग्रेजी, संस्कृत, प्राकृत</td></tr>
                    <tr><th>उपाधि:</th><td>युवा श्रुत संवाहक , वैज्ञानिक संत , Key Of Youth</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bline"></div>

              <div className="infos">
                <p>
                  आपका जन्म 31 मई 1984 को जबलपुर में हुआ , प्रारंभिक शिक्षा छोटे छोटे ग्राम में हुई, फिर
                  <b> SATI विदिशा</b> से <b>electronics and telecommunication</b> में इंजीनियर की डिग्री ली तत्पश्चात ही
                  देश के सर्वोत्तम इंजी. कॉलेज में से एक <b>BITS-Pilani</b> से <b>communication System</b> में <b>M.E.</b> की डिग्री प्राप्त की ।
                  <br /><br />
                  इसके पश्चात आपकी जॉब मोबाइल की सबसे बड़ी कंपनी <b>Google acquired Motorola Mobility</b> बैंगलोर में लग गई।
                  कुछ दिनों पश्चात ही वर्क कल्चर में श्रेष्ठतम एवं कम्युनिकेशन के श्रेष्ठतम कंपनी में से एक <b>Qualcomm हैदराबाद</b> में सीनियर सॉफ्वेयर के पद पर लगभग 1.5 वर्ष तक कार्यरत रहे।
                  <br /><br />
                  इसी बीच कंपनी के मध्यान से <b>America के California राज्य के San Diego</b> शहर में कुछ महीनों के लिए आपका जाना हुआ ।
                  <br /><br />
                  इंडियन पैकेज लगभग <b>15 लाख</b> रुपए वार्षिक के साथ साथ अमेरिका में कंपनी के द्वारा प्राप्त अनेक सुविधाओं के साथ साथ <b>Camero, Mustang</b> जैसी बड़ी बड़ी गाड़ियां <b>Hollywood (L.A.), Disneyland, Universal Studio Tracking , Kayaking</b> आदि अनेक युवाओं के ड्रीम्स स्पोर्ट्स कोर्स के साथ समय व्यतीत होता गया इन सब के होने पर भी गुरु आशीष एवं माता पिता के संस्कार के अनुरूप आप अमेरिका में शनिवार रविवार <b>200km मंदिर</b> अवश्य जाया करते।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="panchkalyanak">
        <div className="panchkalyanak">
          <div className="panchkalyanak1">
            <div className="p1head">
              <h2>2013</h2>
              <h3>विदिशा पंचकल्याणक</h3>
            </div>
            <div className="p1img">
              <img src="./Images/p1.jpg" alt="Muni Shri Samatva Sagar Brahmchari Awastha" />
            </div>
            <div className="p1para">
              <h4>संघ प्रवेश</h4>
              <p>17 जून 2013 का तप कल्याणक <br />का वो दिन प्यारा<br />
                पंचम काल के बाहुबली(अंकुर जी) ने <br />राज त्याग ब्रह्मचर्य व्रत अपनाया</p>
            </div>
            <div className="p1img">
              <img src="./Images/p7.jpg" alt="Bal Brahmchari Ankur Bhaiya" />
            </div>
          </div>

          <div className="panchkalyanak2">
            <div className="p2img">
              <img src="./Images/p2.jpg" alt="Samatva Sagar Ji as Ankur Bhaiya Vidisha" />
              <img src="./Images/p3.jpeg" alt="Brahmchari Ankur Bhaiya Abhishek Vidisha" />
            </div>
            <div className="p2para">
              <p>मुनि श्री समत्व सागर जी की वैराग्य की</p>
              <h2>अनोखी कहानी</h2>
              <p>पिता डॉ अभय कुमार जी, <br />
                माँ अनीता के आंखों के तारे। <br />
                आकांक्षा और अंकुर दो बच्चे प्यारे, <br />
                2013 में विदिशा नगरी में पंचकल्याणक आया। <br />
                माँ ने मरुदेवी पिता ने नाभिराय और <br />
                अंकुर ने बाहुबली का पद अपनाया। <br />
                तप कल्याणक का वो दिन प्यारा, <br />
                आदिकुमार ने वैराग्य धारा। <br />
                पंचमकाल के बाहुबली ने राज त्याग, <br />
                कर ब्रह्मचारी व्रत अपनाया।</p>
            </div>
            <div className="p8">
              <img src="./Images/p8.jpg" alt="Pratham Keshlochan Muni Shri Samatva Sagar Ji" />
            </div>
          </div>

          <div className="panchkalyanak3">
            <img src="./Images/p4.jpg" alt="Haldi Of Ankur Bhaiya aka Muni Shri Samatva Sagar Ji" />
            <img src="./Images/p5.jpg" alt="Mangal Vihar Ankur Bhaiya aka Muni Shri Samatva Sagar Ji" />
            <img src="./Images/p6.jpg" alt="Pratham Keshlochan Brahmchari Ankur Bhaiya aka Muni Shri Samatva Sagar Ji" />
          </div>
        </div>
      </section>

      <section id="life">
        <div className="life">
          <div className="life1">
            <h2>गृहस्थ जीवन के क्षण</h2>
            <p>बचपन से ही आप प्रतिदिन मंदिर जाते एवं कभी भी लहसुन प्याज रात्रि भोजन नहीं करते थे , यह क्रम BITS Pilani एवं America में जारी रहा, बैंगलोर में स्वाध्याय का क्रम बना रहने से America की चमक दमक Luxury Life आपको रास नहीं आई।</p>
          </div>

          <div className="gallery">
            <div className="gallery1">
              {gallery.map((g, i) => (
                <div className="item" key={i}><img src={g.src} alt={g.alt} /></div>
              ))}
            </div>
            <div className="button">
              <span className="prev" onClick={prevGallery}><i className="fa-solid fa-chevron-left"></i></span>
              <span className="next" onClick={nextGallery}><i className="fa-solid fa-chevron-right"></i></span>
            </div>
          </div>

          <div className="life2">
            <h2>तस्वीरें देखकर विश्वास नहीं होता कि कैसे कोई इस कठिन मार्ग पर चलने का होंसला रखता है</h2>
            <p>अक्सर लोग ये कहते है कि, जो लोग सांसारिक जीवन में मग्न हो जाते है वो कभी भी मोक्ष मार्ग पर नहीं चल सकते, इसी बात को गलत साबित करने के लिए एक उदाहरण बन कर आए "श्रमण मुनि श्री समत्व सागर जी महाराज", जिन्होंने अपनी Luxury Life, America जैसे देश की चमक दमक, लाखों का पैकेज, लहरों पर तैरना, और स्केटिंग के साथ ही पहाड़ों पर चढ़ने जैसे शौंक पूरे किए, बड़ी–बड़ी गाड़ियों को चलाया, Sky-Diving , Under Water और ना जाने कितने अलग अलग एडवेंचर किए हैं ।</p>
          </div>
        </div>
      </section>

      <section id="diksha">
        <div className="diksha">
          <div className="diksha1">
            <h2>अंकुर से बने समत्व सागर</h2>
            <h2>भीलवाड़ा, राजस्थान</h2>
          </div>
          <div className="diksha2">
            <p>आपकी लगन, समर्पण और आध्यात्मिक रुचि को देख 29 अगस्त 2015 को भीलवाड़ा , राजस्थान में 6 अन्य ब्रह्मचारी भाइयों के साथ आपकी मुनि दीक्षा आचार्य भगवन विशुद्ध सागर जी महाराज के कर कमलों एवं हजारो श्रावकों की उपस्थिति में सानंद सम्पन्न हुई।</p>
            <img src="./Images/d1.png" alt="Muni Shri Samatva Sagar Ji  Diksha" />
          </div>
          <p>जिनके आगे यश वैभव सब नतमस्तक हो आते थे, <br />
            देश-विदेशी सारे सुख ही सहज प्राप्त हो जाते थे । <br />
            जिन के वैरागी मानस को मोह-पाश ना बांध सका, <br />
            विलसित जीवन का आडंबर त्याग भाव ना लांघ सका । <br />
            वें अंकुर अब विशुद्ध रश्मि में "समत्व-वृक्ष" बन निखर रहे हैं, <br />
            जगत पूज्य निर्ग्रन्थ दिगंबर साधु बनकर विचर रहे हैं ।</p>
        </div>

        <div className="sangh">
          <h2>उपसंघ का निर्माण</h2>
          <h3>चातुर्मास: टीकमगढ़(म.प्र.), सहारनपुर(उ.प्र.), जयपुर(राज.) </h3>
          <div className="sangh1">
            <div className="sanghp">
              <p>आपने हमेशा ही गुरु आज्ञा को सर्व प्रथम माना है, चर्या शिरोमणि आचार्य विशुद्ध सागर जी की आज्ञा से आपका प्रथम चातुर्मास 2022 में टीकमगढ़(म.प्र.) में हुआ , 2023 में सहारनपुर (उ.प्र.) में और 2024 में जयपुर(राज.) में हुआ । आपने अपने ज्ञान के प्रकाश से चारो तरफ जैन धर्म की प्रभावना की और भगवान महावीर स्वामी के सिद्धांतों को जन जन तक पहुंचाया ।</p>
            </div>
            <div className="sangh2">
              <img src="./Images/s1.jpg" alt="First Chaturmas of Muni Shri Samatva Sagar Ji, Tikamgarh" />
              <img src="./Images/s2.jpg" alt="Second Chaturmas of Muni Shri Samatva Sagar Ji, Saharanpur" />
              <img src="./Images/s3.jpg" alt="Third Chaturmas of Muni Shri Samatva Sagar Ji, Jaipur" />
            </div>
          </div>

          <div className="sanghimg">
            <marquee behavior="scroll" direction="left" scrollamount="15" scrolldelay="100" onMouseOver={(e)=>e.currentTarget.stop()} onMouseOut={(e)=>e.currentTarget.start()}>
              <img src="./Images/sim1.jpeg" alt="Wonderful Jainism" />
              <img src="./Images/sim2.jpeg" alt="Wonderful Jainism" />
              <img src="./Images/sim3.jpg" alt="Wonderful Jainism" />
              <img src="./Images/sim4.png" alt="Wonderful Jainism" />
            </marquee>
          </div>

          <div className="wj">
            <p>इस बीच युवाओं के लिए एक विशेष सेशन का प्रारंभ प्रति रविवार "Wonderuful Jainism" के नाम से की जो युवाओं की विचार धारा को तर्क के माध्यम से पूर्ण परिवर्तित करने में सफलता रही । धर्म एवं संस्कार नैतिक मूल्यों से दूर जाने वाली युवा पीढ़ी इन्हें सुनकर मानों पुनः अपने कुल, धर्म संस्कृति के गौरव पर बहुमान करने में अग्रसर आती दिखी। <br />
              <Link to="https://www.youtube.com/playlist?list=PL57YHGmA5D10CwZyq93qxjOYjm0vrl56k" target="_blank"><button className="wjbtn">Click Here To Watch</button></Link>
            </p>
            <video height="450" controls>
              <source src="./video/v1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section id="sahitya">
        <div className="shead">
          <img src="./Images/sahitya.JPG" alt="Muni Shri Samatva Sagar Ji Sahitya" />
          <h1>मुनि श्री द्वारा रचित साहित्य</h1>
        </div>

        <div className="sahitya">
          <h2>मुनि श्री द्वारा रचित कृतियाँ</h2>
          <div className="sahitya1">
            <ul>
              <li>जिन अभिषेक पाठ (हिंदी अनुवाद)</li>
            </ul>
          </div>
        </div>

        <div className="sahitya">
          <h2>मुनि श्री द्वारा रचित भजन एवं स्तोत्र</h2>
          <div className="sahitya1">
            <ul>
              {sahityaList.map((s, i) => (<li key={i}>{s}</li>))}
            </ul>
          </div>
          <Link to="./bhajan.html"><button className="sbtn"> To Watch All Bhajan Click Here</button></Link>
        </div>
      </section>
    </>
  );
}