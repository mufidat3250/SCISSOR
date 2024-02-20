import { ReactNode} from 'react';
import './style.scss'

type inputProp = {
    placeholder : string;
    otherClass?: string;
    icon?: ReactNode;
    showPassword?: boolean;
    setShowPassword: Function;
    label?: string;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}

const Input = ({placeholder, showPassword, setShowPassword, otherClass, icon, label, onChange, name}:inputProp) => {
    
    return (
           <div>
             {label && <p className='mb-2'>{label}</p>}
        <div className={`inputWrapper ${otherClass}`}>
            <input type={showPassword ? 'password': "text"} placeholder={showPassword? '******' : placeholder} onChange={onChange}  name={name}/>
            <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer h-4 w-[25px]'>
                {icon}
            </div>
        </div>
           </div>
    )
}

export default Input
