import classes from "./skill-set.module.scss";

import Image from "next/image";

import Skill from "./skill";

const SkillSet = ({ src, alt, title, skills }) => {
    return (
        <div className={classes.skillSet}>
            <div className={classes.heading}>
                <Image src={src} alt={alt} width={40} />
                <span className={classes.title}>{title}</span>
            </div>
            <div className={classes.skills}>
                {skills.map((skill, index) => {
                    return (
                        <Skill
                            src={skill.src}
                            name={skill.title}
                            alt={skill.alt}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SkillSet;
