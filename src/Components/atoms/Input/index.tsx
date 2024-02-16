import { useState } from 'react';
import './style.scss'

type inputProp = {
    placeholder : string;
    otherClass : string;
}

const Input = ({placeholder}:inputProp) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="inputWrapper">
            <input type="text" placeholder={placeholder} />

        </div>
    )
}

export default Input
