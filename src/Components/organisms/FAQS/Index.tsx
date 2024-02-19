import FAQ from '../../atoms/FAQ'
import Qoutation from '../../../Vectors/Qoute'
import { faqs } from '../../../data'

const FAQS = () => {
    return (
        <div className='relative h-screen grid place-items-center'>
            <img src="/Images/Group 3.png" alt="" className='absolute left-0'/>
            <img src="/Images/Vector (2).png" alt="" className='absolute bottom-0 right-0' />
        <div className='max-w-[49.5rem] mx-auto'>
                <div className='flex justify-center gap-[1rem]'>
                    <span>
                        <Qoutation/>
                    </span>
                    <h1 className='text-[2.5rem] leading-[1.81rem] font-semibold'>FAQs</h1>
                </div>
            <div className='gap-4 flex flex-col pt-5 h-[18rem] mt-10 overflow-y-auto md:h-fit px-10'>
                {faqs.map(({title, desc}, index)=> <FAQ title={title} desc={desc} key={`faq${index}`}/>)}
            </div>
        </div>
        </div>
    )
}

export default FAQS
