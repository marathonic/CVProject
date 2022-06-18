import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CVRender from "./components/CV-Render";
import Editor from "./components/Editor";
import Form from "./components/Form";

// function App() {
//   return (
//     <div className="big-container">
//       <Header />
//       <div className="app-container">
//         {/* Left panel */}
//         <Editor />
//         {/* Right panel */}
//         <CVRender />
//       </div>
//       <Footer />
//     </div>
//   );
// }

//Work with Form.js first. Disregard all other files until Form.js until then

// class App extends Component {
//   render() {
//     return (
//       <div className="big-container">
//         <Header />
//         <div className="app-container">
//           {/* Left panel */}
//           <Editor />
//           {/* Right panel */}
//           <CVRender />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// Working with Form.js first, we can try this with just 1 component here for now. Later, we may wish to separate this into <Editor /> and <Render />

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
