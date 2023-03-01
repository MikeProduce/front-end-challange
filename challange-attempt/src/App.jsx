import { Navbar } from "./components/navbar"
import {LandingPage} from "./components/landingPage"
import { SectionOne } from "./components/sectionOne"
import { SectionTwo } from "./components/sectionTwo"
import {Footer} from './components/footer'
function App() {

  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <SectionOne />
      <SectionTwo />
      <Footer />
      <div className='text-center text-white bg-Dark-Blue'> 
           Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Miguel G</a>.
           </div>
    </div>
  )
}

export default App
