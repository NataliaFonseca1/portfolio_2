import { styled } from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 155px;
  // background-color: #ffff;
`
export const Container = styled.div`
  // background-color: #fff;
`

export const TextContainer = styled.div`
  text-align: center;
  padding-top: 156px;
  span {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    font-weight: bolder;
  }
`
export const ContentContainer = styled.div`
  h1 {
    color: var(--Gray-5, #ffff);
    font-family: Roboto;
    font-size: 39px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h2 {
    color: #15a182;
    font-family: Roboto;
    font-size: 78px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 7.8px;
  }
  h3 {
    color: #ffff;
    font-family: Roboto;
    font-size: 57px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;
  }
`
export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 41px;
  margin-right: 30px;
`
export const ImgContainer = styled.div`
  img {
    width: 500px;
    height: 450px;
  }
`
