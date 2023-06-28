import { UserPage } from '../routes/Dashboard/UserPage/UserPage'
import { ServiceHistoryPage } from '../routes/Dashboard/ServiceHistoryPage/ServiceHistoryPage'
import { ServiceListPage } from '../routes/Dashboard/ServiceListPage/ServiceListPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import CarForm from '../components/CarForm/CarForm'
import { Login } from '../routes/Auth/Login/Login'
import { Register } from '../routes/Auth/Register/Register'
import { ForgotPassword } from '../routes/Auth/ForgotPassword/ForgotPassword'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { Auth } from '../routes/Auth/Auth'
import { Home } from '../routes/Dashboard/Home'
import { useAuth } from '../contexts/AuthContext/AuthContext'
import { Loader } from '../components/Loader/Loader'
import { ReviewForm } from '../components/ReviewForm/ReviewForm'
import { HomePage } from '../routes/Dashboard/HomePage/HomePage'

export const AppRouter: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const { setUser } = useAuth()

  const auth = getAuth()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true)
        setUser(user)
      } else {
        setIsAuth(false)
        setUser(null)
      }
    })
  }, [])

  if (isAuth === null) {
    return <Loader />
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={!isAuth ? <Navigate to='/' /> : <Home />}>
          <Route path='/user-page' element={<UserPage />} />
          <Route path='/home' element={<HomePage />} />

          <Route path='/service-history' element={<ServiceHistoryPage />} />
          <Route path='/service-list' element={<ServiceListPage />} />
        </Route>
        <Route path='auth' element={isAuth ? <Navigate to='/user-page' /> : <Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Route>
        <Route path='/add-car' element={<CarForm />} />
        <Route path='/add-service' element={<ReviewForm />} />
      </Routes>
    </>
  )
}
