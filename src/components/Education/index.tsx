import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import * as S from './styles'
import { GoMortarBoard } from 'react-icons/go'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { FaCode } from 'react-icons/fa6'

const Education = () => {
  return (
    <>
      <S.EducationContainer id="education">
        <h1>Education()</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#15a182', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #15a182' }}
            date="2024 - present"
            iconStyle={{ background: '#15a182', color: '#fff' }}
            icon={<LiaLaptopCodeSolid />}
          >
            <h3 className="vertical-timeline-element-title">
              Análise e desenvolvimento de Sistemas
            </h3>
            <p>Centro Universitário de Lavras</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#15a182', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #15a182' }}
            date="2023 - 2023"
            iconStyle={{ background: '#15a182', color: '#fff' }}
            icon={<FaCode />}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor Full Stack Python
            </h3>
            <p>EBAC - Escola Britânica de artes criativas & tecnologia </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#15a182', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #15a182' }}
            date="2015 - 2020"
            iconStyle={{ background: '#15a182', color: '#fff' }}
            icon={<GoMortarBoard />}
          >
            <h3 className="vertical-timeline-element-title">Direito</h3>
            <p>Centro Universitário de Lavras</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </S.EducationContainer>
    </>
  )
}

export default Education
