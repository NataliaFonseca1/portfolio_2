import styled from 'styled-components'
import { breakpoints, cores } from '../../styles/styles'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.white};
  margin: 0 auto;
  padding-top: 56px;
  h1 {
    color: #fff;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 25px;
  padding-bottom: 156px;
  gap: 5px;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.mobile}) {
    display: grid;
    padding: 50px;
  }
`
export const Button = styled.button`
  text-align: center;
  background-color: transparent;
  align-items: center;
  width: 204px;
  height: 56px;
  border-radius: 8.842px;
  border: 3px solid var(--1, #15a182);
  cursor: pointer;
  :hover {
    color: #15a182;
  }
  p,
  a {
    color: #ffff;
    font-weight: bolder;
    text-decoration: none;
  }
`
