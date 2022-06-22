import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="big-container">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
