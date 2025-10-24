import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import "../css/home.css";
import { Link } from "react-router-dom";

const slides = [
  { href: "https://maps.app.goo.gl/rzzYZ9vEVkePa7D86", img: "./Images/ad10.png", alt: "" },
  { href: "https://youtube.com/playlist?list=PL57YHGmA5D13Os-FZaWbCZ471ldyvNjtk&si=Zf0Y7orWifUm74sD", img: "./Images/ad12.png", alt: "" },
  { href: "https://youtube.com/playlist?list=PL57YHGmA5D13z1jMv1_Qzhtlkrmlph5Oj&si=bgoBj60kdIjy8Olh", img: "./Images/ad13.png", alt: "" },
  { href: "https://youtube.com/playlist?list=PL57YHGmA5D11B8eVDWKK2RiGUvz-Ml-BY&si=KIsiSAN-eR0fWmiz", img: "./Images/ad14.png", alt: "" },
  { href: "https://youtube.com/playlist?list=PL57YHGmA5D10CwZyq93qxjOYjm0vrl56k&si=1xMFel5NDSDz4Use", img: "./Images/ad4.png", alt: "" },
  { href: "https://wonderfuljainism.com/p/f20fd1/", img: "./Images/ad1.png", alt: "" },
  { href: "https://wonderfuljainism.com/", img: "./Images/ad2.png", alt: "" },
  { href: "https://vishuddhsagar.com/", img: "./Images/ad3.png", alt: "" },
];

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const timerRef = useRef(null);
  const frameSectionRef = useRef(null);
  const frame1Ref = useRef(null);
  const frame3Ref = useRef(null);

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";

    const onScroll = () => {
      // frame animation
      const section = frameSectionRef.current;
      if (!section || !frame1Ref.current || !frame3Ref.current) return;
      const viewportHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const startTrigger = viewportHeight * 1;
      const rawProgress = 1 - sectionTop / startTrigger;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      const maxOffset = 200;
      frame1Ref.current.style.transform = `translateX(${progress * maxOffset}px)`;
      frame3Ref.current.style.transform = `translateX(-${progress * maxOffset}px)`;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // slideshow timer
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSlideIndex((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timerRef.current);
  }, [slideIndex]);

  useEffect(() => {
    // try AOS init if loaded (index.html included AOS via CDN originally)
    if (window.AOS && typeof window.AOS.init === "function") {
      window.AOS.init();
    }
  }, []);

  const plusSlides = (n) => setSlideIndex((s) => (s + n + slides.length) % slides.length);
  const currentSlide = (n) => setSlideIndex(n);

  return (
    <>
      <Header title="Wonderful Jainism" backgroundImage="./Images/head.png" minHeight="100vh">
        <p>THE DIVINE LIFESTYLE</p>
        <h1>अद्भुत जिनधर्म</h1>
        <p>एक उत्कृष्ट जीवन पद्धति</p>
        <a href="https://www.youtube.com/@wonderful_jainism" className="hero-btn" target="_blank" rel="noopener noreferrer">Visit Us On Youtube</a>
      </Header>

      {/* tadpatra */}
      <section id="tadpatra">
        <h1>ताड़पत्रों पर अंकित ग्रन्थ</h1>
        <div className="tadpatra">
          <div className="tadpatra1">
            <p>समयसार , नियमसार आदि सभी ग्रंथों को ताड़पत्र पर अंकित ग्रंथों के रूप प्राप्त करने के लिए संपर्क करें</p>
            <a href="tel:8839481571"><button className="adbtn"><i className="fa-solid fa-phone"></i> Call Nirgranth Creations</button></a>
          </div>
        </div>
      </section>

      {/* slideshow */}
      <div className="slideshow-container">
        {slides.map((s, i) => (
          <div key={i} className="mySlides fade" style={{ display: i === slideIndex ? "block" : "none" }}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              <img src={s.img} style={{ width: "100%" }} alt={s.alt} />
            </a>
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>

      <div style={{ textAlign: "center" }}>
        {slides.map((_, i) => (
          <span key={i} className={`dot ${i === slideIndex ? "active" : ""}`} onClick={() => currentSlide(i)} />
        ))}
      </div>

      {/* sessions */}
      <section id="session">
        <h3>प्रवचन श्रृंखला (Currently Running Sessions)</h3>
        <p>श्रमण मुनि श्री समत्व सागर जी महाराज के मुखारबिंद से सुनिए जिनवाणी की अमृतमय वाणी</p>
        <div className="session">
          <a href="https://youtube.com/playlist?list=PL57YHGmA5D10CwZyq93qxjOYjm0vrl56k&si=NXxpZdbyrPCTrLgo">
            <div className="card">
              <div className="line" />
              <div className="block1"><h2>Youth Special Sessions</h2></div>
              <div className="block2"><div className="block3"><h4>The Glorious Jain Dharm</h4><h4>मुनि श्री 108 समत्व सागर जी महाराज</h4></div></div>
            </div>
          </a>
          <a href="https://youtube.com/playlist?list=PL57YHGmA5D13Os-FZaWbCZ471ldyvNjtk&si=Zf0Y7orWifUm74sD">
            <div className="card">
              <div className="line" />
              <div className="block1"><h2>Life Management Workshop</h2></div>
              <div className="block2"><div className="block3"><h4>The Divine LifeStyle</h4><h4>मुनि श्री 108 समत्व सागर जी महाराज</h4></div></div>
            </div>
          </a>
          <a href="https://youtube.com/playlist?list=PL57YHGmA5D13z1jMv1_Qzhtlkrmlph5Oj&si=bgoBj60kdIjy8Olh">
            <div className="card">
              <div className="line" />
              <div className="block1"><h2>विषापहार स्तोत्र</h2></div>
              <div className="block2"><div className="block3"><h4>भक्ति कैसे की जाती है</h4><h4>आचार्य श्री धनंजय स्वामी</h4></div></div>
            </div>
          </a>
          <a href="https://youtube.com/playlist?list=PL57YHGmA5D11B8eVDWKK2RiGUvz-Ml-BY&si=f7xBPacYyyxfO3NW">
            <div className="card">
              <div className="line" />
              <div className="block1"><h2>वृहद द्रव्य संग्रह</h2></div>
              <div className="block2"><div className="block3"><h4>आध्यात्मिक प्रवचन</h4><h4>आचार्य ब्रह्मदेवसुरी कृत</h4></div></div>
            </div>
          </a>
        </div>
      </section>

      {/* taplink */}
      <section id="taplink">
        <h1>Explore Jainism</h1>
        <div className="taplink" data-aos="fade-up" data-aos-duration="1000">
          <div className="taplink1"><a href="https://wonderfuljainism.com/"><img src="./Images/t1.png" alt="All Jain Links" /></a><p>wonderfuljainism.com</p></div>
          <div className="taplink1"><a href="https://jaindharm.info/"><img src="./Images/t2.png" alt="Samporn Jain Dharm" /></a><p>संपूर्ण जैन धर्म एक click में</p></div>
          <div className="taplink1"><a href="https://vishuddhsagar.com/"><img src="./Images/t3.png" alt="Acharya Vishudh Sagar Ji Information" /></a><p>आचार्य विशुद्ध सागर जी की जानकारी</p></div>
        </div>
      </section>

      {/* frame section with scroll animation */}
      <section id="frame" ref={frameSectionRef}>
        <div className="laptop">
          <div className="frame1" ref={frame1Ref}>
            <div className="frame2"><a href="gpeople.html"><img src="./Images/glory/h1.png" alt="" /></a></div>
            <div className="frame2"><a href=""><img src="./Images/glory/h2.png" alt="" /></a></div>
            <div className="frame2"><a href=""><img src="./Images/glory/h3.png" alt="" /></a></div>
            <div className="frame2"><a href="hpeople.html"><img src="./Images/glory/h4.png" alt="" /></a></div>
            <div className="frame2"><a href=""><img src="./Images/glory/h5.png" alt="" /></a></div>
          </div>
          <div className="frame3" ref={frame3Ref}>
            <div className="frame2"><a href="facts.html"><img src="./Images/glory/h6.png" alt="" /></a></div>
            <div className="frame2"><a href="bussiness.html"><img src="./Images/glory/h7.png" alt="" /></a></div>
            <div className="frame2"><a href="film_industry.html"><img src="./Images/glory/h8.png" alt="" /></a></div>
          </div>
        </div>

        <div className="phone">
          <div className="frame4">
            <div className="frame2" data-aos="fade-right"><a href="gpeople.html"><img src="./Images/glory/h1.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-left"><a href=""><img src="./Images/glory/h2.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-right"><a href=""><img src="./Images/glory/h3.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-left"><a href="hpeople.html"><img src="./Images/glory/h4.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-right"><a href=""><img src="./Images/glory/h5.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-left"><a href="facts.html"><img src="./Images/glory/h6.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-right"><a href="bussiness.html"><img src="./Images/glory/h7.png" alt="" /></a></div>
            <div className="frame2" data-aos="fade-left"><a href="film_industry.html"><img src="./Images/glory/h8.png" alt="" /></a></div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div id="footer">
          <div className="foot1">
            <h1>Wonderful Jainism</h1>
            <p>The Divine Lifestyle</p>
            <div className="sub-foot1">
              <h2>मुनि श्री 108 समत्व सागर जी महाराज</h2>
              <p>यह Website पूज्य मुनि श्री 108 समत्व सागर जी महाराज के भक्तों द्वारा निर्मित श्रुत संवर्धक समूह द्वारा जिन धर्म की प्रभावना हेतु चलाई जा रही है , ध्यान रहे आचार्य भगवन और उनके सभी शिष्य निर्दोष मुनि चर्या का पालन करते हुए किसी भी प्रकार के परिग्रह को अपने पास नहीं रखते हैं।</p>
            </div>
          </div>

          <div className="foot2">
            <div className="foot3">
              <p>Quick Links</p>
              <Link to="/index.html">Home</Link>
              <Link to="/sessions.html">Sessions</Link>
              <Link to="/bhajan.html">Bhajan</Link>
              <Link to="/about.html">About</Link>
              <Link to="/contact.html">Contact</Link>
            </div>

            <div className="foot3">
              <p>Muni Shri</p>
              <Link to="/biography.html">Biography</Link>
              <Link to="/sangh.html">Sangh Information</Link>
              <Link to="#">Photos</Link>
              <Link to="/pooja.html">Pooja</Link>
              <Link to="/aarti.html">Aarti</Link>
              <Link to="/documentary.html">Documentary</Link>
            </div>

            <div className="foot3">
              <p>Others</p>
              <Link to="/literature.html">Sahitya</Link>
              <Link to="/shop.html">Shop</Link>
              <Link to="#">Quotes</Link>
              <Link to="/symposium.html">Symposium</Link>
              <Link to="#">Podcasts</Link>
              <Link to="/WJglory.html">Glory of Wonderful Jainism</Link>
            </div>

            <div className="foot3">
              <p>Social Links</p>
              <a href="https://www.instagram.com/wonderful_jainism?igsh=MXg4bWEzNzIzNHpzMA==">Instagram</a>
              <a href="https://www.youtube.com/@wonderful_jainism">Youtube</a>
              <a href="https://www.facebook.com/profile.php?id=100040153862317&mibextid=ZbWKwL">Facebook</a>
              <a href="https://www.threads.net/@wonderful_jainism">Threads</a>
              <a href="https://chat.whatsapp.com/Jgv5jvVbdkkKm7WzOQ0C5J">Whatsapp</a>
            </div>

            <div className="foot3">
              <p>Other Links</p>
              <a href="https://wonderfuljainism.com/">wonderfuljainism.com</a>
              <a href="https://jaindharm.info/">All Jain Links</a>
              <a href="https://vishuddhsagar.com/">vishuddhsagar.com</a>
            </div>
          </div>
        </div>

        <div className="fline" />
        <div className="footer2">
          <p>&copy;2025 &nbsp;Operated By - Wonderful Jainism</p>
          <p>Site Developed & Maintain by Tanmay Jain</p>
        </div>
      </footer>
    </>
  );
}