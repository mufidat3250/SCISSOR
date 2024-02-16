import React from "react";
import Hero from "../../Components/organisms/Hero";
import Possibbilities from "../../Components/organisms/Possibilities";
import Pricing from "../../Components/organisms/Pricing";
import Url from "../../Components/molecules/Url";
import FAQS from "../../Components/organisms/FAQS/Index";
import Revolution from "../../Components/organisms/Revolution";
import Footer from "../../Components/organisms/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Possibbilities />
      <Pricing />
      <Url />
      <FAQS />
      <Revolution />
      <Footer />
    </>
  );
};

export default Home;
