import React from "react";
import RoundLogo from "../../assets/round-logo.svg"

const Home = () => {
  return (
    <main>
      <section>
        <RoundLogo id="round-logo"/>
        <h1 className="single-margin">
          This website is under construction.
        </h1>
        <div className="vsep double-margin"></div>
        <p className="single-margin">
          For business enquiries & information, please get in touch by sending a mail to info@pompyproductions.com.
        </p>
        <p className="single-margin">
          If you’d like to be informed once the website is up and running, enter your address below, and we’ll get in touch with you!
        </p>
        <form method="POST" action="/api/submit" className="single-margin">
          <input id="email "type="email" name="email" />
          <button type="submit">SEND →</button>
        </form>
      </section>
      <div className="logo">
        <span className="outline-text">POMPY</span>
        <span className="outline-text">PRODUCTIONS</span>
      </div>
    </main>
  )
}

export default Home;