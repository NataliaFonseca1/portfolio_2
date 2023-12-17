import ProjectsClass from '../../models/projects'
import * as S from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

type Props = {
  Projects: ProjectsClass[]
}

const ProjectsList = ({ Projects }: Props) => {
  return (
    <>
      <h1 id="projects">Projects List()</h1>
      <S.CardContainer>
        <Swiper
          initialSlide={0}
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
          className="swiper-container"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {Projects.map((project, index) => (
            <SwiperSlide className="swiperSlide" key={index}>
              <S.ListContainer>
                <S.Card>
                  <h1>{project.title}</h1>
                  <img src={project.image} alt={project.title} />
                  <S.LinksContainer>
                    <a href={project.githubUrl}>
                      <S.Github />
                    </a>
                    <div>
                      <a href={project.vercelUrl}>
                        <S.Vercel />
                      </a>
                    </div>
                  </S.LinksContainer>
                  <h2>{project.description}</h2>
                  <div>
                    <S.TagsContainer>
                      {project.languages.map((language, index) => (
                        <div key={index} className="languagens">
                          <p>{language}</p>
                        </div>
                      ))}
                    </S.TagsContainer>
                  </div>
                </S.Card>
              </S.ListContainer>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </S.CardContainer>
    </>
  )
}

export default ProjectsList
