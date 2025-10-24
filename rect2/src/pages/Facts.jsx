import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/facts.css";

const factsList = [
  {
    title: "Do you know?",
    hindi: `• जैन जनसंख्या कुल जनसंख्या का लगभग 0.3% है और वे 24% आयकर देते हैं। <br>
• यह राष्ट्र के विकास के GDP में 25% का योगदान देता है। <br>
• दुनिया भर में 65% हीरा और सोने का व्यापार जैनियों द्वारा कवर किया जाता है। <br>
• 62% योगदान दान में। <br>
• 33% भारतीय एयरलाइन उद्योग जैन समुदाय के अधीन है। <br>
• भारत में 20% दवा कम्पनियाँ जैनों द्वारा संचालित हैं। <br>
• भारत में 50% चार्टर्ड अकाउंटेंट जैन हैं। <br>
• 16000 गौशालाओं में से 12000 गौशालाएं जैनों द्वारा संचालित हैं। <br>
• जैनियों की साक्षरता दर औसतन 94% है। <br>
• भारत के 46% शेयर ब्रोकर जैन हैं। <br>
• भारत से होने वाले कुल निर्यात में 20% का योगदान जैन समुदाय का है।`,
    english: `• Jain population is about 0.3% of total population and pays 24% of Income Tax. <br>
• It contribute 25% in GDP of Nation Development. <br>
• 65% Diamond and Gold Business is covered by Jains in all over the world. <br>
• 62% Contribution in Charity and Donation. <br>
• 33% Indian Airline Industry is under Jain community. <br>
• 20% of Pharmaceuticals companies are run by Jains In India. <br>
• 50% of Chartered Accountants are Jain in India. <br>
• Out of 16000 Cow shed, 12000 cow sheds are run by Jains. <br>
• An average in literacy rate of Jains is 94%. <br>
• 46% of India’s stock brokers are Jain. <br>
• 20% of all exports from India are contributed by Jains.`,
  },
  {
    title: "Driving Economic Growth",
    hindi: `• <b>उद्यमिता:</b> जैन लोगों ने सफल व्यवसाय स्थापित किए हैं, जो भारत की आर्थिक वृद्धि में योगदान दे रहे हैं। <i>[ गौतम अडानी-अडानी ग्रुप के चेयरमैन, अमित जैन सीईओ कार देखो का ]</i><br>
• <b>औद्योगीकरण:</b> जैन उद्योगपतियों ने कपड़ा, इस्पात और अन्य उद्योगों की स्थापना में महत्वपूर्ण भूमिका निभाई है। <i>[ सेठ हुकुमचंद- भारत के कपास राजा, अश्विन दानियोफ एशियन पेंट्स ]</i><br>
• <b>बैंकिंग और वित्त:</b> जैनों ने बैंकों, वित्तीय संस्थानों और स्टॉक एक्सचेंजों की स्थापना में महत्वपूर्ण भूमिका निभाई है। <i>[ हसमुख भाई पारेख- एचडीएफसी के संस्थापक, प्रेमचंद रॉयचंद- बॉम्बे स्टॉक एक्सचेंज के संस्थापक ]</i>`,
    english: `• <b>Entrepreneurship:</b> Jains have established successful businesses, contributing to India's economic growth. <i>[ Gautam Adani-Chairman of Adani Group, Amit Jain CEO of Car Dekho ]</i> <br>
• <b>Industrialization:</b> Jain industrialists have played a key role in setting up textile, steel, and other industries. <i>[ Seth Hukumchand- Cotton king of India, Ashwin Dani of Asian Paints ]</i> <br>
• <b>Banking and Finance:</b> Jains have been instrumental in establishing banks, financial institutions, and stock exchanges. <i> [ Hasmukh Bhai parekh- Founder of HDFC, Premchand Roychand- Founder of Bombay Stock Exchange ]</i>`,
  },
  {
    title: "Establishing Centre of Excellence in Education",
    hindi: `• <b>संस्थाओं की स्थापना:</b> जैनियों ने शिक्षा और अनुसंधान को बढ़ावा देने के लिए कई स्कूल, कॉलेज और विश्वविद्यालय स्थापित किए हैं। <i>[तीर्थंकर महावीर यूनिवर्सिटी, एस.पी. जैन इंस्टिट्यूट ऑफ़ मैनेजमेंट एंड रिसर्च]</i><br>
• <b>छात्रवृत्ति और परोपकार:</b> जैन संगठन छात्रवृत्ति प्रदान करते हैं, वंचित पृष्ठभूमि के छात्रों की सहायता करते हैं। <i>[जैन इंडिया ट्रस्ट]</i>`,
    english: `• <b>Establishing Institutions:</b> Jains have founded numerous schools, colleges, and universities, promoting education and research. <i>[Teerthankar Mahaveer University, S.P. Jain Institute of Management and Research]</i> <br>
• <b>Scholarships and Philanthropy:</b> Jain organizations offer scholarships, supporting students from underprivileged backgrounds. <i>[Jains India Trust]</i>`,
  },
  {
    title: "As per Survey, Research and Reports",
    hindi: `• <b>विश्व बैंक की रिपोर्ट:</b> जैन धर्म के अहिंसा, आत्म-नियंत्रण और सादगी पर जोर को मान्यता देती है, जो भारत की आर्थिक वृद्धि में योगदान देता है।<br>
• <b>भारतीय आर्थिक सर्वेक्षण:</b> उद्यमशीलता, व्यापार और वाणिज्य के माध्यम से भारत के सकल घरेलू उत्पाद में जैन धर्म के महत्वपूर्ण योगदान को नोट करता है।<br>
• <b>विश्व स्वास्थ्य संगठन (डब्ल्यूएचओ) की रिपोर्ट:</b> जैन धर्म में शाकाहार पर जोर दिया जाता है, जो बेहतर स्वास्थ्य परिणामों और पर्यावरणीय स्थिरता में योगदान देता है।<br>
• <b>विश्व वन्यजीव कोष (डब्ल्यूडब्ल्यूएफ) की रिपोर्ट:</b> जैन धर्म में सभी जीवित प्राणियों के प्रति करुणा और अहिंसा पर जोर दिया गया है, जो संरक्षण और वन्यजीव सुरक्षा को बढ़ावा देता है।<br>
• <b>हार्वर्ड विश्वविद्यालय की रिपोर्ट:</b> जैन धर्म की दार्शनिक अवधारणाओं, जैसे अनेकांतवाद (गैर-निरपेक्षता) और स्यादवाद (सापेक्षवाद), और आधुनिक विचारों के लिए उनकी प्रासंगिकता का विश्लेषण करती है।<br>
• <b>वैश्विक शांति सूचकांक रिपोर्ट:</b> जैन धर्म के अहिंसा और शांति पर जोर को वैश्विक शांति और स्थिरता में योगदान के रूप में मान्यता देती है।`,
    english: `• <b>World Bank Report:</b> Recognizes Jainism’s emphasis on non-violence, self-control, and simplicity, which contributes to India’s economic growth. <br>
• <b>Indian Economic Survey:</b> Notes Jainism’s significant contribution to India’s GDP through entrepreneurship, trade, and commerce. <br>
• <b>World Health Organization (WHO) Report:</b> Acknowledges Jainism’s emphasis on vegetarianism, which contributes to better health outcomes and environmental sustainability. <br>
• <b>World Wildlife Fund (WWF) Report:</b> Notes Jainism’s emphasis on compassion and nonviolence towards all living beings, which promotes conservation and wildlife protection. <br>
• <b>Harvard University Report:</b> Analyzes Jainism's philosophical concepts, such as anekantavada (non-absolutism) and syadvada (relativism), and their relevance to modern thought. <br>
• <b>Global Peace Index Report:</b> Recognizes Jainism’s emphasis on non-violence and peace as contributing to global peace and stability.`,
  },
  {
    title: "Healing Hands: Jains contribution to Healthcare",
    hindi: `• <b>अस्पताल और चिकित्सा अनुसंधान:</b> जैनियों ने अस्पताल, चिकित्सा अनुसंधान केंद्र और धर्मार्थ स्वास्थ्य सेवा संस्थान स्थापित किए हैं। <i>[सन फार्मा-दिलीप सांघवी द्वारा स्थापित]</i><br>
• <b>चिकित्सा शिक्षा:</b> जैन संस्थान चिकित्सा शिक्षा और प्रशिक्षण प्रदान करते हैं, जो भारत के स्वास्थ्य सेवा कार्यबल में योगदान करते हैं। <i>[भगवान महावीर जैन आयुर्वेदिक मेडिकल कॉलेज]</i><br>
• <b>स्वास्थ्य सेवा परोपकार:</b> जैन संगठन स्वास्थ्य सेवा पहलों के लिए वित्तीय सहायता प्रदान करते हैं, जिससे हाशिये पर पड़े समुदायों को लाभ मिलता है।`,
    english: `• <b>Hospital and Medical Research:</b> Jains have established hospitals, medical research centers, and charitable healthcare institutions. <i>[Sun Pharma-founded by Dilip Sanghvi]</i><br>
• <b>Medical Education:</b> Jain institutions offer medical education and training, contributing to India’s healthcare <i>[Bhagwan Mahaveer Jain Ayurvedic Medical College]</i> <br>
• <b>Healthcare Philanthropy:</b> Jain organizations provide financial support for healthcare initiatives, benefiting marginalized communities.`,
  },
  {
    title: "Jains in Social Service: Creating positive Change",
    hindi: `• <b>सामाजिक कल्याण:</b> जैनियों ने शिक्षा, स्वास्थ्य देखभाल और गरीबी उन्मूलन सहित सामाजिक कल्याण पर केंद्रित संगठन स्थापित किए हैं।<br>
• <b>महिला सशक्तिकरण:</b> जैन संस्थाएं महिला सशक्तिकरण पहलों का समर्थन करती हैं, शिक्षा और सामाजिक समानता को बढ़ावा देती हैं।<br>
• <b>पर्यावरण संरक्षण:</b> जैन लोग पर्यावरण संरक्षण के प्रयासों में शामिल रहे हैं, जिनमें वृक्षारोपण, वन्यजीव संरक्षण और टिकाऊ जीवन पहल शामिल हैं।`,
    english: `• <b>Social Welfare:</b> Jains have established organizations focused on social welfare, including education, healthcare, and poverty alleviation.<br>
• <b>Women’s Empowerment:</b> Jain institutions support women’s empowerment initiatives, promoting education and social equality.<br>
• <b>Environmental Conservation:</b> Jains have been involved in environmental conservation efforts, including tree planting, wildlife conservation, and sustainable living initiatives.`,
  },
  {
    title: "Jain Masterpieces: Contribution to Indian Art and Architecture",
    hindi: `• <b>विरासत का संरक्षण:</b> जैनियों ने प्राचीन जैन मंदिरों, स्मारकों और सांस्कृतिक विरासत स्थलों के संरक्षण और जीर्णोद्धार में योगदान दिया है।<br>
• <b>जैन कला और साहित्य को बढ़ावा देना:</b> जैन संस्थाएं जैन कला, साहित्य और संगीत को बढ़ावा देती हैं, जिससे भारत की सांस्कृतिक विविधता समृद्ध होती है।`,
    english: `• <b>Preservation of Heritage:</b> Jains have contributed to the preservation and restoration of ancient Jain temples, monuments, and cultural heritage sites.<br>
• <b>Promoting Jain Art and Literature:</b> Jain institutions support the promotion of Jain art, literature, and music, enriching India’s cultural diversity.`,
  },
  // last togglable item
  {
    title: "Shubhom Chakravarti & Prashuram",
    hindi: `अपने शासन के दौरान, परशुराम से बदला लेने के लिए, उन्होंने पृथ्वी पर सभी ब्राह्मणों को मार डाला और ऐसा 20 से अधिक बार किया।`,
    english: `During his rule, out of revenge against Parshuram, he killed all the Brahmins on the earth and did so again more than 20 times.`,
  },
];

