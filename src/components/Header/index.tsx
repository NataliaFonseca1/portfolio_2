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
            <h2>&lt;/&gt;</h2>
          </div>
          <div>
            <button onClick={toggleMenu} className="menu">
              <S.Icon>
                <>
                  <S.MenuIcon />
                </>
              </S.Icon>
            </button>
            <div>
              {ismenuactive && (
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#skilss">Skills</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#education">Education</a>
                  </li>
                  <li>
                    <a href="#experiences">Experiences</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </S.navContainer>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
