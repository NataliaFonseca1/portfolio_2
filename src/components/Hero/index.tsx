import * as S from './styles'
import perfil from '../../assets/perfil.jpeg'
import Typist from 'react-typist'
import Links from '../../Links'
const Hero = () => {
  return (
    <>
      <S.Container>
        <div className="container">
          <S.HeroContainer>
            <S.ContentContainer>
              <h1>Hello, I am</h1>
              <h2>
                &lt; Natália <br />
                Fonseca /&gt;
              </h2>
              <h3>Front-end Developer</h3>
              <S.ListContainer>
                <Links />
              </S.ListContainer>
            </S.ContentContainer>
            <S.ImgContainer>
              <img src={perfil} alt="" />
            </S.ImgContainer>
          </S.HeroContainer>
        </div>
      </S.Container>
      <S.TextContainer>
        <Typist avgTypingDelay={100} stdTypingDelay={0}>
          <span>JUNTOS TRANSFORMAREMOS DESAFIOS EM INOVAÇÃO!</span>
        </Typist>
      </S.TextContainer>
    </>
  )
}

export default Hero
