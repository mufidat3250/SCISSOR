import Check from "../../../Vectors/Check";
import "./style.scss";

const PricingCard = ({title, desc, price, list, index}:{title:string, desc:string, price:string, list:string[], index:number}) => {
  return (
    <div className={`price-wrapper ${index === 1 ? 'bg-[#1E3448] text-white -my-[3.4rem] -ml-[3rem]  -mr-[3rem] flex flex-col justify-center z-50': index === 2 ? '' : ''} `}>
      <p className="title">{title}</p>
      <h3 className="price">{price}</h3>
      <p className="desc">{desc}</p>
      <ul className="list-wrapper">
        {list.map((list)=> <li className="list">
          {" "}
          <Check color={index === 1 ? 'white' : '#005AE2'}/> <span> {list}</span>
        </li>)}
      </ul>
    </div>
  );
};

export default PricingCard;
