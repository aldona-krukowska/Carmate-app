export interface CarType {
  id: string
  brand: string
  model: string
  VIN: string
  registrationDate: string
  licensePlate: string
  fuelType: string
  year: number
  userID: string
}

export const getCars = (querySnapshot: any): [CarType] => {
  return querySnapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
