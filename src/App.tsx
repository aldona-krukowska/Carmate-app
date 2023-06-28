import React from 'react'
import { AuthProvider } from './providers/AuthProvider/AuthProvider'
import { CarsCollectionProvider } from './providers/CarsCollectionProvider/CarsCollectionProvider'
import { AppRouter } from './routing/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <AuthProvider>
        <CarsCollectionProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </CarsCollectionProvider>
      </AuthProvider>
    </div>
  )
}

export default App
