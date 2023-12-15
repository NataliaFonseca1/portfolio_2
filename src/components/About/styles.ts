import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.white};
  margin: 0 auto;
  padding-top: 156px;
  h1 {
    color: #fff;
    padding-top: 56px;
    padding-bottom: 56px;
  }
`
export const ButtonContainer = styled.div`
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 156px;
  text-align: center;
`
export const Button = styled.button`
  background-color: transparent;
  width: 204px;
  height: 56px;
  border-radius: 8.842px;
  border: 3px solid var(--1, #15a182);
  cursor: pointer;
  p {
    color: #ffff;
    font-weight: bolder;
  }
`
