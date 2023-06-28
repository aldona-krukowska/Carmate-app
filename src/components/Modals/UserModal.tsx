import { Typography } from '../Typography/Typography'
import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Container } from '../Container/Container'
import { StyledButton } from '../Button/Button'
import React, { useEffect, useRef, useState } from 'react'
import { StyledInput } from '../Input/Input'

import { db } from '../../api/firebase'
import { collection, doc, onSnapshot, query, updateDoc, where } from 'firebase/firestore'

import { useAuth } from '../../contexts/AuthContext/AuthContext'
import { UserModalProps, UserType } from './UserModal.types'
import { CloseModalButton, ModalWrapper, StyledForm } from './UserModal.styles'
import { Select } from '../Select/Select'
import { onlyNumbers } from '../../utils/onlyNumbers'
import { isDateValid } from '../../utils/isDateValid'
import { checkProperNumbers } from '../../utils/checkProperNumbers'

export const UserModal: React.FC<UserModalProps> = ({ showUserModal, setShowUserModal }) => {
  const [licenceDateError, setLicenceDateError] = useState<string>('')
  const [licenceExpirationError, setLicenceExpirationError] = useState<string>('')
  const [penaltyPointsError, setPenaltyPointsError] = useState<string>('')

  const [selectedOption, setSelectedOption] = useState<string>('')

  const options = [
    { value: 'A1', label: 'A1' },
    { value: 'A', label: 'A' },
    { value: 'B1', label: 'B1' },
    { value: 'B', label: 'B' },
    { value: 'C1', label: 'C1' },
    { value: 'C', label: 'C' },
    { value: 'D1', label: 'D1' },
    { value: 'D', label: 'D' },
    { value: 'BE', label: 'BE' },
    { value: 'C1E', label: 'C1E' },
    { value: 'CE', label: 'CE' },
    { value: 'D1E', label: 'D1E' },
    { value: 'DE', label: 'DE' },
  ]

  const { user } = useAuth()
  const [users, setUsers] = useState<UserType[]>([])
  const [isEditing, setIsEditing] = React.useState(false)

  const userIDString = user?.uid.toString()
  const usersRef = collection(db, 'users')
  const q = query(usersRef, where('userID', '==', userIDString))

  const formRef = useRef<HTMLFormElement | null>(null)

  const [draftId, setDraftId] = useState<string | null>(null)

  const getUsers = (querySnapshot: any): [UserType] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  useEffect(() => {
    onSnapshot(q, (querySnapshot: any) => {
      const users = getUsers(querySnapshot)
      setUsers(users)
    })
  }, [])
  const handleEditClick = () => {
    setIsEditing(true)
    setLicenceDateError('')
    setLicenceExpirationError('')
    setPenaltyPointsError('')
  }

  const handleCancelEdition = () => {
    setIsEditing(false)
  }

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const { userName, email, licenceDate, licenceExpiration, categories, penaltyPoints } = form

    const user = {
      userName: userName.value,
      email: email.value,
      licenceDate: licenceDate.value,
      licenceExpiration: licenceExpiration.value,
      categories: categories.value,
      penaltyPoints: penaltyPoints.value,
    }

    return user
  }

  const handleUpdate = (event: React.FormEvent, docId: string) => {
    const docRef = doc(db, 'users', docId)
    const formData = getFormData(event)

    if (!formData.licenceExpiration) {
      setLicenceExpirationError('To pole nie może być puste, wpisz datę ważności prawa jazdy.')
      return
    } else if (!isDateValid(formData.licenceExpiration)) {
      setLicenceExpirationError('Wpisana wartość nie jest datą, podaj datę w formacie RRRR-MM-DD')
      return
    }

    if (!formData.licenceDate) {
      setLicenceDateError('To pole nie może być puste, wpisz datę pierwszego wydania prawa jazdy.')
      return
    } else if (!isDateValid(formData.licenceDate)) {
      setLicenceDateError('Wpisana wartość nie jest datą, podaj datę w formacie RRRR-MM-DD.')
      return
    }

    if (!formData.penaltyPoints) {
      setPenaltyPointsError('To pole nie może być puste, uzupełnij swoje punkty karne.')
      return
    } else if (!onlyNumbers(formData.penaltyPoints)) {
      setPenaltyPointsError('Wpisz cyfry od 0 do 24, pole nie może zawierać liter.')
      return
    } else if (!checkProperNumbers(formData.penaltyPoints)) {
      setPenaltyPointsError('Wpisana wartość musi zawierać się w przedziale od 1 do 24 włącznie.')
      return
    }

    updateDoc(docRef, formData)
      .then(() => {
        setDraftId(null)
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Błąd podczas aktualizacji dokumentu:', error)
      })
  }

  const handleCloseModal = () => {
    setShowUserModal((prev) => !prev)
    setIsEditing(false)
  }

  return (
    <>
      {showUserModal && (
        <ModalWrapper showUserModal={showUserModal}>
          {users.map((user) => (
            <Container cRadius key={user.id} data-id={user.id}>
              <StyledBoxWrapper
                flexDirection='column'
                margin='3.2rem 3.2rem 3.2rem 3.2rem '
                width='36.4rem'
                height='100vh'
                justifyContent='flex-start'
              >
                <StyledBoxWrapper
                  flexDirection='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Typography variant='Title'>Dane użytkownika</Typography>
                  <CloseModalButton aria-label='Close modal' onClick={handleCloseModal} />
                </StyledBoxWrapper>

                {isEditing && draftId !== user.id ? (
                  <StyledBoxWrapper flexDirection='column' margin='4rem 0rem 3.2rem' height='100%'>
                    <StyledForm ref={formRef} onSubmit={(event) => handleUpdate(event, user.id)}>
                      <StyledBoxWrapper
                        justifyContent='space-between'
                        height='100%'
                        flexDirection='column'
                      >
                        <StyledBoxWrapper flexDirection='column'>
                          <StyledBoxWrapper flexDirection='column'>
                            <StyledInput
                              type='text'
                              name='userName'
                              id='userName'
                              inputLabel='Imię i nazwisko'
                              defaultValue={user.userName}
                            />
                          </StyledBoxWrapper>

                          <StyledBoxWrapper flexDirection='column' margin='3.1rem 0'>
                            <StyledInput
                              type='text'
                              name='email'
                              id='email'
                              inputLabel='Adres email'
                              defaultValue={user.email}
                              disabled
                            />
                          </StyledBoxWrapper>

                          <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                            <StyledInput
                              variant='error'
                              type='text'
                              name='licenceDate'
                              id='licenceDate'
                              inputLabel='Data pierwszego wydania prawa jazdy'
                              defaultValue={user.licenceDate}
                              inputError={licenceDateError}
                            />
                          </StyledBoxWrapper>

                          <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                            <StyledInput
                              type='text'
                              name='licenceExpiration'
                              id='licenceExpiration'
                              inputLabel='Data ważności prawa jazdy'
                              defaultValue={user.licenceExpiration}
                              inputError={licenceExpirationError}
                            />
                          </StyledBoxWrapper>

                          <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                            <Select
                              defaultValue=''
                              name='categories'
                              id='categories'
                              label='Kategoria prawa jazdy'
                              value={selectedOption}
                              options={options}
                              onChange={(value: string) => setSelectedOption(value)}
                            />
                          </StyledBoxWrapper>

                          <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                            <StyledInput
                              type='text'
                              name='penaltyPoints'
                              id='penaltyPoints'
                              inputLabel='Aktualne punkty karne'
                              defaultValue={user.penaltyPoints}
                              inputError={penaltyPointsError}
                            />
                          </StyledBoxWrapper>
                        </StyledBoxWrapper>

                        <StyledBoxWrapper flexDirection='column' gap='1.6rem'>
                          <StyledButton
                            buttonLabel='ZAPISZ ZMIANY'
                            variant='primary'
                            icon={null}
                            type='submit'
                          />
                          <StyledButton
                            buttonLabel='Anuluj edycję'
                            variant='tertiary'
                            icon={null}
                            onClick={handleCancelEdition}
                            type='button'
                          />
                        </StyledBoxWrapper>
                      </StyledBoxWrapper>
                    </StyledForm>
                  </StyledBoxWrapper>
                ) : (
                  <StyledBoxWrapper
                    flexDirection='column'
                    margin='4rem 0rem 3.2rem'
                    justifyContent='space-between'
                    height='100%'
                    padding='0 0 3.2rem 0'
                  >
                    <StyledBoxWrapper flexDirection='column'>
                      <StyledBoxWrapper flexDirection='column'>
                        <Typography variant='Caption'>Imię i nazwisko</Typography>
                        <Typography variant='Paragraph'>{user.userName}</Typography>
                      </StyledBoxWrapper>

                      <StyledBoxWrapper flexDirection='column' margin='3.1rem 0'>
                        <Typography variant='Caption'>Adres email</Typography>
                        <Typography variant='Paragraph'>{user.email}</Typography>
                      </StyledBoxWrapper>

                      <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                        <Typography variant='Caption'>
                          Data pierwszego wydania prawa jazdy
                        </Typography>
                        <Typography variant='Paragraph'>{user.licenceDate}</Typography>
                      </StyledBoxWrapper>

                      <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                        <Typography variant='Caption'>Data ważności prawa jazdy</Typography>
                        <Typography variant='Paragraph'>{user.licenceExpiration}</Typography>
                      </StyledBoxWrapper>

                      <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                        <Typography variant='Caption'>Kategorie</Typography>
                        <Typography variant='Paragraph'>{user.categories}</Typography>
                      </StyledBoxWrapper>

                      <StyledBoxWrapper flexDirection='column' margin='0rem 0rem 3.1rem'>
                        <Typography variant='Caption'>Aktualne punkty karne</Typography>
                        <Typography variant='Paragraph'>{user.penaltyPoints}</Typography>
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>

                    <StyledBoxWrapper flexDirection='column'>
                      <StyledBoxWrapper
                        flexDirection='column'
                        gap='1.6rem'
                        justifyContent='flex-end'
                      >
                        <StyledButton
                          variant='primary'
                          icon={null}
                          buttonLabel='EDYTUJ DANE'
                          onClick={handleEditClick}
                        />

                        <StyledButton variant='text' icon={null} buttonLabel='Usuń konto' />
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                )}
              </StyledBoxWrapper>
            </Container>
          ))}
        </ModalWrapper>
      )}
    </>
  )
}
