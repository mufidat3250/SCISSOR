import { ReactNode, useState } from 'react';
import './style.scss'

type inputProp = {
    placeholder : string;
    otherClass?: string;
    icon?: ReactNode;
    showPassword?: boolean;
    setShowPassword: Function;
    label?: string
}

const Input = ({placeholder, showPassword, setShowPassword, otherClass, icon, label}:inputProp) => {
    
    
        return (
           <div>
             {label && <p className='mb-2'>{label}</p>}
        <div className={`inputWrapper ${otherClass}`}>
            <input type={showPassword ? 'password': "text"} placeholder={showPassword? '******' : placeholder} />
            <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer h-4 w-[25px]'>
                {icon}
            </div>
        </div>
           </div>
    )
}

export default Input
