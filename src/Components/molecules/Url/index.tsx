import "./style.scss";
import Button from "../../atoms/Button";
import MargicWand from "../../../Vectors/margic-wand";
import { useNavigate } from "react-router-dom";
import {  useEffect, useState } from "react";
import Input from "../../atoms/Input";
import axios, { AxiosRequestConfig } from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useToasts } from "react-toast-notifications";

const Url = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [shortedLink, setSShortedLink] = useState("");
  const [copy, setCopy] = useState(false)
  const access_token = import.meta.env.VITE_ACCESS_TOKEN;
  const {addToast} = useToasts()
  console.log(access_token);

  useEffect(() => {
    const authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      navigate("/url");
    }
    if (!authToken) {
      navigate("login");
    }
  }, []);

  
  const url = "https://api-ssl.bitly.com/v4/shorten";

 const requestData = {
    long_url: inputValue,
  };

const config: AxiosRequestConfig = {
    method: "POST",
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    data: requestData,
  };

  const submitUrl = () => {
    setInputValue(inputValue);
    // setLoading(true)
    axios(config)
    .then((res) => {
      setSShortedLink(res.data.id)
      addToast('Sent Successfully', { appearance: 'success' })
    })
    .catch((error) => {
      console.log(error)
      addToast(error.message, { appearance: 'error' });
    });
    setInputValue('')
  };


 

  return (
    <div className="trim-url">
      <div className="url-wrapper">
        <div className="input-wrapper">
          <div className="first-input">
            <Input
              placeholder="Past URL here"
              otherClass={"w-full"}

              onChange={(e) => setInputValue(e.target.value)}
              name={"url"}
              value={inputValue} setShowPassword={()=> {}}/>
          </div>
          <div className="sec-input  col-span-2">
            <Input placeholder={shortedLink} otherClass={'w-full'} setShowPassword={() => { } } readOnly onChange={()=>{}} name={""}/>
          </div>
          <CopyToClipboard text={shortedLink} onCopy={()=> {
            setCopy(true)
            addToast('URL Copied', { appearance: 'success' })
            setTimeout(() => {
              setCopy(false)
            }, 5000);
          }}>
            <div className={`bg  rounded-[8px] cursor-pointer ${!copy ? 'bg-red-500': 'bg-red-100'}`}>
            <Button title="Copy" otherClass={`h-full w-full rounded-none bg-transparent`} disabled={inputValue.length == 0 ? false : true}/>
            </div>
          </CopyToClipboard>
          <div className="col-span-3" onClick={submitUrl}>
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



export default Url