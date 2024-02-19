import './style.scss'
import PricingCard from '../../molecules/PricingCard'
import {price} from '../../../data'
import Qoutation from '../../../Vectors/Qoute'
import Button from '../../atoms/Button'

const Pricing = () => {
    return (
        <div className='pricing'>
                    <div className='title-wrapper'>
                        <div className='h-[5rem]'><Qoutation/></div>
                    <div className='price-perfect'>
                    <h1>A <span className='text-primary'>price perfect</span> for your needs.</h1>
                    <p>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
                    </div>
                    </div>
            <div className='pricing-cards'>
            {price.map(({title, desc, list, price}, index)=> {
                return (<PricingCard title={title} desc={desc} price={price} list={list} index ={index} key={index}/>)
             })}
            </div>
            <div className='flex mt-[8.625rem] justify-center pb-[6.6875rem]'>
                <div className='w-[12.5rem]'><Button title='Select Pricing' otherClass='bg-primary'/></div>
            </div>
        </div>
    )
}

export default Pricing
