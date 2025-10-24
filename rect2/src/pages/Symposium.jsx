import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/symposium.css";

const symposiums = [
  {
    title: "SATI College, Vidisha",
    videoUrl: "https://www.youtube.com/embed/0YoQEiLkv8w?si=QIQWM2Mb0c7GYR0A",
    hindi: "दिगंबर जैन मुनि श्री समत्व सागर जी ने छात्रों और संकाय सदस्यों से बातचीत करने के लिए उनके कॉलेज का दौरा किया। अपनी यात्रा के दौरान, उन्होंने आध्यात्मिक अनुशासन, जैन दर्शन और शिक्षा में मूल्यों के महत्व पर प्रेरक अंतर्दृष्टि साझा की। उन्होंने अपने कॉलेज जीवन और नौकरी के अनुभवों के बारे में भी बात की, जिससे छात्रों को आध्यात्मिक विकास के साथ सांसारिक जिम्मेदारियों को संतुलित करने का एक सार्थक दृष्टिकोण मिला।",
    english: "Digamber Jain Monk Muni Shri Samatva Sagar Ji visited his college to interact with students and faculty members. During his visit, he shared inspiring insights on spiritual discipline, Jain philosophy, and the importance of values in education. He also spoke about his own college life and job experiences, offering students a meaningful perspective on balancing worldly responsibilities with spiritual growth.",
    date: "6 June 2025, Vidisha(M.P.)",
    reverse: true,
  },
  {
    title: "Vailshali Nagar, Ajmer",
    videoUrl: "https://www.youtube.com/embed/jxqiZoMqaOE?si=HyFhsqcq12pFNyaC",
    hindi: "श्रद्धेय दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी के आध्यात्मिक रूप से समृद्ध उपदेश में भाग लेने के लिए 200 से अधिक छात्र एकत्र हुए। बड़े उत्साह के साथ आयोजित इस कार्यक्रम में दैनिक जीवन में अहिंसा, सत्य और आत्म-अनुशासन के महत्व पर ध्यान केंद्रित करते हुए जैन दर्शन में गहन अंतर्दृष्टि प्रदान की गई। मुनि श्री समत्व सागर जी की शिक्षाओं ने आध्यात्मिक शुद्धता और ज्ञानोदय के मार्ग पर जोर दिया, युवा दर्शकों को आंतरिक शांति और सद्भाव को बढ़ावा देने वाले मूल्यों को अपनाने के लिए प्रोत्साहित किया। साझा किए गए ज्ञान से छात्र गहराई से जुड़े हुए थे और प्रेरित थे, उद्देश्य की एक नई भावना और अधिक नैतिक और दयालु जीवन जीने की प्रतिबद्धता के साथ निकल रहे थे।",
    english: "Over 200 students gathered to attend a spiritually enriching sermon by the revered Digambar Jain monk, Muni Shri Samatva Sagar Ji. The event, held with great enthusiasm, offered profound insights into Jain philosophy, focusing on the importance of non-violence, truth, and self-discipline in daily life. Muni Shri Samatva Sagar Ji's teachings emphasized the path of spiritual purity and enlightenment, encouraging the young audience to adopt values that promote inner peace and harmony. The students were deeply engaged and inspired by the wisdom shared, leaving with a renewed sense of purpose and a commitment to leading a more ethical and compassionate life.",
    date: "6 Janaury 2025, Ajmer(Raj.)",
    reverse: true,
  },
  {
    title: "Ajmer Central Jail",
    videoUrl: "https://www.youtube.com/embed/VtvENZHkSRo?si=si8phFgvDllSaILV",
    hindi: "श्रद्धेय दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी ने कैदियों को एक शक्तिशाली उपदेश देने के लिए अजमेर सेंट्रल जेल की ओर विहार किया। अपनी यात्रा के दौरान, उन्होंने जीवन के एक महत्वपूर्ण पहलू पर ध्यान केंद्रित किया: क्रोध पर नियंत्रण। उन्होंने इस बात पर जोर दिया कि यदि क्रोध को अनियंत्रित छोड़ दिया जाए तो यह किसी की शांति को नष्ट कर सकता है और विनाशकारी परिणाम दे सकता है। मुनि श्री समत्व सागर जी ने कैदियों को क्रोध के लक्षणों को पहचानने और ध्यान, आत्म-जागरूकता और धैर्य के माध्यम से इसे नियंत्रित करने के लिए अनुशासन विकसित करने के बारे में मार्गदर्शन किया। उनकी शिक्षाओं ने कैदियों को अपने कार्यों पर विचार करने, आंतरिक शांति की तलाश करने और दूसरों के प्रति करुणा पैदा करने के लिए प्रोत्साहित किया, जिसका लक्ष्य अंततः बेहतरी के लिए अपने जीवन को बदलना था।",
    english: "Muni Shri Samatva Sagar Ji, a revered Digamber Jain monk, visited the Ajmer Central Jail to deliver a powerful sermon to the prisoners. During his visit, he focused on a crucial aspect of life: the control of anger. He emphasized that anger, if left unchecked, can destroy one's peace and lead to destructive consequences. Muni Shri Samatva Sagar Ji guided the prisoners on how to recognize the signs of anger and develop the discipline to control it through meditation, self-awareness, and patience. His teachings encouraged the prisoners to reflect on their actions, seek inner peace, and cultivate compassion toward others, ultimately aiming to transform their lives for the better.",
    date: "31 December 2024, Ajmer(Raj.)",
    reverse: false,
  },
  {
    title: "Aadinath College , Sanganer",
    videoUrl: "https://www.youtube.com/embed/PdnWcXSq1a0?si=DfanSa6dfMXCj_tT",
    hindi: "श्रद्धेय दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी ने छात्रों को प्रेरक उपदेश देने के लिए मुनि पुंगव श्री सुधा सागर जी के आशीर्वाद से स्थापित एक प्रतिष्ठित संस्थान, सांगानेर में आदिनाथ कॉलेज की ओर विहार किया। अपने गहन ज्ञान और शांत उपस्थिति के साथ, मुनि श्री समत्व सागर जी ने छात्रों को जैन धर्म के सिद्धांतों, जैसे अहिंसा, आत्म-अनुशासन और सच्चाई को अपने जीवन में मार्गदर्शक शक्तियों के रूप में अपनाने के लिए प्रोत्साहित किया। उन्होंने शैक्षणिक उपलब्धियों को नैतिक और आध्यात्मिक विकास के साथ संतुलित करने के महत्व पर जोर दिया और छात्रों को न केवल सफल पेशेवर बल्कि दयालु और नैतिक व्यक्ति बनने के लिए प्रेरित किया। मुनि पुंगव श्री सुधा सागर जी की आध्यात्मिक विरासत पर आधारित इस सत्र ने युवा शिक्षार्थियों के बीच उद्देश्य और आत्मनिरीक्षण की भावना को बढ़ावा देते हुए एक स्थायी प्रभाव छोड़ा।",
    english: "Muni Shri Samatva Sagar Ji, a revered Digambar Jain monk, visited Aadinath College in Sanganer, an esteemed institution established under the blessings of Muni Pungav Shri Sudha Sagar Ji, to deliver a motivational sermon to the students. With his profound wisdom and serene presence, Muni Shri Samatva Sagar Ji encouraged the students to adopt the principles of Jainism, such as ahimsa (non-violence), self-discipline, and truthfulness, as guiding forces in their lives. He emphasized the importance of balancing academic achievements with moral and spiritual growth, inspiring the students to become not only successful professionals but also compassionate and ethical individuals. The session, rooted in the spiritual legacy of Muni Pungav Shri Sudha Sagar Ji, left a lasting impression, fostering a sense of purpose and introspection among the young learners.",
    date: "1 Dec 2024, Sanganer, Jaipur(Raj.)",
    reverse: true,
  },
  {
    title: "Shri Digamber Jain Shraman Sanskriti Sansthan , Sanganer",
    videoUrl: "https://www.youtube.com/embed/W9iZP4nvn0w?si=oYCRVT8rVx26zBEq",
    hindi: "श्रद्धेय दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी ने छात्रों को उपदेश देने के लिए मुनि पुंगव श्री सुधा सागर जी के आशीर्वाद से स्थापित एक प्रतिष्ठित संस्थान, सांगानेर में श्री दिगंबर जैन श्रमण संस्कृति संस्थान की ओर विहार किया। युवा मन को संबोधित करते हुए, मुनि श्री समत्व सागर जी ने शैक्षणिक गतिविधियों के साथ आध्यात्मिक मूल्यों को एकीकृत करने के महत्व पर जोर दिया। उन्होंने अहिंसा, सत्य और आत्म-अनुशासन के मूल जैन सिद्धांतों के बारे में विस्तार से बताया और छात्रों को नैतिक अखंडता और सचेतन जीवन जीने के लिए प्रोत्साहित किया। मुनि पुंगव श्री सुधा सागर जी की विरासत से प्रेरणा लेते हुए, उन्होंने छात्रों से आत्म-खोज और व्यक्तिगत विकास की अपनी यात्रा में जैन धर्म की समृद्ध सांस्कृतिक और आध्यात्मिक विरासत को बनाए रखने का आग्रह किया। सत्र ने गहरा प्रभाव छोड़ा, जिससे छात्रों को नैतिक मूल्यों में निहित रहते हुए उत्कृष्टता के लिए प्रयास करने की प्रेरणा मिली।",
    english: "Muni Shri Samatva Sagar Ji, a revered Digambar Jain monk, visited Shri Digambar Jain Shraman Sanskriti Sansthan in Sanganer, a prestigious institution established under the blessings of Muni Pungav Shri Sudha Sagar Ji, to deliver a sermon to the students. Addressing the young minds, Muni Shri Samatva Sagar Ji emphasized the importance of integrating spiritual values with academic pursuits. He elaborated on the core Jain principles of ahimsa (non-violence), truth, and self-discipline, encouraging students to lead lives of moral integrity and mindfulness. Drawing inspiration from the legacy of Muni Pungav Shri Sudha Sagar Ji, he urged the students to uphold the rich cultural and spiritual heritage of Jainism in their journey of self-discovery and personal growth. The session left a profound impact, inspiring the students to strive for excellence while staying rooted in ethical values.",
    date: "23 Nov 2024, Sanganer, Jaipur(Raj.)",
    reverse: false,
  },
  {
    title: "Hindu Adhyatmik Mela",
    videoUrl: "https://www.youtube.com/embed/6-nFHKAlyKk?si=dnLX7bNHZj0MtUzi",
    hindi: "पहली बार, प्रसिद्ध दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी को जयपुर में हिंदू आध्यात्मिक मेले में आमंत्रित किया गया था, जो आध्यात्मिक एकता और अंतरधार्मिक संवाद के एक ऐतिहासिक क्षण का प्रतीक है। अपने संबोधन में, मुनि श्री समत्व सागर जी ने अहिंसा, आत्म-अनुशासन और आंतरिक शुद्धि के सिद्धांतों पर ध्यान केंद्रित करते हुए जैन दर्शन की कालातीत शिक्षाओं को साझा किया। उन्होंने सार्वभौमिक सद्भाव प्राप्त करने में करुणा और नैतिक जीवन के महत्व पर जोर देते हुए विभिन्न परंपराओं के साझा आध्यात्मिक लक्ष्यों पर प्रकाश डाला। मेले में उनकी उपस्थिति का गर्मजोशी से स्वागत किया गया, जिससे विविध सभा के बीच समावेशिता और सम्मान की भावना को बढ़ावा मिला। इस अभूतपूर्व निमंत्रण ने जैन धर्म और हिंदू धर्म के बीच समानता को रेखांकित किया, जिससे दर्शकों को आध्यात्मिक विकास और नैतिक ज्ञान की दिशा में एक सामूहिक यात्रा अपनाने के लिए प्रेरणा मिली।",
    english: "For the first time, the renowned Digambar Jain monk, Muni Shri Samatva Sagar Ji, was invited to participate in the Hindu Adhyatmik Mela in Jaipur, symbolizing a historic moment of spiritual unity and interfaith dialogue. In his address, Muni Shri Samatva Sagar Ji shared the timeless teachings of Jain philosophy, focusing on the principles of ahimsa (non-violence), self-discipline, and inner purification. He highlighted the shared spiritual goals of different traditions, emphasizing the importance of compassion and ethical living in achieving universal harmony. His presence at the mela was warmly welcomed, fostering a spirit of inclusivity and respect among the diverse gathering. This groundbreaking invitation underscored the commonalities between Jainism and Hinduism, inspiring the audience to embrace a collective journey toward spiritual growth and moral enlightenment.",
    date: "28 Sept 2024, Jaipur(Raj.)",
    reverse: true,
  },
  {
    title: "Rajasthan Jain Sabha , Jaipur",
    videoUrl: "https://www.youtube.com/embed/vuEOR6BDg-g?si=4eYuTYUryIB3bW0a",
    hindi: "राजस्थान जैन सभा ने जयपुर में श्रद्धेय दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी से जैन उत्सव \"क्षमावाणी पर्व,\" क्षमा दिवस के दौरान उनका आशीर्वाद और मार्गदर्शन लिया। एक शांत सभा में, मुनि श्री समत्व सागर जी ने जैन धर्म में क्षमा के गहन महत्व पर जोर दिया, और सभा सदस्यों को क्रोध, अहंकार और नाराजगी को दूर करने के लिए प्रोत्साहित किया। उन्होंने क्षमा मांगने और देने के आध्यात्मिक मूल्य के बारे में बात की, न केवल एक अनुष्ठान के रूप में बल्कि आंतरिक शांति और सामंजस्यपूर्ण संबंधों के लिए एक परिवर्तनकारी अभ्यास के रूप में। सभा के सदस्यों ने उनके ज्ञानवर्धक प्रवचन से बहुत प्रभावित होकर क्षमावाणी के सार को अपने दैनिक जीवन में अपनाने का संकल्प लिया। इस यात्रा ने त्योहार का हार्दिक जश्न मनाया, एकता को बढ़ावा दिया और करुणा और विनम्रता के शाश्वत जैन मूल्यों को मजबूत किया।",
    english: "The Rajasthan Jain Sabha visited the revered Digambar Jain monk, Muni Shri Samatva Sagar Ji, in Jaipur to seek his blessings and guidance during the Jain festival of \"Kshamavani Parv,\" the Day of Forgiveness. In a serene gathering, Muni Shri Samatva Sagar Ji emphasized the profound significance of forgiveness in Jainism, encouraging the Sabha members to let go of anger, ego, and resentment. He spoke about the spiritual value of seeking and granting forgiveness, not just as a ritual but as a transformative practice for inner peace and harmonious relationships. The Sabha members, deeply moved by his insightful discourse, pledged to embody the essence of Kshamavani in their daily lives. The visit marked a heartfelt celebration of the festival, fostering unity and reinforcing the timeless Jain values of compassion and humility.",
    date: "22 Sept 2024, Jaipur(Raj.)",
    reverse: false,
  },
  {
    title: "CA Meet , Jaipur",
    videoUrl: "https://www.youtube.com/embed/CG8PeMrxCbM?si=zBxEkiXuqy81MikT",
    hindi: "जयपुर में, चार्टर्ड अकाउंटेंट्स (सीए) के एक समूह ने \"टैक्स एंड लाइफ ऑडिट\" पर एक अनूठे सत्र के लिए प्रतिष्ठित दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी से मुलाकात की। बातचीत का उद्देश्य पेशेवर ऑडिट और जैन दर्शन में जोर दिए गए आत्मनिरीक्षण स्व-ऑडिट के बीच समानताएं बनाना था। मुनि श्री समत्व सागर जी ने सीए को उनके पेशेवर और व्यक्तिगत जीवन दोनों में नैतिक प्रथाओं, जवाबदेही और सत्यनिष्ठा के महत्व के बारे में बताया। उन्होंने बताया कि कैसे जैन धर्म के सिद्धांत, जैसे सत्यवादिता, अपरिग्रह और सचेतनता, उन्हें अपने करियर में संतुलन और ईमानदारी बनाए रखने में मार्गदर्शन कर सकते हैं। उन्हें अपने कार्यों को \"जीवन लेखापरीक्षा\" के रूप में प्रतिबिंबित करने के लिए प्रोत्साहित करते हुए, उन्होंने उन्हें अपने काम को एक उच्च उद्देश्य के साथ संरेखित करने के लिए प्रेरित किया। सत्र ने उपस्थित लोगों को गहन अंतर्दृष्टि प्रदान की, जिससे उनके पेशे और आध्यात्मिक विकास दोनों के प्रति गहरी प्रतिबद्धता को बढ़ावा मिला।",
    english: "In Jaipur, a group of Chartered Accountants (CAs) visited the esteemed Digambar Jain monk, Muni Shri Samatva Sagar Ji, for a unique session on \"Tax and Life Audit.\" The interaction aimed to draw parallels between professional audits and the introspective self-audit emphasized in Jain philosophy. Muni Shri Samatva Sagar Ji enlightened the CAs on the importance of ethical practices, accountability, and integrity in both their professional and personal lives. He explained how the principles of Jainism, such as truthfulness, non-possessiveness, and mindfulness, could guide them in maintaining balance and honesty in their careers. Encouraging them to reflect on their actions as a \"life audit,\" he inspired them to align their work with a higher purpose. The session left the attendees with profound insights, fostering a deeper commitment to both their profession and spiritual growth.",
    date: "31 Aug 2024, Jaipur(Raj.)",
    reverse: true,
  },
  {
    title: "Doctor's Meet, Jaipur",
    videoUrl: "https://www.youtube.com/embed/YXBy-ADEi0U?si=NDR3QzQsMhqaYzrh",
    hindi: "जयपुर में, जैन डॉक्टर सोसाइटी के एक विशेष कार्यक्रम के हिस्से के रूप में, डॉक्टरों का एक समूह श्रद्धेय दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी से मिलने के लिए एकत्र हुआ। बातचीत का उद्देश्य आधुनिक चिकित्सा विज्ञान को जैन धर्म की आध्यात्मिक शिक्षाओं के साथ जोड़ना, स्वास्थ्य और कल्याण के लिए समग्र दृष्टिकोण को बढ़ावा देना था। मुनि श्री समत्व सागर जी ने अहिंसा, आहार अनुशासन और मन, शरीर और आत्मा के अंतर्संबंध के जैन सिद्धांतों पर अंतर्दृष्टि साझा की, और शारीरिक और मानसिक स्वास्थ्य को बढ़ावा देने में उनकी प्रासंगिकता पर प्रकाश डाला। डॉक्टर, उनकी बुद्धिमत्ता और स्पष्टता से बहुत प्रभावित हुए, विचारशील चर्चाओं में लगे रहे और अपनी चिकित्सा पद्धति में नैतिक मूल्यों और करुणा को एकीकृत करने के तरीके तलाशने लगे। कार्यक्रम ने एक स्थायी प्रभाव छोड़ा, जिससे उपस्थित लोगों को न केवल शरीर को ठीक करने के लिए बल्कि अपने रोगियों में मानवता की भावना का पोषण करने के लिए भी प्रेरणा मिली।",
    english: "In Jaipur, a group of doctors gathered to meet the revered Digambar Jain monk, Muni Shri Samatva Sagar Ji, as part of a special Jain Doctor Society program. The interaction aimed to bridge modern medical science with the spiritual teachings of Jainism, fostering a holistic approach to health and well-being. Muni Shri Samatva Sagar Ji shared insights on the Jain principles of non-violence, dietary discipline, and the interconnectedness of mind, body, and soul, highlighting their relevance in promoting physical and mental health. The doctors, deeply moved by his wisdom and clarity, engaged in thoughtful discussions, exploring ways to integrate ethical values and compassion into their medical practice. The program left a lasting impact, inspiring the attendees to not only heal the body but also nurture the spirit of humanity in their patients.",
    date: "18 Aug 2024, Jaipur(Raj.)",
    reverse: false,
  },
  {
    title: "Lord Mahavira Academy, Saharanpur",
    videoUrl: "https://www.youtube.com/embed/nq-SBOMs5-c?si=M4irZGY-7cSx_vW4",
    hindi: "प्रतिष्ठित दिगंबर जैन मुनि, मुनि श्री 108 समत्व सागर जी ने छात्रों को प्रेरणादायक उपदेश देने के लिए सहारनपुर में लॉर्ड महावीरा एकेडमी की ओर विहार किया। युवा दर्शकों को करुणा और ज्ञान के साथ संबोधित करते हुए, उन्होंने अहिंसा, सच्चाई और आत्म-अनुशासन सहित भगवान महावीर की कालातीत शिक्षाओं पर जोर दिया। आकर्षक कहानियों और व्यावहारिक उदाहरणों के माध्यम से, मुनि श्री समत्व सागर जी ने छात्रों को अपने दैनिक जीवन में दया, सम्मान और सावधानी जैसे मूल्यों को विकसित करने के लिए प्रोत्साहित किया। उनका गहन लेकिन सरल संदेश छात्रों के बीच गूंजता रहा, जिससे उन्हें एकेडमिक उत्कृष्टता और नैतिक अखंडता दोनों के लिए प्रयास करने की प्रेरणा मिली। यह यात्रा एक यादगार आध्यात्मिक अनुभव साबित हुई, जिसने युवा मन पर गहरी छाप छोड़ी और उन्हें सदाचार और करुणा का जीवन अपनाने के लिए प्रोत्साहित किया।",
    english: "Muni Shri Samatva Sagar Ji, a distinguished Digambar Jain monk, visited Lord Mahavira Academy in Saharanpur to deliver an inspiring sermon to the students. Addressing the young audience with compassion and wisdom, he emphasized the timeless teachings of Lord Mahavira, including ahimsa (non-violence), truthfulness, and self-discipline. Through engaging stories and practical examples, Muni Shri Samatva Sagar Ji encouraged the students to cultivate values like kindness, respect, and mindfulness in their daily lives. His profound yet simple message resonated with the students, inspiring them to strive for both academic excellence and moral integrity. The visit served as a memorable spiritual experience, leaving a deep impression on the young minds and encouraging them to embrace a life of virtue and compassion.",
    date: "18 Sept 2023, Saharanpur(U.P.)",
    reverse: true,
  },
  {
    title: "Tikamgarh Central Jail",
    videoUrl: "https://www.youtube.com/embed/EuQXJU11-2w?si=7On-SagnYfc1zpPB",
    hindi: "श्रद्धेय दिगंबर जैन मुनि, मुनि 108 श्री समत्व सागर जी ने कैदियों को आध्यात्मिक उपदेश देने के लिए स्थानीय जेल की ओर विहार किया। अपने शांत आचरण और गहन ज्ञान के साथ, उन्होंने कैदियों को संबोधित किया, उन्हें अपने कार्यों पर विचार करने और आत्म-शुद्धि और आंतरिक शांति का मार्ग अपनाने के लिए प्रोत्साहित किया। अहिंसा, आत्म-संयम और क्षमा के जैन सिद्धांतों से प्रेरणा लेते हुए, मुनि श्री समत्व सागर जी ने प्रेरक उपाख्यानों को साझा किया, जो पिछली गलतियों की परवाह किए बिना परिवर्तन और मुक्ति की क्षमता पर प्रकाश डालते हैं। उनके करुणामय शब्द कैदियों के मन में गहराई से गूंज उठे, जिससे उनमें आशा की भावना और आध्यात्मिक उत्थान के लिए प्रयास करने की इच्छा पैदा हुई। इस यात्रा ने एक स्थायी प्रभाव छोड़ा, क्योंकि कई कैदियों को उनकी शिक्षाओं में सांत्वना और प्रेरणा मिली, जिससे व्यक्तिगत विकास और नैतिक मूल्यों के प्रति नई प्रतिबद्धता जगी।",
    english: "Muni Shri Samatva Sagar Ji, a revered Digambar Jain monk, visited the local prison to deliver a spiritual sermon to the inmates. With his tranquil demeanor and profound wisdom, he addressed the prisoners, encouraging them to reflect on their actions and embrace the path of self-purification and inner peace. Drawing from Jain principles of ahimsa (non-violence), self-restraint, and forgiveness, Muni Shri Samatva Sagar Ji shared inspiring anecdotes that highlighted the potential for transformation and redemption, regardless of past mistakes. His compassionate words resonated deeply with the audience, fostering a sense of hope and a desire to strive for spiritual upliftment. The visit left a lasting impact, as many inmates found solace and inspiration in his teachings, sparking a newfound commitment to personal growth and moral values.",
    date: "28 October 2022, Tikamgarh(M.P.)",
    reverse: false,
  },
];

