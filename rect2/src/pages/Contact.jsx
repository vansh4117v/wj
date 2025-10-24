import React, { useEffect } from "react";
import Header from "../components/Header";
import "../css/contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header title="Contact Us" backgroundImage="./Images/contact_us.png" minHeight="50vh" />

      <section id="contact">
        <h2>Join Team Wonderful Jainism</h2>
        <div className="contact">
          <p>
            ‘Wonderful Jainism’ is a team of devotees working for Dharma Prabhavana. We are involved
            in various things - we select quotes and create articles from Maharaj Shri Pravachans
            and popularize them on WhatsApp, Facebook and Instagram. We also write his pravachans,
            create clips from Wonderful Jainism and Pravachans and make them available on YouTube.
            Wonderful Jainism always lookout for people to contribute and share the same purpose as
            us. We invite, welcome and encourage volunteers to be an active part of our team. You
            are free to share your creative thoughts and choose project of your interest. To join
            Team - Wonderful Jainism fill the form on link below.
          </p>
          <img src="./Images/contact.jpg" alt="" />
        </div>

        <div className="display">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe3MXP53p8bVZUeSKlcZ0JyNuXjQ81l6cb3zohvWEirNG_IEQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ripple">Join Us</button>
          </a>
        </div>
      </section>
    </>
  );
}
