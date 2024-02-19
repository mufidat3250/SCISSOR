import { useState } from 'react'
import Logo from '../../../Vectors/Logo'
import Button from '../../atoms/Button'
import './style.scss'
import { Link} from 'react-router-dom'


const tabs = [
    {
    title:'My URLs',
    link:'/',
    },
    {
        title:'Features',
        link:'#features',
    },
    {
        title:'Pricing',
        link:'#pricing',
    },
    {
        title:'Analytics',
        link:'#analytics',
    },
    {
        title:'FAQs',
        link:'#faqs',
    },
]
const NavBar = () => {
    const [active, setActive] = useState(0)
    
    return (
        <div className='nav-bar container'>
        <Logo color={'#005AE2'}/>
         <ul className='tab-wrapper'>
        {tabs.map(({title, link}, index)=> <li className={`${index === active ? '!text-[#0065FE]' :''}`} onClick={()=> setActive(index)} key={index}>
            <a href={link}>{title}</a>
        </li>)}
        </ul> 
        <div className='btn-wrapper'>
                <Link to='/login'>
                <Button otherClass='!p-0 !m-0 text-base rounded-none text-primary bg-none' title='Login'/>
                </Link>
                <Link to='/get-in-touch'>
                <Button title='Get In Touch' otherClass='bg-primary w-full text-bases font-normal w-[8.875rem]'/>
                </Link>

        </div>
        </div>
    )
}

export default NavBar
