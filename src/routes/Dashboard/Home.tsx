import styled from 'styled-components'
import { Navigation } from '../../components/NavigationBar/Navigation'
import { TopBar } from '../../components/TopBar/TopBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { useAuth } from '../../contexts/AuthContext/AuthContext'
import { useCarsCollection } from '../../contexts/CarsCollectionContext/CarsCollectionContext'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { CarType } from '../../components/CarForm/CarForm.types'
import { useEffect } from 'react'

const StyledMainWrapper = styled.main`
  margin: 0 4.8rem 0 33.9rem;
`

export const Home = () => {
  const { user } = useAuth()
  const { setCars, setSelectedCar } = useCarsCollection()

  const userIDString = user?.uid.toString()
  const carsRef = collection(db, 'cars')
  const qCars = query(carsRef, where('userID', '==', userIDString))

  const getCars = (querySnapshot: any): CarType[] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  useEffect(() => {
    onSnapshot(qCars, (querySnapshot: any) => {
      const cars = getCars(querySnapshot)
      setCars(cars)

      if (window !== undefined) {
        const carIndex = localStorage.getItem('carIndex')
        carIndex !== null ? setSelectedCar(cars[JSON.parse(carIndex)]) : setSelectedCar(cars[0])
      }
    })
  }, [])

  return (
    <>
      <Navigation />
      <StyledMainWrapper>
        <TopBar />
        <Outlet />
      </StyledMainWrapper>
      <Footer />
    </>
  )
}
