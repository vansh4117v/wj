import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/bhajan.css";

const bhajans = [
  {
    href: "https://www.youtube.com/watch?v=azyXPQT6UHs&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=1&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/azyXPQT6UHs/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLALFBqO1GfSAfVmPlfgEnaXMaoQeg",
    title: "जिन शासन के नभ ने अद्भुत",
    singer: "Roopesh Jain",
    edited: "Team Roopesh Jain",
    alt: "Jin Shasan Ke Nabh Mein Adbhut by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=vK2pFf4W-As&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=2&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/vK2pFf4W-As/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDAfeDWTu6Td8M2cJ06z4tkR2U7rQ",
    title: "सर्व सिद्धि स्त्रोत",
    singer: "Prachi Jain",
    edited: "Team Prachi Jain",
    alt: "Sarv Siddhi Stotra by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=k9HyxLhyoTA&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=3&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/k9HyxLhyoTA/hqdefault.jpg?sqp=-oaymwFBCPYBEIoBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGGkgaShpMA8=&rs=AOn4CLAIp4L7Ld7z9U9rgEE4Q6-Q2thFgQ",
    title: "निर्ग्रंथ स्तोत्र",
    singer: "Roopesh Jain",
    edited: "Team Roopesh Jain",
    alt: "Nigranth Stotra by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=SBid_Wc0kbM&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=4&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/SBid_Wc0kbM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC-puQa5j2K4bM4pHCrxzk25PG8ag",
    title: "अध्यात्म विंशति (Female)",
    singer: "Prachi Jain",
    edited: "Naman Jain",
    alt: "Adhyatma Vinshati(Female Version) by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=5w9RTcbNc2Q&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=11&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/5w9RTcbNc2Q/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAhWSv0Oh2RM-CqqMKTCz4beuuCgw",
    title: "अध्यात्म विंशति (Male)",
    singer: "Sourabh Jain",
    edited: "Tanmay Jain",
    alt: "Adhyatma Vinshati(Male Version) by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=XX9KhzaQ6eY&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=5&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/XX9KhzaQ6eY/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBz5P2AYt5GFGqceTpIV11UO2UcpQ",
    title: "जिनलिंगाष्टकम्",
    singer: "Ritika Jain",
    edited: "Saurabh Jain",
    alt: "Jinlingashtakam by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=LiWEvRWtx2Y&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=6&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/LiWEvRWtx2Y/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAG_NkQe6Th-MeanyZ8OztBXOfDIQ",
    title: "शुद्धात्म तत्व चिंतन",
    singer: "Prachi Jain",
    edited: "Saurabh Jain",
    alt: "Shudhatma Tatva Chintan by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=B5YsMCZ65ds&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=10&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/B5YsMCZ65ds/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBu2_-Wem3qTotVXgVfEAZ3ohGm5A",
    title: "तीर्थंकर स्तवन्",
    singer: "Ritika Jain",
    edited: "Tanmay Jain",
    alt: "Tirthankar Stavan by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=r5M5AIxqbDU&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=12&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/r5M5AIxqbDU/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBB8sqAnt4N1Ad_cLoqAk_cx4m1CA",
    title: "तीर्थेश स्तुति",
    singer: "Ritika Jain",
    edited: "Udit Jain",
    alt: "Tirthesh Stuti by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=nRu3I3iNukk&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=15&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/nRu3I3iNukk/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBYjiI92RZJQwcqG1cp3vXA46EDFw",
    title: "भरत भगवान भजन",
    singer: "-",
    edited: "Tanmay Jain",
    alt: "Bharat Bhagwaan Bhajan by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://www.youtube.com/watch?v=wDnDA2S1Hy0&list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&index=16&pp=iAQB8AUB",
    img: "https://i.ytimg.com/vi/wDnDA2S1Hy0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAjMBDoFTPFE27hguQ7Sf85ladkZQ",
    title: "अष्टम तीर्थेश स्तुति",
    singer: "Mayur Jain",
    edited: "Tanmay Jain",
    alt: "Ashtam Tirthesh Stuti by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://youtu.be/EFQOn1gL_ZM?si=vZbIMAAuwtA0xtea",
    img: "https://i.ytimg.com/vi/EFQOn1gL_ZM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDu8S6Dew_-k7Bjl5eH7TFtJd5sbg",
    title: "जिन अभिषेक पाठ",
    singer: "Priyanka Jain",
    edited: "Ritik Jain",
    alt: "Jin Abhishek Path by Muni Shri Samatva Sagar Ji",
  },
  {
    href: "https://youtu.be/96wEQBa-h7s?si=XypzSKlivU4dhEYF",
    img: "https://i.ytimg.com/vi/96wEQBa-h7s/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAxQ2uOoekuhhD38fpqDPvp-MbxEg",
    title: "आगम की बात बतई दो",
    singer: "Ritika Jain",
    edited: "Sejal Jain",
    alt: "Aagam ki Baat Btai Do by Muni Shri Samatva Sagar Ji",
  },
];

export default function Bhajan() {
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header title="WONDERFUL JAINISM Bhajan" backgroundImage="./Images/head.png" minHeight="100vh">
        <p>Written By MUNI SHRI SAMATVA SAGAR JI</p>
        <a
          href="https://youtube.com/playlist?list=PL57YHGmA5D10xtTyTBxDbn_kFQ3LRAdAd&si=L9yqKyeRauUutaOx"
          className="hero-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Playlist On Youtube
        </a>
      </Header>

      <section id="bhajan">
        <div className="b">
          <h1>मुनि श्री समत्व सागर जी द्वारा विरचित</h1>
          <p>मधुर आध्यात्मिक भजन एवं स्तोत्र</p>
        </div>

        <div className="bhajans">
          {bhajans.map((b, i) => (
            <a key={i} href={b.href} target="_blank" rel="noopener noreferrer">
              <div className="bhajan">
                <div className="bhajan1">
                  <img src={b.img} alt={b.alt} />
                </div>
                <div className="bhajan2">
                  <h2>{b.title}</h2>
                  <p>{`Singer- ${b.singer}`}</p>
                  <p>{`Edited By - ${b.edited}`}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}