import Links from '../../Links'
import * as S from './styles'

const Footer = () => {
  return (
    <S.HeaderContainer>
      <div>
        <h1>Meus contatos</h1>
      </div>
      <S.LinksContainer>
        <Links />
      </S.LinksContainer>

      <p>Desenvolvido por Natália Fonseca</p>
    </S.HeaderContainer>
  )
}

export default Footer
