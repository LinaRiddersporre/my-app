import classes from "./AdessoProject.module.css"
import adessoApplicationBookpage from "./img/adessoBooking.jpg"
import adessoApplicationRoompage from "./img/adessoProject.png"
import adessoApplicationAddEventpage from "./img/adessoProject1.png"



const AdessoProject = () => {
    return (
        <div className={classes.AdessoProject}>
            <div className='adesso'>
                <h1>Adesso booking application</h1>
                <div>
                    <img src={adessoApplicationBookpage} alt="Startpage on the adesso booking app" />
                </div>
                <div>
                    <img src={adessoApplicationRoompage} alt="Startpage on the adesso booking app" />
                </div>
                <div>
                    <img src={adessoApplicationAddEventpage} alt="Startpage on the adesso booking app" />
                </div>
            </div>
        </div>
    )
}

export default AdessoProject;