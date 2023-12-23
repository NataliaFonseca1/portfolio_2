import styled from 'styled-components'

import { TiThMenu } from 'react-icons/ti'

export const HeaderContainer = styled.div`
  height: 190px;

  ul {
    display: block;
    position: absolute;
    margin-left: -75px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var(--1, #15a182);
  }
  ul > li {
    padding: 6px;
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
