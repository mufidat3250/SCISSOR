import './style.scss'

type inputProp = {
    placeholder : string;
    otherClass : string;
}

const Input = ({placeholder}:inputProp) => {
    return (
        <div className="inputWrapper">
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input
