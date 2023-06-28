import { Form } from '../../../components/Form/Form'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../api/firebase'
import { firebaseErrors } from '../../../utils/firebaseErrors'
import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { Logo } from '../../../components/Logo/Logo'
import { Container } from '../../../components/Container/Container'
import { Typography } from '../../../components/Typography/Typography'
import { Link } from 'react-router-dom'
import React from 'react'

export const ForgotPassword = () => {
  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement

    sendPasswordResetEmail(auth, target.email.value).catch((e) => {
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
            <Typography variant='Title'>Zresetuj swoje hasło</Typography>
            <Typography textAlign='center' variant='Paragraph'>
              Na podany adres mailowy wyślemy link do zresetowania hasła
            </Typography>
            <Form submitText='Zresetuj hasło' isPasswordHidden onSubmit={handlePasswordReset} />
          </StyledBoxWrapper>
        </Container>
        <StyledBoxWrapper flexDirection='column' alignItems='center' gap='0.8rem'>
          <Typography variant='Caption'>
            Przypomniałeś sobie? {'\u{1F642}'}
            <Link to='/auth/login'> To zaloguj się</Link>
          </Typography>
          <Typography variant='Caption'>
            Nie masz konta?
            <Link to='/auth/register'> Zarejestruj się</Link>
          </Typography>
        </StyledBoxWrapper>
      </StyledBoxWrapper>
    </>
  )
}
