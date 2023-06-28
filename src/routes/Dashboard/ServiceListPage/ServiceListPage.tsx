import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { Typography } from '../../../components/Typography/Typography'
import { Styled } from '../../../components/Typography/Typography.styles'
import { StyledButton } from '../../../components/Button/Button'
import { Container } from '../../../components/Container/Container'
import { db } from '../../../api/firebase'
import { collection, onSnapshot, deleteDoc, doc, updateDoc, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { StyledIconButton } from '../../../components/IconButton/IconButton'
import { ServiceForm } from '../../../components/ServiceForm/ServiceForm'
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md'
import { useAuth } from '../../../contexts/AuthContext/AuthContext'
import { ServiceFormType } from '../../../components/ServiceForm/ServiceForm.types'
import { StyledForm } from '../../../components/Modals/UserModal.styles'
import { StyledInput } from '../../../components/Input/Input'

export const ServiceListPage = () => {
  const { user } = useAuth()
  const [services, setServices] = useState<ServiceFormType[]>([])
  const [draftId, setDraftId] = useState<string | null>(null)
  const servicesCollection = collection(db, 'services')
  const [isFormOpen, setIsFormOpen] = useState(false)

  const userIDString = user?.uid.toString()
  const qServices = query(servicesCollection, where('userID', '==', userIDString))

  const getServices = (querySnapshot: any): ServiceFormType[] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  const handleSubmit = () => {
    setIsFormOpen(false)
  }

  const handleUpdate = (event: React.FormEvent, docId: string) => {
    const docRef = doc(db, 'services', docId)

    updateDoc(docRef, getFormData(event)).then(() => {
      setDraftId(null)
    })
  }

  const getFormData = (event: React.FormEvent<Element>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const { serviceName, serviceMail, serviceNumber } = form

    const service = {
      serviceName: serviceName.value,
      serviceMail: serviceMail.value,
      serviceNumber: serviceNumber.value,
      userID: userIDString,
    }

    return service
  }

  const handleDelete = (id: string) => {
    const docRef = doc(db, 'services', id)
    deleteDoc(docRef)
  }

  const handleOpenForm = () => {
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
  }

  useEffect(() => {
    onSnapshot(qServices, (querySnapshot) => {
      const services = getServices(querySnapshot)
      setServices(services)
    })
  }, [])

  return (
    <StyledBoxWrapper>
      <StyledBoxWrapper>
        <StyledBoxWrapper flexDirection='column'>
          <StyledBoxWrapper width='94.8rem' justifyContent='space-between' padding='2.4rem 0'>
            <StyledBoxWrapper>
              <Styled.Title>Lista serwisów</Styled.Title>
            </StyledBoxWrapper>
            <StyledBoxWrapper>
              <StyledButton
                buttonLabel='Dodaj serwis'
                variant='secondary'
                icon={null}
                type='button'
                onClick={handleOpenForm}
              />
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <div>
            {isFormOpen && <ServiceForm onSubmit={handleSubmit} onClose={handleCloseForm} />}
            <style>
              {`
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .form-window {
            background-color: #fff;
            padding: 2rem;
          }
        `}
            </style>
          </div>
          <StyledBoxWrapper flexDirection='column' gap='2.4rem'>
            {services.map((service) => (
              <Container key={service.id} cRadius>
                <StyledBoxWrapper
                  flexDirection='row'
                  width='91.7rem'
                  justifyContent='space-between'
                  margin='1.6rem'
                >
                  <StyledBoxWrapper width='70rem' justifyContent='space-between'>
                    <StyledBoxWrapper flexDirection='column' width='18rem'>
                      <StyledBoxWrapper>
                        <Typography variant='Caption'>Nazwa serwisu</Typography>
                      </StyledBoxWrapper>
                      <StyledBoxWrapper>
                        <Typography variant='Title'>{service.serviceName}</Typography>
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                    <StyledBoxWrapper flexDirection='column' width='13.8rem'>
                      <StyledBoxWrapper>
                        <Typography variant='Caption'>Adres mail</Typography>
                      </StyledBoxWrapper>
                      <StyledBoxWrapper>
                        <Typography variant='Name'>{service.serviceMail}</Typography>
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                    <StyledBoxWrapper flexDirection='column' width='136.47px'>
                      <StyledBoxWrapper>
                        <Typography variant='Caption'>Numer telefonu</Typography>
                      </StyledBoxWrapper>
                      <StyledBoxWrapper>
                        <Typography variant='Name'>{service.serviceNumber}</Typography>
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                  <StyledBoxWrapper>
                    <StyledBoxWrapper>
                      <StyledBoxWrapper>
                        <StyledIconButton
                          icon={MdModeEditOutline}
                          variant='default'
                          onClick={() => setDraftId(service.id)}
                        />
                      </StyledBoxWrapper>
                      <StyledBoxWrapper>
                        <StyledIconButton
                          icon={MdDeleteOutline}
                          variant='default'
                          onClick={() => handleDelete(service.id)}
                        />
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                  {draftId === service.id && (
                    <StyledForm onSubmit={(event) => handleUpdate(event, service.id)}>
                      <StyledInput
                        type='text'
                        name='serviceName'
                        id='serviceName'
                        defaultValue={service.serviceName}
                      />
                      <StyledInput
                        type='text'
                        name='serviceMail'
                        id='serviceMail'
                        defaultValue={service.serviceMail}
                      />
                      <StyledInput
                        type='text'
                        name='serviceNumber'
                        id='serviceNumber'
                        defaultValue={service.serviceNumber}
                      />
                      <StyledButton
                        buttonLabel='ZAPISZ'
                        variant='primary'
                        type='submit'
                        icon={null}
                      />
                    </StyledForm>
                  )}
                </StyledBoxWrapper>
              </Container>
            ))}
          </StyledBoxWrapper>
        </StyledBoxWrapper>
      </StyledBoxWrapper>
    </StyledBoxWrapper>
  )
}
