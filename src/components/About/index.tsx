import * as S from './styles'

const About = () => {
  const DownloadCV = () => {
    const pdfUrl =
      'https://drive.google.com/file/d/1aPzsEF2pKUWhNv6RGvzlp88cJ4GfYqLx/view?usp=sharing'
    window.open(pdfUrl, '_blank')
  }
  return (
    <>
      <S.AboutContainer className="container" id="about">
        <h1>About me()</h1>
        <p>
          Iniciei minha carreira na área jurídica, e no meio dessa jornada,
          encontrei meu caminho na tecnologia. Em um ambiente jurídico
          desafiador, enxerguei na tecnologia a possibilidade de trazer inovação
          e mudanças para a área. Minha motivação para inovar e enfrentar
          ambientes desafiadores como o mercado jurídico me levou ao campo da
          tecnologia, onde finalmente descobri minha verdadeira paixão. Sou uma
          pessoa determinada e dedicada a alcançar tudo o que sonho. Minha
          determinação funciona como um combustível para mim. constantemente
          dedico tempo e esforço para adquirir as habilidades técnicas
          necessárias para desempenhar com excelência a função de Desenvolvedora
          Front End. Ao longo da minha carreira, justamente por ter tido
          experiências em outra área, adquiri habilidades importantes, como
          comunicação, gestão de tempo, trabalho em equipe e, agora, as trago
          comigo neste novo desafio. Como desenvolvedora, possuo habilidades em
          React, Redux, JavaScript, HTML5, CSS, Styled-Components, Cypress,
          Jest, Bootstrap, jQuery, Git, Sass, Less, entre outras, que me tornam
          capaz de contribuir positivamente para projetos de desenvolvimento em
          diferentes setores e ambientes de TI.
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
