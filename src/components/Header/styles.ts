import styled from 'styled-components'
import { cores } from '../../styles/styles'
//import { FaCode } from 'react-icons/fa'
import { TiThMenu } from 'react-icons/ti'

export const HeaderContainer = styled.div`
  height: 180px;
  background-image: radial-gradient(
    circle at 2.05% 32.55%,
    #4b5eba 0,
    #102e69 50%,
    #000022 100%
  );
  ul {
    display: flex;
  }
  ul > li {
    padding: 10px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
  }
  button {
    border: none;
    background-color: transparent;
  }
`

export const Menu = styled.div`
  display: flex;
`
export const Icon = styled.span`
  svg {
    width: 35px;
    height: 50px; /* Defina o tamanho do ícone aqui */
  }
`
export const navContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  width: 100%;
  margin: 0 auto;
  span {
    color: #ffff;
    width: 50px;
  }
`
export const MenuIcon = styled(TiThMenu)`
  color: #ffff;
  border: none;
  z-index: 2;
`
