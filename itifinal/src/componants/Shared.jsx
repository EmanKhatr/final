import React from 'react'
import { Outlet } from 'react-router-dom'
import { Mynav } from './Mynav'
import { Footer } from './Footer'

export  function Shared() {
  return (
    <>
    <Mynav></Mynav>

    <Outlet>

    </Outlet>

    <Footer></Footer>
    </>
  )
}
