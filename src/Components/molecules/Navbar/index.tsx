import { useState } from 'react'
import Logo from '../../../Vectors/Logo'
import Button from '../../atoms/Button'
import './style.scss'
import { Link, useNavigate} from 'react-router-dom'
import CloseIcon from '../../../Vectors/CloseIcon'
import MenuIcon from '../../../Vectors/MenuIcon'


const tabs = [
    {
    title:'My URLs',
    link:'/url',
    },
    {
        title:'Features',
        link:'/features',
    },
    {
        title:'Pricing',
        link:'/pricing',
    },
    {
        title:'Analytics',
        link:'#analytics',
    },
    {
        title:'FAQs',
        link:'/faqs',
    },
]
const NavBar = () => {
    const [active, setActive] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    
    return (

        <div className='nav-bar-wrapper'>
        <div className='nav-bar container'>
        <Link to='/'>
        <Logo color={'#005AE2'}/> 
        </Link>
         <ul className='tab-wrapper'>
        {tabs.map(({title, link}, index)=> <li className={`${index === active ? '!text-[#0065FE]' :''}`} onClick={()=> setActive(index)} key={index}>
            <Link to={link}>{title}</Link>
        </li>)}
        </ul> 

        <div className='btn-wrapper'>
                <div onClick={handleLogout}>
                <Button otherClass='!p-0 !m-0 text-base rounded-none text-primary bg-none' title='Log Out'/>
                </div>
                <Link to='/get-in-touch'>
                <Button title='Get In Touch' otherClass='bg-primary w-full text-bases font-normal w-[8.875rem]'/>
                </Link>

        </div>
        </div>
        <div className='z-50 mobile'>
        <div className='flex justify-between w-full items-center px-[1.5rem] py-[1rem]'>
        <Logo color={'#005AE2'}/>
        <MenuIcon onClick={()=> setIsOpen(!isOpen)}/>
        </div>
        <div>
        </div>
        <div className={`tab-container ${isOpen ? 'ml-[0%] ease-in-out duration-300': 'ml-[-150%]'}`}>
               <div className='flex items-center justify-between'>
                <Logo color={'#005AE2'}/>
               <CloseIcon  onClick={()=> setIsOpen(false)}/>
               </div>
        <ul className='tab-wrapper'>
        {tabs.map(({title, link}, index)=> {
            return <li className={`${index === active ? '!text-[#0065FE] border-b border-primary pb-3 ease-in-out duration-500' :'black'}`} onClick={()=> setActive(index)} key={index}>
            <a href={link}>{title}</a>
        </li>
        })}
        </ul> 
        <div className='btn-wrapper'>
                <div onClick={handleLogout}>
                <Button otherClass='!p-0 !m-0 text-base rounded-none text-primary bg-none bg-primary text-white  w-[10.875rem] h-full rounded-[12px]' title='Log Out'/>
                </div>
                <Link to='/get-in-touch'>
                <Button title='Get In Touch' otherClass='bg-primary  text-bases font-normal w-[10.875rem] !rounded-[12px]'/>
                </Link>

        </div>
        </div>
        </div>
        </div>
    )
}

export default NavBar
