import { StyledBoxWrapper } from '../BoxWrapper/BoxWrapper'
import { Typography } from '../Typography/Typography'
import { StyledInput } from '../Input/Input'
import { StyledButton } from '../Button/Button'
import { doc, collection, addDoc, onSnapshot, deleteDoc } from 'firebase/firestore'
import { ServiceFormType } from './ServiceForm.types'
import { db } from '../../api/firebase'
import React, { useEffect, useRef, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { clearForm } from '../../utils/clearForm'
import { useAuth } from '../../contexts/AuthContext/AuthContext'

export const ServiceForm = ({
  onSubmit,
  onClose,
}: {
  onSubmit: () => void
  onClose: () => void
}) => {
  const { user } = useAuth()
  const [services, setServices] = useState<ServiceFormType[]>([])
  const formRef = useRef<HTMLFormElement | null>(null)

  const [draftId, setDraftId] = useState<string | null>(null)
  const servicesCollection = collection(db, 'services')

  const [isFormOpen, setFormOpen] = useState(true)

  const userIDString = user?.uid.toString()

  const getServices = (querySnapshot: any): [ServiceFormType] => {
    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }))
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

  const handleSubmit = (event: React.FormEvent) => {
    const formData = getFormData(event)
    addDoc(servicesCollection, formData)
  }

  const handleDelete = (id: string) => {
    const docRef = doc(db, 'services', id)
    deleteDoc(docRef)
  }

  const handleClear = (formRef_: typeof formRef) => {
    if (formRef_.current === null) {
      return
    }
    clearForm(formRef_.current)
  }

  const handleCloseForm = () => {
    setFormOpen(false)
  }

  useEffect(() => {
    onSnapshot(servicesCollection, (querySnapshot: any) => {
      const services = getServices(querySnapshot)
      setServices(services)
    })
  }, [])

  if (services === null) {
    return <Loader />
  }

  return (
    <div>
      <div className='overlay'>
        <div className='form-window'>
          <StyledBoxWrapper flexDirection='column' height='32.7rem' width='64rem' gap='3.2rem'>
            <StyledBoxWrapper alignItems='center' justifyContent='center'>
              <Typography variant='Title'>Dodaj serwis</Typography>
            </StyledBoxWrapper>
            <StyledBoxWrapper>
              <form ref={formRef} onSubmit={handleSubmit}>
                <StyledBoxWrapper flexDirection='column' gap='3.2rem'>
                  <StyledBoxWrapper>
                    <StyledBoxWrapper flexDirection='column'>
                      <StyledBoxWrapper width='58.6rem' margin='1.2rem'>
                        <StyledInput
                          width='57.6rem'
                          type='text'
                          name='serviceName'
                          id='serviceName'
                          inputLabel='Nazwa serwisu'
                        />
                      </StyledBoxWrapper>
                      <StyledBoxWrapper>
                        <StyledBoxWrapper margin='1.2rem'>
                          <StyledInput
                            type='text'
                            name='serviceMail'
                            id='serviceMail'
                            inputLabel='Adres e-mail'
                            variant='basic'
                          />
                        </StyledBoxWrapper>
                        <StyledBoxWrapper margin='1.2rem'>
                          <StyledInput
                            type='text'
                            name='serviceNumber'
                            id='serviceNumber'
                            inputLabel='Numer telefonu'
                            variant='basic'
                          />
                        </StyledBoxWrapper>
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                  <StyledBoxWrapper>
                    <StyledBoxWrapper flexDirection='row' gap='11.2rem'>
                      <StyledBoxWrapper>
                        <StyledButton
                          buttonLabel='Wróć do listy serwisów'
                          variant='ghost'
                          disabled={false}
                          icon={null}
                          type='button'
                          onClick={onClose}
                        />
                      </StyledBoxWrapper>
                      <StyledBoxWrapper
                        flexDirection='row'
                        width='26rem'
                        justifyContent='space-between'
                      >
                        <StyledBoxWrapper>
                          <StyledButton
                            buttonLabel='WYCZYŚĆ DANE'
                            variant={'tertiary'}
                            icon={null}
                            onClick={() => handleClear(formRef)}
                            type='button'
                          />
                        </StyledBoxWrapper>
                        <StyledBoxWrapper>
                          <StyledButton
                            buttonLabel='ZAPISZ DANE'
                            variant={'primary'}
                            icon={null}
                            type='submit'
                          />
                        </StyledBoxWrapper>
                      </StyledBoxWrapper>
                    </StyledBoxWrapper>
                  </StyledBoxWrapper>
                </StyledBoxWrapper>
              </form>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
        </div>
      </div>
    </div>
  )
}
