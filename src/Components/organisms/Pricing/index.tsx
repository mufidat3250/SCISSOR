import React from 'react'
import './style.scss'
import PricingCard from '../../molecules/Pricing'

import {price} from '../../../data'

const Pricing = () => {
    console.log(price)
    return (
        <div className='pricing'>
            
            <div className='pricing-cards'>
            {price.map(({title, desc, list, price}, index)=> {
                return (<PricingCard title={title} desc={desc} price={price} list={list} index ={index} />)
             })}
            </div>
        </div>
    )
}

export default Pricing
