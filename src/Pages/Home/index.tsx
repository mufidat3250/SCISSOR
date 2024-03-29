import Hero from "../../Components/organisms/Hero";
import Possibbilities from "../../Components/organisms/Possibilities";
import Pricing from "../../Components/organisms/Pricing";
import Url from "../../Components/molecules/Url";
import FAQS from "../../Components/organisms/FAQS/Index";
import Revolution from "../../Components/organisms/Revolution";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Home = () => {
  const navigate = useNavigate()

useEffect(()=> {
    const authToken = sessionStorage.getItem('Auth Token')
    console.log({authToken})
    if(authToken){
      navigate('/')
    }
    if(!authToken){
      navigate('login')
    }
}, [])

  return (
    <>
      <Hero />
      <Possibbilities />
      <Pricing />
      <Url />
      <FAQS />
      <Revolution />
    </>
  );
};

export default Home;
