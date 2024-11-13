import React from 'react'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  
  return (
   <div className='flex  min-h-screen w-full bg-slate-900'>
    <Sidebar/>


    <div className='flex flex-1 flex-col'>
        <Header/>

        <div className='flex-1 flex  bg-muted/40  md:p-6'>
        <Outlet/>

        </div>
    </div>
   </div>
  )
}

export default Admin 