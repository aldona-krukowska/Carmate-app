import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../api/firebase'
import { firebaseErrors } from '../../../utils/firebaseErrors'
import { Form } from '../../../components/Form/Form'
import { getFormData } from '../../../utils/getFormData'
import { Logo } from '../../../components/Logo/Logo'
import { Typography } from '../../../components/Typography/Typography'
import { Container } from '../../../components/Container/Container'
import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { Link } from 'react-router-dom'
import React from 'react'

export const Login: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password } = getFormData(e)

    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        const target = e.target as HTMLFormElement
        target.reset()
        console.log(jwt)
      })

      .catch((e) => {
        alert(firebaseErrors[e.code])
      })
  }

  return (
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
          <Typography variant='Title'>Zaloguj się</Typography>
          <Typography variant='Paragraph' textAlign='center'>
            Użyj danych podanych podczas rejestracji
          </Typography>
          <Form submitText='Zaloguj się' onSubmit={handleLogin} />
        </StyledBoxWrapper>
      </Container>
      <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
        <Typography variant='Caption'>
          Nie masz konta?
          <Link to='/auth/register'> Zarejestruj się</Link>
        </Typography>
        <Typography variant='Caption'>
          Zapomniałeś hasła?
          <Link to='/auth/forgot-password'> Zresetuj</Link>
        </Typography>
      </StyledBoxWrapper>
    </StyledBoxWrapper>
  )
}
