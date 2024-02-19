import React from 'react'
import './style.scss'
import Input from '../../Components/atoms/Input'
import Button from '../../Components/atoms/Button'
import Select from '../../Components/atoms/Select'
import NavBar from '../../Components/molecules/Navbar'
import Footer from '../../Components/organisms/Footer'

const GetInTouch = () => {
    return (
        <div className='get-in-touch'>
            <NavBar/>
            <div className='form-container'>
            <span className=''>
           <h1 className='text-center font-bold text-[2.5rem] leading-normal mb-5'>GET IN TOUCH</h1>
           <form className='form'>
            <div className='form-wrapper'>
            <Input otherClass='!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0' placeholder={''} label='First Name*' setShowPassword={()=>{}}/>
            <Input otherClass='!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0' placeholder={''} label='Last Name*' setShowPassword={()=>{}}/>
            <Input otherClass='!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0' placeholder={''} label='Company Name*' setShowPassword={()=>{}}/>
             <Input otherClass='!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0' placeholder={''} label='Business Email Address*' setShowPassword={()=>{}}/>
            <Input otherClass='!bg-white !border-none rounded-[0.75rem] overflow-hidden py-0' placeholder={''} label='Phone Number*' setShowPassword={()=>{}}/>
            <Select options={['React Js Developer', 'Front-end Developer', 'Software Engineer','Software developer']} label={'Job Title*'}/>
            <Select options={['React Js Developer', 'Front-end Developer', 'Software Engineer','Software developer']} label={'Company Size*'}/>
            <Select options={['React Js Developer', 'Front-end Developer', 'Software Engineer','Software developer']} label={'Primary Use Case*'}/>
            <Select options={['React Js Developer', 'Front-end Developer', 'Software Engineer','Software developer']} label={'Country*'}/> 
            </div>
            <p className='text-[0.75rem] mt-4 text-[#5C6F7F] font-[400] text-justify'>Scissor requires the contact information you provide in order to reach out to you regarding our products and services. You have the option to unsubscribe from these communications whenever you wish. To learn more about how to unsubscribe, our privacy practices, and our dedication to safeguarding your privacy, please refer to our Privacy Policy.</p>
            <Button title='Submit' otherClass='mt-[1rem] bg-primary py-2'/>
            </form>
           </span>
            </div>
          <div className='w-full pt-[6rem]'> <Footer/></div>
        </div>
    )
}

export default GetInTouch
