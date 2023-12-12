import * as S from './styles'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
const Education = () => {
  return (
    <>
      <Tabs>
        <S.ListContainer>
          <div className="container">
            <TabList>
              <div className="TabItens">
                <Tab className="TabItem">
                  <h1>Education()</h1>
                </Tab>
                <Tab className="TabItem">
                  <h1>Experiences()</h1>
                </Tab>
              </div>
            </TabList>
            <TabPanel>
              <S.CardList>
                <h2>Full Stack Python</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  officia ex voluptatem delectus sunt adipisci optio cum
                  deleniti commodi recusandae provident, eligendi veritatis quo
                  tempora amet, illo corrupti, necessitatibus eius. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nisi officia ex
                  voluptatem delectus sunt adipisci optio cum deleniti commodi
                  recusandae provident, eligendi veritatis quo tempora amet,
                  illo corrupti, necessitatibus eius. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nisi officia ex voluptatem
                  delectus sunt adipisci optio cum deleniti recusandae
                  provident, eligendi veritatis quo tempora amet, illo corrupti,
                  necessitatibus eius.
                </p>
              </S.CardList>
              <S.CardList>
                <h2>Full Stack Python</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  officia ex voluptatem delectus sunt adipisci optio cum
                  deleniti recusandae provident, eligendi veritatis quo tempora
                  amet, illo corrupti, necessitatibus eius. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Nisi officia ex
                  voluptatem delectus sunt adipisci optio cum deleniti commodi
                  recusandae provident, eligendi veritatis quo tempora amet,
                  illo corrupti, necessitatibus eius. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nisi officia ex voluptatem
                  delectus sunt adipisci optio cum deleniti recusandae
                  provident, eligendi veritatis quo tempora amet, illo corrupti,
                  necessitatibus eius.
                </p>
              </S.CardList>
            </TabPanel>
            <TabPanel>
              <S.CardList>
                <h2>Desenvolvedora Front End Freelancer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  officia ex voluptatem delectus sunt adipisci optio cum
                  deleniti commodi recusandae provident, eligendi veritatis quo
                  tempora amet, illo corrupti, necessitatibus eius. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Nisi officia ex
                  voluptatem delectus sunt adipis adipisci optio cum deleniti
                  recusandae provident, eligendi veritatis quo tempora amet,
                  illo corrupti, necessitatibus eius.
                </p>
              </S.CardList>
              <S.CardList>
                <h2>Advogada</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  officia ex voluptatem delectus sunt adipisci optio cum
                  deleniti recudeleniti commodi recusandae provident, eligendi
                  veritatis quo tempora amet, illo corrupti, necessitatibus
                  eius. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi officia ex voluptatem delectus sunt adipisci optio cum
                  deleniti recusandae provident, eligendi veritatis quo tempora
                  amet, illo corrupti, necessitatibus eius.
                </p>
              </S.CardList>
            </TabPanel>
          </div>
        </S.ListContainer>
      </Tabs>
    </>
  )
}

export default Education
