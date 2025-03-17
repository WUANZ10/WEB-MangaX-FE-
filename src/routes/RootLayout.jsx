import React from 'react'
import HeaderComponent from '../components/HeaderComponent/HeaderComponent'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
        <HeaderComponent/>
        <Outlet/>
    </div>
  )
}
