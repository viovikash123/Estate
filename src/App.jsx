import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
  <>
  <div className='w-full overflow-hidden'>
  <Header/>
  <About/>
  <Projects/>
  <Testimonials/>
  <Contact/>
  <Footer/>
  </div>
  </>
  )
}

export default App
