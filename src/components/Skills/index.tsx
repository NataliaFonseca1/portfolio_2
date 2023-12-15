import * as S from './styles'

import Marquee from 'react-fast-marquee'
import SkillsClass from '../../models/skills'
type Props = {
  Skills: SkillsClass[]
}

const Skills = ({ Skills }: Props) => {
  return (
    <S.MarqueeContainer id="skilss">
      <h1>
        Skills<span>()</span>
      </h1>
      <Marquee gradient={false} speed={90} delay={0} play direction="right">
        {Skills.map((skills, index) => (
          <ul key={index}>
            <li>
              <img src={skills.image} alt="" />
              <h2>{skills.title}</h2>
            </li>
          </ul>
        ))}
      </Marquee>
    </S.MarqueeContainer>
  )
}

export default Skills
