import React from "react";
import Header2 from "./Header2";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Features2 from "./Features2";
import Blue1 from "./Blue";
import RealTime from "./RealTime";
import "./index.css"
import FAQ from "./FAQ"
import Banner2 from "./Banner2";
import Animation from "./Animation";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./Header";



const App = () => {
  
  return (
    <div className="main-container">
    <>
    <Header/>
    <HeroSection />
    <Features/>
    <Features2/>
    <Blue1/>
    <Animation/>
    <RealTime />
    <FAQ/>
    <Banner2/>
    </>
    </div>
  );
};

export default App;
