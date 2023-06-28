import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import React, { useState, useEffect, useRef, ChangeEvent } from 'react'
import { db, storage } from '../../api/firebase'
import { StyledButton } from '../Button/Button'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { Container } from '../Container/Container'
import {
  CarImage,
  ModalBackdrop,
  ModalContent,
  ModalWrapper,
  ButtonText,
  UploadDiv,
  StyledForm,
  InputWrapper,
  ImageInput,
} from './EditCarModal.styles'
import { EditCarModalProps } from './EditCarModal.types'
import { Typography } from '../Typography/Typography'
import { StyledInput } from '../Input/Input'
import { MdDeleteOutline, MdArrowBack } from 'react-icons/md'
import { StyledIconButton } from '../IconButton/IconButton'
import { Select } from '../Select/Select'
import { IconWrapper } from '../IconWrapper/IconWrapper.styles'
import { useCarsCollection } from '../../contexts/CarsCollectionContext/CarsCollectionContext'
import { isDateValid } from '../../utils/isDateValid'
import { onlyNumbers } from '../../utils/onlyNumbers'
import { checkNumberFourDigit } from '../../utils/checkNumberFourDigit'
import { checkYearCar } from '../../utils/checkYearCar'
import { clearForm } from '../../utils/clearForm'

export const EditCarModal: React.FC<EditCarModalProps> = ({
  showEditCarModal,
  setShowEditCarModal,
}) => {
  const [brandError, setBrandError] = useState<string>('')
  const [registrationDateError, setRegistrationDateError] = useState<string>('')
  const [licencePlateError, setLicencePlateError] = useState<string>('')
  const [yearError, setYearError] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('')
  const options = [
    { value: 'benzyna', label: 'Benzyna' },
    { value: 'diesel', label: 'Diesel' },
    { value: 'hybryda', label: 'Hybryda' },
  ]
  const { selectedCar } = useCarsCollection()

  const [file, setFile] = useState<File | null>(null)
  const [url, setURL] = useState<string>(selectedCar?.imgURL || '')

  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (file !== null && url !== '') {
      const promise = getDownloadURL(ref(storage, `carPhotos/${file.name}`))
      promise
        .then((downloadURL) => {
          setFile(file)
          setURL(downloadURL)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [url])

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const {
      brand,
      model,
      VIN,
      registrationDate,
      licensePlate,
      fuelType,
      year,
      enginePower,
      engineCapacity,
      oilType,
      lastOilChange,
    } = form

    const car = {
      brand: brand.value,
      model: model.value,
      VIN: VIN.value,
      registrationDate: registrationDate.value,
      licensePlate: licensePlate.value,
      fuelType: fuelType.value,
      year: year.value,
      imgURL: url,
      enginePower: enginePower.value,
      engineCapacity: engineCapacity.value,
      oilType: oilType.value,
      lastOilChange: lastOilChange.value,
    }

    return car
  }

  const handleUpdate = (event: React.FormEvent, docId: string) => {
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

    const docRef = doc(db, 'cars', docId)

    // if (selectedCar?.imgURL) {
    //   setURL(selectedCar?.imgURL)
    //   return
    // } else
    if (file) {
      const path = `carPhotos/${file.name}`
      const storageRef = ref(storage, path)

      uploadBytes(storageRef, file).then(() => {
        console.log('Załadowano zdjęcie do storage!')
        getDownloadURL(storageRef)
          .then((downloadURL) => {
            setURL(downloadURL)
            setFile(null)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      handleCloseModal()
    }

    updateDoc(docRef, getFormData(event)).then(() => {
      setShowEditCarModal(!showEditCarModal)
      clearForm(event.target as HTMLFormElement)
      setBrandError('')
      setLicencePlateError('')
      setRegistrationDateError('')
      setYearError('')
    })
  }

  const handleCloseModal = () => {
    setShowEditCarModal((prev) => !prev)
  }

  const handleDeleteImage = () => {
    setFile(null)
    setURL('')
  }

  const handleDeleteCar = (carId: string) => {
    const docRef = doc(db, 'cars', carId)
    deleteDoc(docRef)
    setShowEditCarModal(!showEditCarModal)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setURL(URL.createObjectURL(e.target.files[0]))
    }
  }

  const discardChanges = () => {
    setShowEditCarModal(!showEditCarModal)
  }

  return (
    <>
      {showEditCarModal && selectedCar && (
        <ModalWrapper showEditCarModal={showEditCarModal}>
          <ModalBackdrop />
          <ModalContent>
            <Container cRadius key={selectedCar?.id} data-id={selectedCar?.id}>
              <StyledBoxWrapper flexDirection='column' padding='3.2rem' alignItems='center'>
                <Typography variant='Title'>Edytuj dane pojazdu</Typography>
                <StyledForm ref={formRef} onSubmit={(event) => handleUpdate(event, selectedCar.id)}>
                  <StyledBoxWrapper flexDirection='row' gap='1.6rem'>
                    <StyledInput
                      type='text'
                      name='brand'
                      id='brand'
                      inputLabel='Marka pojazdu'
                      defaultValue={selectedCar.brand}
                      inputError={brandError}
                    />
                    <StyledInput
                      type='text'
                      name='model'
                      id='model'
                      inputLabel='Model pojazdu'
                      defaultValue={selectedCar.model}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' margin='3.3rem 0'>
                    <StyledInput
                      type='text'
                      name='VIN'
                      id='VIN'
                      inputLabel='Numer VIN'
                      variant='basic'
                      helpText='To jest pole opcjonalne'
                      defaultValue={selectedCar?.VIN}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' gap='1.6rem' margin='3.3rem 0'>
                    <StyledInput
                      type='text'
                      name='registrationDate'
                      id='registrationDate'
                      inputLabel='Data pierwszej rejestracji pojazdu'
                      defaultValue={selectedCar.registrationDate}
                      inputError={registrationDateError}
                    />
                    <StyledInput
                      type='text'
                      name='licensePlate'
                      id='licensePlate'
                      inputLabel='Numer rejestracyjny'
                      defaultValue={selectedCar.licensePlate}
                      inputError={licencePlateError}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' gap='1.6rem' margin='3.3rem 0 0 0'>
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
                      defaultValue={selectedCar.year}
                      inputError={yearError}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' gap='1.6rem' margin='3.3rem 0rem'>
                    <StyledInput
                      type='text'
                      name='enginePower'
                      id='enginePower'
                      inputLabel='Moc silnika'
                      defaultValue={selectedCar?.enginePower}
                    />

                    <StyledInput
                      type='text'
                      name='engineCapacity'
                      id='engineCapacity'
                      inputLabel='Pojemność silnika'
                      defaultValue={selectedCar?.engineCapacity}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' gap='1.6rem' margin='3.3rem 0rem 0rem 0rem'>
                    <StyledInput
                      type='text'
                      name='oilType'
                      id='oilType'
                      inputLabel='Rodzaj oleju'
                      defaultValue={selectedCar?.oilType}
                    />

                    <StyledInput
                      type='text'
                      name='lastOilChange'
                      id='lastOilChange'
                      inputLabel='Data ostatniej wymiany oleju'
                      defaultValue={selectedCar?.lastOilChange}
                    />
                  </StyledBoxWrapper>

                  <div>
                    {file && selectedCar.imgURL !== null ? (
                      <UploadDiv>
                        <StyledBoxWrapper alignItems='center' gap='1.6rem'>
                          <CarImage
                            key={Date.now()}
                            id='carImg'
                            src={
                              selectedCar.imgURL ? selectedCar.imgURL : URL.createObjectURL(file)
                            }
                            alt='Zdjęcie samochodu'
                          />
                          <Typography variant='Caption'>Zdjęcie zostało załadowane.</Typography>
                        </StyledBoxWrapper>

                        <StyledIconButton
                          variant='error'
                          radius
                          icon={MdDeleteOutline}
                          onClick={handleDeleteImage}
                        />
                      </UploadDiv>
                    ) : (
                      <InputWrapper>
                        <ImageInput type='file' onChange={handleChange} />
                        <ButtonText>Dodaj zdjęcie pojazdu</ButtonText>
                      </InputWrapper>
                    )}
                  </div>

                  <StyledBoxWrapper flexDirection='row' justifyContent='space-between'>
                    <StyledBoxWrapper flexDirection='row' padding='0' alignItems='center'>
                      <IconWrapper>
                        <StyledIconButton icon={MdArrowBack} />
                      </IconWrapper>
                      <StyledButton
                        buttonLabel='Wróć do pulpitu'
                        variant={'text'}
                        disabled={false}
                        icon={null}
                        onClick={handleCloseModal}
                        type='button'
                      />
                    </StyledBoxWrapper>
                    <StyledBoxWrapper gap='1.6rem'>
                      <StyledButton
                        buttonLabel='Usuń pojazd'
                        variant={'ghost'}
                        icon={null}
                        onClick={() => handleDeleteCar(selectedCar.id)}
                        type='button'
                      />
                      <StyledButton
                        buttonLabel='Anuluj edycję'
                        variant={'tertiary'}
                        icon={null}
                        onClick={discardChanges}
                        type='button'
                      />

                      <StyledButton
                        buttonLabel='Zapisz dane'
                        variant={'primary'}
                        disabled={false}
                        icon={null}
                        type='submit'
                      />
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                </StyledForm>
              </StyledBoxWrapper>
            </Container>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}
