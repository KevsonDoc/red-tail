import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.background};
    min-height: 100vh;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
