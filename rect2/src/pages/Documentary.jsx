import React, { useEffect } from "react";
import Header from "../components/Header";
import "../css/more.css";

export default function Documentary() {
  useEffect(() => {
    document.title = "Wonderful Jainism - Proud To Be A Jain";
  }, []);

  return (
    <>
      <Header />

      <main id="documentary">
        <h2>Documentary</h2>
        <p>Yuva Shrut Samvahak</p>
        <p>Muni Shri 108 Samatva Sagar Ji</p>
        <div className="video-frame">
          <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/zIMrD5hwgp4?si=gSnDW5UjrT0fAJ_q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </main>
    </>
  );
}