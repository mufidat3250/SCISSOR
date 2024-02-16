import React, { ReactNode } from 'react'
import NavBar from '../Components/molecules/Navbar'
import Footer from '../Components/organisms/Footer'

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <div className='layout'>
            <NavBar/>
            <div className='children'>{children}</div>
        </div>
    )
}

export default Layout