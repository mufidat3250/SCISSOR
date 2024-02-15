import { useState } from "react";
import AddIcon from "../../../Vectors/AddIcon";
import SubtractIcon from "../../../Vectors/Subtract";

const FAQ = ({ title, desc }: { title: string; desc: string }) => {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)} className="cursor-pointer border-b-[1px] border-[#D6D6D6]">
      <div className="flex justify-between items-center py-2">
        <h1>{title}</h1>
        {show ? <AddIcon/> : <SubtractIcon/>}
      </div>
      <p className="py-2">{show ? desc : ""}</p>
    </div>
  );
};

export default FAQ;
