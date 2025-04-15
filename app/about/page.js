import classes from "./page.module.scss";

import ProfileImg from "@/components/about/profile";
import Links from "@/components/about/social-links";
import About from "@/components/about/about";
import Education from "@/components/about/education";
import TechStack from "@/components/about/tech-stack";
import SkillSet from "@/components/about/skill-set";

import FadeInLeft from "@/ui/animation/fade-in-left";

// import icons
import frontendIcon from "@/public/icons/opencode.svg";
import reactIcon from "@/public/icons/react.svg";
import nextIcon from "@/public/icons/next.svg";
import tailwindIcon from "@/public/icons/tailwind.svg";
import htmlIcon from "@/public/icons/html.svg";
import cssIcon from "@/public/icons/css.svg";
import backendIcon from "@/public/icons/database.svg";
import nodeIcon from "@/public/icons/nodejs.svg";
import mongodbIcon from "@/public/icons/mongodb.svg";
import apiIcon from "@/public/icons/api.svg";
import graphqlIcon from "@/public/icons/graphql.svg";
import cloudIcon from "@/public/icons/cloud.svg";
import awsIcon from "@/public/icons/aws.svg";
import cicdIcon from "@/public/icons/ci-cd.svg";
import gitIcon from "@/public/icons/git.svg";
import linuxIcon from "@/public/icons/linux.svg";
import uiuxIcon from "@/public/icons/responsive.svg";
import figmaIcon from "@/public/icons/figma.svg";
import wireframeIcon from "@/public/icons/wireframe.svg";
import toolsIcon from "@/public/icons/tools.svg";
import vscodeIcon from "@/public/icons/vscode.svg";
import reduxIcon from "@/public/icons/redux.svg";
import vercelIcon from "@/public/icons/vercel.svg";
import viteIcon from "@/public/icons/vite.svg";

const frontendSkills = [
    { src: reactIcon, alt: "React", title: "React" },
    { src: nextIcon, alt: "Next.js", title: "Next.js" },
    { src: tailwindIcon, alt: "Tailwind", title: "Tailwind CSS" },
    { src: htmlIcon, alt: "HTML", title: "HTML5" },
    { src: cssIcon, alt: "CSS", title: "CSS3" },
];

const backendSkills = [
    { src: nodeIcon, alt: "Nodejs", title: "Node.js" },
    { src: mongodbIcon, alt: "MongoDB", title: "MongoDB" },
    { src: apiIcon, alt: "Rest API", title: "Rest APIs" },
    { src: graphqlIcon, alt: "Graphql", title: "GraphQL" },
];

const cloudSkills = [
    { src: awsIcon, alt: "AWS", title: "AWS" },
    { src: cicdIcon, alt: "CI/CD", title: "CI/CD" },
    { src: gitIcon, alt: "Git", title: "Git" },
    { src: linuxIcon, alt: "Linux", title: "Linux" },
];

const uiuxSkills = [
    { src: figmaIcon, alt: "Figma", title: "Figma" },
    { src: uiuxIcon, alt: "Responsive", title: "Responsive Design" },
    { src: wireframeIcon, alt: "Wireframing", title: "Wireframing" },
];

const toolsSkills = [
    { src: vscodeIcon, alt: "VS Code", title: "VS Code" },
    { src: reduxIcon, alt: "Redux", title: "Redux" },
    { src: vercelIcon, alt: "Vercel", title: "Vercel" },
    { src: viteIcon, alt: "Vite", title: "Vite" },
];

const AboutPage = () => {
    return (
        <main className={classes.main}>
            <div className={classes.imgContainer}>
                <FadeInLeft>
                    <ProfileImg />
                </FadeInLeft>
                <FadeInLeft delay={0.2}>
                    <Links />
                </FadeInLeft>
            </div>
            <div className={classes.content}>
                <About />
                <FadeInLeft delay={1.2}>
                    <p className={classes.title}>Qualifications</p>
                </FadeInLeft>
                <Education />
                <FadeInLeft>
                    <p className={classes.title}>Tech Stack</p>
                </FadeInLeft>
                <FadeInLeft delay={0.2}>
                    <TechStack />
                </FadeInLeft>
                <div className={classes.skillsetWrapper}>
                    <FadeInLeft>
                        <SkillSet
                            skills={frontendSkills}
                            src={frontendIcon}
                            alt="Frontend Development"
                            title="Frontend Development"
                        />
                    </FadeInLeft>
                    <FadeInLeft delay={0.2}>
                        <SkillSet
                            skills={backendSkills}
                            src={backendIcon}
                            alt="Backend Development"
                            title="Backend Development"
                        />
                    </FadeInLeft>
                    <FadeInLeft delay={0.4}>
                        <SkillSet
                            skills={cloudSkills}
                            src={cloudIcon}
                            alt="Cloud & DevOps"
                            title="Cloud & DevOps"
                        />
                    </FadeInLeft>
                    <FadeInLeft delay={0.6}>
                        <SkillSet
                            skills={uiuxSkills}
                            src={uiuxIcon}
                            alt="UI/UX Design"
                            title="UI/UX Design"
                        />
                    </FadeInLeft>
                    <FadeInLeft delay={0.8}>
                        <SkillSet
                            skills={toolsSkills}
                            src={toolsIcon}
                            alt="Tools & Technologies"
                            title="Tools & Technologies"
                        />
                    </FadeInLeft>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;
