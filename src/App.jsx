import React from "react";
import Home from "./components/Home";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";
export default function App() {
  return (
    <div className="App">
      <Home />
      <ScrollToTop smooth component={<IoIosArrowUp size={26} />} style={{ background: "#163E7B", color: "white" }} />
    </div>
  );
}
