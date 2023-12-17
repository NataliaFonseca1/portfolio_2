import * as S from './styles'
import perfil from '../../assets/perfil7.png'

const Hero = () => {
  return (
    <>
      <S.Container>
        <S.HeroContainer>
          <S.ContentContainer>
            <h1>Hello, I am</h1>
            <h2>
              &lt; Natália <br />
              Fonseca /&gt;
            </h2>
            <h3>Front-end Developer</h3>
          </S.ContentContainer>
          <S.ImgContainer>
            <img src={perfil} alt="" />
          </S.ImgContainer>
        </S.HeroContainer>
      </S.Container>
      <S.TextContainer>
        <span>JUNTOS TRANSFORMAREMOS DESAFIOS EM INOVAÇÃO!</span>
      </S.TextContainer>
    </>
  )
}

export default Hero
