import classes from "./page.module.scss";

import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Globe } from "@/components/magicui/globe";

import FadeInLeft from "@/ui/animation/fade-in-left";
import FadeInTop from "@/ui/animation/fade-in-top";

export default function Home() {
    return (
        <main className={classes.main}>
            <FadeInLeft>
                <SparklesText>
                    <h1 className={`${classes.heroTxt} ${classes.greet}`}>
                        Hello !
                    </h1>
                </SparklesText>
            </FadeInLeft>
            <FadeInLeft delay={0.2}>
                <h1 className={`${classes.heroTxt} ${classes.name}`}>
                    I&apos;m <AuroraText>Yash Pathik</AuroraText>
                </h1>
            </FadeInLeft>
            <FadeInLeft delay={0.4}>
                <h2 className={classes.tagLine}>
                    Full-Stack & AWS Developer | Cloud-Native Solutions |
                    Building Serverless & Scalable Architecture.
                </h2>
            </FadeInLeft>
            <FadeInLeft delay={0.6}>
                <MorphingText
                    className={classes.morphTxt}
                    texts={[
                        "Web Developer",
                        "Javascript Developer",
                        "Cloud Computing",
                        "DevOps Enthusiast",
                    ]}
                />
            </FadeInLeft>
            <FadeInTop delay={0.8}>
                <Globe className={classes.globe} />
            </FadeInTop>
        </main>
    );
}
