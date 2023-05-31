import classes from "./ProjectPage.module.css"
import photo from "../AdessoProject/img/adessoBooking.jpg"
import { Link } from "react-router-dom";

const ProjectPage = () => {

    const goToProject = () => {
        return <div>
            <Link to="/adessoProject"></Link> 
            </div>
    }

    return (
        <span className={classes.ProjectPage}>
            <div>
                <h1 id="project">Project</h1>
                <h2>adesso bokningsapplikation</h2>
                <img src={photo} alt="Startpage on the adesso booking app" onClick={goToProject}/>
            </div>
        </span>
    );
}

export default ProjectPage;