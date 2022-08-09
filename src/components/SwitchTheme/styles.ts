import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 80px;
    height: 40px;

    label {
      outline: solid 1px ${theme.colors.primary};
      width: 100%;
      height: 40px;
      padding: 0 3px;
      background-color: ${theme.colors.background};
      border-radius: 50px;
      position: relative;
      display: flex;
      justify-content: baseline;
      align-items: center;
      cursor: pointer;

      input {
        position: absolute;
        display: none;
      }

      .slider {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 50px;
        z-index: 4;
        transition: 0.3s all;
        width: 35px;
        height: 35px;
      }

      svg:nth-child(2) {
        position: absolute;
        z-index: 10;
        left: 10px;
        color: ${theme.colors.background};
      }

      svg:nth-child(3) {
        position: absolute;
        right: 10px;
        z-index: 10;
        color: ${theme.colors.primary};
      }

      input:checked ~ .slider {
        transform: translateX(39px);
      }

      input:checked ~ svg:nth-child(2) {
        color: ${theme.colors.primary};
      }

      input:checked ~ svg:nth-child(3) {
        color: ${theme.colors.background};
      }
    }
  `}
`
