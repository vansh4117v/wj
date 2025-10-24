import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../css/more.css'

export default function Aarti(){
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header />

      {/* --------------------Bhajan Section------------------ */}
      <section id="bhajan">
        <div className="b">
          <h1>मुनि श्री समत्व सागर जी द्वारा विरचित</h1>
          <p>मधुर आध्यात्मिक भजन एवं स्तोत्र</p>
        </div>

        <div className="bhajans">
          {[
            {
              link: "https://www.youtube.com/watch?v=azyXPQT6UHs&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=1",
              img: "https://i.ytimg.com/vi/azyXPQT6UHs/hqdefault.jpg",
              title: "जिन शासन के नभ ने अद्भुत",
              singer: "Roopesh Jain",
              editor: "Team Roopesh Jain",
            },
            {
              link: "https://www.youtube.com/watch?v=vK2pFf4W-As&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=2",
              img: "https://i.ytimg.com/vi/vK2pFf4W-As/hqdefault.jpg",
              title: "सर्व सिद्धि स्त्रोत",
              singer: "Prachi Jain",
              editor: "Team Prachi Jain",
            },
            {
              link: "https://www.youtube.com/watch?v=k9HyxLhyoTA",
              img: "https://i.ytimg.com/vi/k9HyxLhyoTA/hqdefault.jpg",
              title: "निर्ग्रंथ स्तोत्र",
              singer: "Roopesh Jain",
              editor: "Team Roopesh Jain",
            },
            {
              link: "https://www.youtube.com/watch?v=SBid_Wc0kbM",
              img: "https://i.ytimg.com/vi/SBid_Wc0kbM/hqdefault.jpg",
              title: "अध्यात्म विंशति (Female)",
              singer: "Prachi Jain",
              editor: "Naman Jain",
            },
            {
              link: "https://www.youtube.com/watch?v=5w9RTcbNc2Q",
              img: "https://i.ytimg.com/vi/5w9RTcbNc2Q/hqdefault.jpg",
              title: "अध्यात्म विंशति (Male)",
              singer: "Sourabh Jain",
              editor: "Tanmay Jain",
            },
            // Add more bhajans similarly...
          ].map((b, index) => (
            <a href={b.link} key={index} target="_blank" rel="noopener noreferrer">
              <div className="bhajan">
                <div className="bhajan1">
                  <img src={b.img} alt={b.title} />
                </div>
                <div className="bhajan2">
                  <h2>{b.title}</h2>
                  <p>Singer - {b.singer}</p>
                  <p>Edited By - {b.editor}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}