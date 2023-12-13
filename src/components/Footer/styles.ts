import styled from 'styled-components'
import { cores } from '../../styles/styles'

//import { FaCode } from 'react-icons/fa'

export const HeaderContainer = styled.div`
  display: grid;
  color: ${cores.white};
  p {
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 30px;
  }
`
export const TextContainer = styled.div`
  margin: 0 auto;
  color: ${cores.white};
  h1 {
    text-align: center;
  }
  h2 {
    font-size: 18px;
    text-align: center;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding-bottom: 55px;
`
