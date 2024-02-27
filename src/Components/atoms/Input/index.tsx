import { ReactNode } from "react";
import "./style.scss";

type inputProp = {
  placeholder: string;
  otherClass?: string;
  icon?: ReactNode;
  showPassword?: boolean;
  type?: string;
  value?: string;
  label?: string;
  readOnly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowPassword:(val:boolean)=> void;
  name: string;
};

const Input = ({
  placeholder,
  showPassword,
  setShowPassword,
  otherClass,
  icon,
  label,
  onChange,
  name,
  type,
  value,
  readOnly
}: inputProp) => {
  return (
    <div>
      {label && <p className="mb-2">{label}</p>}
      <div className={`inputWrapper ${otherClass}`}>
        <input
          type={!showPassword ? type : "password"}
          placeholder={showPassword ? "******" : placeholder}
          onChange={onChange}
          name={name}
          value={value}
          readOnly={readOnly}
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer h-4 w-[25px]"
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Input;
