import classes from "./page.module.scss";

import ProfileImg from "@/components/about/profile";
import Links from "@/components/about/social-links";

const AboutPage = () => {
    return (
        <main className={classes.main}>
            <div className={classes.imgContainer}>
                <ProfileImg />
                <Links />
            </div>
            <div className={classes.content}>
                <h1>Content</h1>
            </div>
        </main>
    );
};

export default AboutPage;
