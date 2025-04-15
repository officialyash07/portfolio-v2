import classes from "./about.module.scss";

import Link from "next/link";

import { OpenmailIcon, DownloadIcon } from "@/public/icons";

import FadeInLeft from "@/ui/animation/fade-in-left";

const About = () => {
    return (
        <div className={classes.intro}>
            <FadeInLeft delay={0.4}>
                <h1 className={classes.name}>yash pathik</h1>
            </FadeInLeft>
            <FadeInLeft delay={0.6}>
                <h2 className={classes.profession}>web developer</h2>
            </FadeInLeft>
            <FadeInLeft delay={0.8}>
                <p className={classes.summary}>
                    Hi! I&apos;m a full-stack web developer with a focus on
                    building scalable, high-performance applications using
                    modern technologies like React.js, Next.js, Node.js, and
                    AWS. I&apos;m passionate about creating seamless user
                    experiences backed by robust, cloud-native architectures.
                    Whether it&apos;s building dynamic interfaces or designing
                    efficient APIs. I aim to deliver tech that&apos;s not just
                    functional—but delightful to use.
                </p>
            </FadeInLeft>
            <FadeInLeft delay={1}>
                <div className={classes.cta}>
                    <p>
                        <Link href="">
                            <span className={classes.icon}>
                                <OpenmailIcon />
                            </span>
                            <span className={classes.link}>Email</span>
                        </Link>
                    </p>
                    <p>
                        <Link href="">
                            <span className={classes.icon}>
                                <DownloadIcon />
                            </span>
                            <span className={classes.link}>Resume</span>
                        </Link>
                    </p>
                </div>
            </FadeInLeft>
        </div>
    );
};

export default About;
