import './App.scss'
import Url from './Components/molecules/Url'
import FAQS from './Components/organisms/FAQS/Index'
import Footer from './Components/organisms/Footer'
import Hero from './Components/organisms/Hero'
import Possibbilities from './Components/organisms/Possibilities'
import Pricing from './Components/organisms/Pricing'
import Revolution from './Components/organisms/Revolution'

function App() {

  return (
    <div className=' bg-gradient-to-tr from-[#ffffff] via-[hsl(120,61%,94%)] to-[#d8cfa5] h-screen'>
    <Hero/>
    <Possibbilities/>
    <Pricing/>
    <Url/>
    <FAQS/>
    <Revolution/>
    <Footer/>
    </div>
  )
}

export default App
