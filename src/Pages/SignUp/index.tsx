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

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [reTypePassword, setReTypePassword] = useState(false)
    const navigate = useNavigate()
     return (
        <div className="login-wrapper">
            <div className="login">
            <p>Sign up with:</p>
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
            <div className="flex flex-col">
            <div className="flex flex-col gap-4 h-[18rem] overflow-auto">
            <div>
            <Input placeholder="Username" otherClass={""} setShowPassword={()=>{}}/>
            <span className="invisible  text-red-400 mt-1">Err</span>
            </div>
            <div>
            <Input placeholder="Email" otherClass={""} setShowPassword={()=>{}}/>
            <span className="invisible  text-red-400 mt-1">Err</span>
            </div>
            <div>
            <Input placeholder="Password" otherClass={""} showPassword={showPassword} setShowPassword={setShowPassword} icon={showPassword? <Eyes/> : <EyeOff/>}/>
            <span className="invisible  text-red-400 mt-1">Err</span>
            </div>
            <div>
            <Input placeholder="Retype Password" otherClass={""} showPassword={reTypePassword} setShowPassword={setReTypePassword} icon={reTypePassword? <Eyes/> : <EyeOff/>}/>
            <span className="invisible  text-red-400 mt-1">Err</span>
            </div>
            </div>

            <Button title="Sign up" otherClass="my-4 bg-primary"/>
            </div>
            
            <div className=''>
            <span className="flex justify-center mb-4">Already have an account? <span className="text-primary cursor-pointer" onClick={()=> navigate('/login')}>Log in</span></span>
            <div className=" text-center text-xs">
            <span>By signing up, you agree to <br/>
Sciccor's <span className="font-bold">Terms of Service, Privacy Policy</span> and <span className="font-bold">Acceptable Use Policy.</span></span>
            </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default SignUp
