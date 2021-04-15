import React from "react";
import Layout from "./Components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import "./Style.scss";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
