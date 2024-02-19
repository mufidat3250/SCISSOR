import { Route, Routes, useParams } from 'react-router-dom'
import './App.scss'
import NavBar from './Components/molecules/Navbar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import GetInTouch from './Pages/GetInTouch'
import Home from './Pages/Home'

function App() {
  const params = useParams()
  console.log(params)
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
        <Route path='/get-in-touch' element={<GetInTouch/>}/>
      </Routes>
    </div>
    </div>
  
  )
}

export default App
