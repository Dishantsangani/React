import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='main-wrapper'>
           <header>
            <NavBar brand="Mystore"/>
           </header>
           <div className='main'>
<Outlet/>
           </div>
           <footer>
            <h1>I am footer</h1>
            <NavBar/>
           </footer>
    </div>
  )
}
