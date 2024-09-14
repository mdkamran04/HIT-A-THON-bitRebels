import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Navbar from "./sections/Navbar";
import Login from "./sections/Login";
import LoginOptions from "./sections/LoginOption";
import AboutUs from "./sections/AboutUs";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import News from "./sections/News";
import ContactUs from "./sections/ContactUs";
import Doctor from "./sections/Doctor";


export default function App() {
  return (
    <div>
      <Info />
      <Navbar />
      <Hero />
      <Login/>
      <LoginOptions/>
      <AboutUs/>
      <Services/>
      <Doctor/>
      <News/>
      <ContactUs/>


      <Footer/>
    </div>
  )
}
