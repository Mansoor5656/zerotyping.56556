import './App.css'
import Navbar from "./components/Navbar"
import Hero   from "./components/Hero"
import Section1 from './components/Section1'
import Dictionary2 from './components/Dictionary2'
import Aipowered from './components/Aipowered'
import Prompts from './components/Prompts'
import Accordian2 from "./components/AAccordian2"



function App() {

  return (
    <div  className='min-h-screen w-[96%] mx-auto mt-4 flex flex-col gap-16'>
      <Navbar />
      <Hero/>
      <Section1/>
      <Dictionary2/>
      <Aipowered/>
      <Prompts/>
      {/* <Accordian2 /> */}
      
    </div>
     
  )
}

export default App
