import styled from 'styled-components'

export const ModalWrapper = styled.div<{ showEditCarModal: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${({ showEditCarModal }) => (showEditCarModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 5;
`

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 4;
`

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.4rem;
  z-index: 5;
`

export const StyledForm = styled.form`
  height: 100%;
  padding-top: 3.2rem;
`

// uploader

export const CarImage = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
`

export const UploadDiv = styled.div`
  height: 5.8rem;
  line-height: 1rem;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2.4rem 0rem;

  p {
    margin-bottom: 8px;
  }
`

export const InputWrapper = styled.label`
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`

export const ImageInput = styled.input`
  display: none;
`

export const ButtonText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.6rem;
  width: 100%;
  margin: 3.2rem 0;
  border-radius: 0.4rem;
  padding: 0.8rem 1.6rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  gap: 1rem;
  text-transform: uppercase;
  line-height: 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`
