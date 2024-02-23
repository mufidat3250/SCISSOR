import { useState } from "react";
import Button from "../../Components/atoms/Button";
import Input from "../../Components/atoms/Input";
import AppleIcon from "../../Vectors/AppleIcon";
import GoogleIcon from "../../Vectors/GoogleIcon";
import "./style.scss";
import Eyes from "../../Vectors/Eyes";
import EyeOff from "../../Vectors/EyeOff";
import { useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<{
    email: string;
    password: string;
    userExist:string
  }>({ email: "", password: "", userExist:'' });
  const [formsValue, setFormsValue] = useState({ email: "", password: ""});
  const [success, setSuccess] = useState('')
  
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    let userRequest: any = ''

    signInWithEmailAndPassword(auth, formsValue.email, formsValue.password)
    .then((res )=> {

        setSuccess('User loggedin successfully')
        navigate('/')
        //@ts-ignore
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)


    }).catch((err)=> {
      console.log(err)
      setErrorMessage({...errorMessage, userExist:'User does not exist SignUp instead'})
      setTimeout(() => {
        setErrorMessage({...errorMessage, userExist:''})
      }, 3000);
    })
    
    console.log(userRequest , errorMessage.userExist)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!formsValue.email) {
      setErrorMessage({...errorMessage, email:"Email must be provided"})
    }else if (!emailRegex.test(formsValue.email)){
      setErrorMessage({...errorMessage, email:'Format example@gmail.com'})
    }else if(formsValue.email !== userRequest){
      setErrorMessage({...errorMessage, email:'User does not exist in our database Sign Up instead'})
    }
    else{
      setErrorMessage({...errorMessage, email:''})
    }
    if (!formsValue.password) {
      setErrorMessage({...errorMessage, password:"Password must be provided"})
      setTimeout(() => {
        setErrorMessage({...errorMessage, password:''})
      }, 2000);
    }else if (!/^.[a-zA-Z0-9@_-]{5,20}$/g.test(formsValue.password)){
        setErrorMessage({...errorMessage, password:'password is incorect'})

        setTimeout(() => {
          setErrorMessage({...errorMessage, password:''})
        }, 3000)
        
    }else{
      setErrorMessage({...errorMessage, password:''})
    }

   
  };

  // onAuthStateChanged(auth, (user)=> {
  //   if(user){
  //     setErrorMessage({...errorMessage, userExist:'No such user Sign up instead'})
  //     console.log('user exist')
  //   }else{
  //     console.log('user does not exist')
  //   }
  // })

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormsValue({ ...formsValue, [name]: value });
  };

  return (
    <div className="login-wrapper">
      <div className="login">
        <form action=""></form>
        <p>Log in with:</p>
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
          {success? <p>{success}</p> : <p className=" text-red-500 text-center text-base">{errorMessage.userExist}</p>}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              placeholder="Email address or username"
              otherClass={""}
              setShowPassword={() => {}}
              onChange={handleChange}
              name="email"
            />
            <p className={` text-red-500 ${errorMessage.email? 'visible': 'invisible'}`}>{errorMessage.email}</p>
            <Input
              placeholder="Password"
              otherClass={""}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onChange={handleChange}
              icon={showPassword ? <Eyes /> : <EyeOff />}
              name='password'
              />
            <p className={` text-red-500 ${errorMessage.password? 'visible': 'invisible'}`}>{errorMessage.password}</p>
          </div>
          <p className="text-primary self-end mt-2 cursor-pointer my">
            Forget your Password?
          </p>
          <Button title="Log In" otherClass="my-4 bg-primary" />
        </form>
        <span className="text-center mb-4">
          Don’t have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </span>
        <div className=" text-center text-xs text-[#A0B1C0]">
          <span>
            By signing in with an account, you agree to <br />
            Sciccor's{" "}
            <span className="font-bold text-[#5C6F7F]">
              Terms of Service, Privacy Policy
            </span>{" "}
            and{" "}
            <span className="font-bold text-[#5C6F7F]">
              Acceptable Use Policy.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
