import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import "./style.css";

function App() {
  return (
    <div className="big-container">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
