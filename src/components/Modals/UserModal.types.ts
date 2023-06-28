export interface UserModalProps {
  showUserModal: boolean
  setShowUserModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface UserType {
  id: string
  email: string
  userName: string
  mail: string
  licenceDate: string
  licenceExpiration: string
  categories: string
  penaltyPoints: number
}

export interface CarType {
  id: string
  VIN: string
  brand: string
  fuelType: string
  licensePlate: string
  model: string
  registrationDate: string
  userID: string
  year: number
}

export interface ServiceType {
  id: string
  carID: string
  category: string
  date: string
  reviewTitle: string
  mileage: number
  description: string
}
