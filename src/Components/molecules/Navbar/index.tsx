import React from 'react'
import Logo from '../../../Vectors/Logo'
import Button from '../../atoms/Button'


const tabs = [
    {
    title:'My URLs',
    link:'#my URLs',
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
    return (
        <div className='nav-bar'>
        <Logo color={'#005AE2'}/>
        <ul>
        {tabs.map((tab)=> <li>
            <a href={tab.link}>{tab.title}</a>
        </li>)}
        </ul>
        <div className='btn-wrapper'>
            <Button title='Login'/>
            <Button title='Get In Touch'/>
        </div>
        </div>
    )
}

export default NavBar
