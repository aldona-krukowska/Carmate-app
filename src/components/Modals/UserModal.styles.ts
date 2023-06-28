import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

export const ModalWrapper = styled.div<{ showUserModal: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  display: ${({ showUserModal }) => (showUserModal ? 'grid' : 'none')};

  z-index: 100;

  &:after {
    content: '';
    display: block;
    pointer-events: none;
  }
`

export const StyledForm = styled.form`
  height: 100%;
  margin-bottom: 3.2rem;
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;

  width: 1.7rem;
  height: 1.7rem;
  padding: 0;
  z-index: 10;
`
