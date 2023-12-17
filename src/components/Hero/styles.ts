import styled from 'styled-components'
import { breakpoints } from '../../styles/styles'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    max-width: ${breakpoints.mobile};

    margin: 0 auto;
  }
`

export const Container = styled.div``

export const TextContainer = styled.div`
  text-align: center;
  padding-top: 156px;

  span {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: bolder;
    @media screen and (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
      padding-top: 10px;
    }
  }
`

export const ContentContainer = styled.div`
  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    max-width: 450px;
    margin: 0 auto;
  }

  > h1 {
    color: var(--Gray-5, #ffff);
    font-family: Roboto;
    font-size: 39px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media screen and (max-width: ${breakpoints.mobile}) {
      font-size: 28px;
      padding-top: 10px;
    }
  }

  > h2 {
    color: #15a182;
    font-family: Roboto;
    font-size: 78px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 7.8px;
    @media screen and (max-width: ${breakpoints.mobile}) {
      font-size: 38px;
      padding-top: 10px;
    }
  }

  > h3 {
    color: #ffff;
    font-family: Roboto;
    font-size: 57px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: ${breakpoints.mobile}) {
      font-size: 35px;
      padding-top: 10px;
    }
  }
`

export const ImgContainer = styled.div`
  max-width: 40%;
  overflow: hidden;
  margin: 0 auto;
  @media screen and (max-width: ${breakpoints.mobile}) {
    max-width: 90%;
  }

  img {
    max-width: 100%;
    height: auto;
    padding-top: 25px;
  }
`

export const LinkCard = styled.ul`
  padding-top: 41px;
  display: flex;

  li {
    width: 48%;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    border-radius: 8.842px;
    border: 3px solid var(--1, #15a182);
    padding: 8px;
    height: 40px;

    @media screen and (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }

  span {
    color: #15a182;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    padding-left: 5px;
  }
`
