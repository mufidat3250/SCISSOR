import "./style.scss";

const Select = ({
  label,
  options,
  otherClass,
}: {
  options: string[];
  label?: string;
  otherClass?: string;
}) => {
  return (
    <div className={`${otherClass} select-wrapper`}>
      <p>{label}</p>
      <select name="" id="" className="">
        <option value="">Select an Item </option>
        {options.map((data, index) => (
          <option value={data} key={index}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

import { useState } from "react";

export const CustomSelect = ({ list }: { list: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Choose Domain");
  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClicked = (value:string) => {
    let updatedValue = value
    setSelected(()=> updatedValue)
    console.log(updatedValue)
    setIsOpen(!isOpen)
  }
  return (
    <div className={`custom-select ${selected? 'text-gray-500':'text-black'}`} onClick={toggleSelect}>
      <div className="select-header">{selected}</div>
      {isOpen ? (
        <ul className="select-list">
          {list.map((list, index) => (
            <li onClick={()=>onOptionClicked(list)} key={`list${index}`}>{list}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
