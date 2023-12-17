import Links from '../../Links'
import * as S from './styles'

const Footer = () => {
  return (
    <S.HeaderContainer id="contact">
      <S.TextContainer>
        <h2>NEED A DEVELOPER?</h2>
        <h1>Let's work together</h1>
      </S.TextContainer>
      <S.LinksContainer>
        <Links />
      </S.LinksContainer>
      <p>Desenvolvido por Natália Fonseca</p>
    </S.HeaderContainer>
  )
}

export default Footer
