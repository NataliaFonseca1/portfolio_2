import ProjectsClass from '../../models/projects'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation' // Importe o estilo de navegação
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

type Props = {
  Projects: ProjectsClass[]
}

const ProjectsList = ({ Projects }: Props) => {
  return (
    <>
      <div className="container">
        <h1>Projects List()</h1>
        <S.CardContainer>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            touchRatio={0.5}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{ clickable: true }}
            className="swiper-container"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[EffectCoverflow, Pagination, Navigation]} // Inclua o módulo de navegação
          >
            {Projects.map((project, index) => (
              <SwiperSlide className="swiperSlide" key={index}>
                <S.ListContainer>
                  <S.Card>
                    <h1>{project.title}</h1>
                    <img src={project.image} alt={project.title} />
                    <S.LinksContainer>
                      <S.Github href={project.githubUrl}>Github</S.Github>
                      <S.Vercel href={project.vercelUrl}>Vercel</S.Vercel>
                    </S.LinksContainer>
                    <h2>{project.description}</h2>
                    <div>
                      <S.TagsContainer>
                        {project.languages.map((language, index) => (
                          <div key={index} className="languagens">
                            {language}
                          </div>
                        ))}
                      </S.TagsContainer>
                    </div>
                  </S.Card>
                </S.ListContainer>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            {/* Botão de anterior (esquerda) fora dos cards */}
            <div className="swiper-button-prev"></div>
          </Swiper>
        </S.CardContainer>
      </div>
    </>
  )
}

export default ProjectsList
