import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import './style.scss'
import { useEffect } from 'react'

const Revolution = () => {
    const navigate = useNavigate()
    useEffect(()=> {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log({authToken})
        if(authToken){
          navigate('revolution')
        }
        if(!authToken){
          navigate('login')
        }
    }, [])
    return (
        <div className='revolution'>
            <h1>Revolutionizing Link Optimization</h1>
            <div className='w-[12.5rem]'>
                <Button title='Get Started' otherClass='bg-primary'/>
            </div>
        </div>
    )
}

export default Revolution
