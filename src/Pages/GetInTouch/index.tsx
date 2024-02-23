import "./style.scss";
import Input from "../../Components/atoms/Input";
import Button from "../../Components/atoms/Button";
import Select from "../../Components/atoms/Select";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

type initialValueProp = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  jobtitle: string;
  companysize: string;
  usecase: string;
  country: string;
};

const GetInTouch = () => {
  const initialValue: initialValueProp = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    jobtitle: "",
    companysize: "",
    usecase: "",
    country: "",
  };
  const [formInputs, setFormInput] = useState(initialValue);
  const [errorMessages, setErrorMessages] =
    useState<initialValueProp>(initialValue);
  const { addToast } = useToasts();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput({ ...formInputs, [name]: value });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormInput({ ...formInputs, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setErrorMessages(validate(formInputs));
    addToast(" We have Successfully recieved your information", {
      appearance: "success",
    });
    setFormInput({
      ...formInputs,
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      jobtitle: "",
      companysize: "",
      usecase: "",
      country: "",
    });
  };

  const validate = (value: initialValueProp) => {
    const errors: initialValueProp = { ...initialValue };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.firstName) {
      errors.firstName = "First name is required";
    } else if (!/^.[A-Za-z]{2,16}$/g.test(value.firstName)) {
      errors.firstName = "First name must be Alphabetic and mus be > 2";
    }
    if (!value.lastName) {
      errors.lastName = "Last name is required";
    } else if (!/^.[A-Za-z]{2,16}$/gi.test(value.lastName)) {
      errors.lastName = "Last name must be aphabetic and must be > 2";
    }
    if (!value.companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!value.email) {
      errors.email = "Business Email is required";
    } else if (!emailRegex.test(value.email)) {
      errors.email = "Must match example@gmail.com";
    }
    if (!value.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^(\d{11})$/g.test(value.phoneNumber)) {
      errors.phoneNumber = "Phone number must not exceed 11";
    }
    return errors;
  };

  return (
    <div className="get-in-touch">
      <div className="form-container">
        <span className="">
          <h1 className="text-center font-bold text-[2.5rem] leading-normal mb-5">
            GET IN TOUCH
          </h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-wrapper">
              <Input
                otherClass="!bg-white !border-none !w-auto rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="First Name*"
                setShowPassword={() => {}}
                name="firstName"
                onChange={handleChange}
                value={formInputs.firstName}
              />
              <span
                className={`text-red-500 text-sm ${
                  errorMessages.firstName ? "visible" : "invisible"
                }`}
              >
                {errorMessages.firstName}
              </span>
              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Last Name*"
                setShowPassword={() => {}}
                name="lastName"
                onChange={handleChange}
                value={formInputs.lastName}
              />
              <span
                className={`text-red-500 text-sm ${
                  errorMessages.lastName ? "visible" : "invisible"
                }`}
              >
                {errorMessages.lastName}
              </span>

              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Company Name*"
                name="companyName"
                setShowPassword={() => {}}
                onChange={handleChange}
                value={formInputs.companyName}
              />
              <span
                className={`text-red-500 text-sm ${
                  errorMessages.companyName ? "visible" : "invisible"
                }`}
              >
                {errorMessages.companyName}
              </span>

              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Business Email Address*"
                setShowPassword={() => {}}
                name="email"
                onChange={handleChange}
                value={formInputs.email}
              />
              <span
                className={`text-red-500 text-sm ${
                  errorMessages.email ? "visible" : "invisible"
                }`}
              >
                {errorMessages.email}
              </span>

              <Input
                otherClass="!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0"
                placeholder={""}
                label="Phone Number*"
                setShowPassword={() => {}}
                name="phoneNumber"
                onChange={handleChange}
                value={formInputs.phoneNumber}
              />
              <span
                className={`text-red-500 text-sm  ${
                  errorMessages.phoneNumber ? "visible" : "invisible"
                }`}
              >
                {errorMessages.phoneNumber}
              </span>

              <Select
                options={[
                  "React Js Developer",
                  "Front-end Developer",
                  "Software Engineer",
                  "Software developer",
                ]}
                label={"Job Title*"}
                onChange={handleSelect}
                name={"jobtitle"}
                value={formInputs.jobtitle}
              />
              <Select
                options={["10-20", "20-50", "50-100", "100-150"]}
                label={"Company Size*"}
                onChange={handleSelect}
                name={"companysize"}
                value={formInputs.companysize}
              />
              <Select
                options={["Personal", "Work", "organization"]}
                label={"Primary Use Case*"}
                onChange={handleSelect}
                name="usecase"
                value={formInputs.usecase}
              />
              <Select
                options={["Nigeria", "United State", "United Kindom", "UAE"]}
                label={"Country*"}
                onChange={handleSelect}
                value={formInputs.country}
                name="country"
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
      <div className="w-full  lg:pt-[6rem]"> </div>
    </div>
  );
};

export default GetInTouch;
