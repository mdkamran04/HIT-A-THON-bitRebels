import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <div>
        <Info />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-options" element={<LoginOptions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
