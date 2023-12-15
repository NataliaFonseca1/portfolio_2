import styled from 'styled-components'

import { TiThMenu } from 'react-icons/ti'

export const HeaderContainer = styled.div`
  height: 180px;

  ul {
    display: block;
    position: absolute;
  }
  ul > li {
    padding: 10px;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    :hover {
      color: #15a182;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
    font-family: Roboto, sans-serif;
  }

  button {
    border: none;
    background-color: transparent;
  }
`

export const Icon = styled.span`
  svg {
    width: 35px;
    height: 50px;
  }
`
export const navContainer = styled.nav`
  display: flex;
  align-items: center;
  color: #15a182;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  span {
    color: #ffff;
    width: 50px;
  }
`
export const MenuIcon = styled(TiThMenu)`
  color: #15a182;
  border: none;
  z-index: 2;
`
