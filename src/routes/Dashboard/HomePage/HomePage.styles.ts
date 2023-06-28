import styled from 'styled-components'
import background from '../../../images/background-image.jpg'
import garageImg from '../../../images/garage.png'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeLogo = styled.h1`
  font-size: 4rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  text-transform: lowercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  span {
    color: ${({ theme }) => theme.colors.secondary200};
  }
`

export const Header = styled.section`
  height: 100vh;
  width: 100%;
  /* background-image: url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80'); */
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;
`

export const MainNav = styled.nav`
  display: flex;
  padding: 7rem;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
`

export const NavButton = styled.div`
  text-decoration: none;
  color: white;
`

export const WhiteLine = styled.div`
  height: 6rem;
  width: 100%;
  z-index: 2;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.15;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Section 2

export const Instruction = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`

export const Circle = styled.div`
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  background-color: ${({ theme }) => theme.colors.tertiary100};
`

export const CarImg = styled.img`
  height: 70rem;
  position: absolute;
  left: -30rem;
  top: -16rem;
  z-index: -1;
`

export const PhoneImg = styled.img`
  height: 70rem;
  position: absolute;
  right: 8rem;
  bottom: 0rem;
  z-index: 5;
`

// Section 3

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  gap: 3rem;
  padding: 15rem 60rem 15rem 15rem;
  background-image: url(${garageImg});
  background-size: cover;
  background-position: center center;
`

// Footer

export const HomeFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
`
export const GitHubImg = styled.img`
  height: 5rem;
  width: 5rem;
`

export const ButtonUp = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
`

// Typography

export const Heading = styled.h2`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.white};
`
export const Caption = styled.h3`
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.tertiary100};
  padding-bottom: 2rem;
  line-height: 150%;
`
export const Title = styled.h4`
  font-size: 2.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.secondary200};
  padding: 0 0 0 2rem;
`
export const Paragraphs = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 1rem 0 0 2rem;
  line-height: 150%;
`
export const Slogan = styled.h5`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary100};
  line-height: 150%;
`
export const FootTitle = styled.p`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  padding: 18rem 0 0 0;
`
export const Team = styled.p`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 2rem 0 0 0;
`

export const DevName = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
