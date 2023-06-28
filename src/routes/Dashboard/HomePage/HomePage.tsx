import React from 'react'
import { StyledButton } from '../../../components/Button/Button'
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdDirectionsCar,
  MdPerson,
  MdCarRental,
  MdListAlt,
  MdOutlinePhoneIphone,
} from 'react-icons/md'
import {
  MainNav,
  Header,
  WhiteLine,
  NavButton,
  Instruction,
  HomeWrapper,
  HomeFooter,
  Heading,
  Caption,
  HomeLogo,
  Circle,
  CarImg,
  PhoneImg,
  Title,
  Paragraphs,
  Section,
  Slogan,
  GitHubImg,
  Team,
  FootTitle,
  DevName,
  ButtonUp,
} from './HomePage.styles'
import { StyledBoxWrapper } from '../../../components/BoxWrapper/BoxWrapper'
import { IconWrapper } from '../../../components/IconWrapper/IconWrapper.styles'
import { IconButton } from '../../../components/IconButton/IconButton.styles'
import { StyledLink } from '../ServiceHistoryPage/ServiceHistoryPage.styles'
import { useAuth } from '../../../contexts/AuthContext/AuthContext'

export const HomePage: React.FC = () => {
  const { user } = useAuth()
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <HomeWrapper>
      <Header id='home'>
        <MainNav>
          <HomeLogo>
            .car<span>mate</span>
          </HomeLogo>
          <StyledBoxWrapper gap='7rem' alignItems='center'>
            <StyledLink to='/'>
              <NavButton onClick={() => scrollToSection('home')}>Home</NavButton>
            </StyledLink>
            <StyledLink to='/ '>
              <NavButton onClick={() => scrollToSection('instruction')}>Jak to działa?</NavButton>
            </StyledLink>
            <StyledLink to='/'>
              <NavButton onClick={() => scrollToSection('about')}>Kontakt</NavButton>
            </StyledLink>
            <StyledLink to='/auth/login'>
              <StyledButton buttonLabel={user ? 'Panel użytkownika' : 'Zaloguj się'} icon={null} />
            </StyledLink>
          </StyledBoxWrapper>
        </MainNav>
        <StyledBoxWrapper flexDirection='column' maxWidth='63rem' padding='7rem' gap='2rem'>
          <Heading>Zarządzaj swoimi samochodami z .carmate</Heading>
          <Caption>
            Twoja wirtualna książeczka serwisowa. Dostęp do najważniejszych informacji o Twoim
            samochodzie, gdziekolwiek jesteś.
          </Caption>
          <StyledLink to='/auth/register'>
            <StyledButton buttonLabel='Zacznij korzystać z aplikacji' icon={null} />
          </StyledLink>
        </StyledBoxWrapper>

        <WhiteLine>
          <IconWrapper>
            <IconButton variant={'default'} onClick={() => scrollToSection('instruction')}>
              <MdKeyboardArrowDown />
            </IconButton>
          </IconWrapper>
        </WhiteLine>
      </Header>

      <Instruction id='instruction'>
        <StyledBoxWrapper height='50rem'>
          <CarImg src={require('../../../images/white-car-right.jpg')} />
          <StyledBoxWrapper
            flexDirection='column'
            gap='2rem'
            alignItems='flex-start'
            margin='-2rem 0 0 70rem'
          >
            <StyledBoxWrapper alignItems='center'>
              <Circle>
                <StyledBoxWrapper height='5rem' alignItems='center' justifyContent='center'>
                  <IconWrapper>
                    <MdOutlinePhoneIphone />
                  </IconWrapper>
                </StyledBoxWrapper>
              </Circle>
              <StyledBoxWrapper flexDirection='column' width='60rem'>
                <Title>Informacje o samochodach zawsze pod ręką</Title>
                <Paragraphs>
                  Dodawaj swoje auta do wirtualnego garażu. Przechowuj w nim najważniejsze
                  informacje o stanie pojazdów, by mieć je zawsze przy sobie
                </Paragraphs>
              </StyledBoxWrapper>
            </StyledBoxWrapper>

            <StyledBoxWrapper alignItems='center'>
              <Circle>
                <StyledBoxWrapper height='5rem' alignItems='center' justifyContent='center'>
                  <IconWrapper>
                    <MdDirectionsCar />
                  </IconWrapper>
                </StyledBoxWrapper>
              </Circle>
              <StyledBoxWrapper flexDirection='column' width='60rem'>
                <Title>Kompletna historia przeglądów i serwisów</Title>
                <Paragraphs>
                  Zyskaj wgląd do najważniejszych informacji na temat odbytych przeglądów i wizyt w
                  serwisach. Aktualny przebieg, wymiany i naprawy – to wszystko znajdziesz w
                  .carmate
                </Paragraphs>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
        </StyledBoxWrapper>

        <StyledBoxWrapper
          justifyContent='flex-start'
          height='50vh'
          alignItems='center'
          margin='2rem 0 0 20rem'
        >
          <StyledBoxWrapper
            flexDirection='column'
            gap='2rem'
            alignItems='flex-start'
            margin='0 0 0 0'
          >
            <StyledBoxWrapper alignItems='center'>
              <Circle>
                <StyledBoxWrapper height='5rem' alignItems='center' justifyContent='center'>
                  <IconWrapper>
                    <MdCarRental />
                  </IconWrapper>
                </StyledBoxWrapper>
              </Circle>
              <StyledBoxWrapper flexDirection='column' width='60rem'>
                <Title>Przypomnienie o zbliżających się terminach </Title>
                <Paragraphs>
                  Nie musisz pamiętać o upływającym terminie ubezpieczenia OC lub zaplanowanej
                  wizycie w serwisie. Przypomnimy Ci o tym dzięki odpowiednim powiadomieniom
                </Paragraphs>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
            <StyledBoxWrapper alignItems='center'>
              <Circle>
                <StyledBoxWrapper height='5rem' alignItems='center' justifyContent='center'>
                  <IconWrapper>
                    <MdListAlt />
                  </IconWrapper>
                </StyledBoxWrapper>
              </Circle>
              <StyledBoxWrapper flexDirection='column' width='60rem'>
                <Title>Twoja lista serwisów </Title>
                <Paragraphs>
                  Zapomnij o wizytówkach okolicznych serwisów. Dane kontaktowe do ulubionych
                  warsztatów samochodowych możesz przechowywać wygodnie w aplikacji
                </Paragraphs>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
            <StyledBoxWrapper alignItems='center'>
              <Circle>
                <StyledBoxWrapper height='5rem' alignItems='center' justifyContent='center'>
                  <IconWrapper>
                    <MdPerson />
                  </IconWrapper>
                </StyledBoxWrapper>
              </Circle>
              <StyledBoxWrapper flexDirection='column' width='60rem'>
                <Title>Twój profil kierowcy</Title>
                <Paragraphs>
                  Przechowuj dane o terminie ważności Twojego prawa jazdy oraz uzyskanych punktach
                  karnych.
                </Paragraphs>
              </StyledBoxWrapper>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <PhoneImg src={require('../../../images/phone-mockup.png')} />
        </StyledBoxWrapper>
      </Instruction>

      <Section>
        <Slogan>
          Zarządzaj wygodnie swoimi samochodami z poziomu telefonu lub komputera. Kontroluj ich stan
          techniczny i nie daj się zaskoczyć nieprzewidzianym awariom
        </Slogan>
        <StyledLink to='/auth/register'>
          <StyledButton buttonLabel='Zacznij korzystać z aplikacji' icon={null} />
        </StyledLink>
      </Section>

      <HomeFooter id='about'>
        <ButtonUp>
          <StyledBoxWrapper alignItems='center' justifyContent='center'>
            <IconWrapper>
              <IconButton radius variant={'default'} onClick={() => scrollToSection('home')}>
                <MdKeyboardArrowUp />
              </IconButton>
            </IconWrapper>
          </StyledBoxWrapper>
        </ButtonUp>
        <StyledBoxWrapper flexDirection='column' alignItems='center'>
          <Team>Zespół developerów </Team>
          <StyledBoxWrapper padding='2rem' gap='5rem'>
            <StyledBoxWrapper flexDirection='column' gap='1rem' alignItems='center' width='5rem'>
              <GitHubImg src={require('../../../images/iconmonstr-github.png')} />
              <StyledLink to='https://github.com/Fermatka'>
                <DevName>Agata</DevName>
              </StyledLink>
            </StyledBoxWrapper>
            <StyledBoxWrapper flexDirection='column' gap='1rem' alignItems='center' width='5rem'>
              <GitHubImg src={require('../../../images/iconmonstr-github.png')} />
              <StyledLink to='https://github.com/aldona-krukowska'>
                <DevName>Aldona</DevName>
              </StyledLink>
            </StyledBoxWrapper>
            <StyledBoxWrapper flexDirection='column' gap='1rem' alignItems='center' width='5rem'>
              <GitHubImg src={require('../../../images/iconmonstr-github.png')} />
              <StyledLink to='https://github.com/PrzybylskiMariusz'>
                <DevName>Mariusz</DevName>
              </StyledLink>
            </StyledBoxWrapper>
            <StyledBoxWrapper flexDirection='column' gap='1rem' alignItems='center' width='5rem'>
              <GitHubImg src={require('../../../images/iconmonstr-github.png')} />
              <StyledLink to='https://github.com/mateusz-mudry'>
                <DevName>Mateusz</DevName>
              </StyledLink>
            </StyledBoxWrapper>
          </StyledBoxWrapper>
          <FootTitle>&copy; 2023 carmate. Wszelkie prawa zastrzeżone.</FootTitle>
        </StyledBoxWrapper>
      </HomeFooter>
    </HomeWrapper>
  )
}
