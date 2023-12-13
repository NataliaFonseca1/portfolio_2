import styled from 'styled-components'
import { cores } from '../../styles/styles'

export const MarqueeContainer = styled.div`
  display: block;
  padding-bottom: 400px;
  height: 300px;
  justify-content: center;
  h1 {
    color: #ffff;
    padding-bottom: 80px;
  }
  h2 {
    font-size: 14px;
    margin: 0 auto;
    text-align: center;
    color: ${cores.white};
  }
  ul {
    padding: 15px;
    text-align: center;
  }
  li > img {
    max-height: 125px;
    max-width: 200px;
    object-fit: cover;
  }
`
