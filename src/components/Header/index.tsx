import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [ismenuactive, setismenuactive] = useState(false)

  const toggleMenu = () => {
    setismenuactive(!ismenuactive)
  }
  const closeMenu = () => {
    setismenuactive(false)
  }

  return (
    <S.HeaderContainer onMouseLeave={closeMenu}>
      <div>
        <S.navContainer>
          <div>
            <img src="" alt="" />
            <h2>&lt;/&gt;</h2>
          </div>
          <S.Menu>
            {ismenuactive && (
              <ul>
                <li>Sobre</li>
                <li>Skills</li>
                <li>Projetos</li>
                <li>Trajetória</li>
                <li>Contato</li>
              </ul>
            )}
            <button onMouseEnter={toggleMenu} className="menu">
              <S.Icon>
                <>
                  <S.MenuIcon />
                </>
              </S.Icon>
            </button>
          </S.Menu>
        </S.navContainer>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
