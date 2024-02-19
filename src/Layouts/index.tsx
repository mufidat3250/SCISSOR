import{ ReactNode } from 'react'
import NavBar from '../Components/molecules/Navbar'

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className='layout'>
            <NavBar/>
            <div className='children'>{children}</div>
        </div>
    )
}

export default Layout