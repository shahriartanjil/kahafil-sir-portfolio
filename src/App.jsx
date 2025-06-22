
// import './App.css',

import About from "./component/About/About"
import Navbar from "./component/Navbar/navbar"
import ExcellenceSection from "./component/ExcellenceSection/ExcellenceSection"
import ClientsSection from "./component/ClientsSection/ClientsSection"
import EducationSection from "./component/EducationSection/EducationSection"


function App() {

  return (
    <>
      <div>
       
        <Navbar/>
        <About/>
        <ExcellenceSection/>
        <ClientsSection/>
        <EducationSection/>
      </div>
      
      
      
    </>
  )
}

export default App
