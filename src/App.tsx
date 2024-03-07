import { Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import './App.scss'
import NavBar from './Components/molecules/Navbar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import GetInTouch from './Pages/GetInTouch'
import Home from './Pages/Home'
import FAQS from './Components/organisms/FAQS/Index'
import Footer from './Components/organisms/Footer'
import Url from './Components/molecules/Url'
import Possibbilities from './Components/organisms/Possibilities'
import Revolution from './Components/organisms/Revolution'
import Pricing from './Components/organisms/Pricing'
import { useEffect } from 'react'
import Notfound from './Pages/Notfound'
import { ToastProvider } from 'react-toast-notifications'
import { Toaster } from 'react-hot-toast'

function App() {
  const navigate = useNavigate()
  
  useEffect(()=> {
    let authToken = sessionStorage.getItem('Auth Token')
    if(authToken){
      navigate('/')
    }
  },[])

  

  return (
  <ToastProvider>
    <div className='overflow-hidden h-screen'>
    <div className='shadow-lg'>
    <NavBar/>
    </div>
    <div className='overflow-auto h-screen'>
      <Routes>
        <Route index path='/SignUp' element={<SignUp/>}/>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/get-in-touch' element={<GetInTouch/>}/>
        <Route path='/faqs' element={<FAQS/>}/>
        <Route path='url' element={<Url/>}/>
        <Route path='features' element={<Possibbilities/>}/>
        <Route path='/revolution' element={<Revolution/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='/404' element={<Notfound/>}/>
        <Route path='*' element={<Navigate replace to='/404'/>}/>
      </Routes>
      <Footer/>

    </div>
    <Toaster toastOptions={{
      position:'top-right'
    }}/>
    </div>
      </ToastProvider>
  
  )
}

export default App
