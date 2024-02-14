import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import NavBar from '../../molecules/Navbar'
import Pricing from '../Pricing'
import './style.scss'

const Hero = () => {
    return (
        <div className='hero'>
            <nav className='p-6'><NavBar/></nav>
            <header> 
                <p>Optimize Your Online Experience with Our Advanced</p>
                <div className='advance flex'>
                <p>Advanced </p>
                <div className='m-0 flex flex-col justify-center items-center max-w-96'>
                    <p> URL Shortening </p>
                    <img src="/vectors/shortner.svg" alt="" className='max-w-[50%]' />
                </div>
                <p> Solution </p>
                </div>
            </header>
            <div className='max-w-[48.512rem] mx-auto text-center text-lg mt-4 mb-[2rem] max-h-[6.5625rem]'>
                <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            </div>
            <div className='flex justify-center items-center gap-[3.5rem]'>
                {/* <div className='w-[8.875rem]'>
                <Button otherClass='bg-primary text-base' title='Sign Up'/>
                </div> */}
                {/* <Button otherClass='!p-0 !m-0 text-base !w-fit rounded-none text-primary bg-none' title='Learn More'/> */}
                {/* <Button otherClass='bg-white text-primary' title='Get Custom Pricing'/> */}

                {/* <Input placeholder={'Past URL here...'} otherClass={''}/> */}
                
            </div>
                {/* <div className='seamless'> 
                <img src="/Images/seamless.png" alt=""  className='mx-auto'/>
                </div> */}


                <Pricing/>
        </div>
    )
}

export default Hero