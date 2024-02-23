import "./style.scss";
import { useId } from "react";

const Select = ({
  label,
  options,
  otherClass,
  name,
  onChange,
  value
}: {
  options: string[];
  label?: string;
  otherClass?: string;
  onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void;
  name:string;
  value:string
}) => {
  const selectedId = useId()
  console.log({value, name})
  return (
    <div className={`${otherClass} select-wrapper`}>
      <p>{label}</p>
      <select name={name} id={selectedId} className=""  onChange={onChange} value={value}>
        {options.map((data, index) => {
         return (
            
            <option value={data} key={index}>
            {data}
          </option>
          
          )
        } )}
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
