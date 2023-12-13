import About from './components/About'
import ProjectsData from './components/Data/ProjectsData'
import SkillsData from './components/Data/SkillsData'
import Education from './components/Education'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsList from './components/ProjetsList'
import Skills from './components/Skills'
import { EstiloGlobal } from './styles/styles'
import Footer from './components/Footer'
import Experiences from './components/Experiences'

function App() {
  return (
    <>
      <EstiloGlobal />

      <div className="container">
        <Header />
        <Hero />
        <About />
        <Skills Skills={SkillsData} />
        <ProjectsList Projects={ProjectsData} />
        <Education />
        <Experiences />
        <Footer />
      </div>
    </>
  )
}

export default App
