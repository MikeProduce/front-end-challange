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
    </div>
  )
}

export default App
