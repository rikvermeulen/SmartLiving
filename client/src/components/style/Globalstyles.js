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
    color: ${({ theme }) => theme.time} !important;
    }

  h2 {
    color: ${({ theme }) => theme.text} !important;
  }

  tile8x8,tile8x4,tile4x4,tile4x2 {
    background-color: ${({theme}) => theme.aside} !important;
    box-shadow: ${({theme}) => theme.shadow} !important;
  }

  tile8x4>div>div>div>p {
    color: ${({ theme }) => theme.greytowhite} !important;
  }

  tile8x4>div>a {
    color: ${({ theme }) => theme.text} !important;
  }

  tile8x4>div>a>svg {
    fill: ${({ theme }) => theme.text} !important;
  }

  nav>ul>li>a>svg {
      fill: ${({theme}) => theme.menu}  !important;
  }
  nav>ul>li>svg {
    fill: ${({theme}) => theme.headersvg}  !important;
}
nav>ul>li>button {
    background-image: url("${({theme}) => theme.image}")  !important;
    background-color: ${({theme}) => theme.aside} !important;
}
  `