import AboutMe from "./Components/AboutMe.jsx";
import Education from "./Components/Education.jsx";
import Experience from "./Components/Experience.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/Projects.jsx";
import Header from "./Components/Header.jsx";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact.jsx";
import Summary from "./Components/Summary.jsx";
import Languages from "./Components/Languages.jsx";
import "./App.css"; 

export default function App() {
  return (
    <div className="chain">
      <Header />
      <AboutMe />
      <Contact />

        <div className="image-gallery">
          <img src="./images/image2.jpg" alt="image2" className="responsive-img" />
            <img src="./images/image1.jpg" alt="image1" className="responsive-img" />
        </div>

      <Education />
      <Experience />
      <Skills />

        <div className="image-gallery">
          <img src="./images/spring1.jpg" alt="image7" className="responsive-img" />
        </div>

      <Projects />
      <Summary />
      <Languages />
      <Footer />
    </div>
  );
}
