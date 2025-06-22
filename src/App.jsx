
// import './App.css',

import About from "./component/About/About"
import Navbar from "./component/Navbar/navbar"
import ExcellenceSection from "./component/ExcellenceSection/ExcellenceSection"
import ClientsSection from "./component/ClientsSection/ClientsSection"
import EducationSection from "./component/EducationSection/EducationSection"
import ExperienceSection from "./component/ExperienceSection/ExperienceSection"
import MarvelsSection from "./component/MarvelsSection/MarvelsSection"


function App() {

  return (
    <>
      <div>
       
        <Navbar/>
        <About/>
        <ExcellenceSection/>
        <ClientsSection/>
        <EducationSection/>
        <ExperienceSection/>
        <MarvelsSection/>
      </div>
      
      
      
    </>
  )
}

export default App
