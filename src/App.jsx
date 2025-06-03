import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1/Section1'
import Clients from './components/Clients'
import Communities from './components/Communities'
import PixelGrade from './components/PixelGrade'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from './components/Section9'
import Section10 from './components/Section10'
import Footer from './components/Footer'

function App() {
 

  return (
    <div>
      <Header />

      {/* Section 1 */}
      
        <Section1 />
      

     
        <Clients />
      

      
        <Communities />
      
        <PixelGrade />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Footer />
     


    </div>
  )
}

export default App
