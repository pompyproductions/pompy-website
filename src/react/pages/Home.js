import React from "react";
import RoundLogo from "../../assets/round-logo.svg";
import Footer from "../components/Footer";

const Home = () => {

  function checkBlendModeSupport() {
    // Create an SVG element dynamically
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.mixBlendMode = "overlay";

    // Create a test element in the DOM
    const testElement = document.createElement("div");
    testElement.style.position = "absolute";
    testElement.style.visibility = "hidden";
    testElement.appendChild(svg);
    document.body.appendChild(testElement);

    // Check computed style to see if the mix-blend-mode is applied
    const isSupported =
      window.getComputedStyle(svg).mixBlendMode === "overlay";

    // Clean up the test element
    document.body.removeChild(testElement);
    return isSupported;
  }


  return <>
    <main>
      <section>
        <RoundLogo id="round-logo" className={checkBlendModeSupport() ? "" : "remove-blend-mode"}/>
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
          <div className="input-wrapper">
            <input id="email "type="email" name="email" />
          </div>
          <button type="submit">
            <span>SEND</span>
          </button>
        </form>
      </section>
    </main>
    <Footer />
  </>
}

export default Home;