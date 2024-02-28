import React from "react";
import Hero from "./components/Hero";
import HeaderSection from "./components/HeaderSection";
import './App.css'
import LowerSection from "./components/LowerSection";
import Footer from "./components/Footer";


const App = () => {
  return <>
    <HeaderSection/>
    <Hero/>
    <LowerSection/>
    <Footer/>
  </>;
};

export default App;
