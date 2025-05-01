//ASSETS

import LikeKilled from "../../assets/like_killed.svg";
import Like from "../../assets/like.svg";
import "./ProjectsList.css";

function ProjectsList() {
  return (
    <>
      <div className="projects-section">
        <div className="projects-hero">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>

        <div className="projects-grid">
          <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-1"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={LikeKilled} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-2"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={Like} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-3"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={Like} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-4"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={Like} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-5"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={Like} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-6" ></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={LikeKilled} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-7"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={Like} height='20px'/>
         </div>

         <div className="project-card d-flex jc-center al-center fd-column ">
            <div className="thumb tertiary-background image-8"></div>
            <h3>João Silva</h3>
            <p>BH, Brasil</p>
         <img src={Like} height='20px'/>
         </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsList;
