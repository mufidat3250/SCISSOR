import "./style.scss";
// import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import MargicWand from "../../../Vectors/margic-wand";
import { CustomSelect } from "../../atoms/Select";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Url = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/url");
    }
    if (!authToken) {
      navigate("login");
    }
  }, []);
  return (
    <div className="trim-url">
      <div className="url-wrapper">
        <div className="input-wrapper">
          <div className="first-input">
            {/* <Input placeholder='Past URL here' otherClass={'w-full'} setShowPassword={()=>{}}/> */}
          </div>
          <div className="sec-input">
            <CustomSelect list={["React", "Next", "Tailwind"]} />
          </div>
          <div className="third-input">
            {/* <Input placeholder='Past URL here' otherClass={'w-full'} setShowPassword={()=>{}}/> */}
          </div>
          <div className="col-span-2">
            <Button
              title="Trim URL"
              prefixIcon={<MargicWand />}
              otherClass="bg-primary"
            />
          </div>
        </div>
        <p className="max-w-[25rem] text-sm mt-[1.375rem]">
          By clicking TrimURL, I agree to the{" "}
          <span className="text-primary">Terms of Service,</span>{" "}
          <span className="text-primary">Privacy Policy</span> and Use of
          Cookies.
        </p>
      </div>
    </div>
  );
};

export default Url;
