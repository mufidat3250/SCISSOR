import React from 'react'
import './style.scss'
import Qoutation from '../../../Vectors/Qoute'

const users = [
    {
        title:'3M',
        desc:'Active users'
    },
    {
        title:'60M',
        desc:'Links & QR codes created'
    },
    {
        title:'1B',
        desc:'Clicked & Scanned connections'
    },
    {
        title:'300k',
        desc:'App Integrations'
    },
]

const urlData = [
    {
        icon:'/vectors/Group 6 (1).svg',
        title:'URL Shortening',
        desc:'Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.'
    },
    {
        icon:'/vectors/Group 6 (2).svg',
        title:'Custom URLs',
        desc:'With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.'
    },
    {
        icon:'/vectors/Group 6 (3).svg',
        title:'QR Codes',
        desc:'Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.'
    },
    {
        icon:'/vectors/Group 6.svg',
        title:'Data Analytics',
        desc:'Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.'
    },
]


const Possibbilities = () => {
    return (
        <div>
            <div className='bg-[#F9FBFD]'>
            <div className='container posibility'>
            <div className='header'>
                <h1>One Stop. <br /> Four <span className='text-primary'>Possibilities</span>.</h1> 
            </div>
            <div className='users'>
                {users.map(({title, desc}, index) => <div key={index} className='user'> 
                <h1>{title}</h1>
                <p className={`${index == 1? 'max-w-[7.687rem]': index === 2 ? 'max-w-[9.375rem]':''}`}>{desc}</p>
                </div>)}
            </div>
        </div>
        </div>
        <div className='scissors container'>
            <div className='why'>
                <div className='qoutation'>
                <Qoutation/>
                </div>
                <div className=''>
                    <h1>Why choose <span className='text-primary'>Scissors</span></h1>
                    <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p>
                </div>
            </div>

            <div className='urls'>
                {urlData.map(({icon, title, desc})=> <div>
                    <img src={icon} alt=""/>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>)}
            </div>
        </div>
        </div>
    )
}

export default Possibbilities
