import {useState } from "react";
import Button from "../../Components/atoms/Button";
import Input from "../../Components/atoms/Input";
import Footer from "../../Components/organisms/Footer";
import AppleIcon from "../../Vectors/AppleIcon";
import GoogleIcon from "../../Vectors/GoogleIcon";
import "./style.scss";
import Eyes from "../../Vectors/Eyes";
import EyeOff from "../../Vectors/EyeOff";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

type initialValueType = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const SignUp = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [reTypePassword, setReTypePassword] = useState(false);
  const [formValues, setFormValues] = useState<initialValueType>(initialValue);
  const [errorMessage, setErrorMessage] = useState<initialValueType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values: initialValueType) => {
    const errors: initialValueType = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameReg = /^.[A-Za-z]{2,16}$/g;
    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (!/^.[A-Za-z]{2,16}$/g.test(values.firstName)) {
      console.log(!nameReg.test(values.firstName));
      errors.firstName = "First name must be Alphabetic and must be > 2";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (nameReg.test(values.lastName)) {
      // console.log(!/^.[A-Za-z]{2,16}$/g.test(values.lastName));
      errors.lastName = "Last name must be Alphabetic and must be > 2";
    }
    if (!values.username) {
      errors.username = "User name is required";
    } else if (!/^.[A-Za-z]{2,16}$/g.test(values.username)) {
      errors.username = "user name must be Alphabetic and must be > 2";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email must be a valid address, eg. example@example.com";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (!/^.[a-zA-Z0-9@_-]{5,20}$/g.test(values.password)) {
      errors.password =
        "Password must be alphanumeric(@, _ and - are also allowed) and between 6 to 20 character";
    }
    if (!values.confirmPassword) {
      errors.password = "Confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password Mismatch";
    }
    if(!values) toast.error('All input field are required')
    return errors;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLElement>
  ) => {
    e.preventDefault();
    setErrorMessage(validate(formValues));
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredencial) => {
        // siginup
        console.log(userCredencial);
        //@ts-ignore
        setUser(userCredencial.user)
        navigate('/')
        //@ts-ignore
        sessionStorage.setItem('Auth token', userCredencial._tokenResponse.refreshToken)
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message)
      });

  };

console.log(formValues, formValues.username)
  return (
    <div className="login-wrapper">
      <div className="login">
        <p>Sign up with:</p>
        <div className="login-btn">
          <div className="w-[6.8125rem]">
            <Button
              title="Google"
              surfixIcon={<GoogleIcon />}
              otherClass="bg-primary !rounded-[4px] !py-[10px]"
            />
          </div>
          <div className="w-[6.8125rem]">
            <Button
              title="Apple"
              surfixIcon={<AppleIcon />}
              otherClass="bg-primary !rounded-[4px] !py-[10px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[1.0625rem] mb-[2rem]">
          <span className="flex-1 h-[2px] bg-[#A0B1C0]"></span>
          <span className=" px-[1.25rem]">Or</span>
          <span className="flex-1 h-[2px] bg-[#A0B1C0]"></span>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 h-[18rem] overflow-auto">
            <div>
              <Input
                placeholder="First Name"
                otherClass={""}
                setShowPassword={() => {}}
                onChange={handleChange}
                name="firstName"
              />
              <span className={`text-red-400 mt-1`}>
                {errorMessage.firstName}
              </span>
            </div>
            <div>
              <Input
                placeholder="Last Name"
                otherClass={""}
                setShowPassword={() => {}}
                onChange={handleChange}
                name="lastName"
              />
              <span className={`text-red-400 mt-1`}>
                {errorMessage.lastName}
              </span>
            </div>
            <div>
              <Input
                placeholder="User Name"
                otherClass={""}
                setShowPassword={() => {}}
                onChange={handleChange}
                name="username"
              />
              <span className={`text-red-400 mt-1`}>
                {errorMessage.username}
              </span>
            </div>
            <div>
              <Input
                placeholder="Email"
                otherClass={""}
                setShowPassword={() => {}}
                onChange={handleChange}
                name="email"
              />
              <span className={`text-red-400 mt-1`}>{errorMessage.email}</span>
            </div>
            <div>
              <Input
                placeholder="Password"
                otherClass={""}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                onChange={handleChange}
                icon={showPassword ? <Eyes /> : <EyeOff />}
                name="password"
              />
              <span className={`text-red-400 mt-1`}>
                {errorMessage.password}
              </span>
            </div>
            <div>
              <Input
                placeholder="Confirm Password"
                otherClass={""}
                showPassword={reTypePassword}
                setShowPassword={setReTypePassword}
                onChange={handleChange}
                icon={reTypePassword ? <Eyes /> : <EyeOff />}
                name="confirmPassword"
              />
              <span className={`text-red-400 mt-1`}>
                {errorMessage.confirmPassword}
              </span>
            </div>
          </div>

          <Button title="Sign up" otherClass="my-4 bg-primary" />
        </form>

        <div className="">
          <span className="flex justify-center mb-4">
            Already have an account?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </span>
          <div className=" text-center text-xs">
            <span>
              By signing up, you agree to <br />
              Sciccor's{" "}
              <span className="font-bold">
                Terms of Service, Privacy Policy
              </span>{" "}
              and <span className="font-bold">Acceptable Use Policy.</span>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
