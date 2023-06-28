import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../api/firebase'
import { ReviewType } from './ReviewForm.types'
import React, { useState, useRef, useEffect } from 'react'
import { clearForm } from '../../utils/clearForm'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Logo } from '../Logo/Logo'
import { Typography } from '../Typography/Typography'
import { Container } from '../Container/Container'
import { StyledInput } from '../Input/Input'
import { StyledButton } from '../Button/Button'
import { Loader } from '../Loader/Loader'
import { Select } from '../Select/Select'
import { StyledLink } from '../../routes/Dashboard/ServiceHistoryPage/ServiceHistoryPage.styles'
import { isDateValid } from '../../utils/isDateValid'
import { useNavigate } from 'react-router-dom'
import { useCarsCollection } from '../../contexts/CarsCollectionContext/CarsCollectionContext'

export const ReviewForm = () => {
  const [reviewTitleError, setReviewTitleError] = useState<string>('')
  const [dateError, setDateError] = useState<string>('')
  const [mileageError, setMileageError] = useState<string>('')
  const [descriptionError, setDescriptionError] = useState<string>('')
  const navigate = useNavigate()
  const { selectedCar } = useCarsCollection()

  // const [serviceIdToDelete, setServiceIdToDelete] = useState<string>('')

  const [selectedOption, setSelectedOption] = useState<string>('')
  const options = [
    { value: 'techniczny', label: 'techniczny' },
    { value: 'serwisowy', label: 'serwisowy' },
  ]
  const [servicing, setServicing] = useState<ReviewType[]>([])
  const formRef = useRef<HTMLFormElement | null>(null)

  // const [draftId, setDraftId] = useState<string | null>(null)

  const servicingCollection = collection(db, 'servicing')

  const getServicing = (querySnapshot: any): [ReviewType] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const { date, description, mileage, reviewTitle, category } = form

    const service = {
      category: category.value,
      date: date.value,
      description: description.value,
      mileage: mileage.value,
      reviewTitle: reviewTitle.value,
      carID: selectedCar?.id,
    }

    return service
  }

  const handleClear = (formRef_: typeof formRef) => {
    if (formRef_.current === null) {
      return
    }

    clearForm(formRef_.current)
    setReviewTitleError('')
    setDateError('')
    setMileageError('')
    setDescriptionError('')
  }

  const handleSubmit = (event: React.FormEvent) => {
    const formData = getFormData(event)
    if (!formData.reviewTitle) {
      setReviewTitleError('To pole nie może być puste, wpisz tytuł przeglądu.')
      return
    }

    if (!formData.date) {
      setDateError('To pole nie może być puste, wpisz datę w formacie RRRR-MM-DD')
      return
    } else if (!isDateValid(formData.date)) {
      setDateError('Wpisana wartość nie jest datą, podaj datę w formacie RRRR-MM-DD')
      return
    }

    if (!formData.mileage) {
      setMileageError('To pole nie może być puste, uzupełnij przebieg.')
      return
    }

    if (!formData.description) {
      setDescriptionError('To pole nie może być puste, uzupełnij opis przeglądu.')
      return
    }

    addDoc(servicingCollection, getFormData(event))
    clearForm(event.target as HTMLFormElement)
    setReviewTitleError('')
    setDateError('')
    setMileageError('')
    setDescriptionError('')
    navigate('/service-history')
  }

  // const handleDelete = (serviceId: string) => {
  //   const docRef = doc(db, 'servicing', serviceId)
  //   deleteDoc(docRef)
  // }

  // const handleUpdate = (event: React.FormEvent, serviceId: string) => {
  //   const formData = getFormData(event)
  //   if (!formData.reviewTitle) {
  //     setReviewTitleError('To pole nie może być puste, wpisz tytuł przeglądu.')
  //     return
  //   }

  //   if (!formData.date) {
  //     setDateError('To pole nie może być puste, wpisz datę w formacie RRRR-MM-DD')
  //     return
  //   } else if (!isDateValid(formData.date)) {
  //     setDateError('Wpisana wartość nie jest datą, podaj datę w formacie RRRR-MM-DD')
  //     return
  //   }

  //   if (!formData.mileage) {
  //     setMileageError('To pole nie może być puste, uzupełnij przebieg.')
  //     return
  //   }

  //   if (!formData.description) {
  //     setDescriptionError('To pole nie może być puste, uzupełnij opis przeglądu.')
  //     return
  //   }

  //   const docRef = doc(db, 'servicing', serviceId)
  //   updateDoc(docRef, getFormData(event))
  //     .then(() => {
  //       setDraftId(null)
  //     })
  //     .then(() => {
  //       setReviewTitleError('')
  //       setDateError('')
  //       setMileageError('')
  //       setDescriptionError('')
  //     })
  // }

  useEffect(() => {
    onSnapshot(servicingCollection, (querySnapshot: any) => {
      const servicing = getServicing(querySnapshot)
      setServicing(servicing)
    })
  }, [])

  if (servicing === null) {
    return <Loader />
  }

  return (
    <StyledBoxWrapper
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding='5.1rem'
    >
      <StyledBoxWrapper
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        padding='5.1rem'
      >
        <StyledBoxWrapper flexDirection='column' justifyContent='center' alignItems='center'>
          <StyledBoxWrapper margin='5.1rem 0rem 2.4rem'>
            <Logo />
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
                <Typography variant='Title'>Formularz dodawania przeglądu</Typography>
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
                  przeglądów Twojego auta
                </Typography>
              </StyledBoxWrapper>
            </StyledBoxWrapper>

            <StyledBoxWrapper flexDirection='column'>
              <form ref={formRef} onSubmit={handleSubmit}>
                <StyledBoxWrapper flexDirection='column' margin='3.3rem 0rem'>
                  <Select
                    defaultValue=''
                    name='category'
                    id='fcategory'
                    label='Rodzaj przeglądu'
                    value={selectedOption}
                    options={options}
                    onChange={(value: string) => setSelectedOption(value)}
                  />
                </StyledBoxWrapper>
                <StyledBoxWrapper flexDirection='column' margin='3.3rem 0rem'>
                  <StyledInput
                    type='text'
                    name='reviewTitle'
                    id='reviewTitle'
                    inputLabel='Tytuł'
                    inputError={reviewTitleError}
                  />
                </StyledBoxWrapper>

                <StyledBoxWrapper flexDirection='row' gap='1.6rem'>
                  <StyledInput
                    type='text'
                    name='date'
                    id='date'
                    inputLabel='Data'
                    inputError={dateError}
                  />
                  <StyledInput
                    type='text'
                    name='mileage'
                    id='mileage'
                    inputLabel='Przebieg'
                    inputError={mileageError}
                  />
                </StyledBoxWrapper>

                <StyledBoxWrapper flexDirection='row' margin='3.3rem 0rem'>
                  <StyledInput
                    type='text'
                    name='description'
                    id='description'
                    inputLabel='Opis'
                    variant='basic'
                    inputError={descriptionError}
                  />
                </StyledBoxWrapper>

                <StyledBoxWrapper
                  flexDirection='row'
                  justifyContent='space-between'
                  margin='4rem 0rem 0rem'
                >
                  <StyledBoxWrapper flexDirection='column' justifyContent='flex-start'>
                    <StyledLink to='/service-history'>
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
      </StyledBoxWrapper>

      {/* <div>
        <h2>tymczasowa lista przeglądów serwisowych w bazie</h2>
        <ul style={{ listStyle: 'none' }}>
          {servicing.map((service) => (
            <li key={service.id} data-id={service.id}>
              {draftId !== service.id ? (
                <>
                  <p>Rodzaj przeglądu: {service.category}</p>
                  <p>Tytuł: {service.reviewTitle}</p>
                  <p>Data: {service.date}</p>
                  <p>Przebieg: {service.mileage}</p>
                  <p>Opis: {service.description}</p>

                  <StyledBoxWrapper
                    flexDirection='row'
                    gap='1.6rem'
                    justifyContent='flex-start'
                    padding='3.2rem'
                  >
                    <StyledButton
                      buttonLabel='Usuń przegląd serwisowy'
                      variant={'tertiary'}
                      disabled={false}
                      icon={null}
                      onClick={() => {
                        setServiceIdToDelete(service.id)
                        handleDelete(service.id)
                      }}
                    />

                    <StyledButton
                      buttonLabel='Aktualizuj dane przeglądu'
                      variant={'ghost'}
                      onClick={() => setDraftId(service.id)}
                      icon={null}
                    />
                  </StyledBoxWrapper>
                </>
              ) : (
                <form onSubmit={(event) => handleUpdate(event, service.id)}>
                  <StyledBoxWrapper flexDirection='column' margin='3.3rem 0rem'>
                    <Select
                      name='category'
                      id='category'
                      label='Rodzaj przeglądu'
                      value={selectedOption}
                      options={options}
                      defaultValue={service.category}
                      onChange={(value: string) => setSelectedOption(value)}
                    />
                  </StyledBoxWrapper>
                  <StyledBoxWrapper flexDirection='row' gap='1.6rem'>
                    <StyledInput
                      type='text'
                      name='reviewTitle'
                      id='reviewTitle'
                      inputLabel='Tytuł'
                      defaultValue={service.reviewTitle}
                      inputError={reviewTitleError}
                    />

                    <StyledInput
                      type='text'
                      name='date'
                      id='date'
                      inputLabel='Data'
                      defaultValue={service.date}
                      inputError={dateError}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='column' margin='3.3rem 0rem'>
                    <StyledInput
                      type='text'
                      name='mileage'
                      id='mileage'
                      inputLabel='Przebieg'
                      defaultValue={service.mileage}
                      inputError={mileageError}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' margin='3.3rem 0rem'>
                    <StyledInput
                      type='text'
                      name='description'
                      id='description'
                      inputLabel='Opis'
                      variant='basic'
                      defaultValue={service.description}
                      inputError={descriptionError}
                    />
                  </StyledBoxWrapper>

                  <StyledBoxWrapper flexDirection='row' gap='1.6rem' justifyContent='flex-end'>
                    <StyledButton
                      buttonLabel='Zatwierdź'
                      variant={'primary'}
                      disabled={false}
                      icon={null}
                      type='submit'
                    />

                    <StyledButton
                      buttonLabel='Anuluj edycję'
                      variant={'tertiary'}
                      icon={null}
                      onClick={() => setDraftId(null)}
                      type='button'
                    />
                  </StyledBoxWrapper>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div> */}
    </StyledBoxWrapper>
  )
}
