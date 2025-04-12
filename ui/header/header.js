import classes from "./header.module.scss";

import NavLink from "./nav-link";

import { HomeIcon, AboutIcon, ProjectIcon, ContactIcon } from "@/public/icons";

const Header = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.navbar}>
                <ul>
                    <li>
                        <NavLink href="/">
                            <span className={classes.icon}>
                                <HomeIcon />
                            </span>
                            <span className={classes.link}>home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/about">
                            <span className={classes.icon}>
                                <AboutIcon />
                            </span>
                            <span className={classes.link}>about</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/projects">
                            <span className={classes.icon}>
                                <ProjectIcon />
                            </span>
                            <span className={classes.link}>projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">
                            <span className={classes.icon}>
                                <ContactIcon />
                            </span>
                            <span className={classes.link}>contact</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
