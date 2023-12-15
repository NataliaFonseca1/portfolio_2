import styled from 'styled-components'
import { cores } from '../../styles/styles'
import { LuGithub } from 'react-icons/lu'
import { FaPlayCircle } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'

export const ListContainer = styled.div`
  margin: 0 auto;
  color: ${cores.white};

  h1 {
    color: ${cores.white};
  }
  h2 {
    font-size: 18px;
    text-align: center;
  }
  img {
    width: 100%;
  }
`
export const Card = styled.div`
  width: 400px;
  height: 650px;
  display: grid;
  align-items: center;

  padding: 20px;
  border-radius: 8.842px;
  border: 3px solid var(--1, #15a182);
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;

  h1 {
    text-align: center;
    color: #fff;
  }
  h2 {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
  }
  .languagens {
    border-radius: 8.842px;
    border: 2px solid var(--1, #fff);
    text-align: center;
    padding: 1px;
    margin: 0 auto;
  }
`
export const TagsContainer = styled.div`
  display: flex;
  max-width: 285px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 5 px;
  p {
    font-size: 10px;
    padding: 2px;
    text-align: center;
    justify-content: center;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  gap: 5px;
  a {
    color: ${cores.white};
    text-decoration: none;
  }
`
export const Github = styled(LuGithub)`
  color: ${cores.white};
  width: 50px;
  height: 30px;
  padding-top: 5px;
  cursor: pointer;
`
export const Vercel = styled(FaPlayCircle)`
  color: ${cores.white};
  width: 40px;
  height: 30px;
  padding-top: 5px;
  cursor: pointer;
`
export const Down = styled(FaSearch)`
  color: ${cores.white};
  width: 50px;
  height: 30px;
  cursor: pointer;
`
export const CardContainer = styled.div`
  padding-top: 56px;
  padding-bottom: 156px;
  .swiperSlide {
    width: 399px;

    background: transparent;
  }
  .swiper-container {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 2000%
    );
    cursor: grab;
    padding-top: 45px;
    padding-bottom: 45px;
  }
  .swiper-button-next {
    color: #15a182;
  }
  .swiper-button-prev {
    color: #15a182;
  }
`
