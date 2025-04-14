import classes from "./page.module.scss";

import ProfileImg from "@/components/about/profile";
import Links from "@/components/about/social-links";
import About from "@/components/about/about";
import Education from "@/components/about/education";

const AboutPage = () => {
    return (
        <main className={classes.main}>
            <div className={classes.imgContainer}>
                <ProfileImg />
                <Links />
            </div>
            <div className={classes.content}>
                <About />
                <p className={classes.title}>Qualifications</p>
                <Education />
                <p className={classes.title}>Tech Stack</p>
            </div>
        </main>
    );
};

export default AboutPage;
