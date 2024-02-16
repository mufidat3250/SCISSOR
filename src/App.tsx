import { Route, Routes } from 'react-router-dom'
import './App.scss'
import NavBar from './Components/molecules/Navbar'
import Url from './Components/molecules/Url'
import FAQS from './Components/organisms/FAQS/Index'
import Footer from './Components/organisms/Footer'
import Hero from './Components/organisms/Hero'
import Possibbilities from './Components/organisms/Possibilities'
import Pricing from './Components/organisms/Pricing'
import Revolution from './Components/organisms/Revolution'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import GetInTouch from './Pages/GetInTouch'
import Home from './Pages/Home'

function App() {

  return (
  <div className='overflow-hidden h-screen'>
    <div className='shadow-lg'>
    <NavBar/>
    </div>
    <div className='overflow-auto h-screen'>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/SignUp' element={<GetInTouch/>}/>

      </Routes>
    </div>
    </div>
  
  )
}

export default App
