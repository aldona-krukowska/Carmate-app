import { Form } from '../../../components/Form/Form'
import { auth, db } from '../../../api/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseErrors } from '../../../utils/firebaseErrors'
import { collection, addDoc } from 'firebase/firestore'
import { getFormData } from '../../../utils/getFormData'
import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { Logo } from '../../../components/Logo/Logo'
import { Container } from '../../../components/Container/Container'
import { Typography } from '../../../components/Typography/Typography'
import { Link } from 'react-router-dom'
import React from 'react'

export const Register = () => {
  const usersCollection = collection(db, 'users')

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password, name } = getFormData(e)

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const target = e.target as HTMLFormElement
        target.reset()
      })

      .then(() => {
        const user = {
          email: auth.currentUser?.email,
          userID: auth.currentUser?.uid,
          userName: name,
        }
        addDoc(usersCollection, user)
      })

      .catch((e) => {
        console.dir(e)
        alert(firebaseErrors[e.code])
      })
  }

  return (
    <>
      <StyledBoxWrapper
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        padding='5rem'
        gap='2.4rem'
        height='100vh'
      >
        <Container cRadius>
          <StyledBoxWrapper
            flexDirection='column'
            alignItems='center'
            padding='3.2rem'
            gap='2rem'
            maxWidth='38.6rem'
          >
            <Logo />
            <Typography variant='Title'>Zarejestruj się</Typography>
            <Typography variant='Paragraph'>Utwórz nowe konto</Typography>
            <Form submitText='Zarejestruj się' onSubmit={handleRegister} />
          </StyledBoxWrapper>
        </Container>
        <Typography variant='Caption'>
          Masz już konto?
          <Link to='/auth/login'> Zaloguj się</Link>
        </Typography>
      </StyledBoxWrapper>
    </>
  )
}