export default function Symposium() {
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
          <Link to="/index.html" className="logo">
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
      </div>

      <section id="symposium">
        <button
          onClick={topFunction}
          id="bttbtn"
          title="Go to top"
          style={{ display: showTopBtn ? "block" : "none" }}
        >
          <i className="fa-regular fa-arrow-up" />
        </button>
        <div className="symposium">
          <div className="symposium1">
            <h2>SYMPOSIUM</h2>

            {symposiums.map((symp, idx) => (
              <div className="symposium2" key={idx}>
                <h3>{symp.title}</h3>
                <div
                  className={`symposium3 ${symp.reverse ? "reverse" : ""}`}
                >
                  {symp.reverse ? (
                    <>
                      <p>
                        <span
                          className="hindi"
                          style={{
                            display: showEnglish[idx] ? "none" : "inline",
                          }}
                        >
                          {symp.hindi}
                        </span>
                        <span
                          className="english"
                          style={{
                            display: showEnglish[idx] ? "inline" : "none",
                          }}
                        >
                          {symp.english}
                        </span>
                      </p>
                      <iframe
                        width="560"
                        height="315"
                        src={symp.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </>
                  ) : (
                    <>
                      <iframe
                        width="560"
                        height="315"
                        src={symp.videoUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                      <p>
                        <span
                          className="hindi"
                          style={{
                            display: showEnglish[idx] ? "none" : "inline",
                          }}
                        >
                          {symp.hindi}
                        </span>
                        <span
                          className="english"
                          style={{
                            display: showEnglish[idx] ? "inline" : "none",
                          }}
                        >
                          {symp.english}
                        </span>
                      </p>
                    </>
                  )}
                </div>
                <button
                  onClick={() => toggleLanguage(idx)}
                  className="enBtn"
                >
                  {showEnglish[idx] ? "हिंदी में पढ़ें" : "Read in English"}
                </button>
                <span>{symp.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}