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
                <h2 className={classes.profession}>Frontend Developer</h2>
            </FadeInLeft>
            <FadeInLeft delay={0.8}>
                <p className={classes.summary}>
                    Hi! I&apos;m a Frontend Developer passionate about creating
                    modern, responsive, and high-performance web applications. I
                    specialize in building intuitive user interfaces and
                    seamless user experiences using technologies like Next.js
                    and React. With a strong understanding of cloud-powered
                    workflows, I also leverage AWS services such as Cognito, API
                    Gateway, Lambda, DynamoDB, and S3 to integrate secure,
                    scalable, and efficient frontend-to-backend interactions.
                    I&apos;ve worked on several freelance projects, helping
                    clients transform their ideas into fast, user-friendly, and
                    visually polished web platforms. Whether it&apos;s an
                    e-commerce store, a SaaS dashboard, or an internal tool, I
                    bring a UI-focused, performance-driven, and cloud-aware
                    approach to every project. Always learning, always building.
                </p>
            </FadeInLeft>
            <FadeInLeft delay={1}>
                <div className={classes.cta}>
                    <p>
                        <Link href="mailto:yashpathik.official@gmail.com">
                            <span className={classes.icon}>
                                <OpenmailIcon />
                            </span>
                            <span className={classes.link}>Email</span>
                        </Link>
                    </p>
                    <p>
                        <Link
                            href="/Frontend-Yash-Pathik.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
