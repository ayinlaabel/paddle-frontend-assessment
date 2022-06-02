import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(null);

  function displayContact(data) {
    // console.log(data);
    if (display === null) {
      setDisplay("data");
      data = !data
    } else {
      setDisplay(null);
      data = !data;
    }
  }
  return (
    <div className="App">
      <Nav test={displayContact} />
      <Main />
      <Footer />
      {display ? <Contact  className="contact-tag" /> : ""}
    </div>
  );
}

export default App;
