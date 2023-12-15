import * as S from './styles'

const About = () => {
  const DownloadCV = () => {
    const pdfUrl =
      'https://docs.google.com/document/d/1FeDIsX4ec9DsglwgYlxEizlRP4YAlv2X/edit'
    window.open(pdfUrl, '_blank')
  }
  return (
    <>
      <S.AboutContainer className="container" id="about">
        <h1>About me()</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officia
          ex voluptatem delectus sunt adipisci optio cum deleniti commodi
          recusandae provident, eligendi veritatis quo tempora amet, illo
          corrupti, necessitatibus eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi officia ex voluptatem delectus sunt adipisci
          optio cum deleniti commodi recusandae provident, eligendi veritatis
          quo tempora amet, illo corrupti, necessitatibus eius. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nisi officia ex
          voluptatem delectus sunt adipisci optio cum deleniti commodi
          recusandae provident, eligendi veritatis quo tempora amet, illo
          corrupti, necessitatibus eius.
        </p>
      </S.AboutContainer>
      <div>
        <S.ButtonContainer>
          <S.Button onClick={DownloadCV}>
            <p>Download CV</p>
          </S.Button>
        </S.ButtonContainer>
      </div>
    </>
  )
}

export default About
