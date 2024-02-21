import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import './style.scss'
import { useEffect } from 'react'

const Hero = () => {
    const navigate = useNavigate()


    return (
        <div className='hero'>
            <header> 
                <p>Optimize Your Online Experience with Our Advanced</p>
                <div className='advance flex'>
                <p>Advanced </p>
                <div className='m-0 flex flex-col justify-center items-center w-fit md:max-w-96'>
                    <p> URL Shortening </p>
                    <img src="/vectors/shortner.svg" alt="" className='max-w-[50%]' />
                </div>
                <p> Solution </p>
                </div>
            </header>
            <div className='desc'>
                <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            </div>
            <div className='btn-wrap'>
                <div className='w-[8.875rem]' onClick={()=> navigate('/signup')}>
                <Button otherClass='bg-primary text-base' title='Sign Up'/>
                </div>
                <Button otherClass='!p-0 !m-0 text-base !w-fit rounded-none text-primary bg-none' title='Learn More'/>
                </div>
                <div className='seamless'> 
                <img src="/Images/seamless.png" alt=""  className='mx-auto'/>
                </div>


                
        </div>
    )
}

export default Hero