import classes from "./AdessoProject.module.css"
import photo from "./img/adessoBooking.jpg"

const AdessoProject = () => {
    return (
        <div className={classes.AdessoProject}>
            <div className='adesso'>
                <h1>Adesso booking application</h1>
                <div>
                    <img src={photo} alt="Startpage on the adesso booking app" />
                </div>
                
            </div>
        </div>
    )
}

export default AdessoProject;