import React, { useEffect } from "react";
import Header from "../components/Header";
import "../css/sessions.css";

const sessions = [
  {
    title: "Youth Special Sessions",
    subtitle1: "The Glorious Jain Dharm",
    subtitle2: "मुनि श्री 108 समत्व सागर जी महाराज",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D10CwZyq93qxjOYjm0vrl56k&si=NXxpZdbyrPCTrLgo",
  },
  {
    title: "वृहद द्रव्य संग्रह",
    subtitle1: "आध्यात्मिक प्रवचन",
    subtitle2: "आचार्य ब्रह्मदेवसुरी कृत",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D11B8eVDWKK2RiGUvz-Ml-BY&si=f7xBPacYyyxfO3NW",
  },
  {
    title: "रत्नकरण्डक श्रावकाचार",
    subtitle1: "गृहस्थ जीवन के साथ धर्म",
    subtitle2: "आचार्य समंतभद्र स्वामी",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D13BG3xUM41SHl6qFAPx8ApO&si=_LM7UD814C8q37XB",
  },
  {
    title: "पुरुषार्थ सिद्ध्युपाय",
    subtitle1: "मानव जीवन के प्रयोजन की सिद्धि",
    subtitle2: "आचार्य अमृतचंद्र स्वामी",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D138heb3fDUyBnMs6h5wXFSj&si=-dzc82EwcZfb5fOL",
  },
  {
    title: "तत्वार्थ सूत्र",
    subtitle1: "जैन धर्म का सार",
    subtitle2: "आचार्य उमा स्वामी",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D12QHKPJvMTjUHgUAHl45CIx&si=CLmDvR1KmYSDSfB8",
  },
  {
    title: "जैन भूगोल",
    subtitle1: "Jain Geography",
    subtitle2: "मुनि श्री 108 समत्व सागर जी",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D10myzx-a_rj2v_2I9wDiLx3&si=er6P7Q-8rfp0KCCl",
  },
  {
    title: "वारसाणुपेक्खा",
    subtitle1: "बारह भावना पर मुनि श्री के प्रवचन",
    subtitle2: "",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D13y9ItXvY5J_nzPt0K-BAEJ&si=Mx5DsPNZDfK-J4FC",
  },
  {
    title: "आलाप पद्धति",
    subtitle1: "आचार्य देवसेन स्वामी",
    subtitle2: "",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D127AC3NwRoZw3JpsU7ESMe7&si=3QGiAxcIoEAam-SF",
  },
  {
    title: "तत्वसार",
    subtitle1: "आचार्य देवसेन स्वामी",
    subtitle2: "",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D109jpDkJJ35UCxS9K_1CsNC&si=JghvkGf7gSWGFna0",
  },
  {
    title: "स्वरूप- सम्बोधन",
    subtitle1: "आचार्य अकलंकदेव",
    subtitle2: "",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D11tyBumi0QDvLYkNjOYOX19&si=jTlUJWf03q_t-IQB",
  },
  {
    title: "इष्टोपदेश",
    subtitle1: "आचार्य श्री पूज्यपाद स्वामी",
    subtitle2: "",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D12dBh3eR9L762-Oihq3aJUr&si=9QCgBeh6ENSY51Y_",
  },
  {
    title: "विषापहार स्तोत्र",
    subtitle1: "भक्ति कैसे की जाती है",
    subtitle2: "आचार्य श्री धनंजय स्वामी",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D13z1jMv1_Qzhtlkrmlph5Oj&si=bgoBj60kdIjy8Olh",
  },
  {
    title: "Life Management Workshop",
    subtitle1: "The Divine LifeStyle",
    subtitle2: "मुनि श्री 108 समत्व सागर जी महाराज",
    link: "https://youtube.com/playlist?list=PL57YHGmA5D13Os-FZaWbCZ471ldyvNjtk&si=Zf0Y7orWifUm74sD",
  },
];

export default function Sessions() {
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header title="WONDERFUL JAINISM Sessions" backgroundImage="./Images/head.png" minHeight="100vh">
        <p>By Spritual Mentor MUNI SHRI 108 SAMATVA SAGAR JI</p>
        <a
          href="https://www.youtube.com/@wonderful_jainism"
          className="hero-btn"
        >
          Visit Us On Youtube
        </a>
      </Header>

      <section id="session">
        <h3>प्रवचन श्रृंखला</h3>
        <p>
          श्रमण मुनि श्री समत्व सागर जी महाराज के मुखारबिंद से सुनिए जिनवाणी की
          अमृतमय वाणी
        </p>
        <div className="session">
          {sessions.map((session, idx) => (
            <a href={session.link} key={idx} target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="line"></div>
                <div className="block1">
                  <h2>{session.title}</h2>
                </div>
                <div className="block2">
                  <div className="block3">
                    <h4>{session.subtitle1}</h4>
                    {session.subtitle2 && <h4>{session.subtitle2}</h4>}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}