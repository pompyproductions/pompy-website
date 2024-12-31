import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";

const App = () => {
  return <>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
}

export default App;