import * as S from './styles'

const About = () => {
  const DownloadCV = () => {
    const pdfUrl =
      'https://drive.google.com/file/d/19Eqe3Qyaj_SEaODkvB4rBEjZJch_7_n9/view?usp=sharing'
    window.open(pdfUrl, '_blank')
  }
  return (
    <>
      <S.AboutContainer className="container" id="about">
        <h1>About me()</h1>
        <p>
          Iniciei minha carreira no mundo jurídico e, ao longo dessa jornada,
          encontrei meu verdadeiro propósito na tecnologia. Em um ambiente
          jurídico desafiador, percebi na tecnologia a oportunidade de
          introduzir inovação e transformação na área. Minha motivação para
          enfrentar desafios, comuns no mercado jurídico, me conduziu ao campo
          da tecnologia, onde finalmente descobri minha verdadeira paixão.Com
          determinação e esforço contínuos me dediquei a adquirir as habilidades
          técnicas essenciais para desempenhar com excelência a função
          Desenvolvedora Front-End. Ao longo da minha carreira, adquiri
          habilidades valiosas em comunicação, gestão de tempo e trabalho em
          equipe, provenientes da minha experiência em outra área. Agora, trago
          essas habilidades para este novo desafio como desenvolvedora. Possuo
          expertise em React, Redux, JavaScript, HTML5, CSS, Styled-Components,
          Cypress, Jest, Bootstrap, jQuery, Git, Sass, Less, entre outras. Essas
          habilidades me capacitam a contribuir de maneira positiva para
          projetos de desenvolvimento em diversos setores e ambientes de TI.
        </p>
      </S.AboutContainer>
      <div>
        <S.ButtonContainer>
          <S.Button onClick={DownloadCV}>
            <p>Download CV</p>
          </S.Button>
          <S.Button>
            <a href="#contact">Contact</a>
          </S.Button>
        </S.ButtonContainer>
      </div>
    </>
  )
}

export default About
