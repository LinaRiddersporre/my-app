import NavBar from "../NavBar/NavBar";
import classes from "./AboutPage.module.css"

const AboutPage = () => {

    return (
        <span className={classes.AboutPage}>
            <div>
                <h1 id="about">About</h1>
                <span>
                    <p>My name is Lina Riddersporre and I'm a front end webbdeveloper who want some projects to work on.</p>
                    <p>On this page you can see what I have accomplished this far.</p>
                    <p>If you want som help with your page, just give me a call or text me on LinkedIn.</p>
                </span>
            </div>
        </span>
    );
}

export default AboutPage;