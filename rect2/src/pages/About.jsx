import React, { useEffect } from "react";
import Header from "../components/Header";
import "../css/about.css";

export default function About() {
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header 
        title="About" 
        backgroundImage="./Images/about_us.png"
        minHeight="50vh"
      />

      <section id="about">
        <h2>About Team Wonderful Jainism</h2>
        <div className="about">
          <p>
            Wonderful Jainism is an opportunity to discover an inner Enlightenment path according to
            Jain Philosophy that deepens your perception, bringing about a dimensional shift in the
            very way you look at your life. Wonderful Jainism is a dedicated platform to raising
            human consciousness and fosters harmony through an individual transformation towards
            salvation. Guided by MUNI SHRI SAMATVA SAGAR JI MAHARAJ, it is a Diverse platform for
            exploring the ancient Jain Wisdom in all its depth and dimensions. This Website offers a
            variety of programs that provide methods for anyone to attain physical, mental, and
            spiritual well-being. Its offerings allow participants to deepen their experience of
            life, and reach their ultimate potential.
          </p>
          <img
            src="./Images/mp2.jpg"
            alt="About Wonderful Jainism and Muni Shri Samatva Sagar Ji"
          />
        </div>
      </section>
    </>
  );
}
