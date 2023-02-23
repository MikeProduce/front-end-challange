import { Navbar } from "./components/navbar"
import {LandingPage} from "./components/landingPage"
import { SectionOne } from "./components/sectionOne"
import { SectionTwo } from "./components/sectionTwo"
function App() {

  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <SectionOne />
      <SectionTwo />
    </div>
  )
}

export default App
