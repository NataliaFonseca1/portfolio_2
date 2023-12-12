import * as S from './styles'
import { FaSquareGithub } from 'react-icons/fa6'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IconContext } from 'react-icons'
const Links = () => {
  return (
    <>
      <S.LinkCard>
        <li>
          <IconContext.Provider
            value={{
              color: '#fff',
              size: '25px',
              className: 'global-style'
            }}
          >
            <div>
              <FaLinkedin />
            </div>
          </IconContext.Provider>
          <a href="https://www.linkedin.com/in/fonsecanatalia1" target="_blank">
            <span>Linkedin</span>
          </a>
        </li>
      </S.LinkCard>
      <S.LinkCard>
        <li>
          <IconContext.Provider
            value={{
              color: '#ffff',
              size: '25px',
              className: 'global-style'
            }}
          >
            <div>
              <MdEmail />
            </div>
          </IconContext.Provider>
          <a href="mailto:fonsecanatalianf@gmail.com" target="_blank">
            <span>E-mail</span>
          </a>
        </li>
      </S.LinkCard>
      <S.LinkCard>
        <li>
          <IconContext.Provider
            value={{
              color: '#fff',
              size: '25px',
              className: 'global-style'
            }}
          >
            <div>
              <FaWhatsappSquare />
            </div>
          </IconContext.Provider>
          <a
            href="https://wa.me/5535992540123?text=Olá,%20gostaria%20de%20entrar%20em%20contato"
            target="_blank"
          >
            <span>Whatsapp</span>
          </a>
        </li>
      </S.LinkCard>
      <S.LinkCard>
        <li>
          <IconContext.Provider
            value={{
              color: '#fff',
              size: '25px',
              className: 'global-style'
            }}
          >
            <div>
              <FaSquareGithub />
            </div>
          </IconContext.Provider>
          <a href="https://github.com/NataliaFonseca1" target="_blank">
            <span>GitHub</span>
          </a>
        </li>
      </S.LinkCard>
    </>
  )
}

export default Links
