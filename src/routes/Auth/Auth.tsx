import { Outlet } from 'react-router'
import { Footer } from '../../components/Footer/Footer'
import React from 'react'

export const Auth = () => (
  <>
    <Outlet />
    <Footer />
  </>
)