function FactItem({ item }) {
  const [showEnglish, setShowEnglish] = useState(false);
  return (
    <div className="facts">
      <h2>{item.title}</h2>
      <div className="facts1">
        <p dangerouslySetInnerHTML={{ __html: showEnglish ? item.english : item.hindi }} />
        {/* only show toggle if both english and hindi exist */}
        {item.hindi && item.english && (
          <button className="enBtn" onClick={() => setShowEnglish((s) => !s)}>
            {showEnglish ? "हिंदी में पढ़ें" : "Read in English"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Facts() {
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header />

      <main id="facts">
        <h1>Facts About Wonderful Jainism</h1>

        <div className="facts">
          <h2>If you want to share some information you can share on the given form.</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdiKlgwPnNjE3NyGg0qpAvbBHL_oMNZxkh6-AyYusNbt2_new/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="form">Submit Form</button>
          </a>
        </div>

        {/* render togglable facts list */}
        {factsList.map((f, idx) => (
          <FactItem item={f} key={idx} />
        ))}

        <div className="facts">
          <h2>Why great wall of china was built?</h2>
          <div className="facts1">
            <p>अशोक ने अपने पुत्र कुणाल के पुत्र संप्रति(संपदी) को उज्जैन का राजा घोषित कर आधे भारत का राज्य दे दिया था।शेष आधे पर दूसरे पुत्र दशरथ का राज्य था। संप्रति ने पूरे भारत में सवा लाख जैन मंदिर और सवा करोड़ जैन प्रतिमाएं बनवाई थी। संप्रति भारत पार कर चीन में भी जैन धर्म का प्रचार ना कर दे इसलिए वहा के बौद्ध राजा ने चीन की दीवार(ग्रेट वॉल ऑफ़ चाइना )बनवाई थी।</p>
          </div>
        </div>
      </main>
    </>
  );
}