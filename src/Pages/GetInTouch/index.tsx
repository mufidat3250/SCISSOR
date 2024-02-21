import "./style.scss";
import Input from "../../Components/atoms/Input";
import Button from "../../Components/atoms/Button";
import Select from "../../Components/atoms/Select";
import { useState } from "react";


const GetInTouch = () => {
  const initialValue = {firstName:'', lastName:'', companyName:'', email:'', phoneNumber:'',}
  const  [formInputs, setFormInput] = useState(initialValue)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target
      setFormInput({...formInputs, [name]:value})
  }
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      // const {name, value} = 
      console.log(e.target.value)
      console.log('i am changing')
  }

  return (
    <div className="get-in-touch">
      <div className="form-container">
        <span className="">
          <h1 className="text-center font-bold text-[2.5rem] leading-normal mb-5">
            GET IN TOUCH
          </h1>
          <form className="form">
            <div className="form-wrapper">
              <Input
                otherClass="!bg-white !border-none !w-auto rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="First Name*"
                setShowPassword={() => {}}
                name= 'firstName'
                onChange={handleChange}
              />
              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Last Name*"
                setShowPassword={() => {}}
                name='last name'
                onChange={handleChange}
              />
              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Company Name*"
                name='company name'
                setShowPassword={() => {}}
                onChange={handleChange}
              />
              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Business Email Address*"
                setShowPassword={() => {}}
                name='email'
                onChange={handleChange}
              />
              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Phone Number*"
                setShowPassword={() => {}}
                name="phone-number"
                onChange={handleChange}
              />
              {/* <select name="" id=""></select> */}
              
              <Select
                options={[
                  "React Js Developer",
                  "Front-end Developer",
                  "Software Engineer",
                  "Software developer",
                ]}
                label={"Job Title*"}
                onSelect={handleSelect}
              />
              <Select
                options={[
                  "React Js Developer",
                  "Front-end Developer",
                  "Software Engineer",
                  "Software developer",
                ]}
                label={"Company Size*"}
                onSelect={handleSelect}
              />
              <Select
                options={[
                  "React Js Developer",
                  "Front-end Developer",
                  "Software Engineer",
                  "Software developer",
                ]}
                label={"Primary Use Case*"}
                onSelect={handleSelect}
              />
              <Select
                options={[
                  "React Js Developer",
                  "Front-end Developer",
                  "Software Engineer",
                  "Software developer",
                ]}
                label={"Country*"}
                onSelect={handleSelect}
              />
            </div>
            <p className="text-[0.75rem] mt-4 text-[#5C6F7F] font-[400] text-justify">
              Scissor requires the contact information you provide in order to
              reach out to you regarding our products and services. You have the
              option to unsubscribe from these communications whenever you wish.
              To learn more about how to unsubscribe, our privacy practices, and
              our dedication to safeguarding your privacy, please refer to our
              Privacy Policy.
            </p>
            <Button title="Submit" otherClass="mt-[1rem] bg-primary py-2" />
          </form>
        </span>
      </div>
      <div className="w-full  lg:pt-[6rem]">
        {" "}
      </div>
    </div>
  );
};

export default GetInTouch;
