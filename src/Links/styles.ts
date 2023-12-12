import styled from 'styled-components'
import { FaSquareGithub } from 'react-icons/fa6'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { cores } from '../styles/styles'

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
  li {
    display: flex;
    align-items: center;
    border-radius: 8.842px;
    border: 3px solid var(--1, #fff);
    padding: 5px;
    height: 40px;
    margin: 2px;
  }
  span {
    color: #fff;
    font-size: 18px;
  }
  a {
    text-decoration: none;
  }
  .global-style {
    margin: 5px;
    size: 25px;
  }
`
