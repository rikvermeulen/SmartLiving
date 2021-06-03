import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  aside {
      background: ${({theme}) => theme.aside};
      box-shadow: ${({theme}) => theme.shadow} !important;
  }

  aside>div>p {
    color: ${({ theme }) => theme.text} !important;
    }

  h2 {
    color: ${({ theme }) => theme.text} !important;
  }

  tile8x8,tile8x4,tile4x4 {
    background-color: ${({theme}) => theme.aside} !important;
    box-shadow: ${({theme}) => theme.shadow} !important;
  }

  nav>ul>li>a>svg {
      fill: ${({theme}) => theme.menu}  !important;
  }
  nav>ul>li>svg {
    fill: ${({theme}) => theme.menu}  !important;
}
  `