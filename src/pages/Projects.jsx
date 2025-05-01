import Header from "../Components/Header/Header.jsx";
import Banner from "../Components/Banner/Banner.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import ProjectsList from "../Components/ProjectsList/ProjectsList.jsx";

function Projects() {
  return (
    <>
      <Header />

      <Banner title="Projects" image="projects.jpg" />

      <div className="container">
        <ProjectsList />
      </div>

      <Footer></Footer>
    </>
  );
}

export default Projects;
