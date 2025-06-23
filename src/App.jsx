
// import './App.css',

import About from "./component/About/About"
import Navbar from "./component/Navbar/navbar"
import ExcellenceSection from "./component/ExcellenceSection/ExcellenceSection"
import ClientsSection from "./component/ClientsSection/ClientsSection"
import EducationSection from "./component/EducationSection/EducationSection"
import ExperienceSection from "./component/ExperienceSection/ExperienceSection"
import MarvelsSection from "./component/MarvelsSection/MarvelsSection"
import SolutionsSection from "./component/SolutionsSection/SolutionsSection"
import TestimonialSection from "./component/TestimonialSection/TestimonialSection"
import GallerySection from "./component/Gallery/GallerySection"
import FooterSection from "./component/Footer/FooterSection"


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
        <SolutionsSection/>
        <TestimonialSection/>
        <GallerySection/>
        <FooterSection/>
      </div>
      
      
      
    </>
  )
}

export default App
