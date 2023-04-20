import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Works, Navbar, Tech, Feedbacks, StarsCanvas, Resume, Certificates } from "./components"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center" >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certificates />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Resume />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
