import styled from 'styled-components'

export const TableComponent = styled.table`
width: 91.8rem;
height: 40rem;
border-collapse: collapse;
`

export const TableHeaderComponent = styled.thead`
font-size: ${({ theme }) => theme.fontSize.m};
`

export const TableRow = styled.tr`
border-top: 0.1rem solid ${({ theme }) => theme.colors.lightGray};;
`