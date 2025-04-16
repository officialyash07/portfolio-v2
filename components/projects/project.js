import classes from "./project.module.scss";

import AutoCarousel from "./auto-carousel";

import Link from "next/link";
import Image from "next/image";

import HoverBounce from "@/ui/animation/hover-bounce";

import githubIcon from "@/public/icons/github.svg";
import liveIcon from "@/public/icons/live.svg";

const Project = ({ images, title, description, codeLink, liveLink }) => {
    return (
        <div className={classes.project}>
            <div className={classes.images}>
                <AutoCarousel images={images} />
            </div>
            <div className={classes.details}>
                <p className={classes.projectTitle}>{title}</p>
                <p className={classes.description}>{description}</p>
                <div className={classes.cta}>
                    <HoverBounce>
                        <Link href="">
                            <span className={classes.icon}>
                                <Image
                                    src={githubIcon}
                                    alt="Github "
                                    width={20}
                                />
                            </span>
                            <span className={classes.link}>Code</span>
                        </Link>
                    </HoverBounce>
                    <HoverBounce>
                        <Link href="">
                            <span className={classes.icon}>
                                <Image src={liveIcon} alt="Live " width={20} />
                            </span>
                            <span className={classes.link}>Live</span>
                        </Link>
                    </HoverBounce>
                </div>
            </div>
        </div>
    );
};

export default Project;
