import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Button from "../Components/Button/Button";
import Hero from "../Components/Hero/Hero";
import ProjectsList from "../Components/ProjectsList/ProjectsList";

function Home() {
  return (
    <>
      <Header />

      {/* <h1>Home</h1>
      <p>Subtitle</p>

      <Button buttonstyle="gray" arrow>
        Olá!
      </Button> */}

      <div className="container">
        <Hero />
      </div>

      <div className="container">
        <ProjectsList />
      </div>

      <Footer />
    </>
  );
}
export default Home;
