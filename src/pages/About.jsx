import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import AboutText from "../Components/AboutText/AboutText.jsx";

function About() {
  return (
    <>
      <Header />

      <Banner title="About Us" image="about.jpg" />

      <AboutText />

      <Footer />
    </>
  );
}

export default About;
