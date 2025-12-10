import React from "react";
import Navbar from "components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
// import Hero from "components/hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div  style={{height:"100vh"}}>
      <Hero />

      </div>
      <Footer/>
      
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Home;
