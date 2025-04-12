import classes from "./page.module.scss";

import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import { Globe } from "@/components/magicui/globe";

export default function Home() {
    return (
        <main className={classes.main}>
            <SparklesText>
                <h1 className={`${classes.heroTxt} ${classes.greet}`}>
                    Hello !
                </h1>
            </SparklesText>
            <h1 className={`${classes.heroTxt} ${classes.name}`}>
                I&apos;m <AuroraText>Yash Pathik</AuroraText>
            </h1>
            <h2 className={classes.tagLine}>
                Developer building seamless web experiences, One pixel at a
                time.
            </h2>
            <MorphingText
                className={classes.morphTxt}
                texts={[
                    "Web Developer",
                    "Javascript Developer",
                    "Cloud Computing",
                    "DevOps Enthusiast",
                ]}
            />
            <Globe className={classes.globe} />
        </main>
    );
}
