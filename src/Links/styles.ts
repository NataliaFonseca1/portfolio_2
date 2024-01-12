import styled from 'styled-components'
import { FaSquareGithub } from 'react-icons/fa6'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { breakpoints, cores } from '../styles/styles'

export const Linkedin = styled(FaLinkedin)`
  color: #fff;
`
export const Email = styled(MdEmail)`
  color: ${cores.white};
`
export const Whatsapp = styled(FaWhatsappSquare)`
  color: ${cores.white};
`
export const GitHub = styled(FaSquareGithub)`
  color: ${cores.white};
`
export const LinkCard = styled.ul`
  padding-top: 41px;
  display: flex;
  flex-wrap: wrap;
  padding-right: 8px;
  @media screen and (max-width: ${breakpoints.mobile}) {
    padding-right: 0;
    li {
      width: 100%;
    }
  }
  li {
    display: flex;
    align-items: center;
    border-radius: 8.842px;
    border: 3px solid var(--1, #15a182);
    padding: 5px;
    height: 40px;
  }

  span {
    color: #15a182;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    padding-left: 5px;
  }
  .global-style {
    size: 25px;
  }
`
