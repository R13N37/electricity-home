import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Views/Navbar/Navbar";
import HomeContent from "./Views/HomeContent/HomeContent";
import Footer from "./Views/Footer/Footer";

import { LanguageProvider } from "./context/LanguageContext";
import { Languages } from "./Views/LanguageSettings/LanguageSettings.model";

function App() {
  return (
    <LanguageProvider language={Languages.English}>
      <div>
      <Navbar></Navbar>
      <HomeContent></HomeContent>
      <Footer></Footer>
      </div>
      </LanguageProvider>
  );
}

export default App;
