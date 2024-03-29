import "./style.scss";
import PricingCard from "../../molecules/PricingCard";
import { price } from "../../../data";
import Qoutation from "../../../Vectors/Qoute";
import Button from "../../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Pricing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    console.log({ authToken });
    if (authToken) {
      navigate("/");
    }
    if (!authToken) {
      navigate("login");
    }
  }, []);
  return (
    <div className="pricing">
      <div className="title-wrapper">
        <div className="h-[5rem] mt-[1.225rem]">
          <Qoutation />
        </div>
        <div className="price-perfect">
          <h1>
            A{" "}
            <span className="text-primary leading-relaxed">price perfect</span>{" "}
            for your needs.
          </h1>
          <p>
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>
      </div>
      <div className="pricing-cards">
        {price.map(({ title, desc, list, price }, index) => {
          return (
            <PricingCard
              title={title}
              desc={desc}
              price={price}
              list={list}
              index={index}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex mt-[4rem] md:mt-[8.625rem] justify-center md:pb-[6.6875rem]">
        <div className="w-[12.5rem]">
          <Button title="Select Pricing" otherClass="bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
