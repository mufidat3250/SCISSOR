import { useState } from "react"
import Button from "../../Components/atoms/Button"
import Input from "../../Components/atoms/Input"
import Footer from "../../Components/organisms/Footer"
import AppleIcon from "../../Vectors/AppleIcon"
import GoogleIcon from "../../Vectors/GoogleIcon"
import './style.scss'
import Eyes from "../../Vectors/Eyes"
import EyeOff from "../../Vectors/EyeOff"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState<{email:string, password:string}>({email:'', password:''})

    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(!email){
            errorMessage.email = 'Email must be provided'
        }
        if(!password){
            errorMessage.password = 'Password must be provided'
        }

    }
    const navigate = useNavigate()
    return (
        <div className="login-wrapper">
            <div className="login">
                <form action=""></form>
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
            <form className="flex flex-col">
            <div className="flex flex-col gap-4">
            <Input placeholder="Email address or username" otherClass={""} setShowPassword={()=>{}} onChange={(e)=> {
                setEmail(e.target.value)
            }}/>
            <Input placeholder="Password" otherClass={""} showPassword={showPassword} setShowPassword={setShowPassword} onChange={(e)=> setPassword(e.target.value)} icon={showPassword? <Eyes/> : <EyeOff/>}/>
            </div>
            <p className="text-primary self-end mt-2 cursor-pointer my">Forget your Password?</p>
            <Button title="Log In" otherClass="my-4 bg-primary"/>
            </form>
            <span className="text-center mb-4">Don’t have an account? <span className="text-primary cursor-pointer" onClick={()=> navigate('/signup')}>Sign Up</span></span>
            <div className=" text-center text-xs text-[#A0B1C0]">
            <span>By signing in with  an account, you agree to <br/>
Sciccor's <span className="font-bold text-[#5C6F7F]">Terms of Service, Privacy Policy</span> and <span className="font-bold text-[#5C6F7F]">Acceptable Use Policy.</span></span>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Login
