import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { CarType } from './CarForm.types'
import React, { useEffect, useState, useRef } from 'react'
import { db } from '../../api/firebase'
import { StyledButton } from '../Button/Button'
import { clearForm } from '../../utils/clearForm'
import { StyledInput } from '../Input/Input'
import { Logo } from '../Logo/Logo'
import { Container } from '../Container/Container'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Typography } from '../Typography/Typography'
import { Loader } from '../Loader/Loader'
import { Select } from '../Select/Select'
import { Footer } from '../Footer/Footer'
import { isDateValid } from '../../utils/isDateValid'
import { onlyNumbers } from '../../utils/onlyNumbers'
import { checkNumberFourDigit } from '../../utils/checkNumberFourDigit'
import { checkYearCar } from '../../utils/checkYearCar'
import { StyledLink } from '../CarReviews/CarRewievs.styles'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext/AuthContext'

export const CarForm = () => {
  const { user } = useAuth()
  const [brandError, setBrandError] = useState<string>('')
  const [registrationDateError, setRegistrationDateError] = useState<string>('')
  const [licencePlateError, setLicencePlateError] = useState<string>('')
  const [yearError, setYearError] = useState<string>('')

  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState<string>('')
  const options = [
    { value: 'benzyna', label: 'Benzyna' },
    { value: 'diesel', label: 'Diesel' },
    { value: 'hybryda', label: 'Hybryda' },
  ]

  const [cars, setCars] = useState<CarType[]>([])
  const formRef = useRef<HTMLFormElement | null>(null)
  const carsCollection = collection(db, 'cars')

  const getCars = (querySnapshot: any): [CarType] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const { brand, model, VIN, registrationDate, licensePlate, fuelType, year } = form

    const car = {
      brand: brand.value,
      model: model.value,
      VIN: VIN.value,
      registrationDate: registrationDate.value,
      licensePlate: licensePlate.value,
      fuelType: fuelType.value,
      year: year.value,
      userID: user?.uid,
    }

    return car
  }
  const handleClear = (formRef_: typeof formRef) => {
    if (formRef_.current === null) {
      return
    }
    setBrandError('')
    setLicencePlateError('')
    setRegistrationDateError('')
    setYearError('')
    clearForm(formRef_.current)
  }

  const handleSubmit = (event: React.FormEvent) => {
    const formData = getFormData(event)

    if (!formData.brand) {
      setBrandError('To pole nie może być puste.')
      return
    }

    if (!formData.registrationDate) {
      setRegistrationDateError('To pole nie może być puste.')
      return
    } else if (!isDateValid(formData.registrationDate)) {
      setRegistrationDateError('Wpisana wartość nie jest datą, podaj datę w formacie RRRR-MM-DD')
      return
    }

    if (!formData.licensePlate) {
      setLicencePlateError('To pole nie może być puste.')
      return
    }

    if (!formData.year) {
      setYearError('To pole nie może być puste, podaj rok produkcji samochodu')
      return
    } else if (!onlyNumbers(formData.year)) {
      setYearError('To pole może zawierać tylko liczby')
      return
    } else if (!checkNumberFourDigit(formData.year)) {
      setYearError(
        'To pole może zawierać tylko 4-cyfrowe liczby, będące rokiem produkcji Twojego samochodu',
      )
      return
    } else if (!checkYearCar(formData.year)) {
      setYearError(
        'Podano datę przed 1886 rokiem, będącym rokiem wynalezienia pierwszego samochodu:) Popraw dane.',
      )
      return
    }
    addDoc(carsCollection, getFormData(event))
    clearForm(event.target as HTMLFormElement)
    setBrandError('')
    setLicencePlateError('')
    setRegistrationDateError('')
    setYearError('')
    navigate('/user-page')
  }

  // const handleDelete = (carId: string) => {
  //   const docRef = doc(db, 'cars', carId)
  //   deleteDoc(docRef)
  // }

  useEffect(() => {
    onSnapshot(carsCollection, (querySnapshot: any) => {
      const cars = getCars(querySnapshot)
      setCars(cars)
    })
  }, [])

  if (cars === null) {
    return <Loader />
  }

  return (
    <StyledBoxWrapper
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding='5.1rem'
    >
      <StyledBoxWrapper flexDirection='column' justifyContent='center' alignItems='center'>
        <StyledBoxWrapper margin='5.1rem 0rem 2.4rem'>
          <Logo></Logo>
        </StyledBoxWrapper>

        <StyledBoxWrapper
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          margin='0rem 0rem 4.8rem'
          maxWidth='57.6rem'
        >
          <Typography variant='Paragraph' textAlign='center'>
            Drogi Kierowco, cieszymy się, że dołączasz do grona osób, które już zawsze będą miały
            swoje auto pod ręką.
          </Typography>
        </StyledBoxWrapper>
      </StyledBoxWrapper>

      <Container cRadius>
        <StyledBoxWrapper
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          padding='3.2rem'
        >
          <StyledBoxWrapper
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            padding='1.6rem'
          >
            <StyledBoxWrapper flexDirection='column' justifyContent='center' alignItems='center'>
              <Typography variant='Title'>Dane podstawowe auta</Typography>
            </StyledBoxWrapper>

            <StyledBoxWrapper
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              margin='1.6rem 0rem 3.2rem'
              maxWidth='57.6rem'
            >
              <Typography variant='Paragraph' textAlign='center'>
                Aby w pełni wykorzystać potencjał aplikacji uzupełnij podstawowe dane dotyczące
                Twoje auta. Niezbędne jest do tego posiadanie przy sobie dowodu rejestracyjnego
                pojazdu.
              </Typography>
            </StyledBoxWrapper>
          </StyledBoxWrapper>

          <StyledBoxWrapper flexDirection='column'>
            <form ref={formRef} onSubmit={handleSubmit}>
              <StyledBoxWrapper flexDirection='row' gap='1.6rem'>
                <StyledInput
                  type='text'
                  name='brand'
                  id='brand'
                  inputLabel='Marka pojazdu'
                  inputError={brandError}
                />

                <StyledInput
                  type='text'
                  name='model'
                  id='model'
                  inputLabel='Model pojazdu'
                  variant='basic'
                  helpText='To jest pole opcjonalne'
                />
              </StyledBoxWrapper>

              <StyledBoxWrapper flexDirection='row' margin='3.7rem 0rem'>
                <StyledInput
                  type='text'
                  name='VIN'
                  id='VIN'
                  inputLabel='Numer VIN'
                  variant='basic'
                  helpText='To jest pole opcjonalne'
                />
              </StyledBoxWrapper>

              <StyledBoxWrapper flexDirection='row' gap='1.6rem' margin='3.7rem 0rem'>
                <StyledInput
                  type='text'
                  name='registrationDate'
                  id='registrationDate'
                  inputLabel='Data pierwszej rejestracji pojazdu'
                  inputError={registrationDateError}
                  variant='basic'
                />
                <StyledInput
                  type='text'
                  name='licensePlate'
                  id='licensePlate'
                  inputLabel='Numer rejestracyjny'
                  inputError={licencePlateError}
                />
              </StyledBoxWrapper>

              <StyledBoxWrapper flexDirection='row' gap='1.6rem' margin='3.7rem 0rem'>
                <Select
                  defaultValue=''
                  name='fuelType'
                  id='fuelType'
                  label='Typ paliwa'
                  value={selectedOption}
                  options={options}
                  onChange={(value: string) => setSelectedOption(value)}
                />
                <StyledInput
                  type='text'
                  name='year'
                  id='year'
                  inputLabel='Rok produkcji pojazdu'
                  inputError={yearError}
                />
              </StyledBoxWrapper>

              <StyledBoxWrapper
                flexDirection='row'
                justifyContent='space-between'
                margin='4rem 0rem 0rem'
              >
                <StyledBoxWrapper flexDirection='column' justifyContent='flex-start'>
                  <StyledLink to='/user-page'>
                    <StyledButton
                      buttonLabel='WRÓĆ'
                      variant={'ghost'}
                      disabled={false}
                      icon={null}
                      type='button'
                    />
                  </StyledLink>
                </StyledBoxWrapper>

                <StyledBoxWrapper flexDirection='row' gap='1.6rem' justifyContent='flex-end'>
                  <StyledButton
                    buttonLabel='WYCZYŚĆ DANE'
                    variant={'tertiary'}
                    icon={null}
                    onClick={() => handleClear(formRef)}
                    type='button'
                  />
                  <StyledButton
                    buttonLabel='ZAPISZ DANE'
                    variant={'primary'}
                    icon={null}
                    type='submit'
                  />
                </StyledBoxWrapper>
              </StyledBoxWrapper>
            </form>
          </StyledBoxWrapper>
        </StyledBoxWrapper>
      </Container>
      <Footer />
    </StyledBoxWrapper>
  )
}
export default CarForm
