import React from "react";
import './style.scss'

const Select = ({ label, options, otherClass }: { options: string[]; label?: string, otherClass?:string }) => {
  return (
    <div className={`${otherClass} select-wrapper`}>
      <p>{label}</p>
      <select name="" id="" >
        <option value="">Select an Item </option>
        {options.map((data, index) => (
          <option value={data} key={index}>{data}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
