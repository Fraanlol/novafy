import Navbar from '../components/navbar';
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Reviews from '../components/reviews'
import Info from '../components/info'
import Footer from '../components/footer'
export default function Root() {
    return (
      <>
         <Navbar/>
         <Hero />
         <About/>
         <Services/>
         <Reviews/>
         <Info/>
         <Footer/>
      </>
    )
  }
  
