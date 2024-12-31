import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Header from "./components/Header";
import Home from "./pages/Home";
import OtherPage from "./pages/OtherPage";

const App = () => {
  return <>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <div className="vsep"></div>
        <Routes>
          <Route path="*" element={<Home />}/>
          <Route path="/page" element={<OtherPage />}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
}

export default App;