import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin'

export default function AdminLayout() {
  return (
    <>
    <NavbarAdmin/>
    <Outlet/>
    </>
  )
}
