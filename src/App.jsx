import React from "react";
import Home from "./components/Home";
import ScrollToTop from "react-scroll-to-top";
export default function App() {
  return (
    <div className="App">
      <Home />
      <ScrollToTop smooth />
    </div>
  );
}
