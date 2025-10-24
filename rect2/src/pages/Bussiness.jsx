import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/bussiness.css";

const businessList = [
  {
    name: "Jagat Seth",
    img: "./Images/glory/bussiness/jagat seth.jpg",
    position: "Wealthy Merchant, Banker and Money Lender Family",
    net: "$1 Trillion(In Today's context)",
  },
  {
    name: "Virji Vora",
    img: "./Images/glory/bussiness/virji vora.jpg",
    position: "The richest merchant in the world at the time",
    net: "$24 Trillion (In Today's context)",
  },
  {
    name: "Walchand Hirachand Doshi",
    img: "./Images/glory/bussiness/walchand_hirachand.jpg",
    position:
      "Founder of the Walchand group; Founder of Hindustan Aeronautics Limited (HAL)",
    net: "$33.9 Billion",
  },
  {
    name: "Sir Seth Swarupchand Hukumchand Ji Kasliwal",
    img: "./Images/glory/bussiness/hukumchand.png",
    position:
      "Cotton King Of India & Established many other Mills and Industries",
    net: "-",
  },
  { name: "Shantidas Jhaveri", img: "./Images/glory/bussiness/shantidas.jpg", position: "Indian Jain jeweller, bullion trader (sarraf) and moneylender (sahukar) during the Mughal era", net: "-" },
  { name: "Kasturbhai Lalbhai", img: "./Images/glory/bussiness/Shri_Kasturbhai_Lalbhai_Image.jpg", position: "Co-founded Arvind Mills", net: "-" },
  { name: "Raja Harsukh Rai", img: "./Images/glory/bussiness/HARSUKH-RAI.jpg", position: "Official treasurer by Emperor Shah Alam II", net: "-" },
  { name: "Premchand Roychand", img: "./Images/glory/bussiness/Premchand_Roychand.jpg", position: "Establishment of Bombay Stock Exchange. Big Bull of India", net: "$34 Billion(In Today's Context)" },
  { name: "Gautam Adani", img: "./Images/glory/bussiness/Gautam_Adani.jpg", position: "Founder and Chairman of the Adani Group", net: "$60.4 Billion" },
  { name: "Vinod Adani", img: "./Images/glory/bussiness/vinod_adani.jpg", position: "Owner of Excel Investment and Advisory Services.p", net: "$16.4 Billion" },
  { name: "Mangal Prabhat Lodha", img: "./Images/glory/bussiness/mangal.jpg", position: "Indian Billionaire businessman and politician", net: "$13.5 Billion" },
  { name: "Ashok Patni", img: "./Images/glory/bussiness/ashok_patni.jpg", position: "Chairman of R.K marbles and Wonder cement", net: "$104.22 Million" },
  { name: "Ashwin Suryakant Dani", img: "./Images/glory/bussiness/ashwin dani.jpg", position: "Non-executive chairman of Asian Paints Ltd", net: "$8 Billion" },
  { name: "Rajesh Mehta", img: "./Images/glory/bussiness/rajesh.jpg", position: "Owner and Executive Chairman of Rajesh Exports", net: "$2.6 Billion" },
  { name: "Motilal Oswal", img: "./Images/glory/bussiness/motilal_oswal.jpg", position: "Founder, Chairman and Managing Director of Motilal Oswal Financial Services Ltd", net: "$1.9 Billion" },
  { name: "Madhukar Balvantray Parekh", img: "./Images/glory/bussiness/madhukar.jpg", position: "Chairman of Pidilite Industries", net: "$7.5 Billion" },
  { name: "Rakesh Gangwal", img: "./Images/glory/bussiness/rakesh.jpg", position: "Co-founder IndiGo Airlines", net: "$5.7 Billion" },
  { name: "Tarang Jain", img: "./Images/glory/bussiness/tarang.jpg", position: "CEO and 86% owner of Varroc", net: "$3.65 Billion" },
  { name: "Manu Chandaria", img: "./Images/glory/bussiness/Manu-Chandaria.jpg", position: "Kenyan businessman senior member of the Comcraft Group of Companies", net: "$2.5 Billion" },
  { name: "Subhash Runwal", img: "./Images/glory/bussiness/subhash.jpg", position: "Founder and chairman of Runwal Group", net: "$1 Billion" },
  { name: "Ajit Jain", img: "./Images/glory/bussiness/ajit-jain.jpg", position: "Vice Chairman of Insurance Operations for Berkshire Hathaway", net: "$59 Million" },
  { name: "Ambalal Sarabhai", img: "./Images/glory/bussiness/ambalal.jpg", position: "Founder of The Sarabhai Group of Companies", net: "$300 Million(In Today's Context)" },
  { name: "Hasmukhbhai Parekh", img: "./Images/glory/bussiness/hasmukh.jpg", position: "Founder of HDFC Bank and Developed ICICI Bank", net: "$500 Million" },
  { name: "Anshuman Jain", img: "./Images/glory/bussiness/anshuman.jpg", position: "President and Director of CF Acquisition Corp VII", net: "$100 Million" },
  { name: "Bhavarlal Hiralal Jain", img: "./Images/glory/bussiness/Bhavarlal_Jain.jpg", position: "Founder Chairman of Jain Irrigation Systems Ltd. (JISL)", net: "$600 Million" },
  { name: "Sanjiv Jain", img: "./Images/glory/bussiness/Sanjiv_Mehta.jpg", position: "Owner of East India Company", net: "$100 Million" },
  { name: "Sandeep Jain", img: "./Images/glory/bussiness/sandeep.jpg", position: "Founder of Geeks For Geeks", net: "-" },
  { name: "Amit Jain", img: "./Images/glory/bussiness/Amit-Jain.jpg", position: "CEO and Co-founder of CarDekho Group and a Shark Tank India investor", net: "$365 Million" },
];

export default function Business() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  const filtered = businessList.filter((b) =>
    b.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <>
      <Header />

      <section id="business">
        <h2>Jain Business Leaders In Indian & International Market</h2>

        <div className="search-container" style={{ textAlign: "center", margin: 20 }}>
          <input
            type="text"
            id="searchInput"
            placeholder="Search by name..."
            className="custom-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ padding: 10, fontSize: 16 }}
          />
        </div>

        <div className="business">
          {filtered.map((b, idx) => (
            <div className="business1" key={idx}>
              <img src={b.img} alt={b.name} />
              <h4>{b.name}</h4>
              <table border="3">
                <tbody>
                  <tr>
                    <th>Position</th>
                    <td>{b.position}</td>
                  </tr>
                  <tr>
                    <th>Net Worth :</th>
                    <td>{b.net}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div id="noResult" style={{ display: filtered.length === 0 ? "block" : "none" }}>
          <h2><i className="fa-solid fa-circle-exclamation" /> No person found.</h2>
          <div className="noResult">
            <p>Try searching with a different name.</p>
            <p>If you want to share some information you can share on the given form.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdiKlgwPnNjE3NyGg0qpAvbBHL_oMNZxkh6-AyYusNbt2_new/viewform" target="_blank" rel="noopener noreferrer">
              <button className="form">Submit Form</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}