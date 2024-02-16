import Button from "../../Components/atoms/Button"
import Input from "../../Components/atoms/Input"
import Footer from "../../Components/organisms/Footer"
import AppleIcon from "../../Vectors/AppleIcon"
import GoogleIcon from "../../Vectors/GoogleIcon"
import './style.scss'

const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login">
            <p>Log in with:</p>
            <div className="login-btn">  
            <div className="w-[6.8125rem]">
                <Button title="Google" surfixIcon={<GoogleIcon/>} otherClass="bg-primary !rounded-[4px] !py-[10px]"/>
                </div>
                <div className="w-[6.8125rem]">
                <Button title="Apple" surfixIcon={<AppleIcon/>} otherClass="bg-primary !rounded-[4px] !py-[10px]"/>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[1.0625rem] mb-[2rem]">
                <span className="flex-1 h-[2px] bg-[#A0B1C0]"></span>
                <span className=" px-[1.25rem]">Or</span>
                <span className="flex-1 h-[2px] bg-[#A0B1C0]"></span>
            </div>
            <Input placeholder="Email address or username" otherClass={""}/>
        </div>
        <Footer/>
        </div>
    )
}

export default Login
