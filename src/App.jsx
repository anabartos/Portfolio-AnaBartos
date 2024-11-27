import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Tecnologies from './components/Tecnologies'
import Experience from './components/Experience'
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <main className='bg-white mx-auto px-0 sm:px-0 lg:px-0 overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Tecnologies/>
    <Experience/>
    <Projects/>
    <Contact/>
  </main>
  
  )
}

export default App
